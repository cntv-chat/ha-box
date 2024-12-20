+++
tags = ["无线网卡","wifi配置"]
title = " 给HA Box插上无线WIFI的翅膀"
weight = 1

+++

由于我们选用的HA Box盒子是基于M401A,UNT403A,CM311-1A，都没有带无线模块（带无线模块的盒子又不适合做Haomeassistant Box），因此我们采购了一些USB无线网卡802.11n，该网卡可以在HA Box下使用，但是之智能连2.4G网络，如果你2.4G网络没打开，请先在路由器上打开它。

![image](https://pic.456766.xyz/202409051036273.jpeg)





要配置无线网卡，你需要先连上网线，或者接上显示器和键盘。
如果是已连上有线网络，那么在浏览器打开http://homeassistant.local:7681/ （或者用ip访问，比如http://192.168.3.209:7681/ ，请使用你HA Box实际的ip地址替换192.168.3.209），打开后你将看到如下界面

![image](https://pic.456766.xyz/typora/80151f8634398af9174d5c9dee81e241ef822a68.jpeg)





当然，如果你没有连有线网络，但是接连显示器和键盘，同样在显示器上你也将看到类似的界面。

在ha>提示符下输入“**login**”然后回车，进入root模式下。

输入 “**ip a**”回车，你将会发现有如下的网卡信息，这就是刚插上的无线网卡了

> wlu2: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000

好啦，现在我们来设置无线网卡连接信息：
在#提示符下（root模式）输入：
**`nmcli device wifi`**
然后回车，将看到能扫描到的wifi信号
![](https://pic.456766.xyz/202409040903689.jpeg)

连接wifi的命令如下：

```perl
nmcli device wifi connect "YOUR_SSID" password "YOUR_WIFI_PASSWORD"
```

当你看到返回下面的信息时，说明连接成功连。需要注意的是该网卡只支持2.4G频段的wifi信号，如果你家wifi没有支持2.4G频段的信号，将连接失败。

> root@homeassistant:/ # nmcli device wifi connect “liying” password “8888800000”
>
> Device ‘wlu2’ successfully activated with ‘6f2bf3bc-6682-4c84-bd5c-5403d25743c6’.
>
> root@homeassistant:/ #

当我们再用“ip a”命令查看的是很，发现无线网卡已经有了ip信息

> wlu2: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
> link/ether 00:e0:4d:2d:14:ca brd ff:ff:ff:ff:ff:ff
> inet 192.168.3.210/24 brd 192.168.3.255 scope global dynamic noprefixroute wlu2
> valid_lft 86022sec preferred_lft 86022sec
> inet6 2409:8a00:78a6:8d94:c868:de7f:dc92:10/128 scope global dynamic noprefixroute
> valid_lft 6821sec preferred_lft 3221sec
> inet6 2409:8a00:78a6:8d94:a299:4c8b:50fc:8b38/64 scope global dynamic noprefixroute
> valid_lft 7179sec preferred_lft 3579sec
> inet6 fe80::dba2:e2ad:dd62:784/64 scope link noprefixroute
> valid_lft forever preferred_lft forever

此时，我们就可以用wifi网卡对应的ip访问HA Box了

> http://192.168.3.210:8123/onboarding.html



![image](https://pic.456766.xyz/typora/e12f5e8e1ebb3fc6d7e9f66a9630f115c7226134.jpeg)

