<template>
    <div class="gallery-container">
        <div v-if="!isLoaded">
            <Loader />
        </div>
        <div v-else class="masonry-with-columns">
            <!-- <div v-for="event in filteredEvents" :key="event.value.id" class="event">
                <router-link :to="{ name: 'EventDetails', params: { id: event.value.id } }">
                    <img :src="event.value.acf.image" alt="" />
                    <h3>{{ event.value.title.rendered }}</h3>
                    <h4>{{ event.value.acf.from_to }}</h4>
                </router-link>
            </div> -->
            <!-- <div v-for="event in filteredEvents" :key="event.id" class="event">
                <router-link :to="{ name: 'EventDetails', params: { id: event.id } }">
                    <img :src="getImageSrc(event.image)" alt="" />
                    <h3>{{ event.title }}</h3>
                    <h4>{{ event.date }}</h4>
                </router-link>
            </div> -->
            <div v-for="event in events" :key="event.id" class="event">
                <router-link :to="{ name: 'EventDetails', params: { id: event.id } }">
                    <img :src="getImageSrc(event.image)" alt="" />
                    <h3>{{ event.title }}</h3>
                    <h4>{{ event.date }}</h4>
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
            /* isLoaded: false, */
            isLoaded: true,
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
        /* filteredEvents() {
            const events2 = [
                {
                    id: 1,
                    title: this.$t("event.event1.title"),
                    author: "Maja Vrban Sačić",
                    content: this.$t("event.event1.content"),
                    date: "21.07 - 09.08.2020.",
                    image: "honeymoon.jpg",
                },
                {
                    id: 2,
                    title: this.$t("event.event2.title"),
                    author: "Dražen Eisenbeisser",
                    content: this.$t("event.event2.content"),
                    date: "09.03. - 23.03.2021.",
                    image: "nastajanje-u-nestajanju.jpg",
                },
                {
                    id: 3,
                    title: this.$t("event.event3.title"),
                    author: "Andrija Većenaj / Lucija Berdin",
                    content: this.$t("event.event3.content"),
                    date: "23.06. - 17.07.2020.",
                    image: "srastanje-i-prozimanje.jpg",
                },
                {
                    id: 4,
                    title: this.$t("event.event4.title"),
                    author: "Dina Zebec",
                    content: this.$t("event.event4.content"),
                    date: "13.10. - 06.11.2020.",
                    image: "list-do-lista.jpg",
                },
                {
                    id: 5,
                    title: this.$t("event.event5.title"),
                    author: "Rusa Trajkova",
                    content: this.$t("event.event5.content"),
                    date: "25.02. - 13.03.2020.",
                    image: "moji.jpg",
                },
                {
                    id: 6,
                    title: this.$t("event.event6.title"),
                    author: "Jasmina Jakopanec",
                    content: this.$t("event.event6.content"),
                    date: "26.03. - 09.04.2021.",
                    image: "zivot-jedne-slike.jpg",
                },
            ];
            return events;
        }, */
    },
    methods: {
        /* async fetchData() {
            const data = await fetch("http://localhost/hdlu/wp-json/wp/v2/events?per_page=12");
            const response = await data.json();
            this.events = response.map((resp) => ({ value: resp }));
            this.isLoaded = true;
        }, */
        fetchData() {
            var data = require(`@/lang/${this.currentLanguage}`);
            this.events = data.event;

            this.isLoaded = true;
        },
        onLanguageChange() {
            this.currentLanguage = localStorage.getItem("i18nextLng");
        },
        getImageSrc(image) {
            return require(`@/assets/img/events/${image}`);
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
