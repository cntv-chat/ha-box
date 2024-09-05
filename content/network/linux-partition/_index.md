+++
tags = ["linux","无损分区"]
title = "linux下无损扩容分区方法"
weight = 1

+++

此方法适用于非lvm情景。

用到的命令：parted、resize2fs

**特别说明：此方法仅适用于分区扩容（包括根分区），对于缩容的情况不适用，切记！**

先确保需要扩容的目标分区后面有一段空白磁盘空间，然后使用磁盘分区工具parted先改变目标分区结束点。

这里假设需要扩容的分区为/dev/sda4，文件系统为ext4，挂载在根节点上，原来的分区结束点为21G ，新结束点为30G

```
sudo parted
```

这时进入parted 工具界面下，先用print /dev/sda 查看磁盘分区信息和扩容目标分区的编号

```
(parted)print /dev/sda
```

假如对应的编号为4，使用命令resizepart改变扩容目标分区的结束点

```
(parted)resizepart 4 警告: 分区 /dev/sda4 正被使用。你确定要继续吗? 是/Yes/否/No? yes                                                          结束点？  [21GB]? 30GB
```

回车，成功后输入quit退出parted 工具界面。

这时目标分区的大小已经变为了30G，但文件系统还未扩展，所以扩展的部分并不能实际使用，接下来使用命令resize2fs扩容文件系统。

```
sudo resize2fs /dev/sda4
```

这时会把文件系统扩容到增加的空间上。

扩容目标分区完成！

可以使用

```
df -h sudo fdisk -l
```

等命令查看。
