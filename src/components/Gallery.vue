<template>
    <div class="gallery-container">
        <div v-if="!isLoaded">
            <Loader />
        </div>
        <div v-else class="masonry-with-columns">
            <div v-for="event in filteredEvents" :key="event.value.id" class="event">
                <router-link :to="{ name: 'EventDetails', params: { id: event.value.id } }">
                    <img :src="event.value.acf.image" alt="">
                </router-link>
            </div>
            <div v-for="event in filteredEvents" :key="event.value.id" class="event">
                <router-link :to="{ name: 'EventDetails', params: { id: event.value.id } }">
                    <img :src="event.value.acf.image" alt="">
                </router-link>
            </div>
            <div v-for="event in filteredEvents" :key="event.value.id" class="event">
                <router-link :to="{ name: 'EventDetails', params: { id: event.value.id } }">
                    <img :src="event.value.acf.image" alt="">
                </router-link>
            </div>
            <div v-for="event in filteredEvents" :key="event.value.id" class="event">
                <router-link :to="{ name: 'EventDetails', params: { id: event.value.id } }">
                    <img :src="event.value.acf.image" alt="">
                </router-link>
            </div>
        </div>
    </div>
    <!-- <masonry-wall :items="items" :ssr-columns="3" :column-width="300" :gap="16">
        <template #default="{ item, index }">
            <div :style="{ height: `${(index + 1) * 100}px` }">
                <h1>{{ item.title }}</h1>
                <span>{{ item.description }}</span>
                <img :src="require('../assets/img/' + item.img)" alt="" style="max-width: 300px;">
            </div>
        </template>
</masonry-wall> -->
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue';
import Loader from "@/components/icons/Loader.vue"

const isLoaded = ref(false)
let events = ref([]);
const currentLanguage = ref(localStorage.getItem("i18nextLng"));

async function fetchData() {
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