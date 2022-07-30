import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

const mdx_options = {
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdx(mdx_options)],
});
