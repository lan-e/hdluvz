<template>
  <div class="page">
    <div class="organization-container">
      <h1>{{ $t("orgPage") }}</h1>
      <div v-if="!isLoaded">
        <Loader />
      </div>
      <div v-else>
        <div v-for="member in members" :key="member.value.id" class="members">
          <h3>{{ member.value.acf?.title }}</h3>
          <div>{{ member.value.title.rendered }}</div>
        </div>
      </div>
    </div>
    <div id="contact">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import Loader from "@/components/icons/Loader.vue"
import { ref, onMounted } from 'vue';
const isLoaded = ref(false)
let members = ref([]);

async function fetchData() {
  // const data = await fetch("https://public-api.wordpress.com/rest/v1.1/sites/hdluvz.wordpress.com/posts/?number=3&pretty=true");
  const data = await fetch("http://localhost/hdlu/wp-json/wp/v2/organization");
  const response = await data.json();
  members.value = response.map(resp => ({ value: resp }));
  isLoaded.value = true;
}

onMounted(() => {
  fetchData()
})
</script>