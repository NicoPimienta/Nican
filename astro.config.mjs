import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  output: 'server',
  adapter: vercel(),
  integrations: [mdx(), tailwind({
    applyBaseStyles: false,
  }), compress()],
})
