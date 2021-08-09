// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '目录',
    link: '/index', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      { text: '前端',link: '/ui/'},
      { text: '后端',link: '/database/'},
      { text: '网络',link: '/web/'},
      { text: '数媒', link: '/media/' },
      { text: '其它学习', link: '/study/' },
      { text: '其它', link: '/other/' },
      { text: '作者的文章', link: '/more/' },
    ],
  },
  { text: '关于', link: '/about/' },
  { text: '友链', link: '/friends/' },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
