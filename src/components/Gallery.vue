<template>
    <div class="gallery-container">
        <div v-if="!isLoaded">
            <Loader />
        </div>
        <div v-else class="masonry-with-columns">
            <div v-for="event in filteredEvents" :key="event.value.id" class="event">
                <router-link :to="{ name: 'EventDetails', params: { id: event.value.id } }">
                    <img :src="event.value.acf.image" alt="" />
                    <h3>{{ event.value.title.rendered }}</h3>
                    <h4>{{ event.value.acf.from_to }}</h4>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Loader from "@/components/icons/Loader.vue";

export default {
    components: {
        Loader,
    },
    data() {
        return {
            isLoaded: false,
            events: [],
            currentLanguage: localStorage.getItem("i18nextLng"),
        };
    },
    computed: {
        filteredEvents() {
            if (this.currentLanguage === "en") {
                return this.events.filter((event) => event.value.link.includes("/hdlu/en/event"));
            } else {
                return this.events.filter((event) => event.value.link.includes("/hdlu/event"));
            }
        },
    },
    methods: {
        async fetchData() {
            const data = await fetch("http://localhost/hdlu/wp-json/wp/v2/events?per_page=12");
            const response = await data.json();
            this.events = response.map((resp) => ({ value: resp }));
            this.isLoaded = true;
        },
        onLanguageChange() {
            this.currentLanguage = localStorage.getItem("i18nextLng");
        },
    },
    mounted() {
        this.fetchData();
        window.addEventListener("languageChange", this.onLanguageChange);
    },
    beforeUnmount() {
        window.removeEventListener("languageChange", this.onLanguageChange);
    },
};
</script>
