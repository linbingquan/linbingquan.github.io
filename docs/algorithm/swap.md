# 交换数据

在不增加变量的情况下如何调换两个变量值

以下两个方法仅对数字有效

方法一

```js
let a = 3;
let b = 4;

a = a + b; // 7
b = a - b; // 3
a = a - b; // 4
```

方法二

```js
let a = 3;
let b = 4;

a = a ^ b; // 7
b = b ^ a; // 3
a = a ^ b; // 4
```

以下两个方法对数字和字符串都能生效的方法

方法三

```js
let a = "hello",
  b = "world";
a = [b, b = a][0];
```

方法四

```js
let a = "hello",
  b = "world";
[a, b] = [b, a]; // ES6的spread语法
```

数组交换数据

```js
function swap(arr, i, j) {
  if (i === j) return;
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}
```
