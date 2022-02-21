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

  .header-img img {
    display: block;
    width: 256px;
    margin: 0 auto;
  }

  /*set logo animation*/
  .header-img img:hover {
    animation: swing 1s forwards infinite;
  }

  @keyframes swing {
    from, to, 50% {
      transform: rotateZ(0deg);
    }

    25% {
      transform: rotateZ(10deg);
    }

    75% {
      transform: rotateZ(-10deg);
    }
  }
</style>
