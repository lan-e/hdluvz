<template>
    <div class="gallery-container">
        <div class="masonry-with-columns">
            <img src="../assets/img/exh4.png" alt="">
            <img src="../assets/img/exh3.png" alt="">
            <router-link to="/event">
                <img src="../assets/img/exh2.png" alt="">
            </router-link>
            <img src="../assets/img/exh1.png" alt="">
            <img src="../assets/img/exh.png" alt="">
            <img src="../assets/img/exh4.png" alt="">
            <img src="../assets/img/exh3.png" alt="">
            <router-link to="/event">
                <img src="../assets/img/exh2.png" alt="">
            </router-link>
            <img src="../assets/img/exh1.png" alt="">
            <img src="../assets/img/exh.png" alt="">
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
</script>

<style lang="scss">
.gallery-container {
    width: 100%;

    .masonry-with-columns {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 15px;
        height: max-content;

        img {
            width: calc(100% / 3 - 30px);
            background: #EC985A;
            color: white;
            text-align: center;
            font-family: system-ui;
            font-weight: 900;
            font-size: 2rem;
            object-fit: cover;
            min-height: 200px;
            height: 100%;
        }
    }
}
</style>