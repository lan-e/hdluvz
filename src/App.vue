<template>
    <div v-if="this.loading">
        <Loader />
    </div>
    <div v-else>
        <Navigation />
        <router-view />
    </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Loader from "./components/icons/Loader.vue";

export default {
    name: "App",
    components: { Navigation, Loader },
    data() {
        return {
            loading: false,
        };
    },
    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 1000);

        this.$myGlobalVariable.windowWidth = window.innerWidth;

        window.onresize = () => {
            this.$myGlobalVariable.windowWidth = window.innerWidth;
        };
    },
};
</script>
