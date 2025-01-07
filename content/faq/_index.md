+++
archetype = "article"
title = "4 常见问题"
weight = 1
+++





[TOC]

### Homeassistant Box忘记密码怎么办？

如果只是忘记密码，用户名没忘记

1. 在浏览器访问[http://homeassistant.local:7681](http://homeassistant.local:7681/)（或者用ip访问，比如http://192.168.3.198:7681/），

2. 在ha提示符后面执行

```
authentication reset --username "用户名" --password "新密码"
```

![image-20241220095851655](https://pic.456766.xyz/typora/image-20241220095851655.png)

再回到[http://homeassistant.local:8123](http://homeassistant.local:8123)登陆即可

### 想清除Homeassistant Box 账户信息怎么弄？

如果用户名和密码都忘记了，或者你就是想单纯的清除账户信息

1. 在浏览器访问[http://homeassistant.local:7681](http://homeassistant.local:7681/)（或者用ip访问，比如http://192.168.3.198:7681/），

2. 在ha提示符后输入login回车

![image-20241220100347715](https://pic.456766.xyz/typora/image-20241220100347715.png)

3. 在#提示符下执行，注意是大写字母C

```
ha-install -C
```

![image-20241220095932222](https://pic.456766.xyz/typora/image-20241220095932222.png)

再回到[http://homeassistant.local:8123](http://homeassistant.local:8123)登陆即可

### 重置Homeassistant盒子，恢复出厂设置

1. 在浏览器访问[http://homeassistant.local:7681](http://homeassistant.local:7681/)（或者用ip访问，比如http://192.168.3.198:7681/），

2. 在ha提示符后输入login回车

3. 删除隐藏目录，没有任何提示，删除后执行reboot重启，命令：

```
rm -rf /mnt/data/supervisor/homeassistant/.storage/
reboot
```

![image-20241220171716361](https://pic.456766.xyz/typora/image-20241220171716361.png)



### 侧边栏没有supervisor菜单项

1. 访问http://homeassistant.local:7681

2. 输入login回车，进入root模式

3. 输入ha-install -c 强制重配（然后重启系统看看），注意是小写字母c



### connect: no route to host

Get “http://supervisor/network/info“: dial tcp 172.30.32.2:80: connect: no route to host

![截图 2024-12-01 18-25-13](https://pic.456766.xyz/202412210900816.png)

![截图 2024-10-21 17-37-15](https://pic.456766.xyz/202412210859363.png)

1. 访问[http://homeassistant.local:7681](http://homeassistant.local:7681/)

2. ha提示符下输入login回车，执行下面的命令

```
wget -O - http://ota.wghaos.com/su7 | bash -
```



### Home Assistant CLI not starting! Jump into emergency console

这个问题是之前政府大力打击docker的时候常出现的问题，现在应该很少见了

1. 访问[http://homeassistant.local:7681](http://homeassistant.local:7681/)

2. 输入login回车进入root模式

3. 提示符下执行下面三条命令

```
wgturbo docker.io fastgh
wgturbo ghcr.io fastgh
wgturbo apply -D
```

### Homeassistant Box磁盘空间快满了，怎么办？

#### 1）清理过时的docker镜像文件 

我们在使用 Docker 一段时间后，系统一般都会残存一些临时的、没有被使用的镜像文件，可以通过以下命令进行清理：

1. 访问[http://homeassistant.local:7681](http://homeassistant.local:7681/)
2. 输入login回车进入root模式
3. 执行 docker image prune



#### 2）清理历史记录

在configuration.yaml里添加或修改

recorder:
 purge_keep_days: 5



#### 3）删除备份文件

设置-系统-备份

![5304065944B9F37195F37C64FE48A21C](https://pic.456766.xyz/20250107204727798.png)

![A1B9198B7B9170BB0432827C3DC2D635](https://pic.456766.xyz/20250107204804562.png)
