export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/fit5032/' : '/',

  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})