<template>
  <div id="app">
    <the-header-navbar></the-header-navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeaderNavbar from "./components/layout/TheHeaderNavbar";
export default {
  name: "app",
  components: {
    TheHeaderNavbar: TheHeaderNavbar
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
