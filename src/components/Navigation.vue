<template>
	<nav class="navigation">
		<div class="row">
			<router-link to="/">
				<img src="../assets/img/logo.png" alt="" />
			</router-link>
			Hrvatsko društvo likovnih umjetnika Varaždin
		</div>
		<div class="navigationRight" :class="{ slideRight: isMenuOpen }">
			<MenuBtn @click="isMenuOpen = !isMenuOpen" :isMenuOpen="isMenuOpen" />
			<router-link to="/">
				<img src="../assets/img/logo.png" alt="" />
			</router-link>
			<div class="pagesNav col">
				<router-link to="/">Početna</router-link>
				<router-link to="/organization">Ustroj</router-link>
				<router-link to="/members">Članovi</router-link>
				<router-link to="/archive">Arhiva</router-link>
				<router-link to="/contact">Kontakt</router-link>
				<div class="theme-switch-container">
					<ThemeIcon :switchedTheme="switchedTheme" @click="switchTheme" />
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import MenuBtn from "./MenuBtn.vue";
import ThemeIcon from "./icons/ThemeIcon.vue";
const isMenuOpen = ref(false);
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
