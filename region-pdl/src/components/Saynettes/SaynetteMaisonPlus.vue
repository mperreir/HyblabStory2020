<template>
  <div class="Saynette">
    <MaisonSVG />
    <ul>
      <li>
        <PlusButton class="plus1" @open="closePopover(1)" v-model="closePopover1">
          <p>1. Ceci est une information sur la transition énergétique</p>
          <!-- Ajouter n'importe quelle balise HTML -->
        </PlusButton>
      </li>
      <li>
        <PlusButton class="plus2" @open="closePopover(2)" v-model="closePopover2">
          <p>2. Ceci est une information sur la transition énergétique</p>
          <!-- Ajouter n'importe quelle balise HTML -->
        </PlusButton>
      </li>
      <li>
        <PlusButton class="plus3" @open="closePopover(3)" v-model="closePopover3">
          <p>3. Ceci est une information sur la transition énergétique</p>
          <!-- Ajouter n'importe quelle balise HTML -->
        </PlusButton>
      </li>
    </ul>
  </div>
</template>

<script>
import Saynette from "../Saynette";
import MaisonSVG from "@/assets/Sans titre - 2.svg";
import PlusButton from "@/components/PlusButton.vue";

export default {
  components: {
    MaisonSVG,
    PlusButton
  },
  name: "SaynettePlusPopup",
  extends: Saynette,
  data: () => ({
    closePopover1: false,
    closePopover2: false,
    closePopover3: false
  }),
  methods: {
    arrive() {
      console.log("ok nouvelle saynette !");
    },
    closePopover(i) {
      switch(i) {
        case 1:
          this.closePopover1 = false; 
          this.closePopover2 = true; 
          this.closePopover3 = true;
          break;
        case 2:
          this.closePopover2 = false; 
          this.closePopover1 = true; 
          this.closePopover3 = true;
          break;
        case 3:
          this.closePopover3 = false; 
          this.closePopover1 = true; 
          this.closePopover2 = true;
          break;
      }
      
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
