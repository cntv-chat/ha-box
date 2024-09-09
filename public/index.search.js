var relearn_search_index = [
  {
    "breadcrumb": "1 安装维护",
    "content": "首先，感谢您选择由“HABox智能家居盒子”提供的Home assistant智能家居盒子，下面请与我一起进入这个神秘的小盒子一探究竟。\n等待欢迎界面 拿到盒子后，连上网线，插上电源，开机……启动并加载完成，大概要等待2分半种。然后在浏览器地址栏输入http://homeassistant.local:8123 进行访问，不出所料，您将看到如下欢迎界面。（你也可以在路由器后台查看具体ip地址，然后输入http://ip:8123进行访问）\n基本设置 创建用户 选择家的位置 这个地方如果搜索不到，您可以通过缩放地图，拖动地图中的位置图标到家所在的位置，然后是设置国家选项（如果是通过搜索找到的位置，就没有这个选项，系统自动设置了）\n信息收集 接下来是收集数据，建议不选，然后是自动发现家里的智能设备，直接点完成即可。\n正式进入后台 升级和修复 您可能会发现左侧配置选项边上有如上图所示的数字提示，点进去\n该升级升级，该修复修复\n结束语 到此，您基本上就可以根据自身情况进行设备的接入和控制了，请持续关注我们，我们将持续发布使用HomeAssistant盒子相关的使用说明！",
    "description": "首先，感谢您选择由“HABox智能家居盒子”提供的Home assistant智能家居盒子，下面请与我一起进入这个神秘的小盒子一探究竟。\n等待欢迎界面 拿到盒子后，连上网线，插上电源，开机……启动并加载完成，大概要等待2分半种。然后在浏览器地址栏输入http://homeassistant.local:8123 进行访问，不出所料，您将看到如下欢迎界面。（你也可以在路由器后台查看具体ip地址，然后输入http://ip:8123进行访问）",
    "tags": [
      "Homeassistant Box",
      "开箱",
      "说明书"
    ],
    "title": " HA盒子使用说明书（开箱即用）",
    "uri": "/installation/instructions/index.html"
  },
  {
    "breadcrumb": "1 安装维护",
    "content": "由于我们选用的HA Box盒子是基于M401A,UNT403A,CM311-1A，都没有带无线模块，因此我们采购了一些USB无线网卡802.11n，该网卡可以在HA Box下使用。\n要配置无线网卡，你需要先连上网线，或者接上显示器和键盘。 如果是已连上有线网络，那么在浏览器打开http://homeassistant.local:7681/ （或者用ip访问，比如http://192.168.3.209:7681/ ，请使用你HA Box实际的ip地址替换192.168.3.209），打开后你将看到如下界面\n当然，如果你没有连有线网络，但是接连显示器和键盘，同样在显示器上你也将看到类似的界面。\n在ha\u003e提示符下输入“login”然后回车，进入root模式下。\n输入 “ip a”回车，你将会发现有如下的网卡信息，这就是刚插上的无线网卡了\nwlu2: \u003cNO-CARRIER,BROADCAST,MULTICAST,UP\u003e mtu 1500 qdisc noqueue state DOWN group default qlen 1000\n好啦，现在我们来设置无线网卡连接信息： 在#提示符下（root模式）输入： nmcli device wifi 然后回车，将看到能扫描到的wifi信号 连接wifi的命令如下：\nnmcli device wifi connect \"YOUR_SSID\" password \"YOUR_WIFI_PASSWORD\"当你看到返回下面的信息时，说明连接成功连。需要注意的是该网卡只支持2.4G频段的wifi信号，如果你家wifi没有支持2.4G频段的信号，将连接失败。\nroot@homeassistant:/ # nmcli device wifi connect “liying” password “8888800000”\nDevice ‘wlu2’ successfully activated with ‘6f2bf3bc-6682-4c84-bd5c-5403d25743c6’.\nroot@homeassistant:/ #\n当我们再用“ip a”命令查看的是很，发现无线网卡已经有了ip信息\nwlu2: \u003cBROADCAST,MULTICAST,UP,LOWER_UP\u003e mtu 1500 qdisc noqueue state UP group default qlen 1000 link/ether 00:e0:4d:2d:14:ca brd ff:ff:ff:ff:ff:ff inet 192.168.3.210/24 brd 192.168.3.255 scope global dynamic noprefixroute wlu2 valid_lft 86022sec preferred_lft 86022sec inet6 2409:8a00:78a6:8d94:c868:de7f:dc92:10/128 scope global dynamic noprefixroute valid_lft 6821sec preferred_lft 3221sec inet6 2409:8a00:78a6:8d94:a299:4c8b:50fc:8b38/64 scope global dynamic noprefixroute valid_lft 7179sec preferred_lft 3579sec inet6 fe80::dba2:e2ad:dd62:784/64 scope link noprefixroute valid_lft forever preferred_lft forever\n此时，我们就可以用wifi网卡对应的ip访问HA Box了\nhttp://192.168.3.210:8123/onboarding.html",
    "description": "由于我们选用的HA Box盒子是基于M401A,UNT403A,CM311-1A，都没有带无线模块，因此我们采购了一些USB无线网卡802.11n，该网卡可以在HA Box下使用。",
    "tags": [
      "无线网卡",
      "Wifi配置"
    ],
    "title": " 给HA Box插上无线WIFI的翅膀",
    "uri": "/installation/wifi/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Discover what this Hugo theme is all about and the core-concepts behind it.",
    "description": "Discover what this Hugo theme is all about and the core-concepts behind it.",
    "tags": [],
    "title": "1 安装维护",
    "uri": "/installation/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Discover what this Hugo theme is all about and the core-concepts behind it.",
    "description": "Discover what this Hugo theme is all about and the core-concepts behind it.",
    "tags": [],
    "title": "2 设备接入",
    "uri": "/access/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Discover what this Hugo theme is all about and the core-concepts behind it.",
    "description": "Discover what this Hugo theme is all about and the core-concepts behind it.",
    "tags": [],
    "title": "3 智能控制",
    "uri": "/automatic-control/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Discover what this Hugo theme is all about and the core-concepts behind it.",
    "description": "Discover what this Hugo theme is all about and the core-concepts behind it.",
    "tags": [],
    "title": "4 网络技术",
    "uri": "/network/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Discover what this Hugo theme is all about and the core-concepts behind it.",
    "description": "Discover what this Hugo theme is all about and the core-concepts behind it.",
    "tags": [],
    "title": "5 视频教程",
    "uri": "/video/index.html"
  },
  {
    "breadcrumb": "",
    "content": "我们主要采用运营商盒子中的M401A、UNT403A、CM311-1A作为Homeassistant的承载体，可以说这是市场选择的结果：\n我们采用的HAOS镜像是冬瓜制作的，能够适配以上运营商电视盒子。而该镜像开始之支持以上三种盒子 运营商电视盒子因其出货量大，因此在二手市场性价比也很高，价格不会太高 晶晨S905l3A芯片，2+16G的配置可以说刚刚好，能够满足大部分的需求，接入200+设备不是问题 当然由于后期冬瓜的HAOS镜像可以适配了更多的盒子，导致市场价格进一步下降，屯了一些M401A和UNT403A，亏大了\n但是不得不说，以上这三种盒子依然是最合适的。闲鱼很多便宜的都是s905l3芯片，个人并不推荐，大家购买的时候要注意看是什么芯片。\n先看看大家容易混淆的s905l3和s905l3a芯片的对比\nSpecification comparison: Processor Amlogic S905L3 Amlogic S905L3A Market (main) TV Box TV Box ISA ARMv8-A (64-bit) ARMv8-A (64-bit) Microarchitecture Cortex-A53 Cortex-A53 Family S9 S9 Part number(s), S-Spec S905L3 S905L3A Release date 2022 Q4 2022 Q3 Lithography 28 nm HKMG 12 nm Cores 4 4 Threads 4 4 Base frequency 2,0 GHz 1,8 GHz Turbo frequency - - High performance cores 4x ARM Cortex-A53 @ 2,0 GHz 4x ARM Cortex-A53 @ 1,8 GHz Cache memory 1 MB 1 MB Max memory capacity 4 GB 4 GB Memory types LPDDR2/3, DDR3/4 DDR3/DDR3L-2133, DDR4-2666, LPDDR4-3200 TDP 5 W 5 W GPU integrated graphics ARM Mali-450 MP5 ARM Mali-G31 MP2 GPU execution units 5 2 GPU shading units 80 32 GPU clock 750 MHz 850 MHz GPU FP32 floating point 59,5 GFLOPS 20,8 GFLOPS Socket SoC SoC Drystone MIPS 18 400 DMIPS 16 560 DMIPS Crypto engine - AES, DES, TDES, TRNG Security - TrustZone, Secure boot Max display resolution 4K@60fps 4K@75fps Video decoding H.265, H.264, 1080p@60fps VP9 4K@60fps H.265 4K@75fps, H.264 4K@30fps Video encoding - H.265/H.264 1080p@60fps Modem 10/100M Ethernet 10/100/1000 MAC, 10/100 PHY Connectivity USB 2.0, HDMI 2.0 USB 2.0, USB 3.0, HDMI 2.1 Wi-Fi Wi-Fi 802.11 a/b/g/n/ac Wi-Fi/IEEE 802.11 a/b/g/n/ас Bluetooth Bluetooth 4.2 Bluetooth 4.1 Audio - DAC, SPDIF, I2S, PDM AnTuTu 35 294 46 026 (Android) Geekbench 4 single core 550 755 (Android) Geekbench 4 multi-core 1 578 2 062 (Android) Geekbench 5 single core 105 130 (Android) Geekbench 5 multi-core 266 434 (SGEMM) GFLOPS Performance 4,18 GFLOPS 5,45 GFLOPS (Multi-core / watt performance) Performance / watt ratio 316 pts / W 412 pts / W 详细的对比数据，请访问 https://gadgetversus.com/processor/amlogic-s905l3-vs-amlogic-s905l3a/\n下面是M401A的几张图片\n偶尔也出黑豹X2（panther x2）和x96max+，但是量很少，就不作介绍了，有兴趣的同学自行bing（嗯，不用百度很多年了，世界变得清净了不少）",
    "description": "我们主要采用运营商盒子中的M401A、UNT403A、CM311-1A作为Homeassistant的承载体，可以说这是市场选择的结果：\n我们采用的HAOS镜像是冬瓜制作的，能够适配以上运营商电视盒子。而该镜像开始之支持以上三种盒子 运营商电视盒子因其出货量大，因此在二手市场性价比也很高，价格不会太高 晶晨S905l3A芯片，2+16G的配置可以说刚刚好，能够满足大部分的需求，接入200+设备不是问题 当然由于后期冬瓜的HAOS镜像可以适配了更多的盒子，导致市场价格进一步下降，屯了一些M401A和UNT403A，亏大了\n但是不得不说，以上这三种盒子依然是最合适的。闲鱼很多便宜的都是s905l3芯片，个人并不推荐，大家购买的时候要注意看是什么芯片。",
    "tags": [],
    "title": "6 关于HA盒子",
    "uri": "/about-box/index.html"
  },
  {
    "breadcrumb": "2 设备接入",
    "content": "HA Box使用说明书\n在HA Box 中安装HACS\n将米家设备接入HomeAssistant\n前提条件是我们已经安装了HACS,如果没有请参考上面的连接安装\n接下来，我们通过 HomeKit Bridge 将 Home Assistant 中设备桥接到 HomeKit。\n首先，我们要添加 HomeKit Bridge 集成。点击“配置”，进入“设备与服务”页面。在“集成”选项下，点右下角“添加集成” 然后输入“homekit” 或者\"apple\"\n点击“Apple”\n点击添加“HomeKit Bridge 集成”，按照指引完成添加。\n需要注意是的，如果你有温湿度传感器，点击“要添加的域”下拉选项，记得勾选“Sensor”，这个选项默认是不勾选的。\n添加 HomeKit Bridge 集成成功后，点击界面左下角的通知按钮。查看 homekit 的配对二维码。\n打开“家庭”应用，点击左上角的“+”号，选择“添加配件”。扫描上个步骤的得到的二维码，点击“添加到家庭”。在加入过程中，可能会提示“未认证设备”，点击“仍要添加”。然后完成剩余步骤，逐个添加设备。完成后，你就能能用Siri控制你的智能设备了。\n大功告成！",
    "description": "HA Box使用说明书\n在HA Box 中安装HACS\n将米家设备接入HomeAssistant",
    "tags": [
      "Homekit",
      "米家",
      "Homeassistant"
    ],
    "title": "HA Box桥接米家设备到HomeKit",
    "uri": "/access/homekit/index.html"
  },
  {
    "breadcrumb": "1 安装维护",
    "content": "一、HACS是什么 HACS 是一个全面的、社区驱动的插件管理系统 ，专为Google的开源 智能家居 平台 Home Assistant 设计。 通过HACS，你可以方便地发现、安装和管理与Home Assistant兼容的各种插件，包括自定义集成、面板、配置器和其他小部件。\n二、安装HACS 由于Homeassistant的安装五花八门，所以网上有很多教程看上去非常复杂，但是在HA Box中安装HACS非常简单，下面我们一起来看看怎么安装。\n配置 - 设备与服务 ，在集成选项卡右下角点添加集成按钮\n在弹出窗口搜索HACS，你将看到HACS已经在列表里，然后点击它（整行随便点就行，右边的几个图标只是告诉你HACS的一些功能）\n全勾选上，然后提交\n接下来是打开链接，进到github.com有个授权的动作\n不出以外的话，你将看到这个页面，复制刚才弹窗给你的验证码，直接鼠标全选上复制过去直接粘贴，然后点 Continue 继续\n有时候会因为种种原因出现下面这个弹窗提示cloud_not_register,网络问题直接关闭从头再来多试几次\n如果出现下面这个页面说明你刚才的验证码没输错，可以点击Authorize hacs授权了\nOK,到这里说明已经配置成功了，可以关闭这个页面了。\n返回到Homeassistant,HACS已经配置成功，并自动发现了家里的一些设备，可以对区域进行配置，告诉HACS这个设备是在客厅还是在卧室或者别的房间。当然你也可以直接点关闭或完成。\n看，左侧已经出现HACS的连接，集成里面已配置列表已经有HACS了。\n此时你可能需要重启一下HA Box缓解一下激动的心情了",
    "description": "一、HACS是什么 HACS 是一个全面的、社区驱动的插件管理系统 ，专为Google的开源 智能家居 平台 Home Assistant 设计。 通过HACS，你可以方便地发现、安装和管理与Home Assistant兼容的各种插件，包括自定义集成、面板、配置器和其他小部件。",
    "tags": [
      "HACS安装",
      "HACS激活"
    ],
    "title": "HACS安装激活",
    "uri": "/installation/hacs/index.html"
  },
  {
    "breadcrumb": "4 网络技术",
    "content": "前提，你已拥有可以用的梯子（节点），如果没有请参考：\n搭建免费科学上网节点\n加载项商店搜索\"加速\"，安装它（实际上就是v2raya,很好用的工具）\n安装完后，点启动，配置选项卡可以不用修改默认就行\n打开WEB UI，初次进入需要设置用户名密码，设置后请记好了。\n导入节点\n然后，选择，启动\n此时，应该就可以用了。开个窗口测试一下 http://homeassistant.local:7681/ 进入后输入login 回车 输入curl www.google.com回车\n是不是看到google页面返回的网页源码了？\n如果不行，请检查是不是节点或者订阅连接有问题\n关于 v2raya的其他配置，请自行bing。\n其他电脑想要科学上网，也可以修改网络配置，将网关设置为HA盒子的ip地址，也能通过HA盒子实现科学上网的梦想，实现上网自由。",
    "description": "前提，你已拥有可以用的梯子（节点），如果没有请参考：\n搭建免费科学上网节点\n加载项商店搜索\"加速\"，安装它（实际上就是v2raya,很好用的工具）",
    "tags": [
      "科学上网",
      "Cloudflare Worker"
    ],
    "title": "Ha盒子配置科学上网",
    "uri": "/network/habox-over-greatwall/index.html"
  },
  {
    "breadcrumb": "4 网络技术",
    "content": "此方法适用于非lvm情景。\n用到的命令：parted、resize2fs\n特别说明：此方法仅适用于分区扩容（包括根分区），对于缩容的情况不适用，切记！\n先确保需要扩容的目标分区后面有一段空白磁盘空间，然后使用磁盘分区工具parted先改变目标分区结束点。\n这里假设需要扩容的分区为/dev/sda4，文件系统为ext4，挂载在根节点上，原来的分区结束点为21G ，新结束点为30G\nsudo parted这时进入parted 工具界面下，先用print /dev/sda 查看磁盘分区信息和扩容目标分区的编号\n(parted)print /dev/sda假如对应的编号为4，使用命令resizepart改变扩容目标分区的结束点\n(parted)resizepart 4 警告: 分区 /dev/sda4 正被使用。你确定要继续吗? 是/Yes/否/No? yes 结束点？ [21GB]? 30GB回车，成功后输入quit退出parted 工具界面。\n这时目标分区的大小已经变为了30G，但文件系统还未扩展，所以扩展的部分并不能实际使用，接下来使用命令resize2fs扩容文件系统。\nsudo resize2fs /dev/sda4这时会把文件系统扩容到增加的空间上。\n扩容目标分区完成！\n可以使用\ndf -h sudo fdisk -l等命令查看。",
    "description": "此方法适用于非lvm情景。\n用到的命令：parted、resize2fs\n特别说明：此方法仅适用于分区扩容（包括根分区），对于缩容的情况不适用，切记！\n先确保需要扩容的目标分区后面有一段空白磁盘空间，然后使用磁盘分区工具parted先改变目标分区结束点。\n这里假设需要扩容的分区为/dev/sda4，文件系统为ext4，挂载在根节点上，原来的分区结束点为21G ，新结束点为30G",
    "tags": [
      "Linux",
      "无损分区"
    ],
    "title": "linux下无损扩容分区方法",
    "uri": "/network/linux-partition/index.html"
  },
  {
    "breadcrumb": "4 网络技术",
    "content": "最近一段时间 Docker 镜像一直是 Pull 不下来的状态，感觉除了挂🪜，想直连 Docker Hub 是几乎不可能的。更糟糕的是，很多原本可靠的国内镜像站，例如一些大厂和高校运营的，也陆续关停了，这对我们这些个人开发者和中小企业来说是挺难受的。之前，通过这些镜像站，我们可以快速、方便地获取所需的 Docker 镜像，现在这条路也不行了。感觉这次动作不小，以后想直接访问 Docker Hub 是不可能了。所以我们得想办法搭建自己的私有镜像仓库。\n最近网上有很多解决 Docker Hub 镜像拉不下来的文章，我大概总结一下有以下几种办法：\nGithub Action 利用 Github Action Job 将 Docker Hub 镜像重新打 Tag 推送到阿里云等其他公有云镜像仓库里，这对于需要单个镜像很方便，批量就稍微麻烦一些，如果没🪜Github 访问也是个问题。\nCloudFlare Worker 使用 CloudFlare Worker 对 Docker Hub 的访问请求做中转，这种也是最近使用比较多的，因为个人用户的免费计划每天有10万次免费请求，足够个人和中小企业使用了，实在不够可以花 5$ 购买不限制的。Worker 脚本在网上有很多，随便搜索都有示例。\n因为 CloudFlare Worker 默认分配的workers.dev结尾的域名国内根本解析不了，所以要把域名托管在 CloudFlare 上才能正常使用，可以购买 .xyz 等其他费用合适的域名专门用来做代理访问。\n但 CloudFlare Worker CDN 经常抽风，有时很快有时很慢，可以借助自选优选IP工具帮助获取访问 CloudFlare 延迟最低的IP，将其写入到你的本地 Hosts 文件中。\n自建镜像仓库 说到自建首先我想到的就是买个配置比较低国外的服务器，搭建个 Nginx 做代理，分享下我配置成功的 Nginx 配置文件：\nserver { listen 443 ssl; server_name 域名; ssl_certificate 证书地址; ssl_certificate_key 密钥地址; ssl_session_timeout 24h; ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256'; ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3; location / { proxy_pass https://registry-1.docker.io; # Docker Hub 的官方镜像仓库 proxy_set_header Host registry-1.docker.io; proxy_set_header X-Real-IP $remote_addr; proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; proxy_set_header X-Forwarded-Proto $scheme; proxy_buffering off; proxy_set_header Authorization $http_authorization; proxy_pass_header Authorization; proxy_intercept_errors on; recursive_error_pages on; error_page 301 302 307 = @handle_redirect; } location @handle_redirect { resolver 1.1.1.1; set $saved_redirect_location '$upstream_http_location'; proxy_pass $saved_redirect_location; } }然后就可以直接用 docker pull 域名/library/nginx:latest 获取镜像了或者配置到 Docker 的daemon.json中。\nNginx 代理的方案你需要能购买到合适的国外服务器，不然网络会很慢。\n又或者在国外服务器上搭建 Registry、Nexus、Harbor等镜像仓库，它们具备镜像缓存功能，如果私有镜像仓库中不存在则会去代理服务中获取最新镜像。\n建议方案 所以对于个人用户、中小企业来说可以将上述的 CloudFlare Worker + 自建镜像仓库 融合起来，本地搭建 Registry、Nexus、Harbor等镜像仓库，在镜像仓库中配置上自己的 CloudFlare Worker Nginx反代 等代理地址或者当前一些可用的其他代理，当本地不存在则会通过这些代理去获取镜像，代理不可用时本地依然能用。\n搭建 Docker Registry 搭建 Docker Registry 可以参考下述命令：\ndocker run -d --restart=always --name registry \\ -p 443:443 -e REGISTRY_PROXY_REMOTEURL=https://registry-1.docker.io \\ #代理的镜像仓库URL -e REGISTRY_HTTP_ADDR=0.0.0.0:443 \\ #监听地址 -e REGISTRY_HTTP_HOST=https://xxx.cn \\ #访问域名 -e REGISTRY_HTTP_TLS_CERTIFICATE=/opt/cert/cert.pem \\ #域名证书 -e REGISTRY_HTTP_TLS_KEY=/opt/cert/cert.key \\ #域名证书 -v /opt/cert:/opt/cert \\ #挂载本地证书到容器中 -v /data:/var/lib/registry \\ #持久化数据目录 registry:2搭建 Nexus 可选择使用 Docker 命令搭建 Nexus。\ndocker run -d -p 8081:8081 --name nexus sonatype/nexus3或者使用 Rainbond 应用商店一键安装。\n搭建完成后正常登录 Nexus 页面，根据页面引导配置 Docker 相关的存储 Repository 及代理 Repository 即可。\n搭建 Harbor 可参考 Harbor文档 搭建或者使用 Rainbond 应用商店一键安装。\n可用的镜像代理 最近十来天我尝试了很多镜像加速站，整理了以下镜像站目前是可用状态，但可能随时会遇到不可用、关停、访问比较慢的状态，建议同时配置多个镜像源。\n提供商 地址 DaoCloud https://docker.m.daocloud.io 阿里云 https://\u003cyour_code\u003e.mirror.aliyuncs.com 登录阿里云分配 Docker镜像代理 https://dockerproxy.com 看运气 百度云 https://mirror.baidubce.com 南京大学 https://docker.nju.edu.cn 中科院 https://mirror.iscas.ac.cn 福利 近期 Rainbond 社区也接受到许多用户反馈 Docker 镜像拉不下来，不能构建、打包了，因此 Rainbond 也搭建了个镜像加速服务，采用 CloudFlare + 国外服务器 Nginx 反代的方案为 Rainbond 社区的用户们提供镜像加速服务。\n目前速度挺快的（未来不好说\n使用方法 1.直接获取 Docker Hub 镜像\ndocker pull docker.rainbond.cc/library/node:20 docker pull docker.rainbond.cc/rainbond/rainbond:v5.17.2-release-allinone2.配置镜像加速器\ntee /etc/docker/daemon.json \u003c\u003c-'EOF' { \"registry-mirrors\": [\"https://docker.rainbond.cc\"] } EOF systemctl daemon-reload systemctl restart docker",
    "description": "最近一段时间 Docker 镜像一直是 Pull 不下来的状态，感觉除了挂🪜，想直连 Docker Hub 是几乎不可能的。更糟糕的是，很多原本可靠的国内镜像站，例如一些大厂和高校运营的，也陆续关停了，这对我们这些个人开发者和中小企业来说是挺难受的。之前，通过这些镜像站，我们可以快速、方便地获取所需的 Docker 镜像，现在这条路也不行了。感觉这次动作不小，以后想直接访问 Docker Hub 是不可能了。所以我们得想办法搭建自己的私有镜像仓库。",
    "tags": [
      "Docker",
      "Docker镜像"
    ],
    "title": "从 Docker Hub 快速拉取镜像",
    "uri": "/network/docker-pull/index.html"
  },
  {
    "breadcrumb": "4 网络技术",
    "content": "准备物料 1)域名一个 推荐到namesilo.com注册域名，安全、支持支付宝支付、价格便宜，没有陷阱。\n注册6位及以上数字的xyz域名（比如456766.xyz），只要$0.99，续费$0.99，注册+续费它9年才$10不到，不用担心域名过期。这也是仅有的成本，简直不要太安逸了。\n2)准备好Cloudflare账号备用 打开https://www.cloudflare.com/zh-cn，通过一个电子邮件地址即可注册Cloudflare账号\n3)准备代码 https://github.com/zizifn/edgetunnel/blob/main/src/worker-vless.js\n备用地址 （如果你打开不github的话，可以试试从onedrive下载worker-vless.js文件）\n在Cloudflare添加网站 登陆Cloudflare，然后添加网站，就是将你刚注册的域名添加到这里\n然后选择免费的方案就行，如下图，然后继续\n此时我们先不添加DNS，先把域名解析服务器改到Cloudflare，点击左边栏 DNS，记下Cloudflare名称服务器地址，你看到的可能和我看到不一定一样，别弄错了。\n去域名注册平台后台https://www.namesilo.com/account_domains.php\n填入Cloudflare的名称服务器地址，然后提交（submit），名称服务器生效可能要等一段时间\n创建应用程序 回到Cloudflare，导航到Workers 和 Pages 创建应用程序\n名称可以随意，完了点击部署按钮，代码先不管它\nWorker部署成功\n替换脚本代码 点击编辑代码，将https://github.com/zizifn/edgetunnel/blob/main/src/worker-vless.js代码复制过来，贴到编辑器里面替换原来的内容\n修改两个地方：\n1，第7行的userID，随便找个UUID替换，点击这里获取一个 4，注意用version4，否则会报UUID不合法。\n2，第9行的proxyIP，可以找前辈们提供的，随便在下面的列表中找一个\ncdn-all.xn--b6gac.eu.org cdn.xn--b6gac.eu.org cdn-b100.xn--b6gac.eu.org edgetunnel.anycast.eu.org cdn.anycast.eu.orguserID不用改也行 ，userID记在小本本上以后要用\nproxyIP我测试了也可以不用改，空着就行\n保存并部署（按钮在屏幕右上角）\n绑定域名 自定义域前缀可以随意，根据自己需要填写然后点击“添加自定义域”，等一会儿生效后就可以用了。。。\n配置科学上网客户端 在浏览器地址栏输入你刚配置的自定义域+代码中配置的userID，得到相应的科学上网的配置参数\n比如：https://hi.cntv.chat/6efcf080-745f-42c0-a0e6-4b0f9a2f8f1c\n复制图上标记的内容，到科学上网工具中通过剪贴板导入或手动输入配置参数，注意协议是VLESS。我PC端用的V2rayA，安卓手机用的V2rayNG\n好了，本教程到此结束，快去享受免费、快速的、自由的网络去吧！\n若有不明白或遇到什么问题，请给我留言。",
    "description": "准备物料 1)域名一个 推荐到namesilo.com注册域名，安全、支持支付宝支付、价格便宜，没有陷阱。\n注册6位及以上数字的xyz域名（比如456766.xyz），只要$0.99，续费$0.99，注册+续费它9年才$10不到，不用担心域名过期。这也是仅有的成本，简直不要太安逸了。",
    "tags": [
      "免费节点",
      "Cloudflare Worker"
    ],
    "title": "搭建免费科学上网节点",
    "uri": "/network/free-vless-node/index.html"
  },
  {
    "breadcrumb": "2 设备接入",
    "content": "HA Box使用说明书\n在HA Box 中安装HACS\n前提条件是我们已经安装了HACS,如果没有请参考上面的连接安装\n1将米家设备接入HomeAssistant 1 安装 Xiaomi Miot Atuo 接下来，我们需要安装 “Xiaomi Miot Atuo” 集成以将米家设备接入HomeAssistant。\n进入 HACS 页面，清除筛选方式（默认只显示已下载的）\n然后在搜索框输入“xiaomi miot”，出来后点击它\n点击右下角DOWNLOAD进行下载\n安装完集成之后需要重启 HomeAssistant。 配置 → 系统 右上角有重启按钮\n2 配置 Xiaomi Miot Atuo 接下来，我们配置 Xiaomi Miot Atuo 将米家设备接入HomeAssistant。注意，配置 Xiaomi Miot Atuo 前需要重启 HomeAssistant。\n点击“设置”，选择“设备与服务” 切换到 “设备” 选项卡， 然后点击右下角 “添加设备” 然后输入“xiaomi”，然后选择\"Xiaomi Miot Auto\"\n选择“账号集成”，登录小米账号获取设备信息。\n按照配置指引完成剩余步骤， 这里可以根据自身情况默认选择排除模式还是包含模式 在设备列表中你想要接入 HomeAssistant 的设备。 排除模式就是将设备列表中没有勾选色设备接入到Homeassistant 包含模式就是将设备列表中已勾选的设备接入到Homeassistant\n接下来就是设置设备所在区域。这样就算是将米家智能设\u003e 备接入进来了。\n上面有一句话：如果想集成网关子设备，请直接选择子设备接入，只接入网关不会自动集成子设备。自己体会，至此就算接入完成了。\n回到概览，就可以看到我们刚才接入的设备了\n在配置 - 设备与服务中就能看到Xiaomi Miot Auto\n点进去就可以看到接入了多少个设备，多少个实体\n我们进入米家插座，就能看到很多信息，并且可以进行更丰富的控制和设置，更多高级的功能，期待你的发现和研究",
    "description": "HA Box使用说明书\n在HA Box 中安装HACS\n前提条件是我们已经安装了HACS,如果没有请参考上面的连接安装",
    "tags": [
      "米家",
      "小米"
    ],
    "title": "将米家设备接入HomeAssistant",
    "uri": "/access/mijia/index.html"
  },
  {
    "breadcrumb": "4 网络技术",
    "content": "出门在外，怎样通过网络控制家里的Homeassistant盒子，这是很多购买HA盒子的朋友关心的问题，那么请跟随我的脚步，来看看我们怎么实现！\n话不多说，直接开干！\n前提条件： 你在cloudflare已经注册了账户 你已经注册了域名并且已将DNS解析服务器修改为Cloudflare提供的服务器地址 你已经拥有哈HA 盒子 在homeassistant安装Cloudflared加载项 仓库地址：https://github.com/brenner-tobias/addon-cloudflared 进入加载项商店（配置-加载项-加载项商店），点右上角三个小点，然后点仓库\n输入 https://github.com/brenner-tobias/ha-addons 然后点添加\n添加不成功，这……，需要考虑换个时间再试，或者科学上网\n添加成功后，关闭对话框 重新进入加载项商店，搜索cloudflared，就能看到加载项Cloudflared，点它然后安装 安装好之后，进入配置选项卡，配置第一项就行，值为要使用的域名（该域名已添加到cloudflare），然后保存\n之后启动该加载项，在日志选项卡里面你将看到如下信息\n拷贝高亮所示的链接地址到浏览器地址栏，并访问。 嗯，点你你需要用来远程访问homeassistant的域名并授权\n接下来，还有一些事要做\n打开连接 https://one.dash.cloudflare.com/\n导航到左侧边栏 - Networks - Tunnels\n拉到Homeassistant这条记录的最右边，有三个小点，点进去，Configure\n也许你需要点右边三小点，Edit进行编辑\n最后你可以确认下dns是不是已经自动配置好了\n接下来在回到HA盒子，安装加载项File Editor（如果还没安装的话） 然后在/homeassistant/configuration.yaml中添加如下内容\nhttp: use_x_forwarded_for: true trusted_proxies: - 172.30.33.0/24 修改完后记得重启下盒子 然后就可以愉快的远程访问啦",
    "description": "出门在外，怎样通过网络控制家里的Homeassistant盒子，这是很多购买HA盒子的朋友关心的问题，那么请跟随我的脚步，来看看我们怎么实现！\n话不多说，直接开干！\n前提条件： 你在cloudflare已经注册了账户 你已经注册了域名并且已将DNS解析服务器修改为Cloudflare提供的服务器地址 你已经拥有哈HA 盒子 在homeassistant安装Cloudflared加载项 仓库地址：https://github.com/brenner-tobias/addon-cloudflared 进入加载项商店（配置-加载项-加载项商店），点右上角三个小点，然后点仓库",
    "tags": [
      "远程控制",
      "内网穿透",
      "Cloudflare Tunnels"
    ],
    "title": "远程控制Homeassistant盒子",
    "uri": "/network/free-remote-control/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "类别",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: Cloudflare Tunnels",
    "uri": "/tags/cloudflare-tunnels/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: Cloudflare Worker",
    "uri": "/tags/cloudflare-worker/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: Docker",
    "uri": "/tags/docker/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: Docker镜像",
    "uri": "/tags/docker%E9%95%9C%E5%83%8F/index.html"
  },
  {
    "breadcrumb": "",
    "content": "欢迎来到Ha-Box技术支持站\n安装维护 HA盒子使用说明书（开箱即用） 给HA Box插上无线WIFI的翅膀 HACS安装激活 设备接入 HA Box桥接米家设备到HomeKit 将米家设备接入HomeAssistant 网络技术 Ha盒子配置科学上网 linux下无损扩容分区方法 从 Docker Hub 快速拉取镜像 搭建免费科学上网节点 远程控制Homeassistant盒子 ",
    "description": "HaBox技术支持站",
    "tags": [],
    "title": "Ha-Box技术支持站",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: HACS安装",
    "uri": "/tags/hacs%E5%AE%89%E8%A3%85/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: HACS激活",
    "uri": "/tags/hacs%E6%BF%80%E6%B4%BB/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: Homeassistant",
    "uri": "/tags/homeassistant/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: Homeassistant Box",
    "uri": "/tags/homeassistant-box/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: Homekit",
    "uri": "/tags/homekit/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: Linux",
    "uri": "/tags/linux/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签",
    "uri": "/tags/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: Wifi配置",
    "uri": "/tags/wifi%E9%85%8D%E7%BD%AE/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: 开箱",
    "uri": "/tags/%E5%BC%80%E7%AE%B1/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: 科学上网",
    "uri": "/tags/%E7%A7%91%E5%AD%A6%E4%B8%8A%E7%BD%91/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: 米家",
    "uri": "/tags/%E7%B1%B3%E5%AE%B6/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: 免费节点",
    "uri": "/tags/%E5%85%8D%E8%B4%B9%E8%8A%82%E7%82%B9/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: 内网穿透",
    "uri": "/tags/%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: 说明书",
    "uri": "/tags/%E8%AF%B4%E6%98%8E%E4%B9%A6/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: 无损分区",
    "uri": "/tags/%E6%97%A0%E6%8D%9F%E5%88%86%E5%8C%BA/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: 无线网卡",
    "uri": "/tags/%E6%97%A0%E7%BA%BF%E7%BD%91%E5%8D%A1/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: 小米",
    "uri": "/tags/%E5%B0%8F%E7%B1%B3/index.html"
  },
  {
    "breadcrumb": "标签",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签 :: 远程控制",
    "uri": "/tags/%E8%BF%9C%E7%A8%8B%E6%8E%A7%E5%88%B6/index.html"
  }
]
