import Vue from 'vue';
import VueRouter from 'vue-router';
import interceptor from './interceptor';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	},
});

interceptor.use(router);

export default router;
