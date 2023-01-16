import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "前端开发",
      link: '/code/'
    },
    {
      text: '计算机',
      link: "/computer"
    },
    "intro",
    "slides",
  ],
});
