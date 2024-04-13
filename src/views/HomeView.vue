<template>
  <div class="home">
    <div class="bg">
      <img src="@/assets/img/homebg.png" alt="">
      <div class="bgMask"></div>
      <div class="overlayText"><span class="red">HDLU</span> VARAŽDIN</div>
    </div>
    <div class="posts">
      <div v-for="post in posts" class="post">
        <div class="row">
          <img :src="post.author.avatar_URL" alt="">
          <div class="name">{{ post.author.name }}</div>
        </div>
        <h3>{{ post.title }}</h3>
        <div class="content" v-html="removeTags(post.content)"></div>
      </div>
    </div>
    <Gallery />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Gallery from '@/components/Gallery.vue';
let posts = ref(null);

async function fetchData() {
  const data = await fetch("https://public-api.wordpress.com/rest/v1.1/sites/hdluvz.wordpress.com/posts/?number=2&pretty=true");
  const response = await data.json();
  posts.value = response.posts;
}

function removeTags(content) {
  return content.replace(/<p>/g, '').replace(/<\/p>/g, '')
}

onMounted(() => {
  fetchData()
})
</script>
