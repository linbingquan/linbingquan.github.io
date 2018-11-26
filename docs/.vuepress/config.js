module.exports = {
  title: '林炳权的小博', // 设置网站标题
  description: '林炳权的小博', // 设置网站描述
  base: '/',
  themeConfig: {
    sidebar: [
      {
        title: '',
        collapsable: false,
        children: [
          // '/',
          ['/StandardCSS', '前端规范CSS'],
          ['/unity3d', 'Unity3D教程'],
        ]
      },
    ]
  },
}