+++
tags = ["documentation"]
title = "HACS安装激活"
weight = 1

+++

## 一、HACS是什么

HACS 是一个全面的、社区驱动的**插件管理系统** ，专为Google的开源 智能家居 平台 Home Assistant 设计。 通过HACS，你可以方便地发现、安装和管理与Home Assistant兼容的各种插件，包括自定义集成、面板、配置器和其他小部件。

## 二、安装HACS

由于Homeassistant的安装五花八门，所以网上有很多教程看上去非常复杂，但是在HA Box中安装HACS非常简单，下面我们一起来看看怎么安装。

配置 - 设备与服务 ，在集成选项卡右下角点**添加集成**按钮

![image](https://www.ha-box.xyz/uploads/default/optimized/1X/646e80ca68cea28649631171ebf4b080391deba2_2_690x365.jpeg)





![image](https://www.ha-box.xyz/uploads/default/optimized/1X/7f8475698172de98cb56982a9863f0dacdef74f3_2_690x389.jpeg)





在弹出窗口搜索HACS，你将看到HACS已经在列表里，然后点击它（整行随便点就行，右边的几个图标只是告诉你HACS的一些功能）

![image](https://www.ha-box.xyz/uploads/default/optimized/1X/7ef42a94fe5db252b248df68d3b63a40a7c8f5b9_2_690x384.jpeg)





全勾选上，然后提交

![image](https://www.ha-box.xyz/uploads/default/optimized/1X/ee51e28640e1ccf768c04cec998f9325200c7452_2_690x482.jpeg)





接下来是打开链接，进到github.com有个授权的动作

![image](https://www.ha-box.xyz/uploads/default/optimized/1X/d6a02518146386e9793c52f4200598aa7e8e9a6d_2_690x403.jpeg)





不出以外的话，你将看到这个页面，复制刚才弹窗给你的验证码，直接鼠标全选上复制过去直接粘贴，然后点 Continue 继续

![image](https://www.ha-box.xyz/uploads/default/optimized/1X/096b8d5fab1cbb4372edccd400f22dbf5b22579c_2_690x487.png)





有时候会因为种种原因出现下面这个弹窗，直接关闭从头再来，我们接着往下走

![image](https://www.ha-box.xyz/uploads/default/original/1X/30b77c357606c423ee9554fed6843dfa583132f8.png)

出现下面这个页面说明你刚才的验证码没输错，可以点击Authorize hacs授权了

![image](https://www.ha-box.xyz/uploads/default/optimized/1X/f0c8d06fa2176e0832ba8532c56e1b013a2499e7_2_618x500.jpeg)





OK,到这里说明已经配置成功了，可以关闭这个页面了。

![image](https://www.ha-box.xyz/uploads/default/optimized/1X/a7f6b1024805fa524a0d85d853081d3c184facda_2_690x379.png)





返回到Homeassistant,HACS已经配置成功，并自动发现了家里的一些设备，可以对区域进行配置，告诉HACS这个设备是在客厅还是在卧室或者别的房间。当然你也可以直接点关闭或完成。

![image](https://www.ha-box.xyz/uploads/default/optimized/1X/eabec53c489ed0f40401fe3d59537fbed6f7d9ec_2_657x500.png)





看，左侧已经出现HACS的连接，集成里面已配置列表已经有HACS了。

![image](https://www.ha-box.xyz/uploads/default/optimized/1X/d2c535214811638b31d0ebea7cf29975b2ca6e11_2_690x418.jpeg)





此时你可能需要重启一下HA Box缓解一下激动的心情了
