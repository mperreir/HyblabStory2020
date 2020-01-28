<template>
<div class="saynette">
    <BgSVG class="svg-scene"/>
    <MaisonSVG class="svg-scene house"/>
</div>
</template>

<script>
import Saynette from '../Saynette';
import MaisonSVG from "@/assets/house.svg";
import BgSVG from "@/assets/bg-house.svg";

export default {
    components: {
        MaisonSVG,
        BgSVG
    },
    name: "Maison",
    extends: Saynette,

    data: () => ({
        classObject: {
            animated: false,
            fadeInRight: false,
        },
    }),

    methods: {
        arrive() {
            this.classObject = {
                animated: true,
                fadeInRight: true,
            };
        }
    },


};

</script>

<style scoped>
.saynette {
    display: inline-block;
    position: relative;
    width: 100vw;
    vertical-align: middle;
    overflow: hidden;
}

.house {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
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
