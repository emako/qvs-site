<template>
  <div>
    <Banner/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Banner from "@/components/Banner";
  export default {
    name: "App",
    components: {Banner},
  }
</script>
<!--App style is for all components,no need to add scoped-->
<style>
  @import "../public/css/App.css";
</style>
