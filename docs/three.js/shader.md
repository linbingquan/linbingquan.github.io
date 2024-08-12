# three.js shader

## three.js shader 1

```js
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import Stats from "three/addons/libs/stats.module.js";

const params = {
  animate: true,
};

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
if (params.animate === true) renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);
const stats = new Stats();
document.body.appendChild(stats.dom);

const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(50, aspect);
camera.position.set(0, 0, 3);

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", render);

const scene = new THREE.Scene();

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vPosition;
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float uTime;
  void main() {
    float dist = length(fract(vUv * 5.0) - vec2(0.5));
    float radius = 0.5 * (sin(uTime + vUv.x + vUv.y) * 0.5 + 0.5);
    vec3 color = vec3(step(radius, dist));
    gl_FragColor = vec4(color, 1.0);
  }
`;

const geometry = new THREE.PlaneGeometry();
const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: { uTime: { value: 0 } },
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const gui = new GUI();
gui.add(params, "animate").onChange((value) => {
  renderer.setAnimationLoop(value === true ? animate : null);
});

let time = 0;

function animate() {
  time += 0.05;
  material.uniforms.uTime.value = time;
  stats.update();
  render();
}

function render() {
  renderer.render(scene, camera);
}

render();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
});
```

## three.js shader 2

```js
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import Stats from "three/addons/libs/stats.module.js";

const params = {
  animate: true,
};

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
if (params.animate === true) renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);
const stats = new Stats();
document.body.appendChild(stats.dom);

const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(50, aspect);
camera.position.set(0, 0, 3);

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", render);

const scene = new THREE.Scene();

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vPosition;
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float uTime;
  uniform vec3 uResolution;

  // https://iquilezles.org/articles/palettes/
  vec3 palette( float t ) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263,0.416,0.557);

    return a + b*cos( 6.28318*(c*t+d) );
  }

  // https://www.shadertoy.com/view/mtyGWy
  void main() {
    vec2 uv = (vUv * 2.0 - uResolution.xy) / uResolution.y;
    vec2 uv0 = uv;
    vec3 color = vec3(0.0);

    for (float i = 0.0; i < 4.0; i++) {
      uv = fract(uv * 1.5) - 0.5;
      float d = length(uv) * exp(-length(uv0));
      vec3 col = palette(length(uv0) + i*.4 + uTime*.4);
      d = sin(d*8. + uTime)/8.;
      d = abs(d);
      d = pow(0.01 / d, 1.2);
      color += col * d;
    }

    gl_FragColor = vec4(color, 1.0);
  }
`;

const geometry = new THREE.PlaneGeometry();
const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector3(1, 1, 1) }
  },
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const gui = new GUI();
gui.add(params, "animate").onChange((value) => {
  renderer.setAnimationLoop(value === true ? animate : null);
});

let time = 0;

function animate() {
  time += 0.05;
  material.uniforms.uTime.value = time;
  stats.update();
  render();
}

function render() {
  renderer.render(scene, camera);
}

render();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
});
```