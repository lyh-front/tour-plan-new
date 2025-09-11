import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import mitt from 'mitt'
import 'vant/lib/index.css'
import 'lib-flexible'
import '@/styles/index.scss'

const app = createApp(App)
app.use(router).use(pinia).mount('#app')
app.config.globalProperties.eventBus = mitt()
