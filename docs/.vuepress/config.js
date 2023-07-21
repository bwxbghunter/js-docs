const moment = require('moment');
module.exports = {
    title: 'FE技术文档',
    description: 'FE技术文档',
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 部署到github相关的配置
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
            {
                text: '首页',
                link: '/' 
            },  
        ],
        sidebar: [

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
        ]
      ]
};