# 前端规范 javascript

> 代码千万行，注释第一行。命名不规范，同事两行泪。

js 的分号可以省掉吗？
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

### js 中`!`与`!!`的区别及用法

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

#### javascript 中 function 前面加 `(` `!` `+` `-` `~`的含义

自执行匿名函数

- 常见格式：(function(){ /* code */ })();
- 解释：包围函数(function(){ /* code */ })的第一对括号向脚本返回未命名的函数，随后一对空括号立即执行返回的未命名函数，括号内为匿名函数的参数。
- 作用：可以用它创建命名空间，只要把自己的所有代码都写在这个特殊的函数包装内，那么外部就不能访问，除非你允许（变量前加上window，这样该函数后变量就成为全局）。各JavaScript库的代码也基本上是这种组织形式。

总结一下，执行函数的作用主要为匿名和自动执行，代码在被解释时就已经在运行了。

写法总结：

```js
(function(){ /* code */ }());
!function(){ /* code */ }();
~function(){ /* code */ }();
-function(){ /* code */ }();
+function(){ /* code */ }();
```

匿名函数应用

```js
{a: 12, b:13}['a'] // Uncaught SyntaxError: Unexpected token :
{a: 12, b:13}.a // Uncaught SyntaxError: Unexpected token :

({a: 12, b:13}['a']) // 12
!!{a: 12, b:13}['a'] // true
!{a: 12, b:13}['a'] // false
~{a: 12, b:13}['a'] // -13
-{a: 12, b:13}['a'] // -12
+{a: 12, b:13}['a'] // 12
!function(){console.log(123)}() // 123 true
```

匿名函数应用 react 枚举渲染

```jsx
const APP: React.FunctionComponent<any> = () => {
  const [type, setStyle] = useState<string>("noData");
  const content = {
    networkError: <div>some error with your network</div>,
    noData: <div>have no data</div>,
    success: <div>have data</div>
  };
  return <div>{content[type]}</div>;
};
```