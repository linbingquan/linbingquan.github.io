export default {
  title: "林炳权的博客",
  description: "林炳权,linbingquan,博客,林炳权的博客",
  themeConfig: {
    sidebar: [
      {
        text: "介绍",
        collapsed: false,
        items: [
          { text: "林炳权", link: "/resume/linbingquan" },
        ],
      },
      {
        text: "Rust",
        collapsed: false,
        items: [
          { text: "Rust 入门", link: "/rust/basic" },
        ],
      },
      {
        text: "JavaScript",
        collapsed: false,
        items: [
          { text: "数据类型", link: "/javascript/data-types" },
          { text: "原型链", link: "/javascript/prototype" },
          { text: "前端节流防抖", link: "/javascript/throttle-debounce" },
          { text: "前端正则验证", link: "/javascript/regexp" },
        ],
      },
      {
        text: "WebGL",
        collapsed: false,
        items: [
          { text: "WebGL 入门", link: "/webgl/tutorial" },
          { text: "WebGL 所见即所得", link: "/webgl/blender-threejs" },
        ]
      },
      {
        text: "CSS",
        collapsed: false,
        items: [
          { text: "前端适配", link: "/css/adaptation" },
        ],
      },
      {
        text: "算法 (algorithm)",
        collapsed: false,
        items: [
          { text: "交换数据", link: "/algorithm/swap" },
          { text: "随机算法", link: "/algorithm/shuffle" },
          { text: "并发请求", link: "/algorithm/concurrent" },
          { text: "路径总和", link: "/algorithm/path-sum" },
          { text: "二分搜索", link: "/algorithm/binary-search" },
          { text: "字符串反转", link: "/algorithm/string-reverse" },
          { text: "爬楼梯", link: "/algorithm/climb-stairs" },
          { text: "翻转二叉树", link: "/algorithm/invert-tree" },
          { text: "进制转换", link: "/algorithm/number-conver" },
        ],
      },
      {
        text: "设计",
        collapsed: false,
        items: [
          { text: "blender 一键切换中英文界面", link: "/blender/translate" },
          { text: "配色方案", link: "/design/colors" },
          { text: "线条画", link: "/design/line-art" },
        ]
      },
      {
        text: "面试题目",
        collapsed: false,
        items: [
          { text: "promise", link: "/interview/promise" },
        ],
      },
      {
        text: "前端规范",
        collapsed: false,
        items: [
          { text: "前端规范 javascript", link: "/standard/javascript" },
          { text: "前端规范 css", link: "/standard/css" },
        ],
      },
    ],
  },
};
