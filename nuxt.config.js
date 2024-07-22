import {resolve} from "path";
import {CityUrl, IcUrl, ProgramUrl} from "./urls";
const socBanner = "https://pampadu.ru/soc-banner.jpg"

export default {
  //https://nuxtjs.org/docs/configuration-glossary/configuration-alias
  alias: {
    images: resolve(__dirname, "./assets/images"),
    components: resolve(__dirname, "./components"),
    model: resolve(__dirname, "./model"),
    utils: resolve(__dirname, "./utils"),
    urls: resolve(__dirname, "./urls")
  },
  dev: process.env.NODE_ENV !== 'production',
  http: {
    headers: {
      'Cache-Control': 'public, max-age=5184000', // Настройка максимального срока хранения в секундах (2 месяца)
    },
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Pampadu",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      {charset: "utf-8"},
      {httpEquiv: "X-UA-Compatible", content: "IE=edge"},
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, minimal-ui",
      },
      {hid: "description", name: "description", content: ""},
      {name: "format-detection", content: "telephone=no"},
      {property: "vk:image", content: socBanner},
      {property: "og:locale", content: "ru_RU"},
      {property: "og:type", content: "website"},
      {property: "og:image", content: socBanner},
      {property: "og:image:type", content: "image/png"},
      {property: "og:image:width", content: "1200"},
      {property: "og:image:height", content: "628"},
      {property: "og:site_name", content: "Pampadu"},
      {property: "twitter:card", content: "summary"},
      {property: "twitter:site", content: "Pampadu"},
      {property: "twitter:image", content: socBanner},
    ],
    link: [
      {
        rel: "stylesheet",
        display: "swap",
        https: "https://fonts.googleapis.com/icon?family=Material+Icons&display=swap",
      },
      {rel: "icon", type: "image/x-icon", href: ""},
    ],
  },
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/main.ts",
    {src: "@/plugins/masonry.ts", mode: "client"},
    {src: "@/plugins/wavesurfer.ts", mode: "client"},
    {src: "@/plugins/route.ts", mode: "client"},
    {src: "@/plugins/vueTheMask.ts", mode: "client"},
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ["@nuxtjs/vuetify", {optionsPath: "~/plugins/vuetify.ts"}],
    "@nuxtjs/style-resources",
    "@nuxt/typescript-build",
  ],
  styleResources: {
    scss: "~/scss/variables.scss",
  },
  css: ["~/scss/styles.scss"],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/sitemap"],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    cssSourceMap: false,
  },
  server: {
    host: "0.0.0.0",
  },
  serverMiddleware: [
    "~/server-middleware/redirect-legal-documents",
    "~/server-middleware/seo-redirect",
  ],
  // @nuxtjs/sitemap options
  sitemap: {
    path: "/sitemapindex.xml",
    hostname: process.env.NODE_ENV === 'production' ? 'https://pampadu.ru' : 'http://site.pampadu.ru',
    cacheTime: 100 * 60 * 60, // 60 min,
    lastmod: new Date(),
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
    sitemaps: [
      {
        path: "/sitemap.xml",
        xslUrl: "/sitemap.xsl",
        trailingSlash: true,
        defaults: {
          changefreq: 'daily',
          lastmod: new Date(),
        },
        routes: async () => {
          const routes = [];
          const today = new Date();
          //Страницы для которых требуется генерировать сайтмап
          const sources = [
            {
              source: CityUrl,
              suffix: 'city',
            },
            {
              source: IcUrl,
              suffix: 'partner',
            },
            {
              source: ProgramUrl,
              suffix: 'affiliate-program',
            }
          ]
          const generateRoutes = (route) => {
            Object.values(route.source).forEach(item => routes.push({
              url: `/${route.suffix}/${item}`,
              lastmod: today,
            }))
          }
          sources.forEach(generateRoutes);
          return routes;
        },
      },
      {
        trailingSlash: true,
        path: "/help.sitemap.xml",
      },
      {
        path: "/blog/post-sitemap.xml", // if host is pampadu.ru, then it will be redirected by nginx to external blog with it's own sitemap
      },
    ],
  },
};
