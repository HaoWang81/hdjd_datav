import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/index.js'
import DataVVue3 from '@kjgl77/datav-vue3'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(DataVVue3).use(ElementPlus,{
    locale: zhCn,
  }).mount('#app')
