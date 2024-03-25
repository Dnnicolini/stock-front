import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import './assets/main.css'
import 'flowbite';
import VueApexCharts from "vue3-apexcharts";



const app = createApp(App)
app.use(VueApexCharts);
app.use(router)

app.mount('#app')
