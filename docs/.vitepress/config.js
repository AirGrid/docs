module.exports = {
  lang: "en-UK",
  title: "AirGrid Docs",
  description: "AirGrid developer documentation site.",
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
        text: "Introduction",
        link: "/",
        items: [
          { text: "Privacy", link: "/privacy" },
          { text: "Case studies", link: "/case-studies" }
      ],
      },
      {
        text: "Advertisers",
        link: "/advertisers/",
        items: [{ text: "Sandbox", link: "/advertisers/sandbox" }],
      },
      {
        text: "Publishers",
        link: "/publishers/",
        items: [
          { text: "Performance", link: "/publishers/performance" },
          { text: "FAQ", link: "/publishers/faq" }
        ],
      },
      {
        text: "Labs",
        link: "/labs/",
        items: [
          { text: "Synthetic panel", link: "/labs/synthetic-panel" },
        ],
      },
    ],
  },
};
