<template>
  <h1>{{ mode }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3</a>
  </p>

  <button type="button" @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
import { reactive } from 'vue'
import api from '/@API';

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
