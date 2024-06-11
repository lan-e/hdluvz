<template>
    <div>
        <router-link to="/">
            <img v-if="switchedTheme == 'enabled'" :src="require('@/assets/img/light-logo.png')" alt="" />
            <img v-else :src="require('@/assets/img/logo.png')" alt="" />
        </router-link>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const switchedTheme = ref(null)
window.addEventListener('darkMode-localstorage-changed', (event) => {
    switchedTheme.value = event.detail.storage;
});
</script>