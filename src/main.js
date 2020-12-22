import { createApp } from 'vue'
import routes from './routes'
import App from './App.vue'

// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

createApp(App)
  .use(routes)
  .mount('#app')
