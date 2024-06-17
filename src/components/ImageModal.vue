<template>
    <div class="image-modal-container">
        <div class="modal-background" @click="closeModal"></div>
        <img :src="image" alt="Modal Image" />
        <Close @click="closeModal" />
    </div>
</template>

<script>
import Close from "@/components/icons/Close.vue";

export default {
    components: { Close },
    props: ["image"],
    methods: {
        closeModal() {
            this.$emit("closeModal");
        },
    },
};
</script>
