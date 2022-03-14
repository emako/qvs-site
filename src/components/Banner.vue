<template>
  <!--outer container-->
  <div class="top-bar-wrapper">
    <!--    top bar-->
    <div class="top-bar">
      <!--        left menu-->
      <div class="left-menu">
        <!--            menu icon-->
        <ul class="menu-icon">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <!--            navigation bar-->
        <ul class="navbar">
          <li>
            <router-link to="/home">HOME</router-link>
          </li>
          <li class="tutorial-main">
            <router-link class="tutorial-btn" to="/screenshot">Tutorial</router-link>
            <div class="tutorial-more">
              <router-link to="/screenshot">Screenshots</router-link>
              <router-link to="/videos">Videos</router-link>
            </div>
          </li>
          <li>
            <router-link to="/download">Download</router-link>
          </li>
          <li>
            <router-link to="/about">About egosub</router-link>
          </li>
        </ul>
      </div>

      <!--        title-->
      <h1 class="title">
        <router-link to="/home">egosub</router-link>
      </h1>

      <!--   right menu -->
      <div class="right-menu"></div>
    </div>
  </div>
</template>
<script src="../../public/js/Banner.js">
export default {
  name: "Banner"
}
</script>
<!--Banner style is for all components,no need to add scoped-->
<style src="../../public/css/Banner.css"></style>