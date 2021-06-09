import { createApp } from 'vue';
import store from './store'
import App from './App.vue';

const app = createApp(App);
// vuex 插进来了
app.use(store);

app.mount('#app');
