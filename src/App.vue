<template>
	<langSelect />
	<router-view v-slot="{ Component }">
		<transition name="fade" mode="out-in" appear>
			<component :is="Component"></component>
		</transition>
	</router-view>
</template>

<script setup>
	import langSelect from '@COMPONENTS/langSelect/index.vue'
</script>

<style lang="scss">
// app 组件里面的 style 不要私有化，vite config 里面挂载的全局样式会在这里开始渲染
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
