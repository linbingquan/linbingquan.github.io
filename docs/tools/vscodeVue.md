```json
{
  // vue格式化
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  // 保存自动修复
  "eslint.autoFixOnSave": true,
  // jsx自动修复有问题，取消js的format
  "editor.formatOnSave": false,
  // Enable/disable default JavaScript formatter (For Prettier)
  "javascript.format.enable": false,
  "prettier.singleQuote": true,
  // 点击保存时，根据 eslint 规则自定修复，同时集成 prettier 到 eslint 中
  "prettier.eslintIntegration": true
}
```
