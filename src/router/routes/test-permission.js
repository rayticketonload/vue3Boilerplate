import { ROLE_0, ROLE_1, ROUTE_NAME } from '@HELPER/global';

const { RN_TEST } = ROUTE_NAME;

export default [
	{
		path: `/${RN_TEST}`,
		name: RN_TEST,
		component: () => import('@VIEWS/test/test.vue'),
		meta: {
			requireAuth: true,
			role: [ROLE_0, ROLE_1],
		},
	},
];
