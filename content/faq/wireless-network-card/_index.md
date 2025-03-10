+++
archetype = "article"
title = "无线网卡不能使用的临时解决方案"
weight = 1

+++

访问http://homeassistant.local:7681

出现ha提示符后输入login回车，进入命令行界面 编辑 /mnt/boot/cmdline.txt 文件

在console=tty0 后面增加 net.ifnames=0（和前面用空格隔开）

保存，重启就可以正常使用了。

如果修改后，又升级了homeassistant的版本，那可能会又不能使用。如果是这样，可以再来一次上面的操作。

预计下一版会修正







