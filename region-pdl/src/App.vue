<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<style>

html {
  background-color: black;
  z-index: 3;
}
body {
  margin: 0;
}
html, body, #app {
  height: 100vh;
  display: flex; justify-content: center; align-items: center;
}

.app {
  overflow: hidden;
}

.saynette {
    /*! display: inline-block; */
    position: relative;
    vertical-align: middle;
    overflow: hidden;
    height: 100%;
}
.svg {
  height: 100%;
}

/* --- Couleurs du nuancier --- */
.bg-darkblue {
  background-color: #2c4068;
}
.darkblue {
  color: #2c4068;
}
.bg-bluegreen {
  background-color: #63b4bb;
}
.bluegreen {
  color: #63b4bb;
}
.bg-green {
  background-color: #d6efbb;
}
.green {
  color: #d6efbb;
}
.bg-orange {
  background-color: #fd7e61;
}
.orange {
  color: #fd7e61;
}
.bg-grey {
  background-color: #e3deca;
}
.grey {
  color: #e3deca;
}
.bg-cream {
  background-color: #fcf8ef;
}
.cream {
  color: #fcf8ef;
}
</style>
