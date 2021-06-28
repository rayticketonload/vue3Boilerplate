import api from '@API';
import cookie from 'js-cookie';
import nested from './nested'
import { STORE_TYPE, STORAGE_CURRENT_USER_INFO, LOGIN_COOKIE_KEY, ROUTE_NAME } from '@HELPER/global';
const storage = localStorage;
const { RN_HOME } = ROUTE_NAME;
const {
	LOGIN,
	LOGOUT,
	SET_USERID,
	SET_USERNAME,
	SET_EMAIL,
	SET_ROLE_TYPE,
	GET_PERMISSIONS,
	SET_PERMISSIONS_ROUTER,
	SET_PERMISSIONS_FULL,
} = STORE_TYPE;

const state = () => ({
  isLogin: false,
	userId: null,
	userName: null,
	email: null,
	roleType: null,
	permissions: [],
	permissionsFull: [],
	mallProdtypeList: [],
})

const mutations = {
	[SET_PERMISSIONS_ROUTER]: (state, payload) => {
		// 默认 HOME 权限
		const defaultPermissionsRoute = [RN_HOME];
		const all = [...defaultPermissionsRoute, ...payload];
		state.permissions = all;
	},

	[SET_PERMISSIONS_FULL]: (state, payload) => {
		// 保存起服务器返回的整套权限表
		state.permissionsFull = payload;
	},

	[LOGIN]: state => {
		state.isLogin = true;
	},

	[LOGOUT]: state => {
		state.isLogin = false;
	},

	[SET_EMAIL]: (state, payload) => {
		state.email = payload;
	},

	[SET_USERNAME]: (state, payload) => {
		state.userName = payload;
	},

	[SET_USERID]: (state, payload) => {
		state.userId = payload;
	},

	[SET_ROLE_TYPE]: (state, payload) => {
		state.roleType = payload;
	},
};

const actions = {

	[LOGIN]: async ({ commit }, params) => {
		const res = await api.user.login(params);
		if (res.code === 200 && res.message === 'success') {
			const { user, token } = res.data;
			const userInfo = JSON.stringify({
				userId: user.id,
				userName: user.userName,
				email: user.email,
			});
			storage.removeItem(STORAGE_CURRENT_USER_INFO);
			storage.setItem(STORAGE_CURRENT_USER_INFO, userInfo);
			cookie.set(LOGIN_COOKIE_KEY, token);
			commit(LOGIN);
			return res;
		} else {
			return res;
		}
	},

	[LOGOUT]: async ({ commit }, params) => {
		const res = await api.logout(params);
		if (res.code === 200 && res.message === 'success') {
			commit(LOGOUT);
			cookie.remove(LOGIN_COOKIE_KEY);
			storage.removeItem(STORAGE_CURRENT_USER_INFO);
			return res;
		} else {
			return res;
		}
	},

	[GET_PERMISSIONS]: async ({ commit, dispatch }) => {
		// const {
		// 	content: {
		// 		// type,
		// 		// permissions,
		// 		// email,
		// 	},
		// } = await api.getPermissions();

		// mock 权限表
		const fakePermissions = [
			{
				resKey: 'collection_management',
				childs: ['collection_management', 'sub_merchants', 'transaction_flow'],
			},
			{
				resKey: 'coupon_management',
				childs: [
					'coupon_management',
					'digital_products_management',
					'digital_products_form',
					'digital_products_suit_store',
					'digital_products_not_suit_store',
					'coupon_issue_management',
					'coupon_issue_form',
					'coupon_issue_record',
					'coupon_transaction',
					'coupon_write_off_record',
					'coupon_settlement_management',
					'coupon_recycling',
					'coupon_recycling_record',
				],
			},
			{
				resKey: 'event_management',
				childs: [
					'event_management',
					'event_list',
					'activity_template',
					'trigger_type',
					'sign_up',
					'create_trigger_type_form',
					'create_sign_up_form',
					'trigger_type_record',
					'sign_up_record',
				],
			},
			{
				resKey: 'advertising_management',
				childs: ['advertising_management', 'advertising_list', 'advertising_detail'],
			},
			{
				resKey: 'content_management',
				childs: ['content_management', 'boutique_list', 'boutique_add', 'activitypage_list', 'activitypage_add'],
			},
			{
				resKey: 'product_template_management',
				childs: ['product_template_management', 'product_template_list', 'product_template_add'],
			},
			{ resKey: 'message_management', childs: ['message_management', 'message_list', 'create_message_push'] },
			{ resKey: 'delivery_management', childs: ['rider_list', 'settlement_apply'] },
			{
				resKey: 'patrol_management',
				childs: ['patrol_record', 'attendance_record', 'patrol_rules_management', 'workforce_management', 'workforce_management_add', 'patrol_rules_add'],
			},
			{
				resKey: 'settlement_management',
				childs: ['settlement_account_management'],
			},
			{
				resKey: 'data_management',
				childs: ['data_management', 'data_list'],
			},
			{
				resKey: 'test',
				childs: ['test'],
			},
		];

		// 接口返回权限表
		// commit(SET_PERMISSIONS_ROUTER, queryList(permissions, []));
		// commit(SET_PERMISSIONS_FULL, permissions);

		// mock 权限表
		commit(SET_PERMISSIONS_ROUTER, queryList(fakePermissions, []));
		commit(SET_PERMISSIONS_FULL, fakePermissions);

		commit(SET_ROLE_TYPE, 0); // 由于后端没做角色系统，暂时默认全部角色是 role 0

		if (storage.getItem(STORAGE_CURRENT_USER_INFO)) {
			const userInfo = JSON.parse(storage.getItem(STORAGE_CURRENT_USER_INFO));
			commit(SET_EMAIL, userInfo.email);
			commit(SET_USERNAME, userInfo.userName);
			commit(SET_USERID, userInfo.userId);
		} else {
			cookie.remove(LOGIN_COOKIE_KEY);
			return;
		}

		commit(LOGIN);
	},
};

// 将服务器拿回来 用户路由权限‘permissions’ 重新组合成路由钩子要用的路由权限表
function queryList(arr) {
	if (!arr || !arr.length) return;

	const newArr = [];
	arr.map(item => {
		item.childs.map(i => {
			newArr.push(i);
		});
	});
	return newArr;
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	modules: {
    nested
  }
};
