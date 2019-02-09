# 前端规范JavaScript

JS的分号可以省掉吗？
```js
// 简单的代码运行会报错，由于自动分号插入机制导致
console.log("hello, fundebug")
[1, 2, 3].map(i=>console.log(i))

Uncaught TypeError: Cannot read property '3' of undefined
    at <anonymous>:2:1
```

速记方案: 以 `+` `-` `[` `(` `/` 开头的语句前面加上一个分号，如：
```js
;(a + b).toString()
```
[v2ex](https://www.v2ex.com/t/315055)
