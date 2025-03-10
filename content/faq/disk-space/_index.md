+++
archetype = "article"
title = "Homeassistant磁盘空间快满"
weight = 1

+++

### Homeassistant Box磁盘空间快满了，怎么办？

#### 1）清理过时的docker镜像文件

我们在使用 Docker 一段时间后，系统一般都会残存一些临时的、没有被使用的镜像文件，可以通过以下命令进行清理：

1. 访问[http://homeassistant.local:7681](http://homeassistant.local:7681/)
2. 输入login回车进入root模式
3. 执行 docker image prune

#### 2）清理历史记录

在configuration.yaml里添加或修改

recorder: purge_keep_days: 5

#### 3）删除备份文件

设置-系统-备份

[![5304065944B9F37195F37C64FE48A21C](https://pic.456766.xyz/20250107204727798.png)](https://www.ha-box.xyz/faq/index.html#R-image-b64cefa1e0a8dd9765ee039f6428ed5b)

[![A1B9198B7B9170BB0432827C3DC2D635](https://pic.456766.xyz/20250107204804562.png)](https://www.ha-box.xyz/faq/index.html#R-image-d82aa28dfe6425b5ebbc910dfe30a146)







