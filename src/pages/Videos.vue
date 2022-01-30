<template>
  <div class="content">
    <div class="header-img"><router-link to="/home"><img src="@/../public/img/qvs.png" alt="egosub"></router-link></div>
    <h2>Coming Soon</h2>
  </div>
</template>

<script>
export default {
  name: "Videos"
}
</script>

<style scoped>
  .content{
    width: 800px;
    margin: 50px auto 0;
  }

  .content img{
    display: block;
    width: 256px;
    margin: 0 auto;
  }

  h2{
    text-align: center;
  }
</style>