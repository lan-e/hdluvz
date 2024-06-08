<template>
    <div class="about-container">
        <hr>
        <div class="about">
            <div class="col">
                <h2>{{ $t("aboutPage") }}</h2>
                <router-link to="/about">
                    <Button />
                </router-link>
            </div>
            <div v-if="currentLanguage === 'hr'">
                Članovi HDLU Varaždin svojim umjetničkim djelovanjem rade na razvoju i promociji suvremene likovne
                umjetnosti i
                kulture. U galeriji, trenutno smještenoj u Kuli stražarnici Starog grada u Varaždinu, organiziraju se
                samostalne
                i grupne izložbe svojih članova, ali i gostujućih umjetnika iz zemlje i inozemstva. Bogata ponuda
                galerije
                HDLU
                Varaždin redovito privlači veliki broj posjetitelja i time pokazuje važnost udruge u kulturi grada i
                njezinih
                građana. Galeriju posjećuju i brojni turisti koji dolaze u Varaždin, zadovoljni što turistička ponuda
                grada
                uključuje stvaralaštvo suvremenih likovnih i multimedijskih umjetnika.
            </div>
            <div v-else>
                The members of HDLU Varaždin are working on the development and promotion of contemporary art through
                their artistic activities arts and cultures. In the gallery, currently located in the Watchtower of the
                Old Town in Varaždin, they organize independent and group exhibitions of its members, as well as
                guest artists from the country and abroad. Gallery HDLU Varaždin regularly attracts a large number of
                visitors and thus shows the importance of
                the association in the city's culture its citizens. The gallery is also visited by many tourists who
                come to Varaždin, satisfied with the
                tourist offer of the city includes the work of contemporary visual and multimedia artists.
            </div>
        </div>
        <hr>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import Button from './icons/Button.vue';
import i18next from "i18next";

const currentLanguage = ref(localStorage.getItem("i18nextLng"));

onMounted(() => {
    window.addEventListener('languageChange', onLanguageChange);
});

onUnmounted(() => {
    window.removeEventListener('languageChange', onLanguageChange);
});

function onLanguageChange() {
    currentLanguage.value = localStorage.getItem('i18nextLng');
}
</script>