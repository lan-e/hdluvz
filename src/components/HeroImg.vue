<template>
    <div class="heroimg">
        <div v-if="currentLanguage === 'hr'" class="title">
            <div @click="slider = 1">
                <h4>DANAS</h4>
            </div>
            <div @click="slider = 2">
                <h4>NEKAD</h4>
            </div>
        </div>
        <div v-if="currentLanguage === 'en'" class="title">
            <div @click="slider = 1">
                <h4>TODAY</h4>
            </div>
            <div @click="slider = 2">
                <h4>BEFORE</h4>
            </div>
        </div>
        <div v-if="slider === 1" class="bg">
            <img src="@/assets/img/homebg.png" alt="">
            <div class="bgMask"></div>
            <div class="bgMaskMsg"></div>
            <div v-if="currentLanguage === 'hr'" class="overlayText">
                Hrvatsko društvo likovnih umjetnika Varaždin strukovna je udruga likovnih umjetnika na području
                Varaždinske županije. Udruga broji 25 redovitih članova od kojih 15 ima likovnu akademsku naobrazbu
                (akademski slikar, kipar, grafičar, profesor likovne kulture), dvoje ima završenu visoku školu likovnog
                usmjerenja, a ostalo su likovni autodidaki koji su dugogodišnjim radom i dostignutom razinom zadovoljili
                kriterije prijama u Društvo.
            </div>
            <div v-else class="overlayText">
                Croatian Society of Fine Artists Varaždin is a professional association of fine artists in the area
                Varaždin County. The association has 25 regular members, 15 of whom have an art academic education
                (academic painter, sculptor, graphic artist, professor of fine arts), two have graduated from a high
                school of fine arts
                directions, and the rest are self-taught art students who have satisfied themselves with many years of
                work and the level they have reached
                criteria for admission to the Society.
            </div>
        </div>
        <div v-else class="bg">
            <img src="@/assets/img/nekad.jpg" alt="">
            <div class="bgMask"></div>
            <div class="bgMaskMsg"></div>
            <div v-if="currentLanguage === 'hr'" class="overlayText">
                Galerijski prostor u nekoj sredini pruža mogućnost uvida u aktualna događanja u likovnoj umjetnosti,
                a samim tim i nastajanje umjetnika. HDLU Varaždin je rijetka strukovna udruga kod nas, koja još uvijek
                nema svoj izložbeni prostor i kao predvodnik suvremenosti ne može u pravoj mjeri pokazati aktivnost
                svojih članova, niti svjetski trend.
            </div>
            <div v-else class="overlayText">
                The gallery space in a certain environment offers the possibility of insight into current events in the
                fine arts, and alone team and emerging artists. HDLU Varaždin is a rare professional association in our
                country, which still does not have its exhibition space and as a leader of modernity cannot show
                its activity to the right extent, nor a world trend.
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const slider = ref(1)
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