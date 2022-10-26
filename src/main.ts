import { createApp } from "vue";
import {createPinia} from 'pinia'

import App from '@/App.vue'
import router from '@/router/index'
import 'uno.css'
import element_plus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/reset.css'
const app = createApp(App)

app.use(element_plus)
app.use(router)
app.use(createPinia())

app.mount('#app')