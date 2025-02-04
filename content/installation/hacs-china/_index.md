+++
tags = ["HACS极速版安装","HACS激活"]
title = "Homeassistant盒子安装HACS极速版"
weight = 1

+++

## 一、HACS极速版和普通HACS的区别

我们来看看HACS极速版的说明

> [HACS](https://hacs.xyz/)是一款优秀的 [Home Assistant](https://www.home-assistant.io/) 集成商店，然而国人想要使用它下载插件或前端卡片却困难重重，主要原因就是国内的网络环境。 本项目（极速版）使用了[gitmirror.com](https://gitmirror.com/)和[fastgit.org](https://fastgit.org/)等提供的Github代理服务，可以让大家更快的下载商店里的插件。

也就是说，HACS极速版是HACS官方集成的修改版，主要解决国内网络问题，功能上和HACS一样。

## 二、安装HACS极速版

使用HACS极速版不需要github账号，也不需要激活，因为极速版实际上是公共一套激活数据。安装非常简单

首先我们需要确保已经在加载项里面安装好了“Advanced SSH & Web Terminal”，并在配置选项下设置了用户名和密码，别忘了点保存。

![image-20250204110927116](https://pic.456766.xyz/20250204110927228.png)

然后使之显示于侧边栏并启动

![image-20250204111148073](https://pic.456766.xyz/20250204111148157.png)

在侧边栏点开Terminal，然后执行下面的代码



```
wget -O - https://get.hacs.vip | bash -

# 或

curl -fsSL get.hacs.vip | bash
```

等待下载安装完后，重启盒子就可以了

