<template>
	<div>{{ $currency(0) }}</div>
</template>

<script>
export default {

	data() {
		return {
			foo: 0,
		};
	},

	methods: {
	},

	created() {
		console.log(this.$currency(0));
	}
}
</script>
