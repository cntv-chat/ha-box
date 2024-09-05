+++
tags = ["docker","docker镜像"]
title = "从 Docker Hub 快速拉取镜像"
weight = 1

+++

最近一段时间 Docker 镜像一直是 Pull 不下来的状态，感觉除了挂🪜，想直连 Docker Hub 是几乎不可能的。更糟糕的是，很多原本可靠的国内镜像站，例如一些大厂和高校运营的，也陆续关停了，这对我们这些个人开发者和中小企业来说是挺难受的。之前，通过这些镜像站，我们可以快速、方便地获取所需的 Docker 镜像，现在这条路也不行了。感觉这次动作不小，以后想直接访问 Docker Hub 是不可能了。所以我们得想办法搭建自己的私有镜像仓库。

最近网上有很多解决 Docker Hub 镜像拉不下来的文章，我大概总结一下有以下几种办法：

### Github Action

利用 Github Action Job 将 Docker Hub 镜像重新打 Tag 推送到阿里云等其他公有云镜像仓库里，这对于需要单个镜像很方便，批量就稍微麻烦一些，如果没🪜Github 访问也是个问题。

### CloudFlare Worker

使用 CloudFlare Worker 对 Docker Hub 的访问请求做中转，这种也是最近使用比较多的，因为个人用户的免费计划每天有10万次免费请求，足够个人和中小企业使用了，实在不够可以花 5$ 购买不限制的。Worker 脚本在网上有很多，随便搜索都有示例。

因为 CloudFlare Worker 默认分配的`workers.dev`结尾的域名国内根本解析不了，所以要把域名托管在 CloudFlare 上才能正常使用，可以购买 `.xyz` 等其他费用合适的域名专门用来做代理访问。

但 CloudFlare Worker CDN 经常抽风，有时很快有时很慢，可以借助[自选优选IP工具](https://link.segmentfault.com/?enc=U1IvsdRIl%2Fvc5gYLKxIWTQ%3D%3D.04Dv%2FTKlVsRNVeTy%2F3zonxinTdCx7VKnOwTa6fKOUXlN33sw4uIYOdE9Oajoq4mc)帮助获取访问 CloudFlare 延迟最低的IP，将其写入到你的本地 Hosts 文件中。

### 自建镜像仓库

说到自建首先我想到的就是买个配置比较低国外的服务器，搭建个 Nginx 做代理，分享下我配置成功的 Nginx 配置文件：

```bash
server {
  listen 443 ssl;
  server_name 域名;
  ssl_certificate 证书地址;
  ssl_certificate_key 密钥地址;

  ssl_session_timeout 24h;
  ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256';
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;

  location / {
    proxy_pass https://registry-1.docker.io;  # Docker Hub 的官方镜像仓库
    proxy_set_header Host registry-1.docker.io;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_buffering off;
    proxy_set_header Authorization $http_authorization;
    proxy_pass_header  Authorization;
    proxy_intercept_errors on;
    recursive_error_pages on;
    error_page 301 302 307 = @handle_redirect;
  }
  location @handle_redirect {
    resolver 1.1.1.1;
    set $saved_redirect_location '$upstream_http_location';
    proxy_pass $saved_redirect_location;
  }
}
```

然后就可以直接用 `docker pull 域名/library/nginx:latest` 获取镜像了或者配置到 Docker 的`daemon.json`中。

Nginx 代理的方案你需要能购买到合适的国外服务器，不然网络会很慢。

又或者在国外服务器上搭建 Registry、Nexus、Harbor等镜像仓库，它们具备镜像缓存功能，如果私有镜像仓库中不存在则会去代理服务中获取最新镜像。

## 建议方案

所以对于个人用户、中小企业来说可以将上述的 `CloudFlare Worker` + `自建镜像仓库` 融合起来，本地搭建 Registry、Nexus、Harbor等镜像仓库，在镜像仓库中配置上自己的 `CloudFlare Worker` `Nginx反代` 等代理地址或者当前一些可用的其他代理，当本地不存在则会通过这些代理去获取镜像，代理不可用时本地依然能用。

### 搭建 Docker Registry

搭建 Docker Registry 可以参考下述命令：

```bash
docker run -d --restart=always --name registry \
-p 443:443
-e REGISTRY_PROXY_REMOTEURL=https://registry-1.docker.io \ #代理的镜像仓库URL
-e REGISTRY_HTTP_ADDR=0.0.0.0:443 \ #监听地址
-e REGISTRY_HTTP_HOST=https://xxx.cn \ #访问域名
-e REGISTRY_HTTP_TLS_CERTIFICATE=/opt/cert/cert.pem \ #域名证书
-e REGISTRY_HTTP_TLS_KEY=/opt/cert/cert.key \ #域名证书
-v /opt/cert:/opt/cert \ #挂载本地证书到容器中
-v /data:/var/lib/registry \ #持久化数据目录
registry:2
```

### 搭建 Nexus

可选择使用 Docker 命令搭建 [Nexus](https://link.segmentfault.com/?enc=tbYJWzjSyDQsTkkURfooAQ%3D%3D.QIipXcRsUxqp02x09FrfLCPrKyA3C9SNrkeQCydZtdnSd8CC0luc36yEaTIfkJ8C)。

```apache
docker run -d -p 8081:8081 --name nexus sonatype/nexus3
```

或者使用 [Rainbond](https://link.segmentfault.com/?enc=FZchBOKi1qtQY8v1bnXJjw%3D%3D.pGJQ82Ux9WQpeuAt8uqme7hqNpSrSEhuAqUV%2FqA%2F0XIg0LX7UAYua15dLu6eud4ZpuMQpwD5YOON%2FtiFc1AQ2A%3D%3D) 应用商店一键安装。

![preview](https://pic.456766.xyz/typora/view)

搭建完成后正常登录 Nexus 页面，根据页面引导配置 Docker 相关的存储 Repository 及代理 Repository 即可。

### 搭建 Harbor

可参考 [Harbor文档 ](https://link.segmentfault.com/?enc=gArRPFlTwahPHAZVYax5eQ%3D%3D.nEIXf3i42IPUpjQpS0rCTWWuYuZuTijmAc5tYh0b0JQ6Rpq%2FgSXPBgpsoxHhenn2)搭建或者使用 [Rainbond](https://link.segmentfault.com/?enc=Y8%2FkX9dQK4wkXs1osqCq2Q%3D%3D.Y4NBA%2Fwcm2hd3jymDG3IHKxzC%2BwC7C2hOmQohmPoWdDa6NnnhnrlgpZirSzWOz3yAO6WgEWO0ylpmxJECRtUIw%3D%3D) 应用商店一键安装。

![img](https://pic.456766.xyz/typora/1460000044981234)

## 可用的镜像代理

最近十来天我尝试了很多镜像加速站，整理了以下镜像站目前是可用状态，但可能随时会遇到不可用、关停、访问比较慢的状态，建议同时配置多个镜像源。

| 提供商         | 地址                                                         |                |
| -------------- | ------------------------------------------------------------ | -------------- |
| DaoCloud       | [https://docker.m.daocloud.io](https://link.segmentfault.com/?enc=FSVjLEsAl%2BdE5y3PPpNn8A%3D%3D.YeXBE%2BxvQ2xpkz0ywiznVXQZgniCO%2F0UAWWsB8Hz0Ew%3D) |                |
| 阿里云         | https://<your_code>.mirror.aliyuncs.com                      | 登录阿里云分配 |
| Docker镜像代理 | [https://dockerproxy.com](https://link.segmentfault.com/?enc=wA9sAMd44Ba%2Bi30i4AX3FA%3D%3D.CIFcbiu06gjjTJAWrPMEZBf%2FwCqfboXDjh%2F4%2FPMmdgo%3D) | 看运气         |
| 百度云         | [https://mirror.baidubce.com](https://link.segmentfault.com/?enc=uAfmeE%2FpgUjanDGQSRa9%2BQ%3D%3D.6DfuXOO%2BwVfSCE8RpPZ1IDN%2FSil9v%2Bp9629FU8D34pE%3D) |                |
| 南京大学       | [https://docker.nju.edu.cn](https://link.segmentfault.com/?enc=5TaR9nfjwb%2Ba5BhvoDCvWA%3D%3D.r5H9%2FnalPnIXdJ5CTEr7fhUShCdG%2FMmshkQK47MBrUk%3D) |                |
| 中科院         | [https://mirror.iscas.ac.cn](https://link.segmentfault.com/?enc=cpT%2F3jwu8dEoJH47fNtChA%3D%3D.nol19sC4qbKlJ%2BaLFcEkhzXWkFjdmZ9mzR6fg4gCOKY%3D) |                |

## 福利

近期 Rainbond 社区也接受到许多用户反馈 Docker 镜像拉不下来，不能构建、打包了，因此 Rainbond 也搭建了个镜像加速服务，采用 `CloudFlare + 国外服务器 Nginx 反代`的方案为 Rainbond 社区的用户们提供镜像加速服务。

![img](https://pic.456766.xyz/typora/2261433068-091e79c93c8fa759)

目前速度挺快的（未来不好说

### 使用方法

1.直接获取 Docker Hub 镜像

```bash
docker pull docker.rainbond.cc/library/node:20
docker pull docker.rainbond.cc/rainbond/rainbond:v5.17.2-release-allinone
```

2.配置镜像加速器

```bash
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://docker.rainbond.cc"]
}
EOF
systemctl daemon-reload
systemctl restart docker
```
