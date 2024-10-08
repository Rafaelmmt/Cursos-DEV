<template>
  <select v-model="componentName">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>
  <br>
  <keep-alive>
    <component :is="components[componentName]"></component>
  </keep-alive>
</template>

<script setup>
import { ref } from 'vue'

import Home from './components/Home.vue'
import About from './components/About.vue'

const components = {
  Home,
  About,
}

const componentName = ref('Home')
</script>