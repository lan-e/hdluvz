<template>
    <div v-if="languages" class="switchlang">
        <span v-for="(lng, index) in Object.keys(languages)" :key="lng">
            <a v-if="$i18next.resolvedLanguage !== lng" @click="changeLanguage(lng)">
                {{ languages[lng].nativeName }}
            </a>
            <strong v-if="$i18next.resolvedLanguage === lng">
                {{ languages[lng].nativeName }}
            </strong>
        </span>
    </div>
</template>

<script>
import i18next, { changeLanguage } from "i18next";

export default {
    data() {
        return {
            languages: {
                en: { nativeName: "English" },
                hr: { nativeName: "Hrvatski" },
            },
        };
    },
    methods: {
        changeLanguage(lng) {
            i18next.changeLanguage(lng);
            localStorage.setItem("i18nextLng", lng);
            window.dispatchEvent(new Event("languageChange"));
        },
    },
    beforeMount() {
        changeLanguage("en");
    },
};
</script>
