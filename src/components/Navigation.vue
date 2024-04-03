<template>
    <nav class="navigation">
        <div class="row">
            <router-link to="/">
                <img src="../assets/img/logo.png" alt="">
            </router-link>
            Hrvatsko društvo likovnih umjetnika Varaždin
        </div>
        <div class="navigationRight" :class="{slideRight:isMenuOpen}">
        <MenuBtn class="menuBtn" @click="isMenuOpen=!isMenuOpen" :isMenuOpen="isMenuOpen"/>
            <router-link to="/">
                <img src="../assets/img/logo.png" alt="">
            </router-link>
            <div class="pagesNav col">
                <router-link to="/">Početna</router-link>
                <router-link to="/organization">Ustroj</router-link>
                <router-link to="/members">Članovi</router-link>
                <router-link to="/archive">Arhiva</router-link>
                <router-link to="/contact">Kontakt</router-link>
            </div>
        </div>
    </nav>
</template>

<script setup>
import {ref} from "vue"
import MenuBtn from "./MenuBtn.vue"
const isMenuOpen = ref(false);
</script>