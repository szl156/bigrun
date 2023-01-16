import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "演示", icon: "discover", link: "/demo/" },
  {
    text: "代码笔记",
    icon: "edit",
    prefix: "/code/",
    children: [
      {
        text: "前端基础",
        icon: "edit",
        prefix: "HTML/",
        children: [
          { text: "基本知识", icon: "edit", link: "基本知识" },
          { text: "常用HTML元素", icon: "edit", link: "常用HTML元素" },
          { text: "常用CSS", icon: "edit", link: "常用CSS" },
        ],
      },
      {
        text: "uni-app",
        icon: "edit",
        prefix: "uni-app/",
        children: [
          { text: "基础", icon: "edit", link: "uniapp" },
        ],
      },
    ],
  },
  { text: "计算机", icon: "discover", link: "/computer/" }
]);
