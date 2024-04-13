<template>
  <div v-if="loading">
    <Loader />
  </div>
  <div v-else>
    <Navigation />
    <router-view />
  </div>
</template>

<script setup>
import { ref } from "vue"
import Navigation from "./components/Navigation.vue"
import Loader from "./components/icons/Loader.vue"

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 1000)
</script>