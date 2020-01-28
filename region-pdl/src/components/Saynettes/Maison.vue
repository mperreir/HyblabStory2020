<template>
<div class="saynette">
    <BGSVG class="bg"/>
    <MaisonSVG class="house"/>
</div>
</template>

<script>
import Saynette from '../Saynette';
import MaisonSVG from "@/assets/Sans titre - 2.svg";
import BGSVG from "@/assets/bg-house.svg";

export default {
    components: {
        MaisonSVG,
        BGSVG
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
.saynette {
    /* top: 25%;
    left: 20%; */
    /* width: 100vw; */
    display: inline-block;
    position: relative;
    width: 100vw;
    vertical-align: middle;
    overflow: hidden;
}

.bg {
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
}

.house {
    position: absolute;
    top: 40vh;
    left: 28vw;
    width: 53%;
    height: 38%;
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
