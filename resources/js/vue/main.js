import { createApp } from 'vue'
import Oruga from '@oruga-ui/oruga-next'
import App from './App.vue'
import '@oruga-ui/theme-oruga/dist/oruga.min.css';

const app = createApp(App).use(Oruga)

app.mount('#app')