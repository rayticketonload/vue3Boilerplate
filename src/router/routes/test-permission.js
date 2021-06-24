import { ROLE_0, ROLE_1, ROUTE_NAME } from '/@HELPER/global';

const { RN_TEST } = ROUTE_NAME;

const test = r => require.ensure([], () => r(require('/@VIEWS/test/test')), 'test');

export default [
	{
		path: `/${RN_TEST}`,
		name: RN_TEST,
		component: test,
		meta: {
			requireAuth: true,
			role: [ROLE_0, ROLE_1],
		},
	},
];
