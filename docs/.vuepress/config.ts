// @ts-ignore
import process from 'node:process'
import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'
import {
  head,
  navbarZh,
  sidebarZh,
} from './configs/index.js'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  base: '/',
  head,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '冒险者',
      description: '没有什么不可以',
    }
  },
  theme: defaultTheme({
    logo: '/images/hero.png',
    repo: 'wumindc/blogs',
    docsDir: 'docs',
    locales: {
      '/': {
        // navbar
        navbar: navbarZh,
        // sidebar
        sidebar: sidebarZh,
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      }
    },
    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      // use shiki plugin in production mode instead
      prismjs: !isProd,
    }
  })
})
