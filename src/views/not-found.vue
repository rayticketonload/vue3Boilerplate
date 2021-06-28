<template>
	<section class="out-space-wrap">
		<div class="out-space-box">
			<div class="code"></div>
			<div class="content">
				<div class="title">
					很抱歉，您访问的页面不存在...
				</div>
				<div class="tips">
					您所访问的网页地址出错，请核实网页地址正确性
				</div>
				<el-button @click="goHome()" type="default" class="btn">
					{{ $t('hui-shou-ye') }}
				</el-button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {};
	},

	methods: {
		// 返回、取消
		goHome() {
			this.$router.push({
				path: '/',
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.out-space-wrap {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;

	.out-space-box {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		@include clearfix;
		font-size: 0;
		line-height: 0;
		width: 100%;
		text-align: center;
	}

	.code {
		@include square(300px);
		display: inline-block;
		vertical-align: middle;
		background-image: url('@ASSETS/404.png');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: 100% auto;
		margin-right: 50px;
	}

	.content {
		display: inline-block;
		vertical-align: middle;
		text-align: left;

		.title {
			font-size: 34px;
			line-height: 1;
			color: $themeColor-primary;
			font-weight: 200;
		}

		.tips {
			font-size: 18px;
			font-weight: 200;
			color: #999;
			line-height: 1;
			padding: 15px 0;
		}
	}
}
</style>
