<template>
  <div class="home">
    <HeroImg />
    <h1>{{ $t("events") }}</h1>
    <Posts />
    <hr>
    <h1>{{ $t("all") }}</h1>
    <Gallery />
  </div>
</template>

<script setup>
import Gallery from '@/components/Gallery.vue';
import Posts from '@/components/Posts.vue';
import HeroImg from '@/components/HeroImg.vue';
</script>
