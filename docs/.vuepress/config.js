module.exports = {
  title: '林炳权的博客', // 设置网站标题
  description: '林炳权的博客', // 设置网站描述
  base: '/',
  themeConfig: {
    sidebar: [
      {
        title: '',
        collapsable: false,
        children: [
          // '/',
          ['/password', '密码验证'],
          ['/StandardCSS', '前端规范CSS'],
          ['/media', '前端适配'],
          ['/unity3d', 'Unity3D教程'],
        ]
      },
    ]
  },
}