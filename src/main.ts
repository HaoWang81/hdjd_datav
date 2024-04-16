import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/index.js'
import DataVVue3 from '@kjgl77/datav-vue3'

createApp(App).use(router).use(DataVVue3).mount('#app')
