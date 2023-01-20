import type { NavbarConfig } from 'vuepress'

export const navbarZh: NavbarConfig = [
  {
    text: 'Java',
    children: [
      '/coding/java/base.md',
      '/coding/java/reflect.md',
      '/coding/java/jvm.md',
      '/coding/java/design-pattern.md'
    ]
  },
  {
    text: '读书笔记',
    children: [
      {
        text: '技术类',
        children: [
          '/book/tech/effective-java.md'
        ],
      },
      {
        text: '管理类',
        children: [
          '/book/manager/45-agile.md'
        ],
      },
      {
        text: '人文教育',
        children: [
          '/book/arts/questions.md'
        ]
      }
    ]
  },
  {
    text: '生活日记',
    children: [
      {
        text: '生活打卡',
        link: '/life/clock.md'
      },
      {
        text: '日常总结',
        link: '/life/summary.md'
      }
    ]
  }
]
