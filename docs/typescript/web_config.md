# TypeScript 配置

Web引用TypeScript相关配置

#### tsconfig.json
```json
{
  "compilerOptions": {
    "outDir": "./dist", // 编译目录
    "target": "es5" // 编译结果
  },
  "include": ["./src/**/*"] // 源代码
}
```

#### package.json
```json
  // npm install -D ts-loader typescript webpack webpack-cli
  "devDependencies": { // 开发依赖包
    "ts-loader": "^5.3.3",
    "typescript": "^3.3.1",
    "webpack": "^4.29.0",
    "webpack-cli": "^3.2.1"
  }
```

#### webpack.config.js
```js
const path = require("path");

module.exports = {
  entry: "./src/index.ts", // 编译入口
  output: {
    path: path.resolve(__dirname, "dist"), // 编译输出
    filename: "bundle.js" // 打包文件名
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }] // 加载TS文件
  },
  resolve: {
    extensions: [".ts"] // 查找TS文件
  },
};
```
