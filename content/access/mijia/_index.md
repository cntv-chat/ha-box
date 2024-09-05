+++
tags = ["米家","小米"]
title = "将米家设备接入HomeAssistant"
weight = 1

+++

[HA Box使用说明书]({{% relref  "/installation/instructions" %}})

[在HA Box 中安装HACS]({{% relref "/installation/HACS" %}})

前提条件是我们已经安装了HACS,如果没有请参考上面的连接安装

## 1将米家设备接入HomeAssistant

### 1 安装 Xiaomi Miot Atuo

接下来，我们需要安装 “Xiaomi Miot Atuo” 集成以将米家设备接入HomeAssistant。

进入 HACS 页面，清除筛选方式（默认只显示已下载的）

![image](https://pic.456766.xyz/typora/70e2335f30d0ac09481483ab161fd31c8ccdae7d.jpeg)





然后在搜索框输入“xiaomi miot”，出来后点击它

![image](https://pic.456766.xyz/typora/7dbb3b2832a340b7144704101831281b78997f9a.png)





点击右下角DOWNLOAD进行下载

![image](https://pic.456766.xyz/typora/c2e5a0057e07c7c71caa918194f809e2caa43ed4.png)



![image](https://pic.456766.xyz/typora/4052018b771c4df4176b353895c0596dcfb258a2.jpeg)





安装完集成之后需要重启 HomeAssistant。
配置 → 系统 右上角有重启按钮

### 2 配置 Xiaomi Miot Atuo

接下来，我们配置 Xiaomi Miot Atuo 将米家设备接入HomeAssistant。**注意，配置 Xiaomi Miot Atuo 前需要重启 HomeAssistant。**

点击“设置”，选择“设备与服务”
切换到 “设备” 选项卡， 然后点击右下角 “添加设备”
然后输入“xiaomi”，然后选择"Xiaomi Miot Auto"



![image](https://pic.456766.xyz/typora/6522b231a80bf78d487a8fc545347c4b350d2730.jpeg)





选择“账号集成”，登录小米账号获取设备信息。

![image](https://pic.456766.xyz/typora/cd71249cb01282859a521a8a373a6e5629323f92.jpeg)



![image](https://pic.456766.xyz/typora/92f4e0e5a705997eb38b985073bb5c8fa47a881a.jpeg)





按照配置指引完成剩余步骤，
这里可以根据自身情况默认选择排除模式还是包含模式
在设备列表中你想要接入 HomeAssistant 的设备。
排除模式就是将设备列表中没有勾选色设备接入到Homeassistant
包含模式就是将设备列表中已勾选的设备接入到Homeassistant

![image](https://pic.456766.xyz/typora/c403c5c6840ffcc7de4c78bdedd16c2ade91c357.jpeg)





接下来就是设置设备所在区域。这样就算是将米家智能设> 备接入进来了。

> 上面有一句话：如果想集成网关子设备，请直接选择子设备接入，只接入网关不会自动集成子设备。自己体会，至此就算接入完成了。

回到概览，就可以看到我们刚才接入的设备了

![image](https://pic.456766.xyz/typora/55cbe342ce51cb278d4599e0061df76d510d5b0b.jpeg)





在配置 - 设备与服务中就能看到Xiaomi Miot Auto

![image](https://pic.456766.xyz/typora/ad4e3cd4220230604a9b3354a652d2566cc1a322.jpeg)



点进去就可以看到接入了多少个设备，多少个实体



我们进入米家插座，就能看到很多信息，并且可以进行更丰富的控制和设置，更多高级的功能，期待你的发现和研究

![image](https://pic.456766.xyz/typora/103b0749a541718c1a75e8ecea1cb438338f0ee0.jpeg)

