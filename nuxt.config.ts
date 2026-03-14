// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', 'motion-v/nuxt', '@nuxt/image'],
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL || 'https://bintangmurtifandy.id',
      siteName: 'Bintang Murtifandy',
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'id',
      },
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      titleTemplate: '%s',
      meta: [
        { name: 'application-name', content: 'Bintang Murtifandy' },
        { name: 'theme-color', content: '#020617' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/logo.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
});
