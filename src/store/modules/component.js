import { STORE_TYPE } from '/@HELPER/global';
import nested from './nested'

const { SET_BREADCRUMB, SET_DEFAULT_PANEL_TAB_NEED_OR_NOT, SET_DEFAULT_PANEL_TAB, SET_CURRENT_NAV, SET_GLOBAL_LOADING, SET_MODAL_FILTER } = STORE_TYPE;

const state = () => ({
  breadcrumb: [],
	needDefaultPanelTab: true,
	defaultPanelTab: [],
	currentRoutePath: '',
	globalLoading: false,
	modalFilter: false,
})

const mutations = {
	[SET_BREADCRUMB]: (state, payload) => {
		state.breadcrumb = payload;
	},

	[SET_DEFAULT_PANEL_TAB_NEED_OR_NOT]: (state, payload) => {
		state.needDefaultPanelTab = payload;
	},

	[SET_DEFAULT_PANEL_TAB]: (state, payload) => {
		state.defaultPanelTab = payload;
	},

	[SET_CURRENT_NAV]: (state, payload) => {
		state.currentRoutePath = payload;
	},

	[SET_GLOBAL_LOADING]: (state, payload) => {
		state.globalLoading = payload;
	},

	[SET_MODAL_FILTER]: (state, payload) => {
		state.modalFilter = payload;
	},
};

export default {
	// namespaced: true,
	state,
	mutations,
	// modules: {
  //   nested
  // }
};
