import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.prisma.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'prisma', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  scripts: [
    {
      src: 'https://kit.fontawesome.com/1772ab679c.js',
      crossOrigin: 'anonymous',
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: '/images/logo.svg',
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Prisma Logo',
        src: '/images/logo.svg',
      },
      items: [
        {
          to: '/getting-started',
          label: 'Get Started',
          position: 'left',
        },
        {
          to: '/orm',
          label: 'ORM',
          position: 'left',
        },
        {
          to: '/accelerate',
          label: 'Accelerate',
          position: 'left',
        },
        {
          to: '/pulse',
          label: 'Pulse',
          position: 'left',
        },
        {
          to: '/platform',
          label: 'Platform',
          position: 'left',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/prisma/docs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    algolia: {
      appId: 'MK4LNFW4EO',
      apiKey: 'd8ae0173fc0d9170b085840d0c95f389',
      indexName: 'docs-prod', // this is probably wrong but don't really know what to do about it right now
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            {
              label: 'Client',
              href: 'https://prisma.io/client',
            },
            {
              label: 'Migrate',
              href: 'https://prisma.io/migrate',
            },
            {
              label: 'Accelerate',
              href: 'https://prisma.io/accelerate',
            },
            {
              label: 'Pulse',
              href: 'https://prisma.io/pulse',
            },
            {
              label: 'Pricing',
              href: 'https://prisma.io/pricing',
            },
          ],
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'Docs',
              to: '/',
            },
            {
              label: 'Get Started',
              to: '/getting-started',
            },
            {
              label: 'Prisma Examples',
              href: 'https://github.com/prisma/prisma-examples',
            },
          ],
        },
        {
          title: 'Use Cases',
          items: [
            {
              label: 'Customer Stories',
              href: 'https://www.prisma.io/showcase',
            },
            {
              label: 'Enterprise',
              href: 'https://www.prisma.io/enterprise',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About',
              href: 'https://prisma.io/about',
            },
            {
              label: 'Blog',
              to: 'https://prisma.io/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Prisma Data, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
