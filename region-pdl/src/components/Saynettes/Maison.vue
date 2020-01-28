<template>
<div class="Saynette">
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
        width: 50%;
        padding-left: 20vw;
        padding-top: 10vw;
    }
</style>
