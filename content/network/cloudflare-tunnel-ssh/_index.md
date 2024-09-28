+++

tags = ["cloudflare tunnel","ssh内网穿透"]
title = "Cloudflare tunnel配置ssh连接"
weight = 1

+++



## 前提条件：

您已经将域名托管到cloudflare

你使用我们提供的armbian盒子

## 1 开机，获取ip地址

root密码root1234

如果接有显示器，那么登陆后查看ip地址

如果没有接显示器，可以从路由器后台查看主机名为armbian的设备ip



## 2 创建tunnel

进入https://one.dash.cloudflare.com/

导航到**Networks** > **Tunnels**

然后**Create a tunnel**

tunnel type就默认的cloudflare，然后next

![image-20240928114211562](https://pic.456766.xyz/typora/image-20240928114211562.png)

然后设置tunnel name,然后save tunnel



## 3 安装和配置cloudflared

**Choose an operating system:**Debian

**Choose an architecture:**arm64-bit



![image-20240928111438949](https://pic.456766.xyz/typora/image-20240928111438949.png)

安装完成后，点击右下角save

## 4 配置Public Hostname

再回到Tunnels列表，就可以看到刚才创建的Tunnel了，拉到右边有3个点，点它会弹出配置入口**Configure**

切换到**Public Hostname**

Add a public hostname

![image-20240928111738284](https://pic.456766.xyz/typora/image-20240928111738284.png)

同样，在**Public hostnames**列表也是点右边的3个小点进入配置



## 5 设置Private Network

切换到**Private Network**

CIDR：192.168.3.0/24  （根据自身情况填写）

Description：随便



## 6 回到ssh客户端

ssh客户端的设备也要安装cloudflared

```
# 注意ssh客户端所在的系统平台，下面的代码是ubuntu,amd64架构
curl -L --output cloudflared.deb https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb

sudo dpkg -i cloudflared.deb
```

然后修改~/.ssh/config文件，没有就创建一个，内容如下，我这里配了两个，根据自己情况设置

```
Host ssh.456766.xyz
        ProxyCommand cloudflared access ssh --hostname %h

Host ssh.ha-box.xyz
        ProxyCommand cloudflared access ssh --hostname %h
```



## 7 ssh连接远程服务器

开启一个终端，执行

 ssh root@ssh.ha-box.xyz

如果一切顺利，就可以看到下面的信息

```
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? 
```



