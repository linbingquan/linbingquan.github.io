# throttle 函数与 debounce 函数的详解

> throttle 函数与 debounce 函数的区别就是 throttle 函数在触发后会马上执行，而 debounce 函数会在一定延迟后才执行。从触发开始到延迟结束，只执行函数一次。

```js
// 第一次触发时立即执行函数，每个delay时间间隔，最多只能执行函数一次
// 最常见的例子是在监听resize/scroll事件
function throttle(fn, delay) {
  let timer;
  return function() {
    let last = timer;
    let now = Data.now();
    if (!last) {
      timer = now;
      fn.apply(this, arguments);
      return;
    }
    if (last + delay > now) return;
    timer = now;
    fn.apply(this, arguments);
  };
}
```

```js
// 最常见的业务场景是监听onchange事件
function debounce(fn, delay = 0) {
  let timer;
  return function() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
      fn.apply(this, arguments);
    }, delay);
  };
}
```

[Baidu](https://baijiahao.baidu.com/s?id=1613466256736316214)
