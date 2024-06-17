<template>
    <div class="about-container">
        <hr />
        <div class="about">
            <div class="grid-left-side">
                <!-- <div v-for="post in filteredPosts" :key="post.id" class="overlayText">
                    <h2 class="title" v-html="post.value.title.rendered"></h2>
                    <div v-html="post.value.content.rendered"></div>
                </div> -->
                <h2 class="title">{{ $t("posts.aboutUs.title") }}</h2>
                <div>{{ $t("posts.aboutUs.content") }}</div>
            </div>
            <div class="grid-right-side">
                <img src="@/assets/img/about2.png" @click="loadImageModal('about2.png')" alt="" />
            </div>
        </div>
        <ImageModal v-if="showModal" :image="imageModal" @closeModal="showModal = false" />
        <div id="contact">
            <Footer />
        </div>
    </div>
</template>

<script>
import ImageModal from "@/components/ImageModal.vue";

export default {
    components: {
        ImageModal,
    },
    data() {
        return {
            posts: [],
            currentLanguage: localStorage.getItem("i18nextLng"),
            showModal: false,
            imageModal: null,
        };
    },
    computed: {
        /* filteredPosts() {
            if (this.currentLanguage === "en") {
                return this.posts.filter((post) => post.value.link.includes("/hdlu/en/text") && post.value.title.rendered.includes("About us"));
            } else {
                return this.posts.filter((post) => post.value.link.includes("/hdlu/text") && post.value.title.rendered.includes("O nama"));
            }
        }, */
    },
    methods: {
        /* async fetchPost() {
            const data = await fetch("http://localhost/hdlu/wp-json/wp/v2/text");
            const response = await data.json();
            this.posts = response.map((resp) => ({ value: resp }));
            console.log("posts", this.posts);
        }, */
        onLanguageChange() {
            this.currentLanguage = localStorage.getItem("i18nextLng");
        },
        getImageSrc(image) {
            return require(`@/assets/img/${image}`);
        },
        loadImageModal(image) {
            this.imageModal = this.getImageSrc(image);
            this.showModal = true;
        },
    },
    mounted() {
        /* this.fetchPost(); */
        window.addEventListener("languageChange", this.onLanguageChange);
    },
    beforeUnmount() {
        window.removeEventListener("languageChange", this.onLanguageChange);
    },
};
</script>
