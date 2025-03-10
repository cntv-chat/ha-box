+++
archetype = "article"
title = "重置Homeassistant盒子，恢复出厂设置"
weight = 1

+++

### 

1. 在浏览器访问[http://homeassistant.local:7681](http://homeassistant.local:7681/)（或者用ip访问，比如http://192.168.3.198:7681/），
2. 在ha提示符后输入login回车
3. 删除隐藏目录，没有任何提示，删除后执行reboot重启，命令：

```
rm -rf /mnt/data/supervisor/homeassistant/.storage/
reboot
```

[![image-20241220171716361](https://pic.456766.xyz/typora/image-20241220171716361.png)](https://www.ha-box.xyz/faq/index.html#R-image-6ead33258d066c62d1e8ce6c491f3276)







