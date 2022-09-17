export default {
  title: "林炳权的博客",
  description: "林炳权的博客",
  themeConfig: {
    sidebar: [
      {
        text: "介绍",
        collapsible: true,
        items: [
          { text: "个人简历", link: "/resume/linbingquan" },
        ],
      },
      {
        text: "javascript",
        collapsible: true,
        items: [
          { text: "前端防抖节流", link: "/javascript/throttle-debounce" },
          { text: "前端正则验证", link: "/javascript/regexp" },
        ],
      },
      {
        text: "css",
        collapsible: true,
        items: [
          { text: "前端适配", link: "/css/adaptation" },
        ],
      },
      {
        text: "算法 (algorithm)",
        collapsible: true,
        items: [
          { text: "交换数据", link: "/algorithm/swap" },
          { text: "随机算法", link: "/algorithm/shuffle" },
          { text: "并发请求", link: "/algorithm/concurrent" },
        ],
      },
      {
        text: "前端规范",
        collapsible: true,
        items: [
          { text: "前端规范 javascript", link: "/standard/javascript" },
          { text: "前端规范 css", link: "/standard/css" },
        ],
      },
    ],
  },
};
