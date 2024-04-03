<template>
<svg :style="{rotate: isMenuOpen ? '180deg' : ''}" width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="42.5" cy="42.5" r="42.5" fill="#D30516"/>
    <path d="M54.7656 41.2344C55.7422 42.2109 55.7422 43.7969 54.7656 44.7734L39.7656 59.7734C38.7891 60.75 37.2031 60.75 36.2266 59.7734C35.25 58.7969 35.25 57.2109 36.2266 56.2344L49.4609 43L36.2344 29.7656C35.2578 28.7891 35.2578 27.2031 36.2344 26.2266C37.2109 25.25 38.7969 25.25 39.7734 26.2266L54.7734 41.2266L54.7656 41.2344Z" fill="white"/>
</svg>
</template>

<script setup>
const {isMenuOpen} = defineProps(['isMenuOpen'])
</script>