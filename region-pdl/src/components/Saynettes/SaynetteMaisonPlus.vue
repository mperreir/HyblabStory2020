<template>
  <div class="Saynette">
    <MaisonSVG />
    <ul>
      <li>
        <Plus
          class="plus1"
          popoverText="Ceci est une information sur la transition énergétique"
        />
      </li>
      <li>
        <Plus
          class="plus2"
          popoverText="Ceci est une deuxième information sur la transition énergétique"
        />
      </li>
      <li>
        <Plus
          class="plus3"
          popoverText="Ceci est une troisième information extrêmement intéressante sur la transition énergétique"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Saynette from "../Saynette";
import MaisonSVG from "@/assets/Sans titre - 2.svg";
import Plus from "@/components/PlusButton.vue";

export default {
  components: {
    MaisonSVG,
    Plus
  },
  name: "SaynettePlusPopup",
  extends: Saynette,
  data: () => ({}),
  methods: {
    arrive() {
      console.log("ok nouvelle saynette !");
    }
  }
};
</script>

<style scoped>
* {
  list-style: none;
}

.Saynette {
  position: absolute;
  top: 25vh;
  left: 25vw;
  width: 50vw;
}

ul li {
  position: absolute;
  top: 0;
  left: 0;
}

ul li .plus1 {
  position: relative;
  top: 20vh;
  left: 14vw;
}

ul li .plus2 {
  position: relative;
  top: 38vh;
  left: 26vw;
}

ul li .plus3 {
  position: relative;
  top: 30vh;
  left: 40vw;
}
</style>
