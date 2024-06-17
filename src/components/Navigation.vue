<template>
    <nav>
        <div
            :class="{
                moveUp: !this.isMenuOpen,
                'navbar-scrolled': this.scrolled,
            }"
            class="navigation"
            ref="homeNav"
        >
            <div class="left">
                <Logo />
                <h3>{{ $t("logoName") }}</h3>
            </div>
            <div class="right">
                <div class="row">
                    <div class="nav-options" :style="{ display: this.$myGlobalVariable.windowWidth > this.$myGlobalVariable.mobileWindowWidth ? '' : 'none' }">
                        <LanguageSwitcher />
                        <span>&nbsp;|&nbsp;</span>
                        <ThemeIcon :switchedTheme="switchedTheme" @click="switchTheme" />
                    </div>
                    <Menu
                        @click="isMenuOpen = !isMenuOpen"
                        isMenuBtn="true"
                        :isMenuOpen="isMenuOpen"
                        :style="{ display: this.$myGlobalVariable.windowWidth < this.$myGlobalVariable.mobileWindowWidth ? '' : 'none' }"
                    />
                </div>
                <div class="pagesNav row">
                    <router-link to="/" @click="isMenuOpen = false">{{ $t("home") }}</router-link>
                    <router-link to="/organization" @click="isMenuOpen = false">{{ $t("org") }}</router-link>
                    <router-link to="/members" @click="isMenuOpen = false">{{ $t("members") }}</router-link>
                    <router-link to="/archive" @click="isMenuOpen = false">{{ $t("archive") }}</router-link>
                    <a href="#contact" @click="isMenuOpen = false">{{ $t("contact") }}</a>
                </div>
            </div>
        </div>
        <div class="navigationRight" :class="{ slideRight: isMenuOpen }">
            <!-- <Button @click="isMenuOpen = !isMenuOpen" isMenuBtn="true" :isMenuOpen="isMenuOpen" /> -->
            <div class="menu-top">
                <CloseMenu @click="isMenuOpen = !isMenuOpen" :isMenuOpen="isMenuOpen" />
                <Logo />
            </div>
            <div class="pagesNav col">
                <router-link to="/">{{ $t("home") }}</router-link>
                <router-link to="/organization">{{ $t("org") }}</router-link>
                <router-link to="/members">{{ $t("members") }}</router-link>
                <router-link to="/archive">{{ $t("archive") }}</router-link>
                <a href="#contact">{{ $t("contact") }}</a>
            </div>
            <div class="menu-bottom">
                <LanguageSwitcher />
                <span>&nbsp;|&nbsp;</span>
                <ThemeIcon :switchedTheme="switchedTheme" @click="switchTheme" />
            </div>
        </div>
    </nav>
</template>

<script>
import Button from "./icons/Button.vue";
import ThemeIcon from "./lang-theme/ThemeIcon.vue";
import LanguageSwitcher from "./lang-theme/LanguageSwitcher.vue";
import Logo from "./icons/Logo.vue";
import Menu from "./icons/Menu.vue";
import CloseMenu from "./icons/CloseMenu.vue";

export default {
    components: {
        Button,
        ThemeIcon,
        LanguageSwitcher,
        Logo,
        Menu,
        CloseMenu,
    },
    data() {
        return {
            isMenuOpen: true,
            switchedTheme: true,
            homeNav: null,
            scrolled: false,
        };
    },
    methods: {
        updateScroll() {
            if (window.scrollY >= 500) {
                this.scrolled = true;
            } else {
                this.scrolled = false;
            }
        },
        switchTheme() {
            if (this.switchedTheme) {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.darkMode = "enabled";
            } else {
                document.documentElement.setAttribute("data-theme", "light");
                localStorage.darkMode = "disabled";
            }
            window.dispatchEvent(
                new CustomEvent("darkMode-localstorage-changed", {
                    detail: {
                        storage: localStorage.getItem("darkMode"),
                    },
                })
            );
            this.switchedTheme = !this.switchedTheme;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    },
    beforeMount() {
        window.removeEventListener("scroll", this.updateScroll);
        if (localStorage.darkMode == "enabled") {
            this.switchedTheme = true;
            this.switchTheme();
        } else {
            this.switchedTheme = false;
            this.switchTheme();
        }
    },
};
</script>
