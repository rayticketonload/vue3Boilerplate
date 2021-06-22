<template>
	{{ mode }}
  <button type="button" @click="state.count++">count is: {{ state.count }}</button>
</template>

<script>
import { reactive } from 'vue'
import api from '/@API';
import store from '/@STORE';
import { STORE_TYPE } from '/@HELPER/global';

export default {
	props: {
    msg: {
      type: String,
      default: '',
    }
  },

	data() {
		return {
			mode: import.meta.env.MODE,
			lang: import.meta.env.lang,
			state: reactive({ count: 0 })
		};
	},

	methods: {
		test() {
			store.commit(`component/${STORE_TYPE.SET_GLOBAL_LOADING}`, true);
			api.test.testApiGet().then(res => {
				// console.log(res);
			});
		}
	},

	created() {
		console.log('env', import.meta.env);
		this.test();
	},
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
