<template>
  <div>
    <!--small-left-nav-->
    <nav class="small-left-nav">
      <ul>
        <li class="left-nav-item"><a @click="anchor('#main-encode')"></a></li>
        <li class="left-nav-item"><a @click="anchor('#mead-info')"></a></li>
        <li class="left-nav-item"><a @click="anchor('#add-job')"></a></li>
        <li class="left-nav-item"><a @click="anchor('#script-blockly')"></a></li>
        <li class="left-nav-item"><a @click="anchor('#script-mount')"></a></li>
        <li class="left-nav-item"><a @click="anchor('#script-preview')"></a></li>
      </ul>
    </nav>

    <!--	left navigation		-->
    <nav class="left-nav">
      <ul>
        <li class="left-nav-item"><a @click="anchor('#main-encode')">Main UI</a></li>
        <div class="line"></div>
      </ul>
      <ul>
        <li class="left-nav-item"><a @click="anchor('#mead-info')">Mediainfo UI</a></li>
        <div class="line"></div>
      </ul>
      <ul>
        <li class="left-nav-item"><a @click="anchor('#add-job')">Create Script from Add New Job</a></li>
        <div class="line"></div>
      </ul>
      <ul>
        <li class="left-nav-item"><a @click="anchor('#script-blockly')">Create Script from blockly UI</a></li>
        <div class="line"></div>
      </ul>
      <ul>
        <li class="left-nav-item"><a @click="anchor('#script-mount')">Script Mount UI</a></li>
        <div class="line"></div>
      </ul>
      <ul>
        <li class="left-nav-item"><a @click="anchor('#script-preview')">Script Preview UI</a></li>
      </ul>
    </nav>

    <!--content-->
    <div class="content">
      <div class="header-img">
        <router-link to="/home"><img src="@/../public/img/qvs.png" alt="egosub"></router-link>
      </div>
      <div class="screen-shot">
        <h2>Screenshots</h2>
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
//import anchor mixin js
import {anchor} from "../../public/js/anchor";

//import navbar mixin js
import navbar from "../../public/js/navbar";

export default {
  name: "Screenshot",

  //use anchor navbar mixin
  mixins:[anchor,navbar("screen-shot")]
}
</script>
<style scoped src="../../public/css/Screenshot.css"></style>