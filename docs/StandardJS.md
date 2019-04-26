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

---

### js中`!`与`!!`的区别及用法

- ！可将变量转换成`boolean`类型，`null`、`undefined`和`空字符`串取反都为`false`，其余都为`true`
- ！！常常用来做类型判断，在第一步!（变量）之后再做逻辑取反运算

```js
// 在js中新生常常会写这样的代码:
if (a != null && typeof(a) != undefined && a != '' ) {
    // a有内容才执行的代码
}
// 实际上我们只需要写一个判断表达:
if (!!a) {
    // a有内容才执行的代码
}
```
