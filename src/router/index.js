import { createRouter, createWebHashHistory } from 'vue-router'
import interceptor from './interceptor';
import routes from './routes';

const router = createRouter({
	history: createWebHashHistory(),
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
