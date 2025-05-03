import { defineConfig } from "vitepress";

import navConfig from "../public/nav.config.json";

// 拍照姿势
import photoPoseNavConfig from "../views/拍照姿势/nav.json";
// 摄影技巧
import photographTechNavConfig from "../views/摄影技巧/nav.json";
// 视听创作
import audiovisualCreationNavConfig from "../views/视听创作/nav.json";

import viteCustomConfig from "./vitepress.config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ["link", { rel: "stylesheet", href: "/styles/index.css" }],
    ["link", { rel: "icon", href: "./favicon.ico" }],
  ],
  title: "Photograph Warehouse",
  description: "光语秘境",
  base: "/",
  themeConfig: {
    siteTitle: "Photograph Warehouse",
    logo: "/logo-img.svg",
    outlineTitle: "本页目录", // 设置页面大纲标题为中文
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present Void Wind",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      ...navConfig.nav,
      ...photoPoseNavConfig.nav,
      ...photographTechNavConfig.nav,
      ...audiovisualCreationNavConfig.nav,

    ],
    sidebar: {
      ...navConfig.sidebar,
      ...photoPoseNavConfig.sidebar,
      ...photographTechNavConfig.sidebar,
      ...audiovisualCreationNavConfig.sidebar,

    },
    socialLinks: [
      { icon: "github", link: "https://gitee.com/lianghaishun/photograph-warehouse" },
    ],
    search: {
      provider: "local",
    },
    // siteTitle: false,
  },
  lang: "zh-CN",
  vite: { ...viteCustomConfig },
  // locales: {
  //   "/": {
  //     label: "简体中文",
  //     lang: "zh-CN",
  //     title: "文档站点",
  //     description: "这是一个中文文档站点",
  //   },
  // },
});
