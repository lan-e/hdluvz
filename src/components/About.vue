<template>
    <div class="about-container">
        <div class="about">
            <div class="grid-left-side">
                <div v-if="currentLanguage === 'hr'">
                    <h1 class="title">O nama</h1>
                    <div class="text">
                        Svaka poslovno sposobna osoba koja ispunjava kriterije Statuta može postati član HDLU Varaždin. Statut predviđa i povremeno članstvo za one koji sudjeluju u realizaciji
                        programa i pomažu radu udruge.<br /><br />
                        Članovi HDLU Varaždin, većinom umjetnici s formalnim obrazovanjem, rade na razvoju i promociji suvremene likovne umjetnosti i kulture. Manji dio članova nema formalno
                        obrazovanje, ali ima značajan umjetnički rad i profesionalne kritike.<br />
                        <br />
                        Galerija HDLU Varaždin, smještena u Kuli stražarnici Starog grada u Varaždinu, organizira izložbe članova i gostujućih umjetnika, privlačeći mnoge posjetitelje, uključujući
                        turiste. Raznolik profil posjetitelja pokazuje važnost suvremenog likovnog stvaralaštva za kulturu grada. <br /><br />HDLU Varaždin poziva donatore da podrže razvoj likovne
                        umjetnosti. Udruga nudi medijsku vidljivost, marketinške aktivnosti ili umjetnička djela kao nadoknadu. <br /><br />
                        HDLU Varaždin surađuje s gospodarskim subjektima i pojedincima, nudeći usluge kao što su kupnja umjetničkih djela s certifikatom, vizualni identitet, savjeti za uređenje
                        prostora i valorizacija umjetničkih djela.
                    </div>
                </div>
                <div v-else>
                    <h1 class="title">About us</h1>
                    <div class="text">
                        Every legally capable person who meets the criteria of the Statute can become a member of HDLU Varaždin. The Statute also provides for occasional membership for those who
                        participate in the implementation of programs and assist in the work of the association.<br /><br />
                        Members of HDLU Varaždin, mostly artists with formal education, work on the development and promotion of contemporary visual arts and culture. A smaller number of members do
                        not have formal education but have significant artistic work and professional critiques.<br /><br />
                        The gallery of HDLU Varaždin, located in the Watchtower of the Old Town in Varaždin, organizes exhibitions of members and guest artists, attracting many visitors, including
                        tourists. The diverse profile of visitors shows the importance of contemporary visual creativity for the city's culture.<br /><br />
                        HDLU Varaždin invites donors to support the development of visual arts. The association offers media visibility, marketing activities, or artworks as compensation.<br /><br />
                        HDLU Varaždin collaborates with economic entities and individuals, offering services such as the purchase of certified artworks, visual identity, space decoration advice, and
                        the evaluation of artworks.
                    </div>
                </div>
            </div>
            <div class="grid-right-side">
                <img src="@/assets/img/about2.png" alt="" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

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
