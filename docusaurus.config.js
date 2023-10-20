// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation Movies',
  tagline: "Modélisation de la vie des établissements de l\'ESR",
  favicon: 'img/favicon.ico',

  // Set the production url of the site here
  url: 'https://movies-test.abes.fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/doc/',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      // Local Search plugin
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
          // language of your documentation, see next section
          language: "fr",

          // whether to index blog pages
          indexBlog: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} **/
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/doc/',
          // "Edit this page" link.
          // The final URL is computed by editUrl + relativeDocPath
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/abes-esr/movies-documentation/tree/develop/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Logo Movies',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Modélisation',
          },
          {to: '/tags', label: 'Accès thématiques', position: 'left'},
          {
            href: 'https://github.com/abes-esr/movies-docker',
            label: 'GitHub du projet',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Modélisation',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Notre organisation',
            items: [
              {
                label: 'Site internet',
                href: 'https://abes.fr',
              },
              {
                label: "GitHub de l'ABES",
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ABES. 
        L'Abes, une agence du Ministère de l'Enseignement supérieur et de la Recherche.`,
      },
      prism: {
        additionalLanguages: ['turtle', 'sparql'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
