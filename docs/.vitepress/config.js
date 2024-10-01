module.exports = {
  lang: "en-UK",
  title: "AirGrid Docs",
  description: "AirGrid platform documentation site.",
  head: [["link", { rel: "icon", type: "image/png", href: "/favicon.png" }]],
  cleanUrls: true,
  appearance: false,

  themeConfig: {
    logo: "/logo.png",
    search: {
      provider: "local",
    },
    siteTitle: false,
    sidebar: [
      {
        text: "General",
        collapsed: false,
        items: [
          { text: "Introduction", link: "/" },
          { text: "Platform Privacy", link: "/privacy" },
          { text: "Case studies", link: "/case-studies" },
        ],
      },
      {
        text: "Advertisers",
        collapsed: false,
        items: [
          {
            text: "Privacy Sandbox",
            collapsed: false,
            items: [
              { text: "Introduction", link: "/advertisers/sandbox/" },
              { text: "Setup", link: "/advertisers/sandbox/setup" },
              { text: "Pixels", link: "/advertisers/sandbox/pixels" },
              { text: "FAQ", link: "/advertisers/sandbox/faq" },
            ],
          },
        ],
      },
      {
        text: "Publishers",
        collapsed: false,
        items: [
          { text: "Integration", link: "/publishers/integration" },
          { text: "Performance", link: "/publishers/performance" },
          { text: "FAQ", link: "/publishers/faq" },
        ],
      },
      {
        text: "Labs",
        collapsed: false,
        items: [
          { text: "WTF is Labs?", link: "/labs/" },
          { text: "Synthetic panel", link: "/labs/synthetic-panel" },
        ],
      },
    ],
  },
};
