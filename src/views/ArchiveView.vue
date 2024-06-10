<template>
  <div class="page">
    <div class="archive-container">
      <h1>{{ $t("archivePage") }}</h1>
      <h3>Stručni kriteriji</h3>
      prema kojima HDLU Varaždin daje preporuke i potporu svojim članovima kod ostvarivanja prava samostalnih
      umjetnika ili kod mjera za poticanje kulturnog i umjetničkog stvaralaštva.
      Stručni kriteriji usuglašeni su s Ministarstvom kulture i medija i njima članovi dokazuju da profesionalno
      obavljaju umjetničku djelatnost.
      <ul>
        <h4>Slikar</h4>
        <li>a) 3 samostalne izložbe</li>
        <li>b) 5 skupnih žiriranih izložbi ili</li>
        <li>c) 2 samostalne izložbe i 2 skupne žirirane izložbe.</li>

        <h4>Multimedijalni umjetnik</h4>
        <li>a) 3 samostalna multimedijalna projekta</li>
        <li>b) 5 skupnih multimedijalnih projekata,</li>
        <li>c) 2 samostalna i 2 skupna multimedijalna projekta ili</li>
        <li>d) 5 skupnih žiriranih izložbi.</li>
        Pod multimedijalnim projektom podrazumijeva se video, film, računalna umjetnost, performans i drugi oblici
        suvremenog umjetničkog izražavanja.

        <h4>Kipar</h4>
        <li>a) 3 samostalne izložbe</li>
        <li>b) 5 skupnih žiriranih izložbi</li>
        <li>c) 1 samostalna izložba i 4 skupne žirirane izložbe ili</li>
        <li>d) 2 samostalne izložbe i 2 skupne žirirane izložbe.</li>

        <li>- Izložbe se priznaju ako su izlagana različita umjetnička djela.</li>
        <li>- Izložbe se priznaju ako su realizirane u istaknutim institucijama ili izložbenim prostorima na području
          Republike Hrvatske.
        </li>
        <li>- Umjetnička djela ostvarena izvan istaknutih institucija i izložbenih prostora priznaju se ako
          predstavljaju
          doprinos hrvatskoj kulturi i umjetnosti.</li>
      </ul>
      <h3>Preuzmi</h3>
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

onMounted(() => {
  fetchFiles()
  window.addEventListener('languageChange', onLanguageChange);
});

onUnmounted(() => {
  window.removeEventListener('languageChange', onLanguageChange);
});

function onLanguageChange() {
  currentLanguage.value = localStorage.getItem('i18nextLng');
}
</script>