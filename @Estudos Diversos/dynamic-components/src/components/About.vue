<template>
  <h1>About</h1>
  <h6>Component about ativo!</h6>
  <h6>{{ `Teste ${teste}` }}</h6>
  <button @click="plus">+</button>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log(`the component ABOUT is now mounted.`)
})

onUnmounted(() => {
  console.log(`the component ABOUT was unmounted.`)
})
const teste = ref(10)
const plus = () => {
  teste.value++
}
</script>