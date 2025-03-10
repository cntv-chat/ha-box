+++
archetype = "article"
title = "重新安装最新的小米官方插件"
weight = 1

+++

最近homeassistant core 升级到2025.5.3，好几个插件不好使，小米官方插件也未能幸免，不过小米官方立即发布了新版本，修复了存在的问题。但是我也需要好几个客户小米官方插件已经更新到最新版本还是不能用。

那么，怎么重装小米官方插件呢？

1，浏览器访问http://homeassistant.local:7681 ，输入login后回车

2,导航到/mnt/data/supervisor/homeassistant/custom_components/

`cd /mnt/data/supervisor/homeassistant/custom_components/`

3、删除原来的目录ha_xiaomi_home（也有可能是xiaomi_home）

`rm -rf ha_xiaomi_home`

4、下载xiaomi官方插件最新版（当前为0.2.1）

`wget https://github.com/XiaoMi/ha_xiaomi_home/releases/download/v0.2.1/xiaomi_home.zip`

5、解压到ha_xiaomi_home目录

`unzip xiaomi_home.zip -d ha_xiaomi_home`

6、重启

`reboot`

7、重启完成后，在设置-设备与服务 添加集成 输入xiaomi找到xiaomi home就可以用了





如果下载不了文件，请自行搜索github加速下载，或者使用冬瓜伴侣
