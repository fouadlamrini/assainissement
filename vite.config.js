import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig(({ mode }) => {
  const isAnalyze = process.env.stats === 'true'

  return {
    plugins: [
      react(),
      tailwindcss(),
      isAnalyze &&
        visualizer({
          filename: './dist/stats.html',
          open: true,
          gzipSize: true,
          brotliSize: true,
          template: 'treemap',
        }),
    ].filter(Boolean),

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    build: {
      target: 'es2022',
      outDir: 'dist',
      assetsInlineLimit: 4096, // 4KB - inline small SVG/images as base64 to reduce HTTP requests
      cssCodeSplit: true,
      sourcemap: mode === 'development',
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (
                id.includes('react/') ||
                id.includes('react-dom/') ||
                id.includes('react-router-dom/') ||
                id.includes('react-helmet-async/')
              ) {
                return 'vendor-react'
              }
              if (id.includes('framer-motion')) {
                return 'vendor-animation'
              }
              if (id.includes('lucide-react')) {
                return 'vendor-ui-icons'
              }
              if (id.includes('clsx') || id.includes('tailwind-merge')) {
                return 'vendor-utils'
              }
              return 'vendor'
            }
          },
        },
      },
    },

    server: {
      port: 3000,
      open: true,
    },
  }
})