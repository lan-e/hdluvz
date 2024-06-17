<template>
    <div class="home">
        <HeroImg />
        <h1>{{ $t("events") }}</h1>
        <Gallery />
        <About />
        <div id="contact">
            <Footer />
        </div>
    </div>
</template>

<script setup>
import HeroImg from "@/components/HeroImg.vue";
import Gallery from "@/components/Gallery.vue";
import About from "@/components/About.vue";
import Footer from "@/components/Footer.vue";
</script>
