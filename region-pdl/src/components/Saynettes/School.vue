<template>
  <div class="saynette">
  <TextTitle :x="7" :y="30">Se chauffer (aides isolation professionnelles)</TextTitle>
    <SimpleText :x="7" :y="43" :width="40">
        M. Moreau est professeur des écoles. Cette année, son école a bénéficié d’une aide de la Région pour réaliser des travaux d’isolation. 
    </SimpleText>
    <Background class="svg" />
  </div>
</template>

<script>
import Background from "@/assets/School/background-school.svg";
import TextTitle from "@/components/TextTitle";
import SimpleText from "@/components/SimpleText";

export default {
  name: "School",
  components: {
    Background,
    TextTitle,
    SimpleText
  },
  data: () => ({}),
  methods: {}
};
</script>

<style scoped>
</style>
