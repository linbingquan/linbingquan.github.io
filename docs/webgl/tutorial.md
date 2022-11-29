# WebGL 入门

## WebGL 容器（坐标系）

WebGL 坐标系的坐标原点在画布中心, 坐标系的 x 轴方向是朝右的, y 轴方向是朝上的

WebGL 使用的是正交右手坐标系，每个方向都有可使用的值区间，超出该矩形区间图像不会绘制
- x 轴最左边为 -1, 最右边为 1
- y 轴最下边为 -1, 最上边为 1
- z 轴朝向你的方向最大值为 1, 远离你的方向最大值为 -1

> 这些值与 canvas 的尺寸无关，无论 canvas 的长宽比是多少，WebGL 的区间值都是一致的

## WebGL 渲染线管

所谓的渲染管线，实际上就是渲染过程流水线，指的不是具体某一样东西，而是一个流程。因为渲染管线的流程中总是将上一步的结果作为下一步的输入，就像水管一样接起来，管线的名字也因此得来

### 渲染管线的简要流程

1. 顶点着色器（可编程）：首先通过顶点着色器，确定我们设置的顶点位置

2. 图元装配：`gl.drawArray` 方法会指定图元装配的方式（点、线、三角形），根据我们设定的装配方式将其组装成我们想要的基本图形

3. 光栅化：实际上就是一个将上一步装配好的图形用像素来表示的一个过程

4. 片元着色器（可编程）：光栅化完成后，每个像素的片元都会执行片元着色器中的程序，得到最后的颜色值

5. 测试与混合：这一阶段主要是 WebGL 内部进行了一些模版测试、深度测试，最后再与上一帧的数据进行混合。

> 顶点着色器和片元着色器是可编程的功能单元，拥有更大的自主性。光栅器、深度测试等是不可编程的功能单元

## WebGL 可绘制的基本图形

在 WebGL 的世界中，只有三种基本图形：点、线、三角形

```js
void gl.drawArrays(mode, first, count);
```

- `gl.POINTS`: 绘制一系列点
- `gl.LINES`: 绘制一系列单独线段。每两个点作为端点，线段之间不连接
- `gl.LINE_STRIP`: 绘制一个线条。绘制一系列线段，上一点连接下一点
- `gl.LINE_LOOP`: 绘制一个线圈。绘制一系列线段，上一点连接下一点，最后一点与第一点相连
- `gl.TRIANGLES`: 绘制一系列三角形。每三个点作为顶点
- `gl.TRIANGLE_STRIP`: 绘制一个三角带
- `gl.TRIANGLE_FAN`: 绘制一个三角扇

## 世界矩阵(Model)、视图矩阵(View)和投影矩阵(Projection)

- 世界矩阵就是确定一个统一的世界坐标，用于组织独立的物体形成一个完整的场景
- 视图矩阵就是我们能看到的那部分场景，由虚拟摄像机负责拍摄
- 投影矩阵就是三维物体的平面影射，把三维场景在一个二维的平面上显示

## WebGL 画点(point)

```ts
// 创建画布
const canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

// 获取webgl上下文对象
const gl = canvas.getContext("webgl2");

// 创建顶点着色器对象
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
// 创建片元着色器对象
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

// 顶点着色器的源码
const vertexShaderSource = /* glsl */ `
    void main() {
        // 声明顶点位置
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        // 声明绘制点的大小
        gl_PointSize = 10.0;
    }
`;
// 片元着色器的源码
const fragmentShaderSource = /* glsl */ `
    void main() {
        // 设置像素颜色为红色
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
`;

// 将源码分配给顶点和片元着色器代码
gl.shaderSource(vertexShader, vertexShaderSource);
gl.shaderSource(fragmentShader, fragmentShaderSource);

// 编译顶点和片元着色器程序
gl.compileShader(vertexShader);
gl.compileShader(fragmentShader);

// 创建着色器程序对象
const program = gl.createProgram();

// 将顶点和片元着色器挂载着色器程序上
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

// 链接着色器程序
gl.linkProgram(program);
// 使用创建好的着色器程序
gl.useProgram(program);

// 设置清空画布颜色为黑色
gl.clearColor(0.0, 0.0, 0.0, 1.0);
// 使用上一步设置的清空画布颜色清空画布
gl.clear(gl.COLOR_BUFFER_BIT);
// 绘制点
gl.drawArrays(gl.POINTS, 0, 1);
```

## WebGL 画三角形(triangle)

```ts
// 创建画布
const canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

// 获取webgl上下文对象
const gl = canvas.getContext("webgl2");

// 定义顶点数组
const vertices = new Float32Array([
    -0.6, 0.6, 0,
    0.6, 0.6, 0,
    0.0, -0.6, 0,
]);
// 创建顶点缓冲区
const vertexBuffer = gl.createBuffer();
// 绑定顶点缓冲区
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
// 设置顶点数组到顶点缓冲区
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

// 创建顶点着色器对象
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
// 创建片元着色器对象
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

// 顶点着色器的源码
const vertexShaderSource = /* glsl */ `
    attribute vec3 coordinates;
    void main() {
        // 声明顶点位置
        gl_Position = vec4(coordinates, 1.0);
        // 声明绘制点的大小
        gl_PointSize = 1.0;
    }
`;
// 片元着色器的源码
const fragmentShaderSource = /* glsl */ `
    void main() {
      // 设置像素颜色为红色
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
`;

// 将源码分配给顶点和片元着色器代码
gl.shaderSource(vertexShader, vertexShaderSource);
gl.shaderSource(fragmentShader, fragmentShaderSource);

// 编译顶点和片元着色器代码
gl.compileShader(vertexShader);
gl.compileShader(fragmentShader);

// 创建程序对象
const program = gl.createProgram();

// 将顶点和片元着色器挂载着色器程序上
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

// 链接着色器程序
gl.linkProgram(program);
// 使用创建好的着色器程序
gl.useProgram(program);

// 关联着色器程序到缓冲对象
const coord = gl.getAttribLocation(program, "coordinates");
gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(coord);

// 设置清空画布颜色为黑色
gl.clearColor(0.0, 0.0, 0.0, 1.0);
// 使用上一步设置的清空画布颜色清空画布
gl.clear(gl.COLOR_BUFFER_BIT);
// 绘制三角形
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

## 纹理 alpha 混合方式的原理(公式)

假设一种不透明东西的颜色是A，另一种透明的东西的颜色是B，那么透过B去看A，看上去的颜色C就是B和A的混合颜色，可以用这个式子来近似

设B物体的透明度为 alpha (取值为0-1，0为完全透明，1为完全不透明)

```
R(C) = alpha * R(B) + (1 - alpha) * R(A)
G(C) = alpha * G(B) + (1 - alpha) * G(A)
B(C) = alpha * B(B) + (1 - alpha) * B(A)
```

> R(x)、G(x)、B(x)分别指颜色x的RGB分量。看起来这个东西这么简单，可是用它实现的效果绝对不简单，应用alpha混合技术，可以实现出最眩目的火光、烟雾、阴影、动态光源等等一切你可以想象的出来的半透明效果

[MDN WebGL tutorial](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API/Tutorial)
