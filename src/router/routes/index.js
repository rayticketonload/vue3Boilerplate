import { ROUTE_NAME } from '@HELPER/global';
import publicPermissionsNotRequired from './public-permissions-not-required';
import publicPermissionsRequired from './public-permissions-required';
import role0Permission from './role-0-permission';
import testPermission from './test-permission';

const { RN_NOT_FOUND } = ROUTE_NAME;

export default [
	...publicPermissionsNotRequired,
	...publicPermissionsRequired,
	{
		path: '/afterlogin',
		component: () => import('@VIEWS/after-login.vue'),
		redirect: RN_NOT_FOUND,
		children: [
			...testPermission,
			...role0Permission
		],
	},
	{
		// path: '*', // 不能用了
		// 原因：Vue Router不再使用 path-to-regexp，而是实现了自己的解析系统，该系统允许路由排名并启用动态路由。由于我们通常会在每个项目中添加一条单独的包罗万象的路线，因此支持的特殊语法没有太大的好处*。参数的编码是跨路线编码，无一例外使事情更容易预测。
		path: '/:pathMatch(.*)*',
		redirect: RN_NOT_FOUND,
	},
];
