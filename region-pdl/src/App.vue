<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>

html {
  background-color: black;
}

html, body, #app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.saynette {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    overflow: hidden;
    height: 100%;
}

.svg {
  height: 100%;
}

/* --- Police des titres --- */
.title {
  font-family: "Neo Sans Std";
}

/* --- Police des textes --- */
.text {
  font-family: "AvantGardeGothicITCW02XLt";
}

/* --- Couleurs du nuancier --- */
/* Utiliser uniquement ces classes pour les couleurs */
.yellow {
  color: #ffc441;
}
.bg-yellow {
  background-color: #ffc441;
}
.yellow-orange {
  color: #faaf04;
}
.bg-yellow-orange {
  background-color: #faaf04;
}
.orange {
  color: #f99a04;
}
.bg-orange {
  background-color: #f99a04;
}
.red {
  color: #f31512;
}
.bg-red {
  background-color: #f31512;
}
.darkgreen {
  color: #598104;
}
.bg-darkgreen {
  background-color: #598104;
}
.green {
  color: #88b309;
}
.bg-green {
  background-color: #88b309;
}
.lightgreen {
  color: #b7df41;
}
.bg-lightgreen {
  background-color: #b7df41;
}
.grey-blue {
  color: #004b78;
}
.bg-grey-blue {
  background-color: #004b78;
}
.blue {
  color: #0177be;
}
.bg-blue {
  background-color: #0177be;
}
.darkblue {
  color: #00324e;
}
.bg-darkblue {
  background-color: #00324e;
}
.darkgrey {
  color: #79787d;
}
.bg-darkgrey {
  background-color: #79787d;
}
.grey {
  color: #d3d3d3;
}
.bg-grey {
  background-color: #d3d3d3;
}
.lightgrey {
  color: #f2f2f2;
}
</style>
