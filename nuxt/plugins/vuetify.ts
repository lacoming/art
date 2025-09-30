// nuxt/plugins/vuetify.ts
import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // здесь можно настроить themes, defaults, locale и т.п.
  })
  nuxtApp.vueApp.use(vuetify)
})
