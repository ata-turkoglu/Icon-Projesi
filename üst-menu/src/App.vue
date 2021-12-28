<template>
  <hamburger-menu />
</template>

<script lang="ts">
import Vue from "vue";
import HamburgerMenu from "./components/HamburgerMenu.vue";

export default Vue.extend({
  components: { HamburgerMenu },
  name: "App",

  data: () => ({
    //
  }),
});
</script>
