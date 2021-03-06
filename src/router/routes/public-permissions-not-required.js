import { ROUTE_NAME } from '@HELPER/global';

const { RN_LOGIN, RN_NOT_FOUND } = ROUTE_NAME;

import routeComLogin from '@VIEWS/login.vue';
import routeComNotFound from '@VIEWS/not-found.vue';


export default [
	{
		path: `/${RN_LOGIN}`,
		name: RN_LOGIN,
		component: routeComLogin,
	},
	{
		path: `/${RN_NOT_FOUND}`,
		name: RN_NOT_FOUND,
		component: routeComNotFound,
	},
];
