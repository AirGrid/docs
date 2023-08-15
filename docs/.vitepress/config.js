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
      },
      {
        text: "Advertisers",
        link: "/advertisers/",
        items: [{ text: "Sandbox", link: "/advertisers/sandbox" }],
      },
      {
        text: "Publishers",
        link: "/publishers/",
        items: [{ text: "FAQ", link: "/publishers/faq" }],
      },
    ],
  },
};
