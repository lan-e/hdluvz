<template>
  <div v-if="languages" class="switchlang">
    <span v-for="(lng, index) in Object.keys(languages)" :key="lng">
      <a v-if="$i18next.resolvedLanguage !== lng" v-on:click="$i18next.changeLanguage(lng)">
        {{ languages[lng].nativeName }}
      </a>
      <strong v-if="$i18next.resolvedLanguage === lng">
        {{ languages[lng].nativeName }}
      </strong>
      <span v-if="index < (Object.keys(languages).length - 1)">&nbsp;|&nbsp;</span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: {
        en: { nativeName: 'English' },
        hr: { nativeName: 'Hrvatski' }
      }
    }
  }
}
</script>