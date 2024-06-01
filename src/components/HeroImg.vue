<template>
    <div class="heroimg">
        <div v-if="slider === 1" class="bg">
            <img src="@/assets/img/homebg.png" alt="">
            <div class="bgMask"></div>
            <div class="overlayText">
                <h4>DANAS</h4>
                Hrvatsko društvo likovnih umjetnika Varaždin strukovna je udruga likovnih umjetnika na području
                Varaždinske županije. Udruga broji 25 redovitih članova od kojih 15 ima likovnu akademsku naobrazbu
                (akademski slikar, kipar, grafičar, profesor likovne kulture), dvoje ima završenu visoku školu likovnog
                usmjerenja, a ostalo su likovni autodidaki koji su dugogodišnjim radom i dostignutom razinom zadovoljili
                kriterije prijama u Društvo.
            </div>
        </div>
        <div v-else class="bg">
            <img src="@/assets/img/nekad.jpg" alt="">
            <div class="bgMask"></div>
            <div class="overlayText">
                <h4>NEKAD</h4>
                Galerijski prostor u nekoj sredini pruža mogućnost uvida u aktualna događanja u likovnoj umjetnosti, a
                samim
                tim i nastajanje umjetnika. HDLU Varaždin je rijetka strukovna udruga kod nas, koja još uvijek nema svoj
                izložbeni prostor i kao predvodnik suvremenosti ne moće u pravoj mjeri pokazati aktivnost svojih
                članova,
                niti svjetski trend.
                <div class="showMoreBtn">...više</div>
            </div>
        </div>
        <div class="sliderIcons">
            <div @click="slider = 1">
                <Slider :active="slider === 1" />
            </div>
            <div @click="slider = 2">
                <Slider :active="slider === 2" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import Slider from "@/components/icons/Slider.vue"

const slider = ref(1)
</script>