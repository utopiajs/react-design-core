import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'core',
    footer: '<div>Made with <span style="color: rgb(255, 255, 255);">❤</span> by <a target="_blank" rel="noopener noreferrer" href="https://github.com/utopiajs">Utopia</a></div>'
  },
  styles: ['/styles/reset.css']
});
