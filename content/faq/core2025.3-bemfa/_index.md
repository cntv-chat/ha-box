+++
archetype = "article"
title = "core 2025.3.0 bemfa 问题临时解决方案"
weight = 1

+++

Homeassistant core 2025.3.0 bemfa 无法加载配置向导问题的临时解决方案

临时解决方案：
\homeassistant\custom_components\bemfa文件夹下
manifest.json中的
"requirements": ["paho-mqtt==1.6.1"]
修改为
"requirements": ["paho-mqtt>=2.0.0"]

mqtt.py中
self._mqttc = mqtt.Client(uid, mqtt.MQTTv311)
修改为
self._mqttc = mqtt.Client(mqtt.CallbackAPIVersion.VERSION1, client_id=uid, protocol=mqtt.MQTTv311)

保存 重启HA 后生效



![image-20250309211728556](https://pic.456766.xyz/20250309211728592.png)





![image-20250309211319829](https://pic.456766.xyz/20250309211319866.png)
