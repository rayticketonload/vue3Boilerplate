import { ROUTE_NAME } from '/@HELPER/global';
import publicPermissionsNotRequired from './public-permissions-not-required';
import publicPermissionsRequired from './public-permissions-required';
import role0Permission from './role-0-permission';

const { RN_NOT_FOUND } = ROUTE_NAME;

export default [
	...publicPermissionsNotRequired,
	...publicPermissionsRequired,
	{
		path: '/afterlogin',
		component: r => require.ensure([], () => r(require('/@VIEWS/after-login')), 'afterlogin'),
		redirect: RN_NOT_FOUND,
		children: [...role0Permission],
	},
	{
		path: '*',
		redirect: RN_NOT_FOUND,
	},
];
