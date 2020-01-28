<template>
<div class="Saynette">
    <div>
        <MaisonSVG ref="houseSVG" :class="classObject"/>
    </div>
    
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
    .Saynette {
        width: 100%;
        height: 100%;
    }
</style>
