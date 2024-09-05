+++
tags = ["documentation"]
title = "搭建免费科学上网节点"
weight = 1

+++

## 准备物料

## 1)域名一个

推荐到[namesilo.com](https://www.namesilo.com/)注册域名，安全、支持支付宝支付、价格便宜，没有陷阱。

注册6位及以上数字的xyz域名（比如456766.xyz），只要$0.99，续费$0.99，注册+续费它9年才$10不到，不用担心域名过期。这也是仅有的成本，简直不要太安逸了。

### 2)准备好Cloudflare账号备用

打开https://www.cloudflare.com/zh-cn，通过一个电子邮件地址即可注册Cloudflare账号 

### 3)准备代码

https://github.com/zizifn/edgetunnel/blob/main/src/worker-vless.js

[备用地址](https://4i5i-my.sharepoint.com/:u:/g/personal/sosel_4i5i_onmicrosoft_com/EQr1zW3GUINKptRic9MlSKIBOmUXEukBXOzK6oq-ED0QQQ?e=cTDsBR) （如果你打开不github的话，可以试试从onedrive下载worker-vless.js文件）

## 在Cloudflare添加网站

登陆Cloudflare，然后添加网站，就是将你刚注册的域名添加到这里



![image](https://pic.456766.xyz/typora/b1c3498eee818656643b898a86c72fcd77eaabd3.png)





然后选择**免费**的方案就行，如下图，然后**继续**



![notion image](https://pic.456766.xyz/typora/90241e3e480226358c120d6be86510c2587b268f.png)





此时我们先不添加DNS，先把域名解析服务器改到Cloudflare，点击左边栏 **DNS**，记下Cloudflare名称服务器地址，你看到的可能和我看到不一定一样，别弄错了。



![notion image](https://pic.456766.xyz/typora/619ee5212f9f721c3c60ba3ad41a855f02ccc158.png)



去域名注册平台后台https://www.namesilo.com/account_domains.php



![notion image](https://pic.456766.xyz/typora/deaa5b81ad3bc0b61f0a99b1b3309a98d8ef4a77.jpeg)



填入Cloudflare的名称服务器地址，然后提交（submit），名称服务器生效可能要等一段时间



![notion image](https://pic.456766.xyz/typora/73fd0ce7fd47d3e25d5035f6af78106fd531509a.png)





## 创建应用程序

回到Cloudflare，导航到**Workers 和 Pages** 创建应用程序

![image](https://pic.456766.xyz/typora/6202273f3867236110d6a2a3e9d4a48ba7b52446.jpeg)







![notion image](https://pic.456766.xyz/typora/04affed533e6f7184b4c7420b8e3e3f2cb46e6b0.png)



名称可以随意，完了点击部署按钮，代码先不管它



![notion image](https://pic.456766.xyz/typora/045bcecb3b15412597fef3db606a8de38b5b7c9e.png)





Worker部署成功



![notion image](https://pic.456766.xyz/typora/d592ffaed5f33e6bc9bdadb89267e73e87d09aeb.png)



## 替换脚本代码

点击编辑代码，将https://github.com/zizifn/edgetunnel/blob/main/src/worker-vless.js代码复制过来，贴到编辑器里面替换原来的内容

修改两个地方：

1，第7行的userID，随便找个UUID替换，[点击这里获取一个 4](https://www.uuidgenerator.net/version4)，注意用version4，否则会报UUID不合法。

2，第9行的proxyIP，可以找前辈们提供的，随便在下面的列表中找一个

```
cdn-all.xn--b6gac.eu.org cdn.xn--b6gac.eu.org cdn-b100.xn--b6gac.eu.org edgetunnel.anycast.eu.org cdn.anycast.eu.org
```

*userID不用改也行 ，userID记在小本本上以后要用*

proxyIP*我测试了也可以不用改，空着就行*

**保存并部署**（按钮在屏幕右上角）

## 绑定域名



![notion image](https://pic.456766.xyz/typora/42db9218a49c38b1e5fc04f5a965596776ad3be3.png)





![image](https://pic.456766.xyz/typora/67c86bffc006e2047714fe596cd6d07f63abae6f.png)



自定义域前缀可以随意，根据自己需要填写然后点击“添加自定义域”，等一会儿生效后就可以用了。。。

## 配置科学上网客户端

在浏览器地址栏输入你刚配置的自定义域+代码中配置的userID，得到相应的科学上网的配置参数

比如：https://hi.cntv.chat/6efcf080-745f-42c0-a0e6-4b0f9a2f8f1c 



![image](https://pic.456766.xyz/typora/a762dcabf2d2ef2fd003f3bec59942c9ae2d21f0.png)



复制图上标记的内容，到科学上网工具中通过剪贴板导入或手动输入配置参数，注意协议是VLESS。我PC端用的V2rayA，安卓手机用的V2rayNG

好了，本教程到此结束，快去享受免费、快速的、自由的网络去吧！

若有不明白或遇到什么问题，请给我留言。
