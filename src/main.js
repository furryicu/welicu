import { createApp } from 'vue'
import App from './App.vue'
import svgIcon from './components/icon/svg.vue'

createApp(App).component('Icon', svgIcon).mount('#app')
