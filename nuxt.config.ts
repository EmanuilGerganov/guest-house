// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@antfu/eslint-config',
  ],
  devtools: { enabled: true },

  routeRules: {
    '/ssg': { prerender: true },
  },
  compatibilityDate: '2024-04-03',
  googleFonts: {
    families: {
      Roboto: true,
      Montserrat: [300, 500, 600, 700],
    },
  },
  i18n: {
    locales: [
      { code: 'bg', iso: 'bg-BG' },
      { code: 'en', iso: 'en-US' },
    ],
    defaultLocale: 'bg',
  },
})
