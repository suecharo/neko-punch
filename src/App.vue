<template>
  <HelloWorld />
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import vuetify from "./plugins/vuetify";

export default Vue.extend({
  name: "App",
  vuetify,
  components: {
    HelloWorld,
  },
});
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css";
@import "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css";
/*
<link
  href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css"
  rel="stylesheet"
/> */
</style>
