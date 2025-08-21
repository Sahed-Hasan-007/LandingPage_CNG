import {metaInfo} from './metaTag'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: metaInfo.siteName,
      meta: [
        {
          name: "description",
          content: metaInfo.description,
        },
        {
          name: "description",
          content: metaInfo.siteDescription,
        },
        {property: "og:title", content: metaInfo.siteName},
        {property: "og:description", content: metaInfo.siteDescription},
        {property: "og:image", content: ''},
      ],
      link: [
        {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
      ],
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', 'nuxt-marquee'],
  plugins: ['~/plugins/aos.client.ts', '~/plugins/gsap.client.ts'],
  css: ['@/assets/css/style.css'],
})
