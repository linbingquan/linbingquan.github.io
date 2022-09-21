# 路径总和

leetcode-112：路径总和 I

leetcode-113：路径总和 II

leetcode-437：路径总和 III

## 路径总和 I

### 递归版本

```js
// 递归版本
function hasPathSum(node, sum) {
  if (!node) return false;
  // 如果是叶子结点，则看该结点值是否等于剩下的 sum
  if (node.left === null && node.right == null) {
    return sum === node.value;
  }
  // 每次遍历一个结点都要减去自己的值后重新递归
  const diff = sum - node.value;
  return hasPathSum(node.left, diff) || hasPathSum(node.right, diff);
}
```

#### 复杂度分析

时间复杂度：O(N)，其中 N 是树的节点数。对每个节点访问一次。

空间复杂度：O(H)，其中 H 是树的高度。空间复杂度主要取决于递归时栈空间的开销，最坏情况下，树呈现链状，空间复杂度为
O(N)。平均情况下树的高度与节点数的对数正相关，空间复杂度为 O(logN)。

### 迭代版本

```js
// 迭代版本，使用栈代替递归
function hasPathSum(root, sum) {
  if (!root) return false;
  const nodes = [root];
  const values = [root.value];
  while (0 < nodes.length) {
    const node = nodes.pop();
    const value = values.pop();
    if (node.left === null && node.right === null && sum === value) {
      return true;
    }
    if (node.left != null) {
      nodes.push(node.left);
      values.push(value + node.left.value);
    }
    if (node.right != null) {
      nodes.push(node.right);
      values.push(value + node.right.value);
    }
  }
  return false;
}
```

#### 复杂度分析

时间复杂度：O(N)，其中 N 是树的节点数。对每个节点访问一次。

空间复杂度：O(H)，其中 H
是树的高度。空间复杂度主要取决于队列的开销，队列中的元素个数不会超过树的节点数。栈的大小同样取决于二叉树的高度，但是对于栈的操作显然要比递归更加节省计算机资源。

## 路径总和 II

```js
function pathSum(root, sum) {
  const result = [];
  if (!root) return result;
  function helper(node, sum, paths) {
    if (node.left === null && node.right === null) {
      if (node.value === sum) {
        paths.push(node.value);
        result.push(paths.slice());
        return;
      }
      return;
    }
    paths.push(node.value);
    if (node.left) helper(node.left, sum - node.value, [...paths]);
    if (node.right) helper(node.right, sum - node.value, [...paths]);
  }
  helper(root, sum, []);
  return result;
}
```

如果每次递归都创建一个新的列表的话，会很浪费时间，所以我们对上面的代码加以改造，递归过程中，只需维护一个数组就可以。代码如下：

```js
function pathSum(root, sum) {
  const result = [];
  if (!root) return result;
  function helper(node, sum, paths, index) {
    const value = node.value;
    if (node.left === null && node.right === null) {
      if (value === sum) {
        paths[index] = value;
        result.push(paths.slice(0, index + 1));
        return;
      }
      return;
    }
    paths[index] = value;
    if (node.left) helper(node.left, sum - value, paths, index + 1);
    if (node.right) helper(node.right, sum - value, paths, index + 1);
  }
  helper(root, sum, [], 0);
  return result;
}
```

```js
// 迭代版本，使用栈代替递归
function pathSum(root, targetSum) {
  const result = [];
  if (!root) return result;
  const nodes = [root];
  const sums = [root.value];
  const levels = [0];
  const paths = [];
  while (0 < nodes.length) {
    const node = nodes.pop();
    const sum = sums.pop();
    const level = levels.pop();
    paths[level] = node.value;
    if (node.left === null && node.right === null && targetSum === sum) {
      result.push(paths.slice(0, level + 1));
    }
    if (node.left) {
      nodes.push(node.left);
      sums.push(sum + node.left.value);
      levels.push(level + 1);
    }
    if (node.right) {
      nodes.push(node.right);
      sums.push(sum + node.right.value);
      levels.push(level + 1);
    }
  }
  return result;
}
```

## 路径总和 III

```js
function pathSum(root, sum) {
  let result = 0;
  if (!root) return result;
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    result += helper(node, sum);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  function helper(node, sum) {
    const value = node.value;
    let result = 0;
    if (sum === value) result += 1;
    if (node.left) result += helper(node.left, sum - value);
    if (node.right) result += helper(node.right, sum - value);
    return result;
  }
  return result;
}
```

[二叉树路径和](https://zhuanlan.zhihu.com/p/112370893)
