// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/strapi',
    'nuxt-music-flow',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error adfas asdas dasd
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  strapi: { 
    url: process.env.STRAPI_URL || 'http://127.0.0.1:1337', 
    prefix: '/api', 
    version: 'v5' },

  runtimeConfig: {
    public: {
      strapi: {
        apiToken: process.env.STRAPI_API_TOKEN || ''
      }
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: ['~/assets/styles/theme.css'],
})