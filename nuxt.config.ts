// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr:true,
  runtimeConfig: {
    name: "zs",
    public: {
      age: 18,
    },
  },
  app: {
    head: {
      meta: [
        { 
          name: "keywords",
          content: "科教",
        },
        {
          name:'test',content:'测试'
        }
      ],
    },
  },
  modules: ["@element-plus/nuxt", "@pinia/nuxt"],
});