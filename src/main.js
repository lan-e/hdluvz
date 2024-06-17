import { createApp, reactive } from "vue";
import i18n from "./i18n";
import App from "./App.vue";
import router from "./router";
import "@/assets/styles/index.css";
//import MasonryWall from "@yeger/vue-masonry-wall";

const app = createApp(App);

app.config.globalProperties.$myGlobalVariable = reactive({
    windowWidth: null,
    mobileWindowWidth: 930,
});

app.use(router).use(i18n).mount("#app");
//app.use(router).use(i18n).use(MasonryWall).mount("#app");
