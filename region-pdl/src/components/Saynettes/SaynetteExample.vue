<template>
<div class="Saynette">
    <p class="Example-text">Saynette d'exemple</p>
</div>
</template>

<script>
import Saynette from '../Saynette';

export default {
    name: "SaynetteExample",
    extends: Saynette,

    methods: {
        arrive() {
            console.log("ok nouvelle saynette !");
        }
    },
};

</script>

<style scoped>
    .Saynette {
        width: 100%;
        height: 100%;
    }

    .Example-text {
        color: #FFF;
    }
</style>
