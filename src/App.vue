<template>
  <!-- <HelloWorld /> -->
	<transition name="el-fade-in">
		<router-view :key="$route.fullpath"></router-view>
	</transition>
</template>

<script setup>
	// import HelloWorld from '/@VIEWS/HelloWorld.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
