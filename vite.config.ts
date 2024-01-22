import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/app/assets/styles/app.scss";`,
      },
    },
    // modules: {
    //   localsConvention: 'camelCase',
    //   generateScopedName: '[name]___[hash:base64:5]',
    // },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
