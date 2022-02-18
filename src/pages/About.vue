<template>
  <div class="content">
    <div class="header-img">
      <router-link to="/home"><img src="@/../public/img/qvs.png" alt="egosub"></router-link>
    </div>
    <a href="https://weibo.com/u/5934136718">Weibo</a>
    <a href="https://github.com/emako/qvs">github</a>
    <br>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
.content {
  width: 800px;
  margin: 50px auto;
}

.header-img img {
  display: block;
  width: 256px;
  margin: 0 auto;
}

a {
  display: block;
  text-align: center;
  font-size: 20px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, .5);
  text-decoration: none;
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