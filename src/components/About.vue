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
            <div>
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
        </div>
        <hr>
    </div>
</template>

<script setup>
import Button from './icons/Button.vue';
</script>