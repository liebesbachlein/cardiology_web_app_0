import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'
import { loadSpResources, loadInfo, loadNews } from './firebase/config.js'

const app = createApp(App)

app.use(router)

app.mount('#app')