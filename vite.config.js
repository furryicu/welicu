import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { svgBuilder } from './src/components/icon/index.js'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), svgBuilder('./src/assets/icon/')]
})
