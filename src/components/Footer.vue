<template>
    <div class="footer-container">
        <hr />
        <div class="footer">
            <div class="col">
                <Logo />
                <div>{{ $t("logoName") }}</div>
            </div>
            <div class="info">
                <div v-if="currentLanguage === 'hr'">
                    <b>Radno vrijeme</b>
                    <div>pon-pet: 10-12, 18-20</div>
                    <div>sub, ned: 10-12</div>
                </div>
                <div v-else>
                    <b>Working hours</b>
                    <div>mon-fri: 10-12, 18-20</div>
                    <div>sat, sun: 10-12</div>
                </div>
                <div class="numbers">
                    <div><a href="tel:0951995209" target="_blank">095 199 5209</a></div>
                    <div><a href="tel:0989169455" target="_blank">098 916 9455</a></div>
                </div>
                <div><a href="mailto:hdlu.varazdin@gmail.com" target="_blank">hdlu.varazdin@gmail.com</a></div>
                <div><a href="https://maps.app.goo.gl/36mHeHFZ2efT3dYaA" target="_blank"> Šetalište J.J. Strossmayer 42000 Varaždin </a></div>
            </div>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1338.7775656091676!2d16.334517867975244!3d46.30957231279621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4768abb7cc429c87%3A0x1c055b0a3c2a8347!2sGalerija%20HDLU%20Vara%C5%BEdin!5e0!3m2!1shr!2shr!4v1717924431597!5m2!1shr!2shr"
                    width="600"
                    height="300"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    </div>
    <div class="allrights">
        HDLU Varaždin ©
        {{ $t("allRights") }}
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Logo from "./icons/Logo.vue";
import i18next from "i18next";

const currentLanguage = ref(localStorage.getItem("i18nextLng"));

onMounted(() => {
    window.addEventListener("languageChange", onLanguageChange);
});

onUnmounted(() => {
    window.removeEventListener("languageChange", onLanguageChange);
});

function onLanguageChange() {
    currentLanguage.value = localStorage.getItem("i18nextLng");
}
</script>
