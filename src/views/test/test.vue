<template>

  <el-button type="primary" @click="state.count++">
		{{ $currency(state.count, '￥') }}
	</el-button>
	{{ env }}
	<br/>

</template>

<script>
import { reactive } from 'vue'
import api from '@API';
import store from '@STORE';
import { STORE_TYPE } from '@HELPER/global';

export default {
	props: {
    msg: {
      type: String,
      default: '',
    }
  },

	data() {
		return {
			env: import.meta.env,
			state: reactive({ count: 0 }),
		};
	},

	methods: {
		testRequest() {
			store.commit(`component/${STORE_TYPE.SET_GLOBAL_LOADING}`, true);
			api.test.testApiGet().then(res => {
				// console.log(res);
			});
		}
	},

	created() {
		this.testRequest();
	},
}
</script>
