import { createApp } from "vue";
import i18n from "./i18n";
import App from "./App.vue";
import router from "./router";
import "@/assets/styles/index.css";
import MasonryWall from "@yeger/vue-masonry-wall";

createApp(App).use(router).use(i18n).use(MasonryWall).mount("#app");
