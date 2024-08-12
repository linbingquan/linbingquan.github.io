# three.js 颜色渐变的曲线

```js
const curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-1, 1, 0),
  new THREE.Vector3(-1, -1, 0),
  new THREE.Vector3(1, -1, 0),
  new THREE.Vector3(1, 1, 0),
]);
const points = curve.getSpacedPoints();

const colors = [];
const color = new THREE.Color();
for (let i = 0; i <= points.length; i++) {
  colors.push(...color.setHSL(i / points.length, 1, 0.5).toArray());
}

const geometry = new THREE.BufferGeometry().setFromPoints(points);
geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
const material = new THREE.LineBasicMaterial({ vertexColors: true });
const mesh = new THREE.Line(geometry, material);
scene.add(mesh);
```