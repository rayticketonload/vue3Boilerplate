import Vue from 'vue';
import Vuex from 'vuex';
import profile from './modules/profile';
import component from './modules/component';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		profile,
		component,
	},
});
