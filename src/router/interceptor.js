import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import i18n from '/@I18N';
import store from '/@STORE';
import cookie from 'js-cookie';
import { STORE_TYPE, ROUTE_NAME, NO_PERMISSIONS_REQUIRED_ROUTES_MAP, LOGIN_COOKIE_KEY, ROLE_0, ROLE_1 } from '/@HELPER/global';

const { GET_PERMISSIONS, SET_CURRENT_NAV } = STORE_TYPE;
const { RN_LOGIN, RN_NOT_FOUND, RN_HOME, RN_TEST } = ROUTE_NAME;

NProgress.configure({
	showSpinner: false,
});

const getResKeyByName = routeName => {
	const result = store.state.profile.permissions.some(item => {
		if (item === routeName) {
			return true;
		}
	});
	return result;
};

const defaultVisit = routeName =>
	NO_PERMISSIONS_REQUIRED_ROUTES_MAP.some(item => {
		if (item === routeName) {
			return true;
		}
	});

const canVisit = routeName => {
	if (!store.state.profile.permissions) {
		return false;
	}
	const result = !!getResKeyByName(routeName);
	return result;
};

//
export default {
	use(router) {
		router.beforeEach(async (to, from, next) => {
			// document.title = i18n.t('sys-name');
			NProgress.start();

			if (cookie.get(LOGIN_COOKIE_KEY) && !store.state.profile.isLogin) {
				await store.dispatch(GET_PERMISSIONS);
			}

			if (to.matched.some(r => r.meta.requireAuth)) {
				if (store.state.profile.isLogin) {
					// 不同角色跳到不同主页
					if (to.name === RN_HOME) {
						const homeMap = {
							[ROLE_0]: RN_TEST,
							[ROLE_1]: RN_TEST,
						};

						if (canVisit(homeMap[store.state.profile.roleType])) {
							next({
								name: homeMap[store.state.profile.roleType],
								replace: true,
							});
						} else {
							next({
								name: RN_NOT_FOUND,
								replace: true,
							});
						}
						NProgress.done();
						return;
					}

					if (defaultVisit(to.name)) {
						NProgress.done();
						next();
						return;
					} else if (!canVisit(to.name)) {
						// 没权限
						NProgress.done();
						next({
							name: RN_NOT_FOUND,
							replace: true,
						});
						return;
					}

					if (to.matched[1].path) {
						await store.commit(SET_CURRENT_NAV, to.matched[1].path);
					}

					next();
				} else {
					if (to.name !== RN_LOGIN) {
						NProgress.done();
						next({
							name: RN_LOGIN,
							query: {
								redirect: to.fullPath,
							},
						});
						return;
					}
				}
			} else {
				if (store.state.profile.isLogin && to.path === `/${RN_LOGIN}`) {
					next('/');
				} else {
					next();
				}
			}
		});

		router.afterEach(() => {
			NProgress.done();
		});
	},
};
