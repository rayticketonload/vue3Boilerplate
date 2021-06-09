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

<script setup>
import { defineProps, onMounted, reactive } from 'vue'

onMounted (() => {
	console.log('env', import.meta.env);
})

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
const mode = import.meta.env.MODE
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
