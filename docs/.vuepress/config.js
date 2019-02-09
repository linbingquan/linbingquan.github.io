module.exports = {
  title: '林炳权的博客', // 设置网站标题
  description: '林炳权的博客', // 设置网站描述
  base: '/',
  plugins: [
    '@vuepress/blog',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/active-header-links',
    [ 
      '@vuepress/google-analytics',
      {
        'ga': 'UA-133197865-1' // UA-00000000-0
      }
    ],
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebar: [
      {
        title: '最新文章',
        collapsable: false,
        children: [
          // '/',
          ['/StandardJS', '前端规范JavaScript'],
          ['/typescript/web_config', 'TypeScript配置'],
          ['/unity3d/examples/unity3d_ball', 'Unity3D实例'],
          ['/regexp', '前端正则验证'],
          ['/StandardCSS', '前端规范CSS'],
          ['/media', '前端适配'],
          ['/unity3d', 'Unity3D教程'],
        ]
      },
      {
        title: 'Tools',
        collapsable: false,
        children: [
          ['/tools/shell', 'Shell 脚本'],
          ['/tools/debugcss', 'CSS Debug 技巧'],
          ['/tools/debugMobile', '手机调试工具'],
        ]
      },
    ]
  },
}