# throttle 函数与 debounce 函数的详解

> throttle 最常见的例子是在监听 mousemove/resize/scroll 事件

```js
// 时间戳版本
function throttle(fn, wait = 1000) {
  let pre = 0;
  return function () {
    const now = Date.now();
    if (now - pre >= wait) {
      fn.apply(this, arguments);
      pre = now;
    }
  };
}

// 定时器版本
function throttle(fn, wait = 1000) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null;
      }, wait);
    }
  };
}
```

> debounce 最常见的业务场景是监听 change 事件

```js
function debounce(fn, wait = 1000) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
}
```
