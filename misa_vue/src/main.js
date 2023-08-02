import { createApp } from 'vue'
import format from './helper/format'
import App from './App.vue'
import '@/css/main.css'
const app = createApp(App);
app.mount('#app');
app.config.globalProperties.$format = format;