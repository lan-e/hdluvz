<template>
    <div class="page">
        <div v-if="!isLoaded">
            <Loader />
        </div>
        <div v-else class="eventDetails">
            <h1 class="title">{{ event.title?.rendered }}</h1>
            <div class="date">{{ event.acf.from_to }}</div>
            <div class="desc" v-html="event.acf.content"></div>
            <img class="imgContainer" :src="event.acf?.image" alt="Event Image">
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import Loader from "@/components/icons/Loader.vue"
import Footer from '@/components/Footer.vue';

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