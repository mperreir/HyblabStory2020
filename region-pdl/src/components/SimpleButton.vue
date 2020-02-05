<template>
    <div class="classic-btn bg-darkblue" :style="{width: width+'%', left: x+'%', top: y+'%'}"><div class="innerBox text">{{ text }}</div></div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "Click me !"
        },
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
    },
}
</script>

<style>
.text {
    font-family: 'Avant Garde Bold';
    font-size: 2vh;
    user-select: none;
}

.classic-btn {
    color: white; 
    background-color: #00324e;

    position: absolute;
    border-radius: 10px 10px;

    text-align: center;
    line-height: 1.5;
}

.classic-btn:hover {
    background-color: #015787;
}

.innerBox {
    margin-top: 6%;
    margin-bottom: 6%;
}
</style>