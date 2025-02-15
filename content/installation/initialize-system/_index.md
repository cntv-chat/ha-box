+++
tags = ["初始化","habox初始化"]
title = "homeassistant初始化系统"
weight = 1

+++

> 关于Homeassistant盒子初始化，Peter有话说……
>
> 之前我们提供的Homeassistant盒子买家收到后，接通电源开机，插上网线连接到路由器，大概2、3分钟后访问http://homeassistant.local:8123 或者通过ip访问，比如http://192.168.11.121:8123，不出意外的话就会出现创建账户的管理页面，然后就可以开始配置、使用。那是有一个15～20分钟的初始化过程，我这边在发货前已经替买家跑完。但是这让我有些力不从心，太耗费时间了。
>
> 因此，从今天开始这个初始化过程将由买家（也许就是您）自己完成！实际上，这是一个有趣的过程……



有的朋友拿到盒子后插上电源连上网线就着急访问http://homeassistant.local:8123，但是盒子还没启动，页面打不开，然后就怀疑盒子有问题找到我，那也我不能不管啊，所以又一通询问一通解释。比较耗费时间精力。

因此，朋友们拿到盒子后，首先接通电源插上网线等3分钟后再访问http://homeassistant.local:8123。

![截图 2025-02-03 20-12-12](https://pic.456766.xyz/20250203212446045.png)

### 有问题？

如果访问不了，出现拒绝连接之类的，应该是还没启动完成或者是别的什么问题。此时，可以试试http://homeassistant.local:8124，这是冬瓜伴侣辅助管理页面，通常这个服务会先于其他服务启动。也可以访问http://homeassistant.local:7681试试（这是命令行窗口，基本上等同于接上了显示器后看到的效果）

如果冬瓜伴侣也访问不了，基本上可以判断是网络问题。访问http://homeassistant.local:8124的设备和homeassistant盒子是否连到了同一网络？当然还有一种情况是网线有问题，我们也遇到过这种情况；还有就是把盒子接到光猫的IPTV端口上去了（有的朋友用的是运营商送的光猫和路由器合体的设备）

还有一种情况是路由器不支持homeassistant.local这种方式访问，不用着急，我们可以直接用ip访问。可以在路由器后台找找设备连接中名称为homeassistant的设备，看看ip地址是什么。如果都找不到homeassistant的设备，那又是上面说的网络问题，继续排查吧。

![截图 2025-02-03 20-16-02](https://pic.456766.xyz/20250203201615169.png)



![截图 2025-02-03 20-20-09](https://pic.456766.xyz/20250203202041766.png)



### 初始化过程

通常情况在等待初始化过程时，我会打开http://homeassistant.local:7681监测进度。

出现">"提示符后输入login回车，然后在"#"提示符下输入ha-install -t 回车就可以监测初始化进度了。

但是这个过程会刷新页面，所以会退到">"提示符，需要再次做上面的操作

当然，也可以访问冬瓜伴侣（http://homeassistant.local:8124）来监测整个过程，这会更直观一些，并且不会出现需要上面提到的刷新页面后需要重新输入login再输入ha-install -t的操作。



![截图 2025-02-03 20-06-37](https://pic.456766.xyz/20250203201306903.png)



![截图 2025-02-03 20-11-45](https://pic.456766.xyz/20250203201306955.png)

![截图 2025-02-03 20-25-34](https://pic.456766.xyz/20250203213333471.png)

![截图 2025-02-03 20-12-21](https://pic.456766.xyz/20250203201750237.png)



![截图 2025-02-03 20-25-49](https://pic.456766.xyz/20250203202724617.png)

### 开始使用

实际上在初始化后期这个页面就可以访问了，但是由于初始化未完成，中途由于因初始化系统自动重启会导致连接失败，如果您不了解这个，您会惊讶：什么破盒子，系统有问题吧，怎么又连接中断访问不了了？不行，我得联系卖家问问什么情况。如此这般

![截图 2025-02-03 20-18-41](https://pic.456766.xyz/20250203201857569.png)



[ HA盒子使用说明书（开箱即用）]({{% relref "/installation/instructions" %}})
