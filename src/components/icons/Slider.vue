<template>
    <svg v-if="active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </svg>
</template>

<script setup>
const { active } = defineProps(["active"])
</script>

<style scoped>
svg {
    margin-bottom: 8px;
    cursor: pointer;
    height: 32px;
    fill: var(--color3);
    width: 24px;
}
</style>