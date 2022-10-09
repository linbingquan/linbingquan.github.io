# 翻转二叉树

```js
const invertTree = (root) => {
  if (root === null) return null;
  // 递归翻转左边，其实就是从最外层叶子节点开始翻转。形成左边子树。
  const left = invertTree(root.left);
  // 递归翻转右边，其实就是从最外层叶子节点开始翻转。形成右边子树。
  const right = invertTree(root.right);
  // 左右子树 交换
  root.left = right;
  root.right = left;
  return root;
};
```
