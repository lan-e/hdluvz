<template>
    <div class="posts-container">
        <hr>
        <div class="posts">
            <div v-for="post in posts" :key="post.value.id" class="post">
                <router-link :to="`/exh/${post.value.id}`">
                    <h3>{{ post.value.title.rendered }}</h3>
                    <div class="content" v-html="post.value.content.rendered"></div>
                    <img :src="post.value.acf.poster.link" alt="Poster Image">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
let posts = ref([]);

async function fetchData() {
    // const data = await fetch("https://public-api.wordpress.com/rest/v1.1/sites/hdluvz.wordpress.com/posts/?number=3&pretty=true");
    const data = await fetch("http://localhost/hdlu/wp-json/wp/v2/events/?number=3&pretty=true");
    const response = await data.json();
    posts.value = response.map(resp => ({ value: resp }));
}

onMounted(() => {
    fetchData()
})
</script>