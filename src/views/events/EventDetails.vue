<template>
    <div class="page">
        <div v-if="!isLoaded">
            <Loader />
        </div>
        <div v-else class="eventDetails">
            <div class="eventDetailsContainer">
                <div class="grid-left-side">
                    <!-- <h1 class="title">{{ event.title?.rendered }}</h1>
                    <div class="date">{{ event.acf.from_to }}</div>
                    <div class="desc" v-html="event.acf.content"></div> -->

                    <h1 class="title">{{ filteredEvent.title }}</h1>
                    <div class="date">{{ filteredEvent.date }}</div>
                    <div class="desc">{{ filteredEvent.content }}</div>
                </div>
                <div class="grid-right-side">
                    <!-- <img class="imgContainer" :src="event.acf?.image" alt="Event Image" /> -->

                    <img class="imgContainer" :src="getImageSrc(filteredEvent.image)" alt="Event Image" @click="loadImageModal(filteredEvent.image)" />
                </div>
                <div class="grid-bottom-side">
                    <div class="event-gallery-container">
                        <div v-for="image in filteredEvent.gallery" @click="loadImageModal(image.url)" class="gallery-image">
                            <img :src="getImageSrc(image.url)" alt="Gallery Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ImageModal v-if="showModal" :image="imageModal" @closeModal="showModal = false" />
        <div id="contact">
            <Footer />
        </div>
    </div>
</template>

<script>
import Loader from "@/components/icons/Loader.vue";
import Footer from "@/components/Footer.vue";
import ImageModal from "@/components/ImageModal.vue";

export default {
    components: {
        Loader,
        Footer,
        ImageModal,
    },
    data() {
        return {
            event: {},
            isLoaded: true,
            currentLanguage: localStorage.getItem("i18nextLng"),
            filteredEvent: null,
            refresh: 0,
            showModal: false,
            imageModal: null,
        };
    },
    computed: {
        /* filteredEvents() {
            this.refresh;
            const events = [
                {
                    id: 1,
                    title: this.$t("event.event1.title"),
                    author: "Maja Vrban Sačić",
                    content: this.$t("event.event1.content"),
                    date: "21.07 - 09.08.2020.",
                    image: "honeymoon.jpg",
                    gallery: [
                        { id: 1, url: "placeholder.jpg" },
                        { id: 2, url: "srastanje-i-prozimanje.jpg" },
                        { id: 3, url: "list-do-lista.jpg" },
                        { id: 4, url: "moji.jpg" },
                        { id: 5, url: "honeymoon.jpg" },
                        { id: 6, url: "zivot-jedne-slike.jpg" },
                        { id: 7, url: "placeholder.jpg" },
                        { id: 8, url: "placeholder.jpg" },
                        { id: 9, url: "placeholder.jpg" },
                        { id: 10, url: "placeholder.jpg" },
                    ],
                },
                {
                    id: 2,
                    title: this.$t("event.event2.title"),
                    author: "Dražen Eisenbeisser",
                    content: this.$t("event.event2.content"),
                    date: "09.03. - 23.03.2021.",
                    image: "nastajanje-u-nestajanju.jpg",
                    gallery: [
                        { id: 1, url: "placeholder.jpg" },
                        { id: 2, url: "srastanje-i-prozimanje.jpg" },
                        { id: 3, url: "list-do-lista.jpg" },
                        { id: 4, url: "moji.jpg" },
                        { id: 5, url: "honeymoon.jpg" },
                        { id: 6, url: "zivot-jedne-slike.jpg" },
                        { id: 7, url: "placeholder.jpg" },
                        { id: 8, url: "placeholder.jpg" },
                    ],
                },
                {
                    id: 3,
                    title: this.$t("event.event3.title"),
                    author: "Andrija Većenaj / Lucija Berdin",
                    content: this.$t("event.event3.content"),
                    date: "23.06. - 17.07.2020.",
                    image: "srastanje-i-prozimanje.jpg",
                    gallery: [
                        { id: 1, url: "placeholder.jpg" },
                        { id: 2, url: "srastanje-i-prozimanje.jpg" },
                        { id: 3, url: "list-do-lista.jpg" },
                    ],
                },
                {
                    id: 4,
                    title: this.$t("event.event4.title"),
                    author: "Dina Zebec",
                    content: this.$t("event.event4.content"),
                    date: "13.10. - 06.11.2020.",
                    image: "list-do-lista.jpg",
                    gallery: [
                        { id: 1, url: "placeholder.jpg" },
                        { id: 2, url: "srastanje-i-prozimanje.jpg" },
                        { id: 3, url: "list-do-lista.jpg" },
                        { id: 4, url: "moji.jpg" },
                        { id: 5, url: "honeymoon.jpg" },
                        { id: 6, url: "zivot-jedne-slike.jpg" },
                    ],
                },
                {
                    id: 5,
                    title: this.$t("event.event5.title"),
                    author: "Rusa Trajkova",
                    content: this.$t("event.event5.content"),
                    date: "25.02. - 13.03.2020.",
                    image: "moji.jpg",
                    gallery: [
                        { id: 1, url: "placeholder.jpg" },
                        { id: 2, url: "srastanje-i-prozimanje.jpg" },
                        { id: 3, url: "list-do-lista.jpg" },
                        { id: 4, url: "moji.jpg" },
                        { id: 5, url: "honeymoon.jpg" },
                        { id: 6, url: "zivot-jedne-slike.jpg" },
                        { id: 7, url: "placeholder.jpg" },
                        { id: 8, url: "placeholder.jpg" },
                        { id: 9, url: "placeholder.jpg" },
                        { id: 10, url: "placeholder.jpg" },
                    ],
                },
                {
                    id: 6,
                    title: this.$t("event.event6.title"),
                    author: "Jasmina Jakopanec",
                    content: this.$t("event.event6.content"),
                    date: "26.03. - 09.04.2021.",
                    image: "zivot-jedne-slike.jpg",
                    gallery: [{ id: 1, url: "placeholder.jpg" }],
                },
            ];
            return events;
        }, */
    },
    methods: {
        fetchData() {
            var data = require(`@/lang/${this.currentLanguage}`);
            this.events = data.event;

            this.filterEvent();
        },
        /* filterEvent() {
            this.refresh++;
            const eventId = parseInt(this.$route.params.id, 10);
            this.filteredEvent = this.filteredEvents.find((event) => event.id === eventId);
            this.isLoaded = true;
        }, */
        filterEvent() {
            this.refresh++;
            const eventId = parseInt(this.$route.params.id, 10);
            this.filteredEvent = this.events.find((event) => event.id === eventId);
            this.isLoaded = true;
        },
        getImageSrc(image) {
            return require(`@/assets/img/events/${image}`);
        },
        loadImageModal(image) {
            this.imageModal = this.getImageSrc(image);
            this.showModal = true;
        },
        onLanguageChange() {
            this.currentLanguage = localStorage.getItem("i18nextLng");
            this.fetchData();
        },
    },
    beforeMount() {
        this.fetchData();
        /* this.filterEvent(); */
    },
    mounted() {
        window.addEventListener("languageChange", this.onLanguageChange);
    },
};
</script>
