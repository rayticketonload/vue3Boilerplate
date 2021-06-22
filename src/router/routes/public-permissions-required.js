// 需要权限的公共页面
import { ROUTE_NAME } from '/@HELPER/global';

const { RN_HOME } = ROUTE_NAME;

export default [
	{
		path: '/',
		name: RN_HOME,
		meta: {
			requireAuth: true,
		},
	},
];
