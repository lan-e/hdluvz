<template>
	<div class="theme-switch-container">
		<svg v-if="switchedTheme" width="22" height="22" viewBox="0 0 24 24" fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<circle cx="12" cy="12" r="5" stroke="#1C274C" stroke-width="1.5" />
			<path d="M12 2V4" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
			<path d="M12 20V22" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
			<path d="M4 12L2 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
			<path d="M22 12L20 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
			<path d="M19.7778 4.22266L17.5558 6.25424" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
			<path d="M4.22217 4.22266L6.44418 6.25424" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
			<path d="M6.44434 17.5557L4.22211 19.7779" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
			<path d="M19.7778 19.7773L17.5558 17.5551" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
		</svg>
		<svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
				stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</div>
</template>

<script setup>
const { switchedTheme } = defineProps(["switchedTheme"]);
</script>

<style scoped>
div {
	line-height: 0;
}

svg {
	height: 24px;
	cursor: pointer;
}

path {
	fill: var(--color2);
}
</style>
