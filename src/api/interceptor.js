import axios from 'axios';
import store from '@STORE';
// import { i18n } from '@I18N';
import cookie from 'js-cookie';
// import router from '../router';
import whitelist from './white-list';
import { STORAGE_CURRENT_USER_INFO, STORE_TYPE, ROUTE_NAME, LOGIN_COOKIE_KEY } from '@HELPER/global';
// import { Message } from 'element-ui';

const storage = localStorage;
const { LOGOUT, SET_GLOBAL_LOADING } = STORE_TYPE;
const { RN_LOGIN } = ROUTE_NAME;

let apiType = '';

let link = null;
function getPathname(url) {
	if (!link) {
		link = document.createElement('a');
	}
	link.href = url;
	let { pathname } = link;
	if (pathname && pathname[0] !== '/') {
		pathname = '/' + pathname;
	}
	return pathname;
}

export default {
	use() {
		axios.interceptors.request.use(
			config => {
				apiType = config.API_TYPE;
				if (cookie.get(LOGIN_COOKIE_KEY)) {
					config.headers['X-TOKEN'] = cookie.get(LOGIN_COOKIE_KEY);
				}
				return config;
			},
			error => {
				return Promise.reject(error);
			},
		);

		axios.interceptors.response.use(
			response => {
				// api status 200 会来这里
				const { code, data, msg } = response.data;
				const { url } = response.config;
				const pathname = getPathname(url);
				const isPass = whitelist.some(val => {
					if (typeof val === 'string') {
						return val === pathname;
					} else {
						return val.test(pathname);
					}
				});

				if (code === 301 || code === 300 || code === 403) {
					// 判断后台接口是否来自支付组
					if (apiType === 'pay') {
						// Message.error({ message: `code: ${code}, ${i18n.t('xin-xi')}: ${msg}` });
						store.commit(`component/${SET_GLOBAL_LOADING}`, false);

						axios.defaults.API_TYPE = '';
						return Promise.reject(response.data);
					} else {
						// Message.error({ message: i18n.t('deng-lu-yan-zheng-shi-bai-qing-zhong-xin-deng-lu') });

						// 清掉所有鉴权相关标记
						store.commit(LOGOUT);
						cookie.remove(LOGIN_COOKIE_KEY);
						storage.removeItem(STORAGE_CURRENT_USER_INFO);

						// 送去登录页
						router.replace({
							name: RN_LOGIN,
							query: {
								redirect: router.currentRoute.fullPath,
							},
						});
					}
				} else {
					if (!isPass && code !== 200) {
						if (code === 500) {
							return response.data;
						}

						if (code === 30001) {
							// 导入缴费 excel 模板那个接口，如果返回这个 30001 也需要在页面上进行处理
							return response.data;
						}
						// 判断后台接口是否来自支付组
						if (apiType === 'pay') {
							// Message.error({ message: `code: ${code}, ${i18n.t('xin-xi')}: ${msg}` });
							store.commit(`component/${SET_GLOBAL_LOADING}`, false);
							axios.defaults.API_TYPE = '';
							return Promise.reject(response.data);
						} else {
							// Message.error({ message: `code: ${code}, ${i18n.t('xin-xi')}: ${data}` });
							// store.commit(`component/${SET_GLOBAL_LOADING}`, false);
							return Promise.reject(response.data);
						}
					}
					// 接口获取成功后重置API_TYPE
					store.commit(`component/${SET_GLOBAL_LOADING}`, false);
					axios.defaults.API_TYPE = '';
					return response.data;
				}
			},
			err => {
				if (err && err.response) {
					const { status } = err.response;
					if (status === 401 || status === 403) {
						// 清掉所有鉴权相关标记
						store.commit(LOGOUT);
						cookie.remove(LOGIN_COOKIE_KEY);
						storage.removeItem(STORAGE_CURRENT_USER_INFO);
						// 送去登录页
						router.replace({
							name: RN_LOGIN,
							query: {
								redirect: router.currentRoute.fullPath,
							},
						});
					}
					if (status >= 400) {
						store.commit(`component/${SET_GLOBAL_LOADING}`, false);
						// Message.error({ message: `1status: ${status}, ${i18n.t('xin-xi')}: ${i18n.t('qing-jian-cha-qing-qiu-can-shu')}` });
						return Promise.reject(err.response);
					}
				}
				store.commit(`component/${SET_GLOBAL_LOADING}`, false);
				// Message.error({ message: `status: ${status}, ${i18n.t('xin-xi')}: ${i18n.t('qing-qiu-chao-shi-huo-wei-lian-wang-qing-jian-cha-wang-luo-lian-jie')}` });
				return Promise.reject(err);
			},
		);
	},
};
