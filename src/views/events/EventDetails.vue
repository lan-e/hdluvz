<template>
    <div v-if="!isLoaded">
        <Loader />
    </div>
    <div class="eventDetails" v-else>
        <h1 class="title">{{ event.title?.rendered }}</h1>
        <div class="desc" v-html="event.content.rendered"></div>
        <img class="imgContainer" :src="event.acf?.poster?.link" alt="Event Image">
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import Loader from "@/components/icons/Loader.vue"

const route = useRoute()
let event = ref([]);
const isLoaded = ref(false)

async function fetchData() {
    const data = await fetch(`http://localhost/hdlu/wp-json/wp/v2/events/${route.params.id}`);
    const response = await data.json();
    event.value = response;
    isLoaded.value = true;
}

onMounted(() => {
    fetchData()
})
</script>