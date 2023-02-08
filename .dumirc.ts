import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'core',
    github: 'https://github.com/utopiajs/react-design-core',
    owner: 'KuangPF | Copyright © 2022-present',
    sidebarGroupModePath: ['/components'],
    title: 'React Design Core',
    description: 'React 组件开发模板，开箱即用',
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
    ]
  },
  styles: ['/styles/reset.css']
});
