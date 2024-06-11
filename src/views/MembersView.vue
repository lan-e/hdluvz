<template>
  <div class="page">
    <div class="members-container">
      <h1>{{ $t("membersPage") }}</h1>
      <div v-if="!isLoaded">
        <Loader />
      </div>
      <div v-else class="members-all">
        <div class="member-container">
          <h4 v-if="currentLanguage == 'en'">Artists</h4>
          <h4 v-else>Umjetnici</h4>
          <div v-for="member in members" :key="member.value.id" class="members">
            <div v-if="member.value.acf?.title.toLowerCase() === 'umjetnici'">
              <div>{{ member.value.title.rendered }}</div>
            </div>
          </div>
        </div>
        <div class="member-container">
          <h4 v-if="currentLanguage == 'en'">Curator team</h4>
          <h4 v-else>Kustoski tim</h4>
          <div v-for="member in members" :key="member.value.id" class="members">
            <div v-if="member.value.acf?.title.toLowerCase() === 'kustoski tim'">
              <div>{{ member.value.title.rendered }}</div>
            </div>
          </div>
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
import { ref, onMounted, onUnmounted } from 'vue';
const isLoaded = ref(false)
let members = ref([]);
const currentLanguage = ref(localStorage.getItem("i18nextLng"));

async function fetchData() {
  // const data = await fetch("https://public-api.wordpress.com/rest/v1.1/sites/hdluvz.wordpress.com/posts/?number=3&pretty=true");
  const data = await fetch("http://localhost/hdlu/wp-json/wp/v2/member?per_page=50");
  const response = await data.json();
  members.value = response.map(resp => ({ value: resp }));
  isLoaded.value = true;
}

onMounted(() => {
  fetchData()
  window.addEventListener('languageChange', onLanguageChange);
});

onUnmounted(() => {
  window.removeEventListener('languageChange', onLanguageChange);
});

function onLanguageChange() {
  currentLanguage.value = localStorage.getItem('i18nextLng');
}
</script>