<template>
    <div class="events-container">
        <hr />
        <div v-if="!isLoaded">
            <Loader />
        </div>
        <!-- <div v-else class="events">
            <div v-for="event in filteredEvents" :key="event.value.id" class="event">
                <router-link :to="{ name: 'EventDetails', params: { id: event.value.id } }">
                    <img :src="event.value.acf.image" alt="Poster Image" />
                    <h3>{{ event.value.acf.title }}</h3>
                    <h3>{{ event.value.acf.from_to }}</h3>
                </router-link>
            </div>
        </div> -->
    </div>
    <div id="contact">
        <Footer />
    </div>
</template>

<script>
import Loader from "@/components/icons/Loader.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
        Loader,
        Footer,
    },
    data() {
        return {
            isLoaded: false,
            events: [],
            currentLanguage: localStorage.getItem("i18nextLng"),
        };
    },
    computed: {
        /* filteredEvents() {
            if (this.currentLanguage === "en") {
                return this.events.filter((event) => event.value.link.includes("/hdlu/en/event"));
            } else {
                return this.events.filter((event) => event.value.link.includes("/hdlu/event"));
            }
        }, */
    },
    methods: {
        /* async fetchData() {
            const data = await fetch("http://localhost/hdlu/wp-json/wp/v2/events");
            const response = await data.json();
            console.log("alo", response);
            this.events = response.map((resp) => ({ value: resp }));
            this.isLoaded = true;
        }, */
        onLanguageChange() {
            this.currentLanguage = localStorage.getItem("i18nextLng");
        },
    },
    watch: {
        /* currentLanguage(newVal, oldVal) {
            this.fetchData();
        }, */
    },
    mounted() {
        /* this.fetchData(); */
        window.addEventListener("languageChange", this.onLanguageChange);
    },
    beforeUnmount() {
        window.removeEventListener("languageChange", this.onLanguageChange);
    },
};
</script>
