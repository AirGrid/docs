module.exports = {
  title: 'AirGrid Docs',
  description: 'AirGrid developer documentation site.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],

  // Theme Config
  themeConfig: {
    logo: '/logo.png',
    sidebar: [
      '/',
      {
        title: 'Advertisers',
        path: '/advertisers/',
        collapsable: false, 
        sidebarDepth: 2,
      },
      {
        title: 'Publishers',
        path: '/publishers/',
        collapsable: false, 
        sidebarDepth: 2,
      },
    ]
  },

  // Plugins Config
  plugins: [
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'info',
        before: info => `<div class="info"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
  ],
}