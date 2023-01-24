// @ts-ignore
import process from 'node:process'
import { head, navbarZh, sidebarZh } from './configs'
import { searchPlugin } from '@vuepress/plugin-search'
import { defineUserConfig, defaultTheme } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { commentPlugin } from "vuepress-plugin-comment2";


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
    colorMode: 'auto',
    logo: '/images/hero.png',
    repo: 'wumindc/blogs',
    docsDir: 'docs',
    repoLabel: 'GitHub',
    editLink: true,
    lastUpdated: true,
    sidebarDepth: 2,
    locales: {
      '/': {
        navbar: navbarZh,
        sidebar: sidebarZh,
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
      git: !isProd,
      prismjs: !isProd,
      activeHeaderLinks: true,
      backToTop: true,
      container: {
        tip: true,
        warning: true,
        danger: true,
        details: true,
        codeGroup: true,
        codeGroupItem: true,
      },
      externalLinkIcon: true,
      mediumZoom: true,
      nprogress: true,
    }
  }),
  plugins:[
    // docsearchPlugin({
    //   apiKey:'666',
    //   indexName:'666',
    //   appId:'',
    //   searchParameters:'',
    //   placeholder:'搜索',
    // }),
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      }
    }),
    copyCodePlugin({
      pure:false,
      duration:1000
    }),
    commentPlugin({
      provider: 'Giscus',
      comment: true,
      repo: 'wumindc/blogs',
      repoId:'R_kgDOHH6OUw',
      category:'Announcements',
      categoryId:'DIC_kwDOHH6OU84CTxJJ',
      mapping: 'pathname',
      strict: true,
      lazyLoading: true,
      reactionsEnabled: true,
      inputPosition:'top',
    }),
  ]
})
