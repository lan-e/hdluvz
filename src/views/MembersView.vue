<template>
    <div class="page">
        <div class="members-container">
            <h1>{{ $t("membersPage") }}</h1>
            <div v-if="!isLoaded">
                <Loader />
            </div>
            <div v-else class="members-all">
                <!--  <div class="member-container">
                    <h4 v-if="currentLanguage == 'en'">Artists</h4>
                    <h4 v-else>Umjetnici</h4>
                    <div v-for="member in members" :key="member.value.id" class="members">
                        <div v-if="member.value.acf?.title.toLowerCase() === 'umjetnici'">
                            <div>{{ member.value.title.rendered }}</div>
                        </div>
                    </div>
                </div>
                <div class="member-container">
                    <h4 v-if="currentLanguage == 'en'">Curator team</h4>
                    <h4 v-else>Kustoski tim</h4>
                    <div v-for="member in members" :key="member.value.id" class="members">
                        <div v-if="member.value.acf?.title.toLowerCase() === 'kustoski tim'">
                            <div>{{ member.value.title.rendered }}</div>
                        </div>
                    </div>
                </div> -->
                <div class="member-container">
                    <h4 v-if="currentLanguage == 'en'">Artists</h4>
                    <h4 v-else>Umjetnici</h4>
                    <div v-for="member in members" :key="member.name + '-' + member.title" class="members">
                        <div v-if="member.title.toLowerCase() === 'umjetnici' || member.title.toLowerCase() === 'artists'">
                            <a :href="member.portfolio"> {{ member.name }}</a>
                        </div>
                    </div>
                </div>
                <div class="member-container">
                    <h4 v-if="currentLanguage == 'en'">Curator team</h4>
                    <h4 v-else>Kustoski tim</h4>
                    <div v-for="member in members" :key="member.name + '-' + member.title" class="members">
                        <div v-if="member.title.toLowerCase() === 'kustoski tim' || member.title.toLowerCase() === 'curator team'">
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
            members: [],
            currentLanguage: localStorage.getItem("i18nextLng"),
        };
    },
    methods: {
        /* async fetchData() {
            // const data = await fetch("https://public-api.wordpress.com/rest/v1.1/sites/hdluvz.wordpress.com/posts/?number=3&pretty=true");
            const data = await fetch("http://localhost/hdlu/wp-json/wp/v2/member?per_page=50");
            const response = await data.json();
            this.members = response.map((resp) => ({ value: resp }));
            this.isLoaded = true;
        }, */
        fetchData() {
            var data = require(`@/lang/${this.currentLanguage}`);
            this.members = data.member;

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
