# 随机算法（洗牌算法）

> Fisher-Yates shuffle

```js
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    swap(array, i, random);
  }
  return array;
}
```

方法一

```js
function shuffle(array) {
  let length = array.length;
  let random = 0;
  while (0 != length) {
    random = Math.floor(Math.random() * length);
    length--;
    swap(array, i, random);
  }
  return array;
}
```

方法二

> 利用无符号右移位运算符向下取整方式，从效率上会稍微快一些

```js
function shuffle(array) {
  let length = array.length;
  let random = 0;
  while (0 != length) {
    random = (Math.random() * length--) >>> 0;
    swap(array, i, random);
  }
  return array;
}
```
