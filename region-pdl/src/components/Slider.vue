<template>
  <div>
    <input
      type="range"
      :value="searchText"
      @input="searchText = $event"
    >
  </div>
</template>

<script>
export default {
    name: "Slider",
    props: ['value'],
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
input[type="range"] {
    display: block;
    -webkit-appearance: none;
    background-color: #bdc3c7;
    height: 4px;
    border-radius: 5px;
    margin: 0 auto;
    outline: 0;
}
input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #e74c3c;
    width: 25px;
    height: 25px;
    border-radius: 150%;
    border: 2px solid white;
    cursor: pointer;
    transition: .3s ease-in-out;
}​
input[type="range"]::-webkit-slider-thumb:hover {
    background-color: white;
    border: 2px solid #e74c3c;
}
input[type="range"]::-webkit-slider-thumb:active {
    transform: scale(1.6);
}

input[type=range]::-moz-range-thumb {
    width: 2em;
    height: 2em;
    height: inherit;
    border: none;
    border-radius: 0;
    background: red;
}
</style>
