<template>
	<nav>
		<div :class="{ moveUp: !isMenuOpen }" class="navigation">
			<Logo />
			<h3>Hrvatsko društvo likovnih umjetnika Varaždin</h3>
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
import { onBeforeMount, ref } from "vue";
import Button from "./icons/Button.vue";
import ThemeIcon from "./lang-theme/ThemeIcon.vue";
import LanguageSwitcher from "./lang-theme/LanguageSwitcher.vue"
import Logo from "./icons/Logo.vue";
const isMenuOpen = ref(true);
const switchedTheme = ref(true);

function switchTheme() {
	if (switchedTheme.value) {
		document.documentElement.setAttribute("data-theme", "dark");
		localStorage.darkMode = "enabled";
	} else {
		document.documentElement.setAttribute("data-theme", "light");
		localStorage.darkMode = "disabled";
	}
	switchedTheme.value = !switchedTheme.value;
}

onBeforeMount(() => {
	if (localStorage.darkMode == "enabled") {
		switchedTheme.value = true;
		switchTheme();
	} else {
		switchedTheme.value = false;
		switchTheme();
	}
});
</script>
