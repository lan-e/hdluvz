<template>
    <div class="events-container">
        <hr>
        <div v-if="!isLoaded">
            <Loader />
        </div>
        <div v-else class="events">
            <div v-for="event in filteredEvents" :key="event.value.id" class="event">
                <router-link :to="{ name: 'EventDetails', params: { id: event.value.id } }">
                    <h3>{{ event.value.title.rendered }}</h3>
                    <img :src="event.value.acf.poster.link" alt="Poster Image">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, onUnmounted } from 'vue';
import i18next from "i18next";
import Loader from "@/components/icons/Loader.vue"

const isLoaded = ref(false)
let events = ref([]);
const currentLanguage = ref(localStorage.getItem("i18nextLng"));

async function fetchData() {
    // const data = await fetch("https://public-api.wordpress.com/rest/v1.1/sites/hdluvz.wordpress.com/posts/?number=3&pretty=true");
    const data = await fetch("http://localhost/hdlu/wp-json/wp/v2/events");
    const response = await data.json();
    events.value = response.map(resp => ({ value: resp }));
    isLoaded.value = true;
}

const filteredEvents = computed(() => {
    if (currentLanguage.value === 'en') {
        return events.value.filter(event => event.value.link.includes('/hdlu/en/event'));
    } else {
        return events.value.filter(event => event.value.link.includes('/hdlu/event'));
    }
});

onMounted(() => {
    fetchData();
    window.addEventListener('languageChange', onLanguageChange);
});

onUnmounted(() => {
    window.removeEventListener('languageChange', onLanguageChange);
});

function onLanguageChange() {
    currentLanguage.value = localStorage.getItem('i18nextLng');
}
</script>
