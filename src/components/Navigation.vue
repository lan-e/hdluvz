<template>
	<nav>
		<div :class="{ moveUp: !isMenuOpen }" class="navigation" ref="homeNav">
			<div class="left">
				<Logo />
				<h3>{{ $t('logoName') }}</h3>
			</div>
			<div class="right">
				<div class="row">
					<LanguageSwitcher />
					<span>&nbsp;|&nbsp;</span>
					<ThemeIcon :switchedTheme="switchedTheme" @click="switchTheme" />
				</div>
				<div class="pagesNav row">
					<router-link to="/">{{ $t('home') }}</router-link>
					<router-link to="/organization">{{ $t('org') }}</router-link>
					<router-link to="/members">{{ $t("members") }}</router-link>
					<router-link to="/archive">{{ $t("archive") }}</router-link>
					<a href="#contact">{{ $t("contact") }}</a>
				</div>
			</div>
		</div>
		<div class="navigationRight" :class="{ slideRight: isMenuOpen }">
			<Button @click="isMenuOpen = !isMenuOpen" isMenuBtn="true" :isMenuOpen="isMenuOpen" />
			<Logo />
			<div class="pagesNav col">
				<router-link to="/">{{ $t('home') }}</router-link>
				<router-link to="/organization">{{ $t('org') }}</router-link>
				<router-link to="/members">{{ $t("members") }}</router-link>
				<router-link to="/archive">{{ $t("archive") }}</router-link>
				<a href="#contact">{{ $t("contact") }}</a>
			</div>
			<LanguageSwitcher />
			<ThemeIcon :switchedTheme="switchedTheme" @click="switchTheme" />
		</div>
	</nav>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import Button from "./icons/Button.vue";
import ThemeIcon from "./lang-theme/ThemeIcon.vue";
import LanguageSwitcher from "./lang-theme/LanguageSwitcher.vue"
import Logo from "./icons/Logo.vue";
const isMenuOpen = ref(true);
const switchedTheme = ref(true);
const homeNav = ref(null)

function updateScroll() {
	if (window.scrollY >= 500) {
		homeNav?.value.classList.add("navbar-scrolled");
	} else {
		homeNav?.value.classList.remove("navbar-scrolled");
	}
}

function switchTheme() {
	if (switchedTheme.value) {
		document.documentElement.setAttribute("data-theme", "dark");
		localStorage.darkMode = "enabled";
	} else {
		document.documentElement.setAttribute("data-theme", "light");
		localStorage.darkMode = "disabled";
	}
	window.dispatchEvent(new CustomEvent('darkMode-localstorage-changed', {
		detail: {
			storage: localStorage.getItem('darkMode')
		}
	}));
	switchedTheme.value = !switchedTheme.value;
}

onMounted(() => {
	window.addEventListener("scroll", updateScroll);
})

onBeforeMount(() => {
	window.removeEventListener("scroll", updateScroll);
	if (localStorage.darkMode == "enabled") {
		switchedTheme.value = true;
		switchTheme();
	} else {
		switchedTheme.value = false;
		switchTheme();
	}
});
</script>
