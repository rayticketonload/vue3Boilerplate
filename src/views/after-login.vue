<template>
	<!-- <default-layout>
		<template slot="nav">
			<role-nav></role-nav>
		</template>
		<template slot="header">
			<default-header :email="email" :todoQty="toDoQty" :breadcrumb="breadcrumb"></default-header>
		</template>
		<template slot="router-view">
			<router-view></router-view>
		</template>
	</default-layout> -->
	<h1>after login</h1>
	<router-view></router-view>
</template>

<script>
// import { mapState } from 'vuex';
// import roleNav from '@LAYOUT/side-nav';
// import defaultLayout from '@LAYOUT/default-layout/index';
// import defaultHeader from '@LAYOUT/default-header/index';

export default {
	// components: {
	// 	roleNav,
	// 	defaultLayout,
	// 	defaultHeader,
	// },

	// data() {
	// 	return {
	// 		toDoQty: 0,
	// 	};
	// },

	// computed: {
	// 	...mapState({
	// 		email: state => state.profile.email,
	// 		breadcrumb: state => state.component.breadcrumb,
	// 	}),
	// },
};
</script>

<style lang="scss" scoped>
</style>
