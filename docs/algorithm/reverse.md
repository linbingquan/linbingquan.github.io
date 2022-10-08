# 字符串反转

```js
// 字符串反转 如：ABC -> CBA
function reverse(str) {
  const arr = str.split("");
  let i = 0, j = arr.length - 1;
  while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
  }
  return arr.join("");
}
```
