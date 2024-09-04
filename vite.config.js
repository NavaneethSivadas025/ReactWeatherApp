import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Import any necessary CSS plugins
import postcssPresetEnv from 'postcss-preset-env';

export default defineConfig({
  plugins: [react()],
  css: {
    // Configuration for PostCSS
    postcss: {
      plugins: [postcssPresetEnv()]
    },
    // Configuration for CSS Modules
    modules: {
      localsConvention: 'camelCaseOnly',
    }
  }
});
