<template>
  <div class="home">
    <HeroImg />
    <!-- <Events /> -->
    <h1>{{ $t("events") }}</h1>
    <Gallery />
    <!-- <About /> -->
    <div id="contact">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import HeroImg from '@/components/HeroImg.vue';
import Events from '@/components/Events.vue';
import About from '@/components/About.vue';
import Gallery from '@/components/Gallery.vue';
import Footer from '@/components/Footer.vue';
</script>
