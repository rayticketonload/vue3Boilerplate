<template>
	<section>
		<el-button type="primary" @click="logout()">
			退出
		</el-button>
		<router-view></router-view>
	</section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { STORE_TYPE, ROUTE_NAME } from '@HELPER/global';

const { LOGOUT } = STORE_TYPE;
const { RN_LOGIN } = ROUTE_NAME;

export default {

	computed: {
		...mapState({
			userId: state => state.profile.userId,
			userName: state => state.profile.userName,
		}),
	},

	methods: {
		...mapActions({
			[LOGOUT]: `profile/${LOGOUT}`,
		}),

		async logout() {
			const params = new FormData();
			params.append('tenantId', 0);
			params.append('userName', this.userName);

			try {
				const res = await this[LOGOUT](params);
				if (res.code === 200 && res.message === 'success') {
					this.$notify.success({
						title: this.$t('deng-chu-cheng-gong'),
						message: this.$t('fan-hui-deng-lu-ye-mian'),
					});
					this.$router.push({
						name: RN_LOGIN,
					});
				} else {
					this.$notify.error({
						title: this.$t('shi-bai'),
						message: res.data,
					});
				}
			} catch (e) {
				if (e.errorMsg) {
					this.$notify.error({
						title: this.$t('shi-bai'),
						message: e.errorMsg,
					});
				}
			}
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
