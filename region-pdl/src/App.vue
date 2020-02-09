<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<style>
/* NOTE DES BACKGROUND SUR 10 
7
4
7
8
9
9
6
9.5
*/
html {
  /* background: linear-gradient(to bottom, #90dffe 0%, #38a3d1 100%); */
  /* background: linear-gradient(to bottom, #757abf 0%,#8583be 60%,#eab0d1 100%); */
  /* background: linear-gradient(to bottom, #82addb 0%,#ebb2b1 100%); */
  /* background: linear-gradient(to bottom, #90dffe 0%,#ebb2b1 100%); */
  /* background: linear-gradient(to bottom, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%); */
  /* background: linear-gradient(to bottom, #b7eaff 0%,#94dfff 100%); */
  /* background: linear-gradient(to bottom, #9be2fe 0%,#67d1fb 100%); */
  /* background: linear-gradient(to bottom, #57c1eb 0%,#246fa8 100%); */
  background: linear-gradient(to bottom, #00b7ff 0%,#fff 100%);
}

body {
  margin: 0;
  overflow: hidden;
}

html,
body,
#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app {
  overflow: hidden;
}

.saynette {
  position: relative;
  vertical-align: middle;
  overflow: hidden;
  height: 100%;
}

.svg {
  height: 100%;
}

.road-svg {
  position: absolute;
  left: -1%;
  width: 9.3%;
  top: 86.7%;
}

/* --- Police des titres --- */
@font-face {
  font-family: "Neo Sans";
  src: url("./assets/fonts/NeoSansStd-Medium.otf");
}

@font-face {
  font-family: "Neo Sans Bold";
  src: url("./assets/fonts/NeoSansPro-Bold.ttf");
}

.title {
  font-family: "Neo Sans";
}

.title-bold {
  font-family: "Neo Sans Bold";
}

/* --- Police des textes --- */
@font-face {
  font-family: "Titillium Web";
  src: url("./assets/fonts/TitilliumWeb-Regular.ttf");
}

.text {
  font-family: "Titillium Web";
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
.lightblue {
  color: #009dff;
}
.bg-lightblue {
  background-color: #009dff;
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
.bg-lightgrey {
  background-color: #f2f2f2;
}
</style>
