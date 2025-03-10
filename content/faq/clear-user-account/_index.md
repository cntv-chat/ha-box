+++
archetype = "article"
title = "清除Homeassistant Box 账户信息"
weight = 1

+++

### 想清除Homeassistant Box 账户信息怎么弄？

如果用户名和密码都忘记了，或者你就是想单纯的清除账户信息

1. 在浏览器访问[http://homeassistant.local:7681](http://homeassistant.local:7681/)（或者用ip访问，比如http://192.168.3.198:7681/），
2. 在ha提示符后输入login回车

[![image-20241220100347715](https://pic.456766.xyz/20250310084652887.png)](https://www.ha-box.xyz/faq/index.html#R-image-ab3aa1233cfcb5b2657c36dc01e2c545)

1. 在#提示符下执行，注意是大写字母C

```
ha-install -C
```

[![image-20241220095932222](https://pic.456766.xyz/typora/image-20241220095932222.png)](https://www.ha-box.xyz/faq/index.html#R-image-86706f0606029108217acf0ad7c77f09)

再回到[http://homeassistant.local:8123](http://homeassistant.local:8123/)登陆即可







