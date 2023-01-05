// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/styles/main.css'],
  app: {
    head: {
      title: 'Nuxt3 with Tailwind CSS'
    }
  },    
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
