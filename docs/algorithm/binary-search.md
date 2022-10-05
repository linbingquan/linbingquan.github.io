# 二分搜索

> 又称折半查找 - 适用于已排好序的线性结构 - 时间复杂度O(logN)

```js
function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2); // 向下取整
    if (target === arr[mid]) {
      return mid;
    }
    if (target < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
```
