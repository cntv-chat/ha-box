+++
tags = ["远程控制","内网穿透","cloudflare tunnels"]
title = "远程控制Homeassistant盒子"
weight = 1

+++

出门在外，怎样通过网络控制家里的Homeassistant盒子，这是很多购买HA盒子的朋友关心的问题，那么请跟随我的脚步，来看看我们怎么实现！

话不多说，直接开干！

## 前提条件：

1. 你在cloudflare已经注册了账户
2. 你已经注册了域名并且已将DNS解析服务器修改为Cloudflare提供的服务器地址
3. 你已经拥有哈HA 盒子

## 在homeassistant安装Cloudflared加载项

仓库地址：`https://github.com/brenner-tobias/addon-cloudflared`
进入加载项商店（配置-加载项-加载项商店），点右上角三个小点，然后点仓库

![image](https://pic.456766.xyz/typora/cda7a9c64acc4809d8466fe304777fea93f45e0c.png)





输入 `https://github.com/brenner-tobias/ha-addons`
然后点添加

![](https://pic.456766.xyz/202409042015658.png)



添加不成功，这……，需要考虑换个时间再试，或者科学上网

![image](https://pic.456766.xyz/typora/e376bf93b9fe52bdc9b0bcf5d044a071156e8d5a.jpeg)



添加成功后，关闭对话框
重新进入加载项商店，搜索cloudflared，就能看到加载项Cloudflared，点它然后安装
![image](https://pic.456766.xyz/typora/ef12e66234650b425c567041b7a0baea787a08a9.png)

安装好之后，进入配置选项卡，配置第一项就行，值为要使用的域名（该域名已添加到cloudflare），然后保存

![image](https://pic.456766.xyz/typora/e5dba2ce374adb105c3b7fe355b72fb5fd473207.png)





之后启动该加载项，在日志选项卡里面你将看到如下信息

![image](https://pic.456766.xyz/typora/81635a3de25d8b41bf0ecbd780d4acf80a205b9b.jpeg)



拷贝高亮所示的链接地址到浏览器地址栏，并访问。
嗯，点你你需要用来远程访问homeassistant的域名并授权

![image](https://pic.456766.xyz/typora/5299cf9db6074dd5a987b7fd1a09eabf25e2e2dc.png)







![image](https://pic.456766.xyz/typora/2f6ccf280e55f2353c3c5bcdfb123f294e229f7d.png)





![](https://pic.456766.xyz/typora/4cc884a49914861d78edabd6e2b7382bf653e112.png)





接下来，还有一些事要做

打开连接 https://one.dash.cloudflare.com/

导航到左侧边栏 - Networks - Tunnels



![image](https://pic.456766.xyz/typora/c348bb3f2c2797b5d74c8fb875159ddafe531304.jpeg)



拉到Homeassistant这条记录的最右边，有三个小点，点进去，Configure



![image](https://pic.456766.xyz/typora/4adc7d14223d9a250a0d0885e7fe5564573d6803.png)



也许你需要点右边三小点，Edit进行编辑

![image](https://pic.456766.xyz/typora/0205a3d16cfdbcbdea4c711c03cd571168621645.jpeg)



最后你可以确认下dns是不是已经自动配置好了

![image](https://pic.456766.xyz/typora/8b4aa7498406a60ce8d7cb017bb7775b1926e335.jpeg)





接下来在回到HA盒子，安装加载项File Editor（如果还没安装的话）
然后在/homeassistant/configuration.yaml中添加如下内容

```yaml
http:
  use_x_forwarded_for: true
  trusted_proxies:
    - 172.30.33.0/24
```



![image](https://pic.456766.xyz/typora/64e468b1b83fe3b9a0122105b58b389f6c07910d.jpeg)





修改完后记得重启下盒子
然后就可以愉快的远程访问啦



![image](https://pic.456766.xyz/typora/4e6b816376cee4395a5794dea3d6eda17aff3b61.png)

