import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-antd/dist/defineThemeConfig';
export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: defineThemeConfig({
    name: 'core',
    github: 'https://github.com/utopiajs/react-design-core',
    footer: '@utopia.space | Copyright © 2022-present',
    sidebarGroupModePath: ['/components'],
    title: 'React Design Core',
    description: 'React 组件开发模板，开箱即用',
    lastUpdated: true,
    prefersColor: { default: 'auto', switch: false },
    actions: [
      {
        type: 'primary',
        text: '开始使用',
        link: '/guide'
      },
      {
        text: '组件',
        link: '/components/copy-right'
      }
    ],
    loading: {
      skeleton: ['/guide', '/components']
    },
    docVersions: {
      '0.0.2': ''
    }
  }),
  styles: ['/styles/reset.css']
});
