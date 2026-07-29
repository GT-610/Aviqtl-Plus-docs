import { defineConfig, type DefaultTheme } from 'vitepress'

const repository = 'https://github.com/GT-610/Aviqtl-Plus-docs'

const englishUserSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Start here',
    collapsed: false,
    items: [
      { text: 'Welcome', link: '/guide/' },
      { text: 'Install AviQtl-Plus', link: '/guide/installation' },
      { text: 'Make your first video', link: '/guide/first-video' }
    ]
  },
  {
    text: 'User guide',
    collapsed: false,
    items: [
      { text: 'Interface overview', link: '/guide/interface' },
      { text: 'Projects and media', link: '/guide/projects-media' },
      { text: 'Timeline editing', link: '/guide/timeline' },
      { text: 'Effects and animation', link: '/guide/effects-animation' },
      { text: 'Exporting', link: '/guide/exporting' }
    ]
  },
  {
    text: 'Help and reference',
    collapsed: true,
    items: [
      { text: 'Troubleshooting', link: '/guide/troubleshooting' },
      { text: 'Glossary', link: '/reference/glossary' }
    ]
  }
]

const englishDeveloperSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Developer documentation',
    collapsed: false,
    items: [
      { text: 'Developer overview', link: '/developer/' },
      { text: 'Build from source', link: '/developer/building' },
      { text: 'Effects and objects', link: '/developer/effects' },
      { text: 'Plugin development', link: '/developer/plugins' }
    ]
  },
  {
    text: 'Contributing',
    collapsed: false,
    items: [
      { text: 'Documentation guide', link: '/contributing/documentation' }
    ]
  },
  {
    text: 'User documentation',
    collapsed: true,
    items: [
      { text: 'User guide', link: '/guide/' },
      { text: 'Make your first video', link: '/guide/first-video' }
    ]
  }
]

const englishSidebar: DefaultTheme.Sidebar = {
  '/guide/': englishUserSidebar,
  '/reference/': englishUserSidebar,
  '/developer/': englishDeveloperSidebar,
  '/contributing/': englishDeveloperSidebar
}

const chineseUserSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '从这里开始',
    collapsed: false,
    items: [
      { text: '欢迎', link: '/zh-CN/guide/' },
      { text: '安装 AviQtl-Plus', link: '/zh-CN/guide/installation' },
      { text: '制作第一个视频', link: '/zh-CN/guide/first-video' }
    ]
  },
  {
    text: '用户手册',
    collapsed: false,
    items: [
      { text: '界面概览', link: '/zh-CN/guide/interface' },
      { text: '项目与媒体', link: '/zh-CN/guide/projects-media' },
      { text: '时间线编辑', link: '/zh-CN/guide/timeline' },
      { text: '效果与动画', link: '/zh-CN/guide/effects-animation' },
      { text: '导出', link: '/zh-CN/guide/exporting' }
    ]
  },
  {
    text: '帮助与参考',
    collapsed: true,
    items: [
      { text: '故障排除', link: '/zh-CN/guide/troubleshooting' },
      { text: '术语表', link: '/zh-CN/reference/glossary' }
    ]
  }
]

const chineseDeveloperSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '开发者文档',
    collapsed: false,
    items: [
      { text: '开发者概览', link: '/zh-CN/developer/' },
      { text: '从源码构建', link: '/zh-CN/developer/building' },
      { text: '效果与对象', link: '/zh-CN/developer/effects' },
      { text: '插件开发', link: '/zh-CN/developer/plugins' }
    ]
  },
  {
    text: '参与贡献',
    collapsed: false,
    items: [
      { text: '文档贡献指南', link: '/zh-CN/contributing/documentation' }
    ]
  },
  {
    text: '用户文档',
    collapsed: true,
    items: [
      { text: '用户手册', link: '/zh-CN/guide/' },
      { text: '制作第一个视频', link: '/zh-CN/guide/first-video' }
    ]
  }
]

const chineseSidebar: DefaultTheme.Sidebar = {
  '/zh-CN/guide/': chineseUserSidebar,
  '/zh-CN/reference/': chineseUserSidebar,
  '/zh-CN/developer/': chineseDeveloperSidebar,
  '/zh-CN/contributing/': chineseDeveloperSidebar
}

export default defineConfig({
  title: 'AviQtl-Plus Documentation',
  description: 'User and developer documentation for AviQtl-Plus',
  cleanUrls: true,
  lastUpdated: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'AviQtl-Plus Documentation',
      description: 'Learn video editing with AviQtl-Plus or contribute to its development.'
    },
    zhCN: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/',
      title: 'AviQtl-Plus 文档',
      description: '学习使用 AviQtl-Plus 制作视频，或参与项目开发。',
      markdown: {
        container: {
          tipLabel: '提示',
          warningLabel: '警告',
          dangerLabel: '危险',
          infoLabel: '信息',
          detailsLabel: '详细信息'
        },
        codeCopyButton: {
          tooltipText: '复制代码',
          copiedText: '已复制'
        }
      }
    }
  },
  themeConfig: {
    siteTitle: 'AviQtl-Plus',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GT-610/AviQtl-Plus' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          zhCN: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有找到相关结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '回车',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          }
        }
      }
    },
    locales: {
      root: {
        nav: [
          { text: 'User guide', link: '/guide/' },
          { text: 'Developer', link: '/developer/' },
          { text: 'Contribute', link: '/contributing/documentation' }
        ],
        sidebar: englishSidebar,
        outlineTitle: 'On this page',
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        lastUpdated: {
          text: 'Last updated'
        },
        editLink: {
          pattern: `${repository}/edit/main/:path`,
          text: 'Edit this page on GitHub'
        }
      },
      zhCN: {
        nav: [
          { text: '用户手册', link: '/zh-CN/guide/' },
          { text: '开发者', link: '/zh-CN/developer/' },
          { text: '参与贡献', link: '/zh-CN/contributing/documentation' }
        ],
        sidebar: chineseSidebar,
        outlineTitle: '本页目录',
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        lastUpdated: {
          text: '最后更新'
        },
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色主题',
        darkModeSwitchTitle: '切换到深色主题',
        editLink: {
          pattern: `${repository}/edit/main/:path`,
          text: '在 GitHub 上编辑此页'
        }
      }
    }
  }
})
