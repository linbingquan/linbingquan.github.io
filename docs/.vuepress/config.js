module.exports = {
  title: '林炳权的小博', // 设置网站标题
  description: '林炳权的小博', // 设置网站描述
  base: '/',
  themeConfig: {
    sidebar: [
      {
        title: 'unity3d',
        collapsable: false,
        children: [
          '/',
          ['/unity3d', 'Unity3D教程'],
        ]
      },
    ]
  },
}