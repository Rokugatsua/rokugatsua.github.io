import { createApp } from 'vue'
import routes from './routes'
import App from './App.vue'
import './index.css'

createApp(App)
  .use(routes)
  .mount('#app')
