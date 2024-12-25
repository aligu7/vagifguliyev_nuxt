// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  // plugins: ['~/plugins/lightGallery.js'],
  modules: ["nuxt-swiper", "@nuxt/content", "@nuxt/image", "@nuxthub/core"],
  css: ["./assets/css/tooplate_style.css", "./assets/css/custom.css"],
  // modules: ['@nuxt/ui'],
  components: true,
  ssr: false,
  target: "static",
  nitro: {
    preset: "netlify"
  },
  generate: {
    fallback: true
  },
  content: {
    documentDriven: true
  },
  preset: "cloudflare-pages"
});
