# WebGL 入门

## point

```ts
// 创建画布
const canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

// 获取webgl上下文对象
const gl = canvas.getContext('webgl2');

// 创建顶点着色器对象
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
// 创建片元着色器对象
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

// 顶点着色器的源码
const vertexShaderSource = /* glsl */`
    void main() {
        // 声明顶点位置
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        // 声明绘制点的大小
        gl_PointSize = 10.0;
    }
`;
// 片元着色器的源码
const fragmentShaderSource = /* glsl */`
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

## triangle

```ts
// 创建画布
const canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

// 获取webgl上下文对象
const gl = canvas.getContext('webgl2');

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
const vertexShaderSource = /* glsl */`
    attribute vec3 coordinates;
    void main() {
        // 声明顶点位置
        gl_Position = vec4(coordinates, 1.0);
        // 声明绘制点的大小
        gl_PointSize = 1.0;
    }
`;
// 片元着色器的源码
const fragmentShaderSource = /* glsl */`
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
const coord = gl.getAttribLocation(program, 'coordinates');
gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(coord);

// 设置清空画布颜色为黑色
gl.clearColor(0.0, 0.0, 0.0, 1.0);
// 使用上一步设置的清空画布颜色清空画布
gl.clear(gl.COLOR_BUFFER_BIT);
// 绘制三角形
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

[MDN WebGL tutorial](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API/Tutorial)