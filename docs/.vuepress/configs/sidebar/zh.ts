import type { SidebarConfig } from 'vuepress'

export const sidebarZh: SidebarConfig = {
  '/coding/': [
    {
      text: 'Java系列',
      children: [
        '/coding/java/base.md',
        '/coding/java/reflect.md',
        '/coding/java/jvm.md',
        '/coding/java/design-pattern.md',
        '/coding/java/servlet.md'
      ],
    },
  ],
  '/book/': [
    {
      text: '技术类书籍',
      collapsible: false,
      children:[
          '/book/tech/effective-java.md'
      ]
    },
    {
      text: '管理类书籍',
      collapsible: false,
      children:[
          '/book/manager/45-agile.md'
      ]
    },
    {
      text: '人文教育',
      collapsible: false,
      children:[
          '/book/arts/questions.md'
      ]
    }
  ],
  '/life/':[
    {
      text: '生活日记',
      children: [
        '/life/clock.md',
        '/life/summary.md'
      ]
    }
  ]
}
