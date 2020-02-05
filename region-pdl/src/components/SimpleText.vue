<template>
<div :style="{width: width+'%', left: x+'%', top: y+'%'}" class="innerContent text"> <slot /> </div>
</template>

<script>
export default {
    props: {
        width : {
            type: Number,
            default: 100
        },
        x: {
            type: Number, 
            default: 0
        },
        y: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped>
.innerContent {
    position: absolute;
    font-size: 1.7vh;
    color: #FFF;
    line-height: 3vh;
}
</style>