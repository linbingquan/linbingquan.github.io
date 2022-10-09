# 进制转换

> 给定10进制数，转换成[2~16]进制区间数

```js
const conver = (number, base = 2) => {
  let rem, res = "", digits = "0123456789ABCDEF", stack = [];
  while (number) {
    rem = number % base;
    stack.push(rem);
    number = Math.floor(number / base);
  }
  while (stack.length) {
    res += digits[stack.pop()].toString();
  }
  return res;
}
```

> 给定十进制数，转换成二十六进制数

```js
const conver = (number, base = 26) => {
  let rem, res = "", digits = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ", stack = [];
  while (number) {
    rem = number % base;
    stack.push(rem);
    number = Math.floor(number / base);
  }
  while (stack.length) {
    res += digits[stack.pop()].toString();
  }
  return res;
}
```
