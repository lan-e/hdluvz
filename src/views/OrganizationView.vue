<template>
    <div class="page">
        <div class="organization-container">
            <h1>{{ $t("orgPage") }}</h1>
            <div v-if="!isLoaded">
                <Loader />
            </div>
            <!-- <div v-else class="organization-members">
                <div class="member-container">
                    <h4 v-if="currentLanguage == 'en'">Honorable Court</h4>
                    <h4 v-else>Časni sud</h4>
                    <div v-for="member in members" :key="member.value.id" class="members">
                        <div v-if="member.value.acf?.title.toLowerCase() === 'časni sud'">
                            <div>{{ member.value.title.rendered }}</div>
                        </div>
                    </div>
                </div>

                <div class="member-container">
                    <h4 v-if="currentLanguage == 'en'">Board of directors</h4>
                    <h4 v-else>Upravni odbor</h4>
                    <div v-for="member in members" :key="member.value.id" class="members">
                        <div v-if="member.value.acf?.title.toLowerCase() === 'upravni odbor'">
                            <div>{{ member.value.title.rendered }}</div>
                        </div>
                    </div>
                </div>

                <div class="member-container">
                    <h4 v-if="currentLanguage == 'en'">Artistic advice</h4>
                    <h4 v-else>Umjetnički savjet</h4>
                    <div v-for="member in members" :key="member.value.id" class="members">
                        <div v-if="member.value.acf?.title.toLowerCase() === 'umjetnički savjet'">
                            <div>{{ member.value.title.rendered }}</div>
                        </div>
                    </div>
                </div>

                <div class="member-container">
                    <h4 v-if="currentLanguage == 'en'">Supervisory board</h4>
                    <h4 v-else>Nadzorni odbor</h4>
                    <div v-for="member in members" :key="member.value.id" class="members">
                        <div v-if="member.value.acf?.title.toLowerCase() === 'nadzorni odbor'">
                            <div>{{ member.value.title.rendered }}</div>
                        </div>
                    </div>
                </div>

                <div class="member-container">
                    <h4 v-if="currentLanguage == 'en'">Commission for artistic performances</h4>
                    <h4 v-else>Komisija za likovne priredbe</h4>
                    <div v-for="member in members" :key="member.value.id" class="members">
                        <div v-if="member.value.acf?.title.toLowerCase() === 'komisija za likovne priredbe'">
                            <div>{{ member.value.title.rendered }}</div>
                        </div>
                    </div>
                </div>

                <div class="member-container">
                    <h4 v-if="currentLanguage == 'en'">Program manager</h4>
                    <h4 v-else>Programski voditelj</h4>
                    <div v-for="member in members" :key="member.value.id" class="members">
                        <div v-if="member.value.acf?.title.toLowerCase() === 'programski voditelj'">
                            <div>{{ member.value.title.rendered }}</div>
                        </div>
                    </div>
                </div>
            </div> -->
            <div v-else class="organization-members">
                <div class="member-container">
                    <h4 v-if="currentLanguage == 'en'">Honorable Court</h4>
                    <h4 v-else>Časni sud</h4>
                    <div v-for="member in members" :key="member.name + '-' + member.title" class="members">
                        <div v-if="member.title.toLowerCase() === 'časni sud' || member.title.toLowerCase() === 'honorable court'">
                            <a :href="member.portfolio"> {{ member.name }}</a>
                        </div>
                    </div>
                </div>

                <div class="member-container">
                    <h4 v-if="currentLanguage == 'en'">Board of directors</h4>
                    <h4 v-else>Upravni odbor</h4>
                    <div v-for="member in members" :key="member.name + '-' + member.title" class="members">
                        <div v-if="member.title.toLowerCase() === 'upravni odbor' || member.title.toLowerCase() === 'board of directors'">
                            <a :href="member.portfolio"> {{ member.name }}</a>
                        </div>
                    </div>
                </div>

                <div class="member-container">
                    <h4 v-if="currentLanguage == 'en'">Artistic advice</h4>
                    <h4 v-else>Umjetnički savjet</h4>
                    <div v-for="member in members" :key="member.name + '-' + member.title" class="members">
                        <div v-if="member.title.toLowerCase() === 'umjetnički savjet' || member.title.toLowerCase() === 'artistic advice'">
                            <a :href="member.portfolio"> {{ member.name }}</a>
                        </div>
                    </div>
                </div>

                <div class="member-container">
                    <h4 v-if="currentLanguage == 'en'">Supervisory board</h4>
                    <h4 v-else>Nadzorni odbor</h4>
                    <div v-for="member in members" :key="member.name + '-' + member.title" class="members">
                        <div v-if="member.title.toLowerCase() === 'nadzorni odbor' || member.title.toLowerCase() === 'supervisory board'">
                            <a :href="member.portfolio"> {{ member.name }}</a>
                        </div>
                    </div>
                </div>

                <div class="member-container">
                    <h4 v-if="currentLanguage == 'en'">Commission for artistic performances</h4>
                    <h4 v-else>Komisija za likovne priredbe</h4>
                    <div v-for="member in members" :key="member.name + '-' + member.title" class="members">
                        <div v-if="member.title.toLowerCase() === 'komisija za likovne priredbe' || member.title.toLowerCase() === 'commission for artistic performances'">
                            <a :href="member.portfolio"> {{ member.name }}</a>
                        </div>
                    </div>
                </div>

                <div class="member-container">
                    <h4 v-if="currentLanguage == 'en'">Program manager</h4>
                    <h4 v-else>Programski voditelj</h4>
                    <div v-for="member in members" :key="member.name + '-' + member.title" class="members">
                        <div v-if="member.title.toLowerCase() === 'programski voditelj' || member.title.toLowerCase() === 'program manager'">
                            <a :href="member.portfolio"> {{ member.name }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="contact">
            <Footer />
        </div>
    </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Loader from "@/components/icons/Loader.vue";

export default {
    components: {
        Footer,
        Loader,
    },
    data() {
        return {
            isLoaded: false,
            members: null,
            currentLanguage: localStorage.getItem("i18nextLng"),
        };
    },
    methods: {
        /* async fetchData() {
            // const data = await fetch("https://public-api.wordpress.com/rest/v1.1/sites/hdluvz.wordpress.com/posts/?number=3&pretty=true");
            const data = await fetch("http://localhost/hdlu/wp-json/wp/v2/organization?per_page=50");
            const response = await data.json();
            this.members = response.map((resp) => ({ value: resp }));
            this.isLoaded = true;
        }, */
        fetchData() {
            var data = require(`@/lang/${this.currentLanguage}`);
            this.members = data.organization;

            this.isLoaded = true;
        },
        onLanguageChange() {
            this.currentLanguage = localStorage.getItem("i18nextLng");
            this.fetchData();
        },
    },
    mounted() {
        this.fetchData();
        window.addEventListener("languageChange", this.onLanguageChange);
    },
    beforeDestroy() {
        window.removeEventListener("languageChange", this.onLanguageChange);
    },
};
</script>
