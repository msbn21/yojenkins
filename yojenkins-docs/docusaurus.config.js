// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "yojenkins",
  tagline: "CLI tool to interact with Jenkins server",
  // favicon: "img/favicon.ico",
  favicon: "img/yojenkins_logo.png",

  // Set the production url of your site here
  url: "https://yojenkins.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "", // Usually your GitHub org/user name.
  projectName: "yojenkins", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/ismet55555/yojenkins/tree/main/yojenkins-docs/",
          routeBasePath: "/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/yojenkins_logo.png",
      navbar: {
        title: "yojenkins",
        logo: {
          alt: "yojenkins Logo",
          // src: "img/logo.svg",
          src: "img/yojenkins_logo.png",
        },
        items: [
          {
            // type: "docSidebar",
            // sidebarId: "tutorialSidebar",
            to: "/",
            position: "left",
            label: "Documentation",
          },
          {
            to: "/updates/release-notes",
            label: "Release Notes",
            position: "left",
          },
          {
            href: "https://github.com/ismet55555/yojenkins",
            label: "GitHub",
            position: "right",
          },
          {
            type: "dropdown",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/ismet-handzic-phd-b6b00033/",
              },
            ],
            label: "Community",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          src: "img/yojenkins_logo.png",
          alt: "yojenkins logo",
          href: "https://yojenkins.com",
          width: 130,
          height: 66,
        },
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                type: "doc",
                to: "/docs/intro",
              },
              {
                label: "Release Notes",
                type: "doc",
                to: "updates/release-notes",
              },
            ],
          },
          {
            title: "Community",
            items: [
              // {
              //   label: "Github",
              //   href: "https://github.com/ismet55555/yojenkins",
              // },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/ismet-handzic-phd-b6b00033/",
              },
              // {
              //   label: "Discord",
              //   href: "https://github.com/ismet55555/yojenkins",
              // },
              // {
              //   label: "Twitter",
              //   href: "https://github.com/ismet55555/yojenkins",
              // },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/ismet55555/yojenkins",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} yojenkins, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
