# React 生命周期(React life cycle)

```js
constructor(); // 初始化
componentWillMount(); // 初始化时只调用一次
render(); // 创建虚拟DOM
componentDidMount(); // 加载请求数据
componentWillReceiveProps(); // 常用于父子组件 子组件写这个方法函数
shouldComponentUpdate(nextProps, nextState); // 组件是否重新渲染
componentWillUnmount(); // 组件卸载时前调用 清楚事件监听和定时器
```

React 生命周期

![React 生命周期](../public/img/react_life_cycle.jpg "React 生命周期")
