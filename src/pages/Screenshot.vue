<template>
  <div>
    <!--	left navigation		-->
    <nav class="left-nav">
      <ul>
        <li><a @click="anchor('#main-encode')">Main UI</a></li>
        <div class="line"></div>
      </ul>
      <ul>
        <li><a @click="anchor('#mead-info')">Mediainfo UI</a></li>
        <div class="line"></div>
      </ul>
      <ul>
        <li><a @click="anchor('#add-job')">Create Script from Add New Job</a></li>
        <div class="line"></div>
      </ul>
      <ul>
        <li><a @click="anchor('#script-blockly')">Create Script from blockly UI</a></li>
        <div class="line"></div>
      </ul>
      <ul>
        <li><a @click="anchor('#script-mount')">Script Mount UI</a></li>
        <div class="line"></div>
      </ul>
      <ul>
        <li><a @click="anchor('#script-preview')">Script Preview UI</a></li>
      </ul>
    </nav>
    <div class="content">
      <div class="header-img">
        <router-link to="/home"><img src="@/../public/img/qvs.png" alt="egosub"></router-link>
      </div>
      <div class="screen-shot">
        <h2>Screen Shot</h2>
        <div id="main-encode">
          <h3>Main UI</h3>
          <hr>
          <img src="@/../public/img/main-encode.jpg" alt="">
        </div>
        <div id="mead-info">
          <h3>Mediainfo UI</h3>
          <hr>
          <img src="@/../public/img/mediainfo.jpg" alt="">
        </div>
        <div id="add-job">
          <h3>Create Script from Add New Job</h3>
          <hr>
          <img src="@/../public/img/add-job.jpg" alt="">
        </div>
        <div id="script-blockly">
          <h3>Create Script from blockly UI</h3>
          <hr>
          <img src="@/../public/img/script-blockly.png" alt="">
        </div>
        <div id="script-mount">
          <h3>Script Mount UI</h3>
          <hr>
          <img src="@/../public/img/script-mount.jpg" alt="">
        </div>
        <div id="script-preview">
          <h3>Script Preview UI</h3>
          <hr>
          <img src="@/../public/img/script-preview.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Screenshot",
  methods: {
    //anchor point positioning function
    anchor(idValue) {
      const returnEle = document.querySelector(idValue);
      if (!!returnEle) {
        returnEle.scrollIntoView(true);
      }
      document.querySelector(idValue).scrollIntoView(true);
    }
  }
}
</script>

<style scoped>
/*-------设置左导航条------------*/
.left-nav {
  width: 200px;
  padding: 10px 0;
  background-color: #fd71c5;
  opacity: 0.8;
  position: fixed;
  left: 50px;
  top: 150px;
  z-index: 999;
  border: 10px white solid;
  border-radius: 20%;
}

.left-nav ul {
  width: 200px;
  margin: 30px auto;

}

.left-nav a {
  display: block;
  color: #232222;
  text-decoration: none;
  font-weight: bold;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
}

.left-nav a:hover {
  color: white;
}

.left-nav .line {
  width: 150px;
  height: 3px;
  background-color: white;
  margin: 15px auto;
}

/*------------设置文字内容----------------*/
.content {
  width: 800px;
  height: 1500px;
  margin: 50px auto;
  padding-left: 280px;
}

.header-img img {
  display: block;
  width: 256px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  font-size: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
}

h3 {
  text-align: left;
  font-size: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
  line-height: 2;
  padding-top: 50px;
}

.screen-shot img {
  width: 100%;
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