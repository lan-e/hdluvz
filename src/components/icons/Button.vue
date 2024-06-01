<template>
    <div class="primary-btn" :class="{ 'menuBtn': isMenuBtn }">
        <svg :style="{ rotate: isMenuOpen ? '180deg' : '' }" width="40" height="40" viewBox="0 0 40 40" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M31.7656 18.2344C32.7422 19.2109 32.7422 20.7969 31.7656 21.7734L16.7656 36.7734C15.7891 37.75 14.2031 37.75 13.2266 36.7734C12.25 35.7969 12.25 34.2109 13.2266 33.2344L26.4609 20L13.2344 6.76562C12.2578 5.78906 12.2578 4.20312 13.2344 3.22656C14.2109 2.25 15.7969 2.25 16.7734 3.22656L31.7734 18.2266L31.7656 18.2344Z"
                fill="white" />
        </svg>
    </div>
</template>

<script setup>
const { isMenuOpen, isMenuBtn } = defineProps(["isMenuOpen", "isMenuBtn"]);

</script>