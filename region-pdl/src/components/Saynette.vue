<template>
<div class="Saynette">
    <Background />
</div>
</template>

<script>
import Background from './Background';

export default {
    // This is an "abtract class", see folder `Saynettes`.
    name: "Saynette",
    components: {
        // List of components usable in the template
        Background
    },
    methods: {
        // List of methods
        arrive() {
            console.log("ok");
        }
    },
    computed: {
        // List of computed variable
    },
    watcher: {
        // List of watcher variable
    },
    mounted() {
        // Lifecylcle function
        this.arrive();
    }
};


</script>

<style scoped>
    .Saynette {
        /* min-width: 100vw;
        max-height: 100vh */
    }
</style>
