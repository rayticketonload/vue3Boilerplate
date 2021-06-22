import packageConfig from '../../package.json';

// env mode flag name
export const ENV_DEV_FLAG = `DEV`; // 开发模式
export const ENV_STAGE_FLAG = `STAGE`; // 测试模式
export const ENV_PROD_FLAG = `PROD`; // 生产模式

// Language flag name
export const LANG_CN_FLAG = `zh_CN`; // 简体中文
export const LANG_EN_FLAG = `en_US`; // 美式英语

// ***
// 版本号
// ***
export const VERSION = packageConfig.version;

// ***
// 登录 cookie key name
// ***
export const LOGIN_COOKIE_KEY = 'CCY4762223D63D4DF1A5C162238CBE366';

// ***
// local storage 里面的当前用户信息的 key name
// ***
export const STORAGE_CURRENT_USER_INFO = 'PROJECT_EVO_STORAGE_CURRENT_USER_INFO';

// ***
// 角色
// ***
export const ROLE_0 = 0;
export const ROLE_1 = 1;

// ***
// vux 类型
// ***
export const STORE_TYPE = {
	LOGIN: 'LOGIN',
	LOGOUT: 'LOGOUT',
	GET_PERMISSIONS: 'GET_PERMISSIONS',
	SET_EMAIL: 'SET_EMAIL',
	SET_USERNAME: 'SET_USERNAME',
	SET_USERID: 'SET_USERID',
	SET_ROLE_TYPE: 'SET_ROLE_TYPE',
	SET_PERMISSIONS_ROUTER: 'SET_PERMISSIONS_ROUTER',
	SET_PERMISSIONS_FULL: 'SET_PERMISSIONS_FULL',
	SET_BREADCRUMB: 'SET_BREADCRUMB',
	SET_DEFAULT_PANEL_TAB_NEED_OR_NOT: 'SET_DEFAULT_PANEL_TAB_NEED_OR_NOT',
	SET_DEFAULT_PANEL_TAB: 'SET_DEFAULT_PANEL_TAB',
	SET_CURRENT_NAV: 'SET_CURRENT_NAV',
	SET_GLOBAL_LOADING: 'SET_GLOBAL_LOADING',
	SET_MODAL_FILTER: 'SET_MODAL_FILTER',
};

// ***
// 路由名 (作为后端返回的路由权限表的映射表, 双方统一的值)
// ***
export const ROUTE_NAME = {
	RN_HOME: 'home',
	RN_LOGIN: 'login',
	RN_NOT_FOUND: 'notFound',
};

// ***
// 菜单导航组名称 (显示路由的界面入口)
// ***
export const NAV_GROUP = {
	// COLLECTION_MANAGEMENT: ROUTE_NAME.RN_COLLECTION_MANAGEMENT,
};

// ***
// 不需要权限的路由表
// ***
export const NO_PERMISSIONS_REQUIRED_ROUTES_MAP = [ROUTE_NAME.RN_LOGIN, ROUTE_NAME.RN_NOT_FOUND];
