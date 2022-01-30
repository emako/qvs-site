<template>
  <div class="top-bar-wrapper">
    <ul class="navbar clearfix">
      <li><router-link to="/home">HOME</router-link></li>
      <li>
        <div class="tutorial-main">
          <router-link class="tutorial-btn" to="/screenshot">Tutorial</router-link>
          <div class="tutorial-more">
            <router-link to="/videos">Videos</router-link>
            <router-link to="/screenshot">Screenshot</router-link>
          </div>
        </div>
      </li>
      <li><router-link to="/download">Download</router-link></li>
      <li><router-link to="/about">About egosub</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Banner"
  }
</script>


<style scoped>

  /*解决高度坍塌*/
  .clearfix::before,
  .clearfix::after{
    content: '';
    display: table;
    clear: both;
  }

  /*导航条外部容器*/
  .top-bar-wrapper{
    width: 100%;
    background-color: #fd71c5;
    /* 设置行高=高度，文字垂直居中 */
    height: 50px;
    line-height: 50px;
    opacity: 0.9;
    position:fixed;
    top: 0;
    z-index: 9999;
  }

  /*导航条内部容器*/
  .navbar{
    width:960px;
    /*左右居中*/
    margin: 0 auto;
    opacity: 0.9;
  }

  .navbar li{
    float:left;
    line-height:50px;
  }

  .navbar a {
    /*转换为块元素*/
    display: block;
    /*去除下划线*/
    text-decoration: none;
    color: #F2F2F2;
    font-size: 23px;
    /*用padding设置<a>宽度*/
    padding: 0 40px;
  }

  .navbar a:hover{
    background-color: #ff2cab;
    color: #F2F2F2;
  }

  /*Tutorial下拉框*/
  /*设置tutorial-btn与tutorial-more同宽度*/
  .tutorial-btn{
    width: 120px;
    text-align: center;
  }
  .tutorial-main .tutorial-more{
    width: 200px;
    height: 100px;
    background-color: #fd71c5;
    text-align: center;
    display: none;
    /*设置绝对定位，使其不占据页面位置*/
    position: absolute;
    top:50px;
    z-index: 999;
  }

  /*当鼠标移入Tutorial，下拉框显示*/
  /*hover设置在父元素Tutorial上鼠标移开Tutorial，tutorial-more不消失*/
  .tutorial-main:hover .tutorial-more{
    display: block;
  }
  /*设置tutorial-btn的移入的效果*/
  /*hover设置在父元素tutorial-main上鼠标移开tutorial-btn，tutorial-btn效果不消失*/
  .tutorial-main:hover .tutorial-btn{
    background-color: #ff2cab;
    color: #F2F2F2;
  }
</style>