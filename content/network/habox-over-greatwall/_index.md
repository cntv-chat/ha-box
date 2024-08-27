+++
tags = ["documentation"]
title = "Ha盒子配置科学上网"
weight = 1

+++

前提，你已拥有可以用的梯子（节点），如果没有请参考：

[搭建免费科学上网节点]({{% ref "/network/free-vless-node" %}} "搭建免费科学上网节点")



加载项商店搜索"加速"，安装它（实际上就是v2raya,很好用的工具）

![image](https://www.ha-box.xyz/uploads/default/optimized/1X/070adbd5eb8a90dc0647ed13a5c1acd21d457be8_2_690x260.png)





安装完后，点启动，配置选项卡可以不用修改默认就行



![image](https://www.ha-box.xyz/uploads/default/optimized/1X/df3fc21234594a0b1260007e57f8a549aebe0075_2_690x347.png)





打开WEB UI，初次进入需要设置用户名密码，设置后请记好了。

导入节点

![image](https://www.ha-box.xyz/uploads/default/optimized/1X/35f8c5d6d06e839c5d250ccfcda52ad6d65360c3_2_690x201.png)





然后，选择，启动

![image](https://www.ha-box.xyz/uploads/default/optimized/1X/6039b77ac1aa021955fcb987013cbb0505db3e30_2_690x296.png)





此时，应该就可以用了。开个窗口测试一下
`http://homeassistant.local:7681/`
进入后输入login 回车
输入curl www.google.com回车

是不是看到google页面返回的网页源码了？

![image](https://www.ha-box.xyz/uploads/default/optimized/1X/61122d3118036f0ece49f011ee703944e86ec39a_2_690x307.jpeg)





如果不行，请检查是不是节点或者订阅连接有问题

关于 v2raya的其他配置，请自行bing。





其他电脑想要科学上网，也可以修改网络配置，将网关设置为HA盒子的ip地址，也能通过HA盒子实现科学上网的梦想。
