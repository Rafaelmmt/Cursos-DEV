<template>
  <h1>Home</h1>
  <h6>Component home ativo!</h6>
</template>

<script setup>
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

onMounted(() => {
  console.log(`the component HOME is now mounted.`)
})

onUnmounted(() => {
  console.log(`the component HOME was unmounted.`)
})

onActivated(() => {
  console.log(`the component HOME ATIVADO.`)
})

onDeactivated(() => {
  console.log(`the component HOME DESATIVADO.`)
})
</script>