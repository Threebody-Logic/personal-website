module.exports = {
  title: '罗辑的个人博客',
  description: '罗辑的计算机学习和开发实录',
  themeConfig: {
    nav: [
      {
        text: '学习路线',
        ariaLabel: 'Learning',
        items: [
          {
            text: '编程语言',
            items: [
              {
                text: 'C语言',
                link: '/language/c/'
              }
            ]
          },
        ],
      },
      {
        text: '项目实战',
        ariaLabel: 'Project',
        items: [
          {
            text: '敬请期待',
            link: '',
          },
        ],
      },
      {
        text: '产品开发',
        ariaLabel: 'Develop',
        items: [
          {
            text: '敬请期待',
            link: '',
          },
        ],
      },
      {
        text: '选择语言',
        ariaLabel: 'Language',
        items: [
          {text: '中文', link: '/ch/'},
          {text: 'English', link: '/en/'}
        ]
      },
      {text: 'GitHub', link: 'https:github.com/threebody-logic'}
    ],
    sidebar: 'auto',
  }
}
