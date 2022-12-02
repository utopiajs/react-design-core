import { defineConfig } from 'dumi';

export default defineConfig({
  resolve: {
    atomDirs:[{
      type: 'component',
      dir: 'src/components'
    }]
  },
  outputPath: 'docs-dist',
  themeConfig: {
    name: '@utopia/react-design-core',
  },
});
