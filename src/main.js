import { createApp } from 'vue'
import App from './App.vue'
import '../public/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router'; // Assuming router.js contains your router setup



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper.js

const app = createApp(App); // Create the app instance first
app.use(router);
app.mount('#app'); // Mount the app to the DOM


