# WebGL 所见即所得

使用 blender 设计并导出模型到 three.js

## blender v4.2.0 three.js r168

![blender420-threejs168](blender420-threejs168.png)

## blender v3.3.1 three.js r146

![blender-threejs](blender331-threejs146.png)

> 关键代码

```js
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.physicallyCorrectLights = true;
renderer.toneMapping = THREE.LinearToneMapping;
renderer.toneMappingExposure = 0.1;
```

#### 链接

[blender](https://www.blender.org/)

[three.js](https://threejs.org)
