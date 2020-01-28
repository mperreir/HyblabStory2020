<template>
<div class="Saynette">
    <Background />
</div>
</template>

<script>
import Saynette from '../Saynette';

export default {
    name: "Saynette",
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
</style>