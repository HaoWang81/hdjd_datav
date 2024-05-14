import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/index.js'
import DataVVue3 from '@kjgl77/datav-vue3'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(DataVVue3).use(ElementPlus).mount('#app')
