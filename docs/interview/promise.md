# promise

## promise 执行顺序

```js
// 打印顺序依次是: 1、2、3、4、6、5
new Promise((resolve) => {
  console.log("1");
  resolve();
})
  .then((a) => {
    console.log("2");
    new Promise((resolve) => {
      console.log("3");
      resolve();
    })
      .then((c) => {
        console.log("4");
      })
      .then((d) => {
        console.log("6");
      });
  })
  .then((b) => {
    console.log("5");
  });
```

```js
// 打印顺序依次是: 1、2、3、4、5、6
new Promise((resolve) => {
  console.log("1");
  resolve();
})
  .then(() => {
    console.log("2");
    return new Promise((resolve) => {
      console.log("3");
      resolve();
    })
      .then(() => {
        console.log("4");
      })
      .then(() => {
        console.log("5");
      });
  })
  .then(() => {
    console.log("6");
  });
```

## 你不知道的 Promise.then

> NewPromiseResolveThenableJobTask 在时间顺序上插入了两个 你感受不到的微任务

```js
// 打印顺序依次是: 0 1 2 3 4 5 6
Promise.resolve()
  .then(() => {
    console.log(0);
    return Promise.resolve(); // 如果注释这一行，结果又会是什么呢
  })
  .then(() => {
    console.log(4);
  });

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });
```

## 大厂面试题

### 头条

```js
async function async1() {
  console.log("async1 start"); // 2
  await async2();
  console.log("async1 end"); // 6
}

async function async2() {
  console.log("async2"); // 3
}

console.log("script start"); // 1

setTimeout(function () {
  console.log("setTimeout"); // 8
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1"); // 4
  resolve();
}).then(function () {
  console.log("promise2"); // 7
});

console.log("script end"); // 5
```

### 字节

```js
async function async1() {
  console.log("async1 start"); // 2
  await async2();
  console.log("async1 end"); // 8
}

async function async2() {
  console.log("async2 start"); // 3
  return new Promise((resolve, reject) => {
    resolve();
    console.log("async2 promise"); // 4
  });
}

console.log("script start"); // 1

setTimeout(function () {
  console.log("setTimeout"); // 9
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1"); // 5
  resolve();
}).then(function () {
  console.log("promise2"); // 7
});

console.log("script end"); // 6
```
