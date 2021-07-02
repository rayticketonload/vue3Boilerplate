<template>
	<el-dropdown size="mini" split-button type="default">
		超小尺寸
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item>黄金糕</el-dropdown-item>
				<el-dropdown-item>狮子头</el-dropdown-item>
				<el-dropdown-item>螺蛳粉</el-dropdown-item>
				<el-dropdown-item>双皮奶</el-dropdown-item>
				<el-dropdown-item>蚵仔煎</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script>
// import {  }

export default {
	name: 'langSelect',

	data() {
		return {};
	},

	methods: {
	},
};
</script>

<style lang="scss" scoped>
</style>
