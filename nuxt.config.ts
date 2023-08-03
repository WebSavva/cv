import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
  ],

  app: {
    head: {
      script: [
        {
          innerHTML: 'document.body.style.zoom = "75%";',
          tagPosition: 'bodyClose',
        }
      ]
    }
  },

  googleFonts: {
    base64: true,
    families: {
      REM: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    download: true,
  },

  experimental: {
    noScripts: true,
    inlineSSRStyles: true,
  },
})
