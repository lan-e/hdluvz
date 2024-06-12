<template>
    <div class="page">
        <div v-if="!isLoaded">
            <Loader />
        </div>
        <div v-else class="eventDetails">
            <div class="eventDetailsContainer">
                <div class="grid-left-side">
                    <h1 class="title">{{ event.title?.rendered }}</h1>
                    <div class="date">{{ event.acf.from_to }}</div>
                    <div class="desc" v-html="event.acf.content"></div>
                </div>
                <div class="grid-right-side">
                    <img class="imgContainer" :src="event.acf?.image" alt="Event Image" />
                </div>
            </div>
        </div>
        <div id="contact">
            <Footer />
        </div>
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
            event: {},
            isLoaded: false,
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
            const data = await fetch(`http://localhost/hdlu/wp-json/wp/v2/events/${this.$route.params.id}`);

            const response = await data.json();
            this.event = response;
            this.isLoaded = true;
        },
    },
    mounted() {
        this.fetchData();
    },
};
</script>
