<template>
  <div class="page">
    <div class="archive-container">
      <h1>{{ $t("archivePage") }}</h1>

      <div v-for="post in filteredPosts" :key="post.id">
        <div v-html="post.value.content.rendered"></div>
      </div>
      <h3 v-if="currentLanguage === 'en'">Download</h3>
      <h4 v-else>Preuzmi</h4>
      <div class="btns">
        <div v-for="file in filteredFiles" :key="file.id">
          <a :href="file.value.acf?.file" download>
            <button>
              {{ file.value.title.rendered }}
            </button>
          </a>
        </div>
      </div>
    </div>
    <div id="contact">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import Footer from '@/components/Footer.vue';

let files = ref([]);
let posts = ref([]);
const currentLanguage = ref(localStorage.getItem("i18nextLng"));

async function fetchFiles() {
  const data = await fetch("http://localhost/hdlu/wp-json/wp/v2/file");
  const response = await data.json();
  files.value = response.map(resp => ({ value: resp }));
}

const filteredFiles = computed(() => {
  if (currentLanguage.value === 'en') {
    return files.value.filter(file => file.value.link.includes('/hdlu/en/file'));
  } else {
    return files.value.filter(file => file.value.link.includes('/hdlu/file'));
  }
});

async function fetchPost() {
  const data = await fetch("http://localhost/hdlu/wp-json/wp/v2/text");
  const response = await data.json();
  posts.value = response.map(resp => ({ value: resp }));
}

const filteredPosts = computed(() => {
  if (currentLanguage.value === 'en') {
    return posts.value.filter(post => post.value.link.includes('/hdlu/en/text') && post.value.title.rendered.includes('Professional criteria'));
  } else {
    return posts.value.filter(post => post.value.link.includes('/hdlu/text') && post.value.title.rendered.includes('Stručni kriteriji'));
  }
});

onMounted(() => {
  fetchFiles()
  fetchPost()
  window.addEventListener('languageChange', onLanguageChange);
});

onUnmounted(() => {
  window.removeEventListener('languageChange', onLanguageChange);
});

function onLanguageChange() {
  currentLanguage.value = localStorage.getItem('i18nextLng');
}
</script>