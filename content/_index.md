+++
tags = ["Homeassistant","HA Box","Homeassistant盒子"]
title = "Homeassistant盒子介绍"
weight = 1

+++

我们主要采用运营商盒子中的M401A、UNT403A、CM311-1A作为Homeassistant的承载体，可以说这是市场选择的结果：

1. 我们采用的HAOS镜像是冬瓜制作的，能够适配以上运营商电视盒子。而该镜像开始之支持以上三种盒子
2. 运营商电视盒子因其出货量大，因此在二手市场性价比也很高，价格不会太高
3. 晶晨S905l3A芯片，2+16G的配置可以说刚刚好，能够满足大部分的需求，接入200+设备不是问题



安装方式为官方推荐的HAOS，通常民间称之为全功能版本，采用冬瓜制作的镜像，对中国网络环境做了优化，并增加了一些比较适用的Add-ons。





![image-20240911155228150](https://pic.456766.xyz/typora/image-20240911155228150.png)

当然由于后期冬瓜的HAOS镜像可以适配了更多的盒子，导致市场价格进一步下降，屯了一些M401A和UNT403A，亏大了！

但是不得不说，以上这三种盒子依然是最合适的。闲鱼很多便宜的都是s905l3芯片，个人并不推荐，大家购买的时候要注意看是什么芯片。



先看看大家容易混淆的s905l3和s905l3a芯片的对比

![image-20240908214739930](https://pic.456766.xyz/typora/image-20240908214739930.png)

## Specification comparison:

| Processor                                                | **Amlogic S905L3**                                           | **Amlogic S905L3A**                                          |
| -------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Market (main)                                            | TV Box                                                       | TV Box                                                       |
| ISA                                                      | ARMv8-A (64-bit)                                             | ARMv8-A (64-bit)                                             |
| Microarchitecture                                        | Cortex-A53                                                   | Cortex-A53                                                   |
| Family                                                   | S9                                                           | S9                                                           |
| Part number(s), S-Spec                                   | S905L3                                                       | S905L3A                                                      |
| Release date                                             | 2022 Q4                                                      | 2022 Q3                                                      |
| Lithography                                              | 28 nm HKMG                                                   | 12 nm                                                        |
| Cores                                                    | 4                                                            | 4                                                            |
| Threads                                                  | 4                                                            | 4                                                            |
| Base frequency                                           | 2,0 GHz                                                      | 1,8 GHz                                                      |
| Turbo frequency                                          | -                                                            | -                                                            |
| High performance cores                                   | 4x ARM Cortex-A53 @ 2,0 GHz                                  | 4x ARM Cortex-A53 @ 1,8 GHz                                  |
| Cache memory                                             | 1 MB                                                         | 1 MB                                                         |
| Max memory capacity                                      | 4 GB                                                         | 4 GB                                                         |
| Memory types                                             | LPDDR2/3, DDR3/4                                             | DDR3/DDR3L-2133, DDR4-2666, LPDDR4-3200                      |
| TDP                                                      | 5 W                                                          | 5 W                                                          |
| GPU integrated graphics                                  | [ARM Mali-450 MP5](https://gadgetversus.com/graphics-card/arm-mali-450-mp5-specs/) | [ARM Mali-G31 MP2](https://gadgetversus.com/graphics-card/arm-mali-g31-mp2-specs/) |
| GPU execution units                                      | 5                                                            | 2                                                            |
| GPU shading units                                        | 80                                                           | 32                                                           |
| GPU clock                                                | 750 MHz                                                      | 850 MHz                                                      |
| GPU FP32 floating point                                  | 59,5 GFLOPS                                                  | 20,8 GFLOPS                                                  |
| Socket                                                   | SoC                                                          | SoC                                                          |
| Drystone MIPS                                            | 18 400 DMIPS                                                 | 16 560 DMIPS                                                 |
| Crypto engine                                            | -                                                            | AES, DES, TDES, TRNG                                         |
| Security                                                 | -                                                            | TrustZone, Secure boot                                       |
| Max display resolution                                   | 4K@60fps                                                     | 4K@75fps                                                     |
| Video decoding                                           | H.265, H.264, 1080p@60fps VP9 4K@60fps                       | H.265 4K@75fps, H.264 4K@30fps                               |
| Video encoding                                           | -                                                            | H.265/H.264 1080p@60fps                                      |
| Modem                                                    | 10/100M Ethernet                                             | 10/100/1000 MAC, 10/100 PHY                                  |
| Connectivity                                             | USB 2.0, HDMI 2.0                                            | USB 2.0, USB 3.0, HDMI 2.1                                   |
| Wi-Fi                                                    | Wi-Fi 802.11 a/b/g/n/ac                                      | Wi-Fi/IEEE 802.11 a/b/g/n/ас                                 |
| Bluetooth                                                | Bluetooth 4.2                                                | Bluetooth 4.1                                                |
| Audio                                                    | -                                                            | DAC, SPDIF, I2S, PDM                                         |
| AnTuTu                                                   | 35 294                                                       | 46 026                                                       |
| (Android) Geekbench 4 single core                        | 550                                                          | 755                                                          |
| (Android) Geekbench 4 multi-core                         | 1 578                                                        | 2 062                                                        |
| (Android) Geekbench 5 single core                        | 105                                                          | 130                                                          |
| (Android) Geekbench 5 multi-core                         | 266                                                          | 434                                                          |
| (SGEMM) GFLOPS Performance                               | 4,18 GFLOPS                                                  | 5,45 GFLOPS                                                  |
| (Multi-core / watt performance) Performance / watt ratio | 316 pts / W                                                  | 412 pts / W                                                  |



详细的对比数据，请访问 https://gadgetversus.com/processor/amlogic-s905l3-vs-amlogic-s905l3a/



下面是M401A的几张图片

![](https://pic.456766.xyz/202409072117187.png)

![](https://pic.456766.xyz/202409072117451.png)

![](https://pic.456766.xyz/202409072118487.png)



![](https://pic.456766.xyz/202409072119320.png)



![](https://pic.456766.xyz/202409072119549.png)



偶尔也出黑豹X2（panther x2）和x96max+，但是量很少，就不作介绍了，有兴趣的同学自行bing（嗯，不用百度很多年了，世界变得清净了不少）



- 安装维护
  - [ HA盒子使用说明书（开箱即用）](https://www.ha-box.xyz/installation/instructions/index.html)
  - [ 给HA Box插上无线WIFI的翅膀](https://www.ha-box.xyz/installation/wifi/index.html)
  - [HACS安装激活](https://www.ha-box.xyz/installation/hacs/index.html)
- 设备接入
  - [HA Box桥接米家设备到HomeKit](https://www.ha-box.xyz/access/homekit/index.html)
  - [将米家设备接入HomeAssistant](https://www.ha-box.xyz/access/mijia/index.html)
- 网络技术
  - [Ha盒子配置科学上网](https://www.ha-box.xyz/network/habox-over-greatwall/index.html)
  - [linux下无损扩容分区方法](https://www.ha-box.xyz/network/linux-partition/index.html)
  - [从 Docker Hub 快速拉取镜像](https://www.ha-box.xyz/network/docker-pull/index.html)
  - [搭建免费科学上网节点](https://www.ha-box.xyz/network/free-vless-node/index.html)
  - [远程控制Homeassistant盒子](https://www.ha-box.xyz/network/free-remote-control/index.html)

