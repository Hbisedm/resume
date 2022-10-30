import { defineConfig } from "astro/config";

// import autolinkHeadings from "remark-autolink-headings";
import remarkHtml from "remark-html";
import remarkToc from "remark-toc";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: "resume", // 文件路径
  integrations: [vue(), tailwind()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "monokai",
    },
    remarkPlugins: [
      [remarkHtml, { closeEmptyElements: true }],
      remarkGfm,
      remarkToc,
    ],
    rehypePlugins: [remarkRehype],
  },
});
