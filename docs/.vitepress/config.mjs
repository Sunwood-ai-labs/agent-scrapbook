import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Agent Scrapbook',
  description: 'Append-only agent progress reports as a public task tree.',
  base: '/agent-scrapbook/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Tasks', link: '/tasks/demo-build-thread' },
      { text: 'Guide', link: '/guide/workflow' }
    ],
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Workflow', link: '/guide/workflow' }
        ]
      },
      {
        text: 'Task Threads',
        items: [
          { text: 'Demo Build Thread', link: '/tasks/demo-build-thread' }
        ]
      },
      {
        text: 'Reports',
        items: [
          { text: '0001 Concept', link: '/reports/0001-concept' },
          { text: '0002 Scaffold', link: '/reports/0002-scaffold' },
          { text: '0003 Publish Gate', link: '/reports/0003-publish-gate' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sunwood-ai-labs/agent-scrapbook' }
    ],
    search: {
      provider: 'local'
    }
  }
})
