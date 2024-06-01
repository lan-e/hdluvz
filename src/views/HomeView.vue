<template>
  <div class="home">
    <HeroImg />
    <!-- <h1>{{ $t("events") }}</h1> -->
    <Posts />
    <About />
    <!-- <h1>{{ $t("all") }}</h1> -->
    <Gallery />
    <Footer />
  </div>
</template>

<script setup>
import HeroImg from '@/components/HeroImg.vue';
import Posts from '@/components/Posts.vue';
import About from '@/components/About.vue';
import Gallery from '@/components/Gallery.vue';
import Footer from '@/components/Footer.vue';
</script>
