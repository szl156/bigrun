import { defineUserConfig } from "vuepress";
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "ღ润ღ",
      description: "vuepress-theme-hope 的博客演示",
    },
    "/en/": {
      /* lang: "en-US",
      title: "Tian",
      description: "A blog demo for vuepress-theme-hope", */
    },
  },

  theme,
  plugins: [
    // 搜索插件
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as string,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as string,
          formatter: "标签：$content",
        },
      ],
      locales: {
        "/": {
          placeholder: "搜索文档"
        }
      }
    }),
  ],
  shouldPrefetch: false,
});
