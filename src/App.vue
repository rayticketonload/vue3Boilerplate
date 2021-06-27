<template>
  <!-- <HelloWorld /> -->
	<transition name="el-fade-in">
		<router-view :key="$route.fullpath"></router-view>
	</transition>
</template>

<script setup>
	// import HelloWorld from '@VIEWS/HelloWorld.vue'
</script>

<style lang="scss">
// app 组件里面的 style 不要私有化，vite config 里面挂载的全局样式会在这里开始渲染
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
