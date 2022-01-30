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
<!--body style is for all components,no need to add scoped-->
<style>
  body{
    /* 设置字体 */
    font:18px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,sans-serif;
    background-color: #faf3c0;
  }
</style>
