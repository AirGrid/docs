module.exports = {
  lang: 'en-US',
  title: 'AirGrid Docs',
  description: 'AirGrid developer documentation site.',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  ],
  cleanUrls: true,
  appearance: false,

  // Theme Config
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    siteTitle: false,
    sidebar: [
      {
        text: 'Introduction',
        link: '/',
      },
      {
        text: 'Advertisers',
        link: '/advertisers/',
      },
      {
        text: 'Publishers',
        link: '/publishers/',
      },
    ]
  },
}
