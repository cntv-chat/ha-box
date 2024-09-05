+++
tags = ["HACS安装","HACS激活"]
title = "HACS安装激活"
weight = 1

+++

## 一、HACS是什么

HACS 是一个全面的、社区驱动的**插件管理系统** ，专为Google的开源 智能家居 平台 Home Assistant 设计。 通过HACS，你可以方便地发现、安装和管理与Home Assistant兼容的各种插件，包括自定义集成、面板、配置器和其他小部件。

## 二、安装HACS

由于Homeassistant的安装五花八门，所以网上有很多教程看上去非常复杂，但是在HA Box中安装HACS非常简单，下面我们一起来看看怎么安装。

配置 - 设备与服务 ，在集成选项卡右下角点**添加集成**按钮

![image](https://pic.456766.xyz/typora/646e80ca68cea28649631171ebf4b080391deba2.jpeg)





![image](https://pic.456766.xyz/typora/7f8475698172de98cb56982a9863f0dacdef74f3.jpeg)





在弹出窗口搜索HACS，你将看到HACS已经在列表里，然后点击它（整行随便点就行，右边的几个图标只是告诉你HACS的一些功能）

![image](https://pic.456766.xyz/typora/7ef42a94fe5db252b248df68d3b63a40a7c8f5b9.jpeg)





全勾选上，然后提交

![image](https://pic.456766.xyz/typora/ee51e28640e1ccf768c04cec998f9325200c7452.jpeg)





接下来是打开链接，进到github.com有个授权的动作

![image](https://pic.456766.xyz/typora/d6a02518146386e9793c52f4200598aa7e8e9a6d.jpeg)





不出以外的话，你将看到这个页面，复制刚才弹窗给你的验证码，直接鼠标全选上复制过去直接粘贴，然后点 Continue 继续

![image](https://pic.456766.xyz/typora/096b8d5fab1cbb4372edccd400f22dbf5b22579c.png)





有时候会因为种种原因出现下面这个弹窗提示**cloud_not_register**,网络问题直接关闭从头再来多试几次



如果出现下面这个页面说明你刚才的验证码没输错，可以点击Authorize hacs授权了

![image](https://pic.456766.xyz/typora/f0c8d06fa2176e0832ba8532c56e1b013a2499e7.jpeg)





OK,到这里说明已经配置成功了，可以关闭这个页面了。

![image](https://pic.456766.xyz/typora/a7f6b1024805fa524a0d85d853081d3c184facda.png)





返回到Homeassistant,HACS已经配置成功，并自动发现了家里的一些设备，可以对区域进行配置，告诉HACS这个设备是在客厅还是在卧室或者别的房间。当然你也可以直接点关闭或完成。

![image](https://pic.456766.xyz/typora/eabec53c489ed0f40401fe3d59537fbed6f7d9ec.png)





看，左侧已经出现HACS的连接，集成里面已配置列表已经有HACS了。

![image](https://pic.456766.xyz/typora/d2c535214811638b31d0ebea7cf29975b2ca6e11.jpeg)





此时你可能需要重启一下HA Box缓解一下激动的心情了
