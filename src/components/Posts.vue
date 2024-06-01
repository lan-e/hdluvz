<template>
    <div class="posts-container">
        <hr>
        <div class="posts">
            <div v-for="post in posts" class="post">
                <!-- <div class="row">
                    <img :src="post.author.avatar_URL" alt="">
                    <div class="name">{{ post.author.name }}</div>
                </div> -->
                <router-link to="/exh">
                    <h3>{{ post.title }}</h3>
                    <div class="content" v-html="removeTags(post.content)"></div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
let posts = ref(null);

async function fetchData() {
    const data = await fetch("https://public-api.wordpress.com/rest/v1.1/sites/hdluvz.wordpress.com/posts/?number=3&pretty=true");
    const response = await data.json();
    posts.value = response.posts;
    console.log(posts.value)
}

function removeTags(content) {
    return content.replace(/<p>/g, '').replace(/<\/p>/g, '')
}

onMounted(() => {
    fetchData()
})
</script>