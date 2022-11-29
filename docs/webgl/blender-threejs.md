# WebGL 所见即所得

## 效果图

> blender v3.3.1 three.js r146

使用 blender 设计和导出模型到 three.js

![blender-threejs](blender-threejs.png)

## 关键代码

```js
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.physicallyCorrectLights = true;
renderer.toneMapping = THREE.LinearToneMapping;
renderer.toneMappingExposure = 0.1;
```

#### 链接

[blender](https://www.blender.org/)

[three.js](https://threejs.org)
