import { createApp } from 'vue'
import Oruga from '@oruga-ui/oruga-next'
import App from './App.vue'
import '@oruga-ui/theme-oruga/dist/oruga.min.css';

import axios form 'axios'

const app = createApp(App).use(Oruga)

app.config.globalProperties.$axios = axios
window.axios = axios

app.mount('#app')