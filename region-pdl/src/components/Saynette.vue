<template>
<div class="Saynette">
    <Background />
</div>
</template>

<script>
import Background from './Background';

export default {
    name: "Saynette",
    components: {
        Background
    },

    methods: {
        arrive() {
            console.log("ok");
        }
    },

    mounted() {
        this.arrive();
    }
};


</script>

<style scoped>
    .Saynette {
        width: 100%;
        height: 100%
    }
</style>