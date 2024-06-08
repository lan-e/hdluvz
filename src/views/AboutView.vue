<template>
    <div class="page">
        <div class="about-container">
            <h1>{{ $t("aboutPage") }}</h1>
            <h4>Svoje ciljeve HDLU Varaždin ostvaruje na području kulture, a to su:</h4>
            <ul>
                <li>zaštita i promicanje zajedničkih kulturnih i strukovnih interesa članstva</li>
                <li>podržavanje i zaštita likovnog i multimedijalnog rada svojih članova i prezentacije njihove recentne
                    produkcije</li>
                <li>podržavanje i zaštita rada članova povjesničara umjetnosti, likovnih kritičara i teoretičara
                    umjetnosti
                    i prezentacija njihovih stručnih i znanstvenih radova o suvremenoj likovnoj umjetnosti</li>
                <li>razvijanje, poticanje, unapređivanje i promicanje likovne i multimedijske umjetnosti</li>
                <li>trajno utjecanje na oblikovanje kulturne politike grada Varaždina, Varaždinske županije i Republike
                    Hrvatske; sudjelovanje u pripremama i raspravama pri donošenju zakona i propisa koji utječu na
                    razvoj,
                    prezentaciju i položaj likovnoga i multimedijskog stvaralaštva</li>
                <li>zalaganje za raznolik i stalan napredak, organizaciju i prezentaciju varaždinske i hrvatske likovne
                    i
                    multimedijske umjetnosti u Hrvatskoj i u svijetu</li>
                <li>unapređivanje i zaštita slobode likovnog stvaralaštva i djelovanja te položaja likovnih i
                    multimedijskih
                    umjetnika u društvu</li>
                <li>aktivno sudjelovanje u trajnom osiguravanju i zaštiti autorskih, umjetničkih, materijalnih i
                    socijalnih
                    prava članova i njihovih obitelji</li>
                <li>rad na formiranju opće društvene svijesti o značaju suvremene umjetnosti i njezinom razumijevanju
                    kao
                    sastavnog dijela svakodnevice suvremenog društva</li>
                <li>edukacijom djece i mladih podizanje kvalitete života u zajednici</li>
                <li>razvijanje navike i potrebe za spontanim odlaskom u galeriju kod pojedinaca i cijele obitelji</li>
                <li>povećanje publike i razvijanje tržišta umjetnina</li>
            </ul>
        </div>
        <div id="contact">
            <Footer />
        </div>
    </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue"
</script>