import { defineConfig } from '@rspress/core';
import { pluginPretextBreaker } from '@ylakhdar/rspress-plugin-pretext-breaker';

export default defineConfig({
  root: 'docs',
  base: '/rspress-plugin-pretext-breaker/',
  title: 'Pretext Breaker',
  description: 'Rspress plugin that turns your docs into a breakout game',
  icon: '',
  themeConfig: {
    sidebar: {
      '/': [
        { text: 'Introduction', link: '/index' },
        {
          text: 'Guide',
          items: [
            { text: 'Features', link: '/guide/features' },
            { text: 'Configuration', link: '/guide/configuration' },
          ],
        },
      ],
    },
  },
  plugins: [pluginPretextBreaker()],
});
