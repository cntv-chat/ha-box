+++
tags = ["homekit","米家","homeassistant"]
title = "HA Box桥接米家设备到HomeKit"
weight = 1

+++

[HA Box使用说明书]({{% ref "/installation/instructions" %}})

[在HA Box 中安装HACS]({{% ref "/installation/HACS" %}})

[将米家设备接入HomeAssistant]({{% ref "/access/mijia" %}})

前提条件是我们已经安装了HACS,如果没有请参考上面的连接安装

接下来，我们通过 HomeKit Bridge 将 Home Assistant 中设备桥接到 HomeKit。

首先，我们要添加 HomeKit Bridge 集成。点击“配置”，进入“设备与服务”页面。在“集成”选项下，点右下角“添加集成”
然后输入“homekit” 或者"apple"



![image](https://pic.456766.xyz/typora/2405b767378b89b3a841ce13334d05cfc9061cf4.jpeg)





点击“Apple”



![image](https://pic.456766.xyz/typora/a0787982f4a5381754deb552770fda923788b729.jpeg)





点击添加“HomeKit Bridge 集成”，按照指引完成添加。

需要注意是的，如果你有温湿度传感器，点击“要添加的域”下拉选项，记得勾选“Sensor”，这个选项默认是不勾选的。

![image](https://pic.456766.xyz/typora/b7f3383a80e1a1f04f3b092af7b8d0054d1eaa2a.jpeg)





添加 HomeKit Bridge 集成成功后，点击界面左下角的通知按钮。查看 homekit 的配对二维码。



![image](https://pic.456766.xyz/typora/b08589161582a58e794c2cb626c3ec44e2299ce0.jpeg)







![image](https://pic.456766.xyz/typora/3718c6668fa3b68c066162da84fe46579fd3c855.jpeg)





打开“家庭”应用，点击左上角的“+”号，选择“添加配件”。扫描上个步骤的得到的二维码，点击“添加到家庭”。在加入过程中，可能会提示“未认证设备”，点击“仍要添加”。然后完成剩余步骤，逐个添加设备。完成后，你就能能用Siri控制你的智能设备了。

![桥接homekit6.png](https://pic.456766.xyz/typora/46651d4a69934aadba8c46c32b8d84a2ac6ce8ce.jpeg)







![桥接homekit7.png](https://pic.456766.xyz/typora/d9897e682d94ac340ab1a1aff6821f0dd09b2144.jpeg)







![桥接homekit8.png](https://pic.456766.xyz/typora/a07d8ff1e7af35d33193fdba56efa787ba360d89.jpeg)





大功告成！
