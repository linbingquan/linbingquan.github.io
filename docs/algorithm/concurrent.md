# 并发请求

```js
class Queue {
  runing = 0;
  poll = 10;
  queue = [];
  results = [];
  callback = (values) => {};
  constructor(array = [], poll = 10, callback = (values) => {}) {
    this.poll = poll;
    this.callback = callback;
    this.queue.push(...array);
    this.next();
  }
  next() {
    while (this.runing < this.poll && this.queue.length) {
      const task = this.queue.shift();
      this.runing++;
      task().then((res) => {
        this.results.push(res);
      }).finally(() => {
        this.runing--;
        this.next();
      });
    }
    if (this.runing === 0) this.callback(this.results);
  }
}

function concurrent(tasks = [], poll = 10) {
  return new Promise((resolve) => {
    new Queue(tasks, poll, resolve);
  });
}
```
