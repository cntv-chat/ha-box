+++
archetype = "article"
title = "Homeassistant重置密码"
weight = 1

+++

如果只是忘记密码，用户名没忘记

1. 在浏览器访问[http://homeassistant.local:7681](http://homeassistant.local:7681/)（或者用ip访问，比如http://192.168.3.198:7681/），
2. 在ha提示符后面执行

```
authentication reset --username "用户名" --password "新密码"
```

[![image-20241220095851655](https://pic.456766.xyz/typora/image-20241220095851655.png)](https://www.ha-box.xyz/faq/index.html#R-image-62e3c00209807f3325fac00d32021a28)

再回到[http://homeassistant.local:8123](http://homeassistant.local:8123/)登陆即可







