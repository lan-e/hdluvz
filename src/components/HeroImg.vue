<template>
    <div class="heroimg">
        <div v-if="currentLanguage === 'hr'" class="title">
            <div @click="slider = 1">
                <h4>DANAS</h4>
            </div>
            <div @click="slider = 2">
                <h4>NEKAD</h4>
            </div>
        </div>
        <div v-if="currentLanguage === 'en'" class="title">
            <div @click="slider = 1">
                <h4>TODAY</h4>
            </div>
            <div @click="slider = 2">
                <h4>BEFORE</h4>
            </div>
        </div>
        <div class="bg">
            <img v-if="slider == 1" src="@/assets/img/homebg.png" alt="">
            <img v-else src="@/assets/img/nekad.jpg" alt="">
            <div class="bgMask"></div>
            <div class="bgMaskMsg"></div>
            <div v-for="post in filteredPosts" :key="post.id" class="overlayText">
                <div v-html="post.value.content.rendered"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue"

const slider = ref(1)
let posts = ref([]);
const currentLanguage = ref(localStorage.getItem("i18nextLng"));

async function fetchPost() {
    const data = await fetch("http://localhost/hdlu/wp-json/wp/v2/text");
    const response = await data.json();
    posts.value = response.map(resp => ({ value: resp }));
    console.log("posts", posts.value)
}

const filteredPosts = computed(() => {
    if (currentLanguage.value === 'en') {
        if (slider.value == 1) {
            return posts.value.filter(post => post.value.link.includes('/hdlu/en/text') && post.value.title.rendered.includes('Today'));
        }
        else return posts.value.filter(post => post.value.link.includes('/hdlu/en/text') && post.value.title.rendered.includes('Before'));
    } else {
        if (slider.value == 1) {
            return posts.value.filter(post => post.value.link.includes('/hdlu/text') && post.value.title.rendered.includes('Danas'));

        }
        else return posts.value.filter(post => post.value.link.includes('/hdlu/text') && post.value.title.rendered.includes('Nekad'));
    }
});

onMounted(() => {
    fetchPost()
    window.addEventListener('languageChange', onLanguageChange);
});

onUnmounted(() => {
    window.removeEventListener('languageChange', onLanguageChange);
});

function onLanguageChange() {
    currentLanguage.value = localStorage.getItem('i18nextLng');
}
</script>