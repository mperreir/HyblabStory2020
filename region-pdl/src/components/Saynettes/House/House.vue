<template>
  <div class="scene">
    <BgSVG class="svg-scene" />
    <HouseSVG class="svg-scene house" />
    <Slider class="slider" />
  </div>
</template>

<script>
import HouseSVG from "@/assets/house.svg";
import BgSVG from "@/assets/bg-house.svg";
// import SmallHouseSVG from "@/assets/small-house.svg";

import Saynette from "@/components/Saynette";
import Slider from "@/components/Saynettes/House/Slider";

export default {
    name: "House",
    components: {
        BgSVG,
        HouseSVG,
        // SmallHouseSVG,
        Slider
    },
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
.scene {
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

.slider {
    position: absolute;
    top: 79%;
    left: 32%;
}
</style>
