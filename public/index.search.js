var relearn_search_index = [
  {
    "breadcrumb": "安装维护",
    "content": "首先，感谢您选择由“HABox智能家居盒子”提供的Home assistant智能家居盒子，下面请与我一起进入这个神秘的小盒子一探究竟。\n等待欢迎界面 拿到盒子后，连上网线，插上电源，开机……启动并加载完成，大概要等待2分半种。然后在浏览器地址栏输入http://homeassistant.local:8123 79 进行访问，不出所料，您将看到如下欢迎界面。（你也可以在路由器后台查看具体ip地址，然后输入http://ip:8123 12进行访问）\n基本设置 创建用户 选择家的位置 这个地方如果搜索不到，您可以通过缩放地图，拖动地图中的位置图标到家所在的位置，然后是设置国家选项（如果是通过搜索找到的位置，就没有这个选项，系统自动设置了）\n信息收集 接下来是收集数据，建议不选，然后是自动发现家里的智能设备，直接点完成即可。\n正式进入后台 升级和修复 您可能会发现左侧配置选项边上有如上图所示的数字提示，点进去\n该升级升级，该修复修复\n结束语 到此，您基本上就可以根据自身情况进行设备的接入和控制了，请持续关注我们，我们将持续发布使用HomeAssistant盒子相关的使用说明！",
    "description": "首先，感谢您选择由“HABox智能家居盒子”提供的Home assistant智能家居盒子，下面请与我一起进入这个神秘的小盒子一探究竟。\n等待欢迎界面 拿到盒子后，连上网线，插上电源，开机……启动并加载完成，大概要等待2分半种。然后在浏览器地址栏输入http://homeassistant.local:8123 79 进行访问，不出所料，您将看到如下欢迎界面。（你也可以在路由器后台查看具体ip地址，然后输入http://ip:8123 12进行访问）\n基本设置 创建用户 选择家的位置 这个地方如果搜索不到，您可以通过缩放地图，拖动地图中的位置图标到家所在的位置，然后是设置国家选项（如果是通过搜索找到的位置，就没有这个选项，系统自动设置了）",
    "tags": [
      "Documentation"
    ],
    "title": " HA盒子使用说明书（开箱即用）",
    "uri": "/installation/instructions/index.html"
  },
  {
    "breadcrumb": "安装维护",
    "content": "由于我们选用的HA Box盒子是基于M401A,UNT403A,CM311-1A，都没有带无线模块，因此我们采购了一些USB无线网卡802.11n，该网卡可以在HA Box下使用。\n要配置无线网卡，你需要先连上网线，或者接上显示器和键盘。 如果是已连上有线网络，那么在浏览器打开http://homeassistant.local:7681/ （或者用ip访问，比如http://192.168.3.209:7681/ ，请使用你HA Box实际的ip地址替换192.168.3.209），打开后你将看到如下界面\n当然，如果你没有连有线网络，但是接连显示器和键盘，同样在显示器上你也将看到类似的界面。\n在ha\u003e提示符下输入“login”然后回车，进入root模式下。\n输入 “ip a”回车，你将会发现有如下的网卡信息，这就是刚插上的无线网卡了\nwlu2: \u003cNO-CARRIER,BROADCAST,MULTICAST,UP\u003e mtu 1500 qdisc noqueue state DOWN group default qlen 1000\n好啦，现在我们来设置无线网卡连接信息： 在#提示符下（root模式）输入： nmcli device wifi 然后回车，将看到能扫描到的wifi信号 连接wifi的命令如下：\nnmcli device wifi connect \"YOUR_SSID\" password \"YOUR_WIFI_PASSWORD\"当你看到返回下面的信息时，说明连接成功连。需要注意的是该网卡只支持2.4G频段的wifi信号，如果你家wifi没有支持2.4G频段的信号，将连接失败。\nroot@homeassistant:/ # nmcli device wifi connect “liying” password “8888800000”\nDevice ‘wlu2’ successfully activated with ‘6f2bf3bc-6682-4c84-bd5c-5403d25743c6’.\nroot@homeassistant:/ #\n当我们再用“ip a”命令查看的是很，发现无线网卡已经有了ip信息\nwlu2: \u003cBROADCAST,MULTICAST,UP,LOWER_UP\u003e mtu 1500 qdisc noqueue state UP group default qlen 1000 link/ether 00:e0:4d:2d:14:ca brd ff:ff:ff:ff:ff:ff inet 192.168.3.210/24 brd 192.168.3.255 scope global dynamic noprefixroute wlu2 valid_lft 86022sec preferred_lft 86022sec inet6 2409:8a00:78a6:8d94:c868:de7f:dc92:10/128 scope global dynamic noprefixroute valid_lft 6821sec preferred_lft 3221sec inet6 2409:8a00:78a6:8d94:a299:4c8b:50fc:8b38/64 scope global dynamic noprefixroute valid_lft 7179sec preferred_lft 3579sec inet6 fe80::dba2:e2ad:dd62:784/64 scope link noprefixroute valid_lft forever preferred_lft forever\n此时，我们就可以用wifi网卡对应的ip访问HA Box了\nhttp://192.168.3.210:8123/onboarding.html",
    "description": "由于我们选用的HA Box盒子是基于M401A,UNT403A,CM311-1A，都没有带无线模块，因此我们采购了一些USB无线网卡802.11n，该网卡可以在HA Box下使用。\n要配置无线网卡，你需要先连上网线，或者接上显示器和键盘。 如果是已连上有线网络，那么在浏览器打开http://homeassistant.local:7681/ （或者用ip访问，比如http://192.168.3.209:7681/ ，请使用你HA Box实际的ip地址替换192.168.3.209），打开后你将看到如下界面\n当然，如果你没有连有线网络，但是接连显示器和键盘，同样在显示器上你也将看到类似的界面。\n在ha\u003e提示符下输入“login”然后回车，进入root模式下。",
    "tags": [
      "Documentation"
    ],
    "title": " 给HA Box插上无线WIFI的翅膀",
    "uri": "/installation/wifi/index.html"
  },
  {
    "breadcrumb": "设备接入",
    "content": "HA Box使用说明书\n在HA Box 中安装HACS\n将米家设备接入HomeAssistant\n前提条件是我们已经安装了HACS,如果没有请参考上面的连接安装\n接下来，我们通过 HomeKit Bridge 将 Home Assistant 中设备桥接到 HomeKit。\n首先，我们要添加 HomeKit Bridge 集成。点击“配置”，进入“设备与服务”页面。在“集成”选项下，点右下角“添加集成” 然后输入“homekit” 或者\"apple\"\n点击“Apple”\n点击添加“HomeKit Bridge 集成”，按照指引完成添加。\n需要注意是的，如果你有温湿度传感器，点击“要添加的域”下拉选项，记得勾选“Sensor”，这个选项默认是不勾选的。\n添加 HomeKit Bridge 集成成功后，点击界面左下角的通知按钮。查看 homekit 的配对二维码。\n打开“家庭”应用，点击左上角的“+”号，选择“添加配件”。扫描上个步骤的得到的二维码，点击“添加到家庭”。在加入过程中，可能会提示“未认证设备”，点击“仍要添加”。然后完成剩余步骤，逐个添加设备。完成后，你就能能用Siri控制你的智能设备了。\n大功告成！",
    "description": "HA Box使用说明书\n在HA Box 中安装HACS\n将米家设备接入HomeAssistant\n前提条件是我们已经安装了HACS,如果没有请参考上面的连接安装\n接下来，我们通过 HomeKit Bridge 将 Home Assistant 中设备桥接到 HomeKit。",
    "tags": [
      "Documentation"
    ],
    "title": "HA Box桥接米家设备到HomeKit",
    "uri": "/access/homekit/index.html"
  },
  {
    "breadcrumb": "安装维护",
    "content": "一、HACS是什么 HACS 是一个全面的、社区驱动的插件管理系统 ，专为Google的开源 智能家居 平台 Home Assistant 设计。 通过HACS，你可以方便地发现、安装和管理与Home Assistant兼容的各种插件，包括自定义集成、面板、配置器和其他小部件。\n二、安装HACS 由于Homeassistant的安装五花八门，所以网上有很多教程看上去非常复杂，但是在HA Box中安装HACS非常简单，下面我们一起来看看怎么安装。\n配置 - 设备与服务 ，在集成选项卡右下角点添加集成按钮\n在弹出窗口搜索HACS，你将看到HACS已经在列表里，然后点击它（整行随便点就行，右边的几个图标只是告诉你HACS的一些功能）\n全勾选上，然后提交\n接下来是打开链接，进到github.com有个授权的动作\n不出以外的话，你将看到这个页面，复制刚才弹窗给你的验证码，直接鼠标全选上复制过去直接粘贴，然后点 Continue 继续\n有时候会因为种种原因出现下面这个弹窗，直接关闭从头再来，我们接着往下走\n出现下面这个页面说明你刚才的验证码没输错，可以点击Authorize hacs授权了\nOK,到这里说明已经配置成功了，可以关闭这个页面了。\n返回到Homeassistant,HACS已经配置成功，并自动发现了家里的一些设备，可以对区域进行配置，告诉HACS这个设备是在客厅还是在卧室或者别的房间。当然你也可以直接点关闭或完成。\n看，左侧已经出现HACS的连接，集成里面已配置列表已经有HACS了。\n此时你可能需要重启一下HA Box缓解一下激动的心情了",
    "description": "一、HACS是什么 HACS 是一个全面的、社区驱动的插件管理系统 ，专为Google的开源 智能家居 平台 Home Assistant 设计。 通过HACS，你可以方便地发现、安装和管理与Home Assistant兼容的各种插件，包括自定义集成、面板、配置器和其他小部件。",
    "tags": [
      "Documentation"
    ],
    "title": "HACS安装激活",
    "uri": "/installation/hacs/index.html"
  },
  {
    "breadcrumb": "网络技术",
    "content": "前提，你已拥有可以用的梯子（节点），如果没有请参考：\n搭建免费科学上网节点\n加载项商店搜索\"加速\"，安装它（实际上就是v2raya,很好用的工具）\n安装完后，点启动，配置选项卡可以不用修改默认就行\n打开WEB UI，初次进入需要设置用户名密码，设置后请记好了。\n导入节点\n然后，选择，启动\n此时，应该就可以用了。开个窗口测试一下 http://homeassistant.local:7681/ 进入后输入login 回车 输入curl www.google.com回车\n是不是看到google页面返回的网页源码了？\n如果不行，请检查是不是节点或者订阅连接有问题\n关于 v2raya的其他配置，请自行bing。\n其他电脑想要科学上网，也可以修改网络配置，将网关设置为HA盒子的ip地址，也能通过HA盒子实现科学上网的梦想。",
    "description": "前提，你已拥有可以用的梯子（节点），如果没有请参考：\n搭建免费科学上网节点\n加载项商店搜索\"加速\"，安装它（实际上就是v2raya,很好用的工具）\n安装完后，点启动，配置选项卡可以不用修改默认就行\n打开WEB UI，初次进入需要设置用户名密码，设置后请记好了。\n导入节点\n然后，选择，启动\n此时，应该就可以用了。开个窗口测试一下 http://homeassistant.local:7681/ 进入后输入login 回车 输入curl www.",
    "tags": [
      "Documentation"
    ],
    "title": "Ha盒子配置科学上网",
    "uri": "/network/habox-over-greatwall/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Discover what this Hugo theme is all about and the core-concepts behind it.",
    "description": "Discover what this Hugo theme is all about and the core-concepts behind it.",
    "tags": [],
    "title": "安装维护",
    "uri": "/installation/index.html"
  },
  {
    "breadcrumb": "网络技术",
    "content": "准备物料 1)域名一个 推荐到namesilo.com注册域名，安全、支持支付宝支付、价格便宜，没有陷阱。\n注册6位及以上数字的xyz域名（比如456766.xyz），只要$0.99，续费$0.99，注册+续费它9年才$10不到，不用担心域名过期。这也是仅有的成本，简直不要太安逸了。\n2)准备好Cloudflare账号备用 打开https://www.cloudflare.com/zh-cn，通过一个电子邮件地址即可注册Cloudflare账号\n3)准备代码 https://github.com/zizifn/edgetunnel/blob/main/src/worker-vless.js\n备用地址 （如果你打开不github的话，可以试试从onedrive下载worker-vless.js文件）\n在Cloudflare添加网站 登陆Cloudflare，然后添加网站，就是将你刚注册的域名添加到这里\n然后选择免费的方案就行，如下图，然后继续\n此时我们先不添加DNS，先把域名解析服务器改到Cloudflare，点击左边栏 DNS，记下Cloudflare名称服务器地址，你看到的可能和我看到不一定一样，别弄错了。\n去域名注册平台后台https://www.namesilo.com/account_domains.php\n填入Cloudflare的名称服务器地址，然后提交（submit），名称服务器生效可能要等一段时间\n创建应用程序 回到Cloudflare，导航到Workers 和 Pages 创建应用程序\n名称可以随意，完了点击部署按钮，代码先不管它\nWorker部署成功\n替换脚本代码 点击编辑代码，将https://github.com/zizifn/edgetunnel/blob/main/src/worker-vless.js代码复制过来，贴到编辑器里面替换原来的内容\n修改两个地方：\n1，第7行的userID，随便找个UUID替换，点击这里获取一个 4，注意用version4，否则会报UUID不合法。\n2，第9行的proxyIP，可以找前辈们提供的，随便在下面的列表中找一个\ncdn-all.xn--b6gac.eu.org cdn.xn--b6gac.eu.org cdn-b100.xn--b6gac.eu.org edgetunnel.anycast.eu.org cdn.anycast.eu.orguserID不用改也行 ，userID记在小本本上以后要用\nproxyIP我测试了也可以不用改，空着就行\n保存并部署（按钮在屏幕右上角）\n绑定域名 自定义域前缀可以随意，根据自己需要填写然后点击“添加自定义域”，等一会儿生效后就可以用了。。。\n配置科学上网客户端 在浏览器地址栏输入你刚配置的自定义域+代码中配置的userID，得到相应的科学上网的配置参数\n比如：https://hi.cntv.chat/6efcf080-745f-42c0-a0e6-4b0f9a2f8f1c\n复制图上标记的内容，到科学上网工具中通过剪贴板导入或手动输入配置参数，注意协议是VLESS。我PC端用的V2rayA，安卓手机用的V2rayNG\n好了，本教程到此结束，快去享受免费、快速的、自由的网络去吧！\n若有不明白或遇到什么问题，请给我留言。",
    "description": "准备物料 1)域名一个 推荐到namesilo.com注册域名，安全、支持支付宝支付、价格便宜，没有陷阱。\n注册6位及以上数字的xyz域名（比如456766.xyz），只要$0.99，续费$0.99，注册+续费它9年才$10不到，不用担心域名过期。这也是仅有的成本，简直不要太安逸了。\n2)准备好Cloudflare账号备用 打开https://www.cloudflare.com/zh-cn，通过一个电子邮件地址即可注册Cloudflare账号\n3)准备代码 https://github.com/zizifn/edgetunnel/blob/main/src/worker-vless.js\n备用地址 （如果你打开不github的话，可以试试从onedrive下载worker-vless.js文件）",
    "tags": [
      "Documentation"
    ],
    "title": "搭建免费科学上网节点",
    "uri": "/network/free-vless-node/index.html"
  },
  {
    "breadcrumb": "设备接入",
    "content": "HA Box使用说明书\n在HA Box 中安装HACS\n前提条件是我们已经安装了HACS,如果没有请参考上面的连接安装\n1将米家设备接入HomeAssistant 1 安装 Xiaomi Miot Atuo 接下来，我们需要安装 “Xiaomi Miot Atuo” 集成以将米家设备接入HomeAssistant。\n进入 HACS 页面，清除筛选方式（默认只显示已下载的）\n然后在搜索框输入“xiaomi miot”，出来后点击它\n点击右下角DOWNLOAD进行下载\n安装完集成之后需要重启 HomeAssistant。 配置 → 系统 右上角有重启按钮\n2 配置 Xiaomi Miot Atuo 接下来，我们配置 Xiaomi Miot Atuo 将米家设备接入HomeAssistant。注意，配置 Xiaomi Miot Atuo 前需要重启 HomeAssistant。\n点击“设置”，选择“设备与服务” 切换到 “设备” 选项卡， 然后点击右下角 “添加设备” 然后输入“xiaomi”，然后选择\"Xiaomi Miot Auto\"\n选择“账号集成”，登录小米账号获取设备信息。\n按照配置指引完成剩余步骤， 这里可以根据自身情况默认选择排除模式还是包含模式 在设备列表中你想要接入 HomeAssistant 的设备。 排除模式就是将设备列表中没有勾选色设备接入到Homeassistant 包含模式就是将设备列表中已勾选的设备接入到Homeassistant\n接下来就是设置设备所在区域。这样就算是将米家智能设\u003e 备接入进来了。\n上面有一句话：如果想集成网关子设备，请直接选择子设备接入，只接入网关不会自动集成子设备。自己体会，至此就算接入完成了。\n回到概览，就可以看到我们刚才接入的设备了\n在配置 - 设备与服务中就能看到Xiaomi Miot Auto\n点进去就可以看到接入了多少个设备，多少个实体\n我们进入米家插座，就能看到很多信息，并且可以进行更丰富的控制和设置，更多高级的功能，期待你的发现和研究",
    "description": "HA Box使用说明书\n在HA Box 中安装HACS\n前提条件是我们已经安装了HACS,如果没有请参考上面的连接安装\n1将米家设备接入HomeAssistant 1 安装 Xiaomi Miot Atuo 接下来，我们需要安装 “Xiaomi Miot Atuo” 集成以将米家设备接入HomeAssistant。",
    "tags": [
      "Documentation"
    ],
    "title": "将米家设备接入HomeAssistant",
    "uri": "/access/mijia/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Discover what this Hugo theme is all about and the core-concepts behind it.",
    "description": "Discover what this Hugo theme is all about and the core-concepts behind it.",
    "tags": [],
    "title": "设备接入",
    "uri": "/access/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Discover what this Hugo theme is all about and the core-concepts behind it.",
    "description": "Discover what this Hugo theme is all about and the core-concepts behind it.",
    "tags": [],
    "title": "网络技术",
    "uri": "/network/index.html"
  },
  {
    "breadcrumb": "网络技术",
    "content": "出门在外，怎样通过网络控制家里的Homeassistant盒子，这是很多购买HA盒子的朋友关心的问题，那么请跟随我的脚步，来看看我们怎么实现！\n话不多说，直接开干！\n前提条件： 你在cloudflare已经注册了账户 你已经注册了域名并且已将DNS解析服务器修改为Cloudflare提供的服务器地址 你已经拥有哈HA 盒子 在homeassistant安装Cloudflared加载项 仓库地址：https://github.com/brenner-tobias/addon-cloudflared 进入加载项商店（配置-加载项-加载项商店），点右上角三个小点，然后点仓库\n输入 https://github.com/brenner-tobias/ha-addons 然后点添加\n添加不成功，这……，需要考虑换个时间再试，或者科学上网\n添加成功后，关闭对话框 重新进入加载项商店，搜索cloudflared，就能看到加载项Cloudflared，点它然后安装 安装好之后，进入配置选项卡，配置第一项就行，值为要使用的域名（该域名已添加到cloudflare），然后保存\n之后启动该加载项，在日志选项卡里面你将看到如下信息\n拷贝高亮所示的链接地址到浏览器地址栏，并访问。 嗯，点你你需要用来远程访问homeassistant的域名并授权\n接下来，还有一些事要做\n打开连接 https://one.dash.cloudflare.com/\n导航到左侧边栏 - Networks - Tunnels\n拉到Homeassistant这条记录的最右边，有三个小点，点进去，Configure\n也许你需要点右边三小点，Edit进行编辑\n最后你可以确认下dns是不是已经自动配置好了\n接下来在回到HA盒子，安装加载项File Editor（如果还没安装的话） 然后在/homeassistant/configuration.yaml中添加如下内容\nhttp: use_x_forwarded_for: true trusted_proxies: - 172.30.33.0/24 修改完后记得重启下盒子 然后就可以愉快的远程访问啦",
    "description": "出门在外，怎样通过网络控制家里的Homeassistant盒子，这是很多购买HA盒子的朋友关心的问题，那么请跟随我的脚步，来看看我们怎么实现！\n话不多说，直接开干！\n前提条件： 你在cloudflare已经注册了账户 你已经注册了域名并且已将DNS解析服务器修改为Cloudflare提供的服务器地址 你已经拥有哈HA 盒子 在homeassistant安装Cloudflared加载项 仓库地址：https://github.com/brenner-tobias/addon-cloudflared 进入加载项商店（配置-加载项-加载项商店），点右上角三个小点，然后点仓库",
    "tags": [
      "Documentation"
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
    "title": "标签 :: Documentation",
    "uri": "/tags/documentation/index.html"
  },
  {
    "breadcrumb": "",
    "content": "欢迎来到HaBox技术支持站",
    "description": "A theme for Hugo designed for documentation.",
    "tags": [],
    "title": "Hugo Relearn Theme",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "标签",
    "uri": "/tags/index.html"
  }
]
