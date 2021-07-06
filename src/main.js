import { createApp } from 'vue';
import ElementPlus from 'element-plus'
import router from '@ROUTER';
import store from '@STORE'
import { i18n } from '@I18N';
import App from '@/App.vue';
import components from '@COMPONENTS';
import * as global from '@HELPER/global';
import filters from '@/filters';
import directives from '@/directives';
import '@STYLE/style-reset/normalize.scss';
import '@STYLE/style-reset/element-plus-ui-reset.scss';

const app = createApp(App);

app.use(
	ElementPlus,
	{
  	i18n: i18n.global.t,
	}
);
app.use(router);
app.use(store);
app.use(i18n);
app.use(components);
app.use(filters);
app.use(directives);

app.config.globalProperties.$global = global

app.mount('#app');
