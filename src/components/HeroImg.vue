<template>
    <div class="heroimg">
        <!-- <div v-if="currentLanguage === 'hr'" class="title">
            <div @click="slider = true">
                <h4 class="left" :class="{ active: slider }">DANAS</h4>
            </div>
            <div @click="slider = false">
                <h4 class="right" :class="{ active: !slider }">NEKAD</h4>
            </div>
        </div>
        <div v-if="currentLanguage === 'en'" class="title">
            <div @click="slider = true">
                <h4 class="left" :class="{ active: slider }">TODAY</h4>
            </div>
            <div @click="slider = false">
                <h4 class="right" :class="{ active: !slider }">BEFORE</h4>
            </div>
        </div> -->
        <div class="title">
            <div @click="slider = true">
                <h4 class="left" :class="{ active: slider }">{{ $t("posts.today.title") }}</h4>
            </div>
            <div @click="slider = false">
                <h4 class="right" :class="{ active: !slider }">{{ $t("posts.before.title") }}</h4>
            </div>
        </div>
        <div class="bg">
            <img v-if="slider == 1" src="@/assets/img/homebg.png" alt="" />
            <img v-else src="@/assets/img/nekad.jpg" alt="" />
            <div class="bgMask"></div>
            <div class="bgMaskMsg"></div>
            <!-- <div v-for="post in filteredPosts" :key="post.id" class="overlayText">
                <div v-html="post.value.content.rendered"></div>
            </div> -->
            <div class="overlayText">
                <div v-if="slider">
                    {{ $t("posts.today.content") }}
                </div>
                <div v-else>
                    {{ $t("posts.before.content") }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slider: true,
            posts: [],
            currentLanguage: localStorage.getItem("i18nextLng"),
        };
    },
    computed: {
        /* filteredPosts() {
            if (this.currentLanguage === "en") {
                if (this.slider === false) {
                    return this.posts.filter((post) => post.value.link.includes("/hdlu/en/text") && post.value.title.rendered.includes("Today"));
                } else {
                    return this.posts.filter((post) => post.value.link.includes("/hdlu/en/text") && post.value.title.rendered.includes("Before"));
                }
            } else {
                if (this.slider === false) {
                    return this.posts.filter((post) => post.value.link.includes("/hdlu/text") && post.value.title.rendered.includes("Danas"));
                } else {
                    return this.posts.filter((post) => post.value.link.includes("/hdlu/text") && post.value.title.rendered.includes("Nekad"));
                }
            }
        }, */
    },
    methods: {
        /* async fetchPost() {
            const data = await fetch("http://localhost/hdlu/wp-json/wp/v2/text");
            const response = await data.json();
            this.posts = response.map((resp) => ({ value: resp }));
            console.log("posts", this.posts);
        },
        onLanguageChange() {
            this.currentLanguage = localStorage.getItem("i18nextLng");
        }, */
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
