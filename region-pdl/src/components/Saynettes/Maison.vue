<template>
<div class="Saynette">
    <Background />
    <MaisonSVG />
</div>
</template>

<script>
import Saynette from '../Saynette';
import MaisonSVG from "@/assets/Sans titre - 2.svg";

export default {
    components: {
        MaisonSVG
    },
    name: "Maison",
    extends: Saynette,

    methods: {
        arrive() {
            console.log("ok nouvelle saynette : Maison !");
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
