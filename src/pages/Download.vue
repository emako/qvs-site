<template>
  <div>
    <!--	left navigation		-->
    <nav class="left-nav">
      <ul>
        <li v-for="(d,index) of details" :key="index">
          <a @click="anchor(`#${d.ver}`)">version {{d.ver}}</a>
          <div class="line"></div>
        </li>
      </ul>

    </nav>
    <!--	text		-->
    <div class="text">
      <h1>Download</h1>
      <div v-for="(d,index) of details" :key="index">
        <!--h2 version title		-->
        <h2 :id="d.ver">version {{d.ver}}</h2>
        <hr>
        <!-- version updated details list	-->
        <ul><li v-for="(item,index) of d.text" :key="index">{{item}}</li></ul><br>
        <!-- download link list	-->
        <div class="fast-git">
          FastGit:
          <a v-for="(link,index) of d.dl" :key="index" :href="link">{{link.match(RegExp(`(?<=${d.ver}\/)(.+)`,'i'))[0]}}&nbsp&nbsp</a>
        </div>
      </div>
      <div class="more">
        <h2>For more versions</h2>
        <hr>
        <a href="https://github.com/emako/qvs/releases">github</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Download",
    data() {
      return {
        details: {
          r17:{
            //updated version
            ver:'r17',
            //updated details
            text:[
              "changed GPUs encoder's piper (for fixed GPU's encoder can't load vs)",
              "updated vapoursynth to r57",
              "updated python to 3.9",
              "updated mediainfo to 21.09",
              "updated LAVFilters to 0.75.1",
              "updated NVEnc 5.42",
              "updated VCEEnc 6.17",
              "updated QSVEnc 6.06",
              "updated x265 to 3.5+20",
              "updated mkvtoolnix to 63.0.0",
              "updated python to 3.9.9"
            ],
            //download link
            dl:[
              "https://download.fastgit.org/emako/qvs/releases/download/r17/qvs_r17_x64.7z",
              "https://download.fastgit.org/emako/qvs/releases/download/r17/qvs_r17_x64.exe"
            ]
          },
          r16: {
            ver:'r16',
            text: [
              "added script blockly for creating vapoursynth script (Preview Function)",
              "fixed taskbar button shown incorrectly",
              "updated vapoursynth to r52",
              "updated python to 3.8.7",
              "updated ffmpeg to 4.3.1",
              "updated mkvtoolnix to 53.0.0",
              "updated mediainfo to 20.09",
              "updated mp4box to 1.1.0 (Rev482)",
              "updated x264 to revision 3027 (API v161)",
              "updated x265 to version 3.4+30",
              "updated NVEncC to 5.25",
              "updated QSVEncC to 4.12",
              "updated VCEEncC to 6.08",
              "updated opusenc to 0.2-3-gf5f571b (using libopus 1.3-26-ge85ed772)",
              "updated qaac to 2.71",
            ],
            dl:["https://download.fastgit.org/emako/qvs/releases/download/r16/qvs_r16_x64.7z",
              "https://download.fastgit.org/emako/qvs/releases/download/r16/qvs_r16_x64.exe"
            ]
          },
          r15:{
            ver:'r15',
            text:[
              "added single image video funciton",
              "fixed crash error on closing child window",
              "fixed sometimes config, 'NotAddJobOnSaved' is not saved",
              "updated vapoursynth to r48",
              "updated mediainfo to v19.09",
              "updated x265 to 3.2+5",
              "updated mkvtoolnix to 43.0.0",
              "updated ffmpeg to 4.2.2",
              "updated LAVFilters to 0.74.1"
            ],
            dl:[
              "https://github.com/emako/qvs/releases/download/r15/qvs_r15_x64.7z",
              "https://github.com/emako/qvs/releases/download/r15/qvs_r15_x64.exe"
            ]
          },
        }
      }
    },
    methods:{
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
  .text{
    width:800px;
    margin: 50px auto;
    padding-left: 280px;
  }

  h1{
    text-align: center;
    font-size: 50px;
    text-shadow: 1px 2px 2px rgba(0,0,0,.5);
  }

  h2{
    padding-top: 50px;
    text-align: left;
    font-size: 30px;
    text-shadow: 1px 2px 2px rgba(0,0,0,.5);
  }

  .text ul{
    list-style: circle;
    margin-left: 30px;
  }

  .more a{
    color: green;
    font-size: 25px;
    text-shadow: 1px 2px 2px rgba(0,0,0,.5);
    text-decoration: none;
  }

  /*-------设置左导航条------------*/
  .left-nav{
    width:190px;
    padding:10px 0;
    background-color:#fd71c5;
    opacity: 0.8;
    position: fixed;
    left: 50px;
    top:150px;
    z-index: 999;
    border: 10px white solid;
    border-radius: 20%;
  }

  .left-nav ul{
    width: 150px;
    margin: 30px auto;

  }

  .left-nav a{
    display: block;
    color: #232222;
    text-decoration: none;
    font-weight: bold;
    line-height: 20px;
    text-align: center;
  }

  .left-nav a:hover{
    color: white;
    cursor: pointer;
  }

  .left-nav .line{
    width: 150px;
    height: 3px;
    background-color: white;
    margin: 15px auto;
  }

  /*-------下载区文字------------*/
  .fast-git{
    color: green;
    font-weight:bold;
  }

  .fast-git a{
    text-decoration: none;
  }
</style>