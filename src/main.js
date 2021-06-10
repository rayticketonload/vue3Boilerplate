import { createApp } from 'vue';
import store from '/@STORE'
import i18n from '/@I18N';
import App from './App.vue';
const app = createApp(App);

app.use(store);
app.use(i18n);

app.mount('#app');
