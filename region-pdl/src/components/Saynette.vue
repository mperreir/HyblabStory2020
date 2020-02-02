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
    computed: {
        // List of computed variable
    },
    mounted() {
        // Lifecylcle function
        this.arrive();
    },
    methods: {
        // List of methods
        arrive() {
            console.log("ok");
        }
    },
    watcher: {
        // List of watcher variable
    }
};


</script>

<style scoped>
    .Saynette {
        /* min-width: 100vw;
        max-height: 100vh */
    }
</style>
