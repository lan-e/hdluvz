<template>
    <div class="about-container">
        <hr />
        <div class="about">
            <div class="grid-left-side">
                <div v-for="post in filteredPosts" :key="post.id" class="overlayText">
                    <h2 class="title" v-html="post.value.title.rendered"></h2>
                    <div v-html="post.value.content.rendered"></div>
                </div>
            </div>
            <div class="grid-right-side">
                <img src="@/assets/img/about2.png" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [],
            currentLanguage: localStorage.getItem("i18nextLng"),
        };
    },
    computed: {
        filteredPosts() {
            if (this.currentLanguage === "en") {
                return this.posts.filter((post) => post.value.link.includes("/hdlu/en/text") && post.value.title.rendered.includes("About us"));
            } else {
                return this.posts.filter((post) => post.value.link.includes("/hdlu/text") && post.value.title.rendered.includes("O nama"));
            }
        },
    },
    methods: {
        async fetchPost() {
            const data = await fetch("http://localhost/hdlu/wp-json/wp/v2/text");
            const response = await data.json();
            this.posts = response.map((resp) => ({ value: resp }));
            console.log("posts", this.posts);
        },
        onLanguageChange() {
            this.currentLanguage = localStorage.getItem("i18nextLng");
        },
    },
    mounted() {
        this.fetchPost();
        window.addEventListener("languageChange", this.onLanguageChange);
    },
    beforeUnmount() {
        window.removeEventListener("languageChange", this.onLanguageChange);
    },
};
</script>
