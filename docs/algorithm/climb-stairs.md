# 爬楼梯

思想是斐波那契数列 F(1) = 1, F(2) = 2, F(n) = F(n-1) + F(n-2)（n>2，n∈N*）

递归

```js
const climbStairs = (n) => n < 3 ? n : climbStairs(n - 1) + climbStairs(n - 2);
```

```js
const dp = {};
const climbStairs = (n) => {
  if (n <= 2) return n;
  if (dp[n]) return dp[n];
  const res = climbStairs(n - 1) + climbStairs(n - 2);
  dp[n] = res;
  return res;
};
```

递推

> 空间复杂度 O(N)

```js
const climbStairs = (n) => {
  if (n <= 2) return n;
  const res = [0, 1, 2];
  /* 从前往后遍历 */
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return res[n];
};
```

> 空间复杂度 O(1)

```js
const climbStairs = (n) => {
  if (n <= 2) return n;
  const arr = [1, 2, 0]; // 滚动数组
  for (let i = 3; i <= n; i++) {
    arr[2] = arr[1] + arr[0];
    arr[0] = arr[1];
    arr[1] = arr[2];
  }
  return arr[2];
};
```

```js
const climbStairs = (n) => {
  if (n <= 2) return n;
  let prepre = 1, pre = 2, res = 0; // 滚动数组
  for (let i = 3; i <= n; i++) {
    res = pre + prepre;
    prepre = pre;
    pre = res;
  }
  return res;
};
```

```js
// leetcode 版本
const climbStairs = (n) => {
  let p = 0, q = 0, r = 1; // 滚动数组
  for (let i = 1; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};
```

# 使用最小花费爬楼梯

> 空间复杂度 O(N)

```js
const minCostClimbingStairs = (cost) => {
  const n = cost.length;
  const dp = new Array(n + 1);
  dp[0] = dp[1] = 0;
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[n];
};
```

> 空间复杂度 O(1)

```js
const minCostClimbingStairs = (cost) => {
  const n = cost.length;
  let prev = 0, curr = 0;
  for (let i = 2; i <= n; i++) {
    let next = Math.min(curr + cost[i - 1], prev + cost[i - 2]);
    prev = curr;
    curr = next;
  }
  return curr;
};
```
