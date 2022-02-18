<template>
  <div class="content">
    <div class="header-img">
      <router-link to="/home"><img src="@/../public/img/qvs.png" alt="egosub"></router-link>
    </div>
    <h2>Coming Soon</h2>
  </div>
</template>

<script>
export default {
  name: "Videos"
}
</script>

<style scoped>
.content {
  width: 800px;
  margin: 50px auto 0;
}

.header-img img {
  display: block;
  width: 256px;
  margin: 0 auto;
}

h2 {
  text-align: center;
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