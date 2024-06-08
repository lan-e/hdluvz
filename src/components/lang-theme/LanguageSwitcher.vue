<template>
  <div v-if="languages" class="switchlang">
    <span v-for="(lng, index) in Object.keys(languages)" :key="lng">
      <a v-if="$i18next.resolvedLanguage !== lng" @click="changeLanguage(lng)">
        {{ languages[lng].nativeName }}
      </a>
      <strong v-if="$i18next.resolvedLanguage === lng">
        {{ languages[lng].nativeName }}
      </strong>
      <span v-if="index < (Object.keys(languages).length - 1)">&nbsp;|&nbsp;</span>
    </span>
  </div>
</template>

<script setup>
import i18next from "i18next"

const languages = {
  en: { nativeName: 'en' },
  hr: { nativeName: 'hr' }
};

function changeLanguage(lng) {
  i18next.changeLanguage(lng);
  localStorage.setItem('i18nextLng', lng);
  window.dispatchEvent(new Event('languageChange'));
}
</script>