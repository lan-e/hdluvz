<template>
  <div class="page">
    <div class="organization-container">
      <h1>{{ $t("orgPage") }}</h1>
    </div>
    <div id="contact">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue"
</script>