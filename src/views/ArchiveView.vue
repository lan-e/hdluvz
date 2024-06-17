<template>
    <div class="page">
        <div class="archive-container">
            <h1>{{ $t("archivePage") }}</h1>
            <div v-if="!isLoaded">
                <Loader />
            </div>
            <div v-else>
                <!-- <div v-for="post in filteredPosts" :key="post.id">
                    <div class="content" v-html="post.value.content.rendered"></div>
                </div>
                <h4 v-if="currentLanguage === 'en'">Download</h4>
                <h4 v-else>Preuzmi</h4>
                <div class="btns">
                    <div v-for="file in filteredFiles" :key="file.id">
                        <a :href="file.value.acf?.file" download>
                            <button>
                                <span> {{ file.value.title.rendered }}</span>
                                <Download />
                            </button>
                        </a>
                    </div>
                </div> -->
                <div>
                    <div class="content">
                        {{ professionalCriteria.content }}
                    </div>
                </div>
                <h4 v-if="currentLanguage === 'en'">Download</h4>
                <h4 v-else>Preuzmi</h4>
                <div class="btns">
                    <div v-for="file in files" :key="file.file">
                        <a :href="'assets/file/' + file.file" download>
                            <button>
                                <span> {{ file.name }}</span>
                                <Download />
                            </button>
                        </a>
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
import Download from "@/components/icons/Download.vue";

export default {
    components: {
        Footer,
        Loader,
        Download,
    },
    data() {
        return {
            isLoaded: false,
            files: [],
            posts: [],
            currentLanguage: localStorage.getItem("i18nextLng"),
        };
    },
    computed: {
        /* filteredFiles() {
            if (this.currentLanguage === "en") {
                return this.files.filter((file) => file.value.link.includes("/hdlu/en/file"));
            } else {
                return this.files.filter((file) => file.value.link.includes("/hdlu/file"));
            }
        },
        filteredPosts() {
            if (this.currentLanguage === "en") {
                return this.posts.filter((post) => post.value.link.includes("/hdlu/en/text") && post.value.title.rendered.includes("Professional criteria"));
            } else {
                return this.posts.filter((post) => post.value.link.includes("/hdlu/text") && post.value.title.rendered.includes("Stručni kriteriji"));
            }
        }, */
    },
    methods: {
        /* async fetchFiles() {
            const data = await fetch("http://localhost/hdlu/wp-json/wp/v2/file");
            const response = await data.json();
            this.files = response.map((resp) => ({ value: resp }));
        },
        async fetchPost() {
            const data = await fetch("http://localhost/hdlu/wp-json/wp/v2/text");
            const response = await data.json();
            this.posts = response.map((resp) => ({ value: resp }));
            this.isLoaded = true;
        }, */
        fetchData() {
            var data = require(`@/lang/${this.currentLanguage}`);
            this.professionalCriteria = data.posts.professionalCriteria;
            this.files = data.file;

            this.isLoaded = true;
        },
        /* getFileSrc(file) {
            return require(`@/assets/file/${file}`);
        }, */
        onLanguageChange() {
            this.currentLanguage = localStorage.getItem("i18nextLng");
            this.fetchData();
        },
    },
    mounted() {
        /* this.fetchFiles();
        this.fetchPost(); */
        this.fetchData();
        window.addEventListener("languageChange", this.onLanguageChange);
    },
    beforeUnmount() {
        window.removeEventListener("languageChange", this.onLanguageChange);
    },
};
</script>
