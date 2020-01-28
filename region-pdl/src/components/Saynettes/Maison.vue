<template>
<div class="Saynette">
    <MaisonSVG />
    <p class="text">Ma maison</p>
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
    position: absolute;
    top: 25%;
    left: 20%;
    width: 50%;
}
.text {
    position: absolute;
    top: 25%;
    left: 20%;
    width: 50%;
    color: red;
    font-size: 3vw;
}
</style>
