const moment = require('moment');
module.exports = {
    title: 'FE学习积累记录文档',
    description: 'FE学习积累记录文档',
    serviceWorker: true, // 是否开启 PWA
    base: '/js-docs/', // 部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块是否显示行号
    },
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    theme: 'reco',
    themeConfig: {
        lastUpdated: '上次更新', // string | boolean
        subSidebar: 'auto',
        nav:[ // 导航栏配置
            { text: '首页', link: '/' },  
            { text: '前端基础', link: '/accumulate/one' },
            { text: '写作练习', link: '/writing-practice/' },
            { text: '阅读笔记', link: '/reading-notes/' },
        ],
        sidebar: [
            {
                title: '学习',
                path: '/',
            },
            {
                title: '前端积累',
                path: '/accumulate/one',
                collapsable: true, // 折叠
                children: [
                    { title: "文件大小单位转换", path: "/accumulate/one" },
                ],
            },
            {
                title: '写作练习',
                path: '/writing-practice/',
                collapsable: true, // 折叠
                children: [
                    { title: "介绍", path: "/writing-practice/" },
                    { title: "练习一", path: "/writing-practice/one" },
                ],
            },
            {
                title: '阅读笔记',
                path: '/reading-notes/',
                collapsable: true, // 折叠
                children: [
                    { title: "介绍", path: "/reading-notes/" },
                    { title: "正面管教", path: "/reading-notes/one" },
                ],
            }
        ],
    },
    plugins: [
        [
          '@vuepress/last-updated',
          {
            transformer: (timestamp, lang) => {
              // 不要忘了安装 moment
              const moment = require('moment')
              moment.locale(lang)
              return moment(timestamp).fromNow()
            }
          }
        ],
        // [
        //     'cursor-effects',
        //     {
        //         size: 2, // size of the particle, default: 2
        //         shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
        //         zIndex: 999999999, // z-index property of the canvas, default: 999999999
        //     }
        // ]
    ]
};