// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import { satteri } from '@astrojs/markdown-satteri';

import baseLinksPlugin from './src/lib/rehype-base-links.mjs';

const base = '/ai-operators-handbook';

export default defineConfig({
  site: 'https://theomajorcons.github.io',
  base,
  // Floating dev-only toolbar overlapped lesson content; off. (Production builds
  // never ship it regardless — this just removes it in `astro dev` too.)
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
  integrations: [mdx()],
  // Rewrite root-relative internal MD/MDX links (/lessons, /artifacts) to include
  // `base` at build time, so they resolve under the GitHub Pages subpath.
  // Sätteri is the Markdown processor; its hast plugins run on both MD and MDX.
  markdown: { processor: satteri({ hastPlugins: [baseLinksPlugin({ base })] }) },
});