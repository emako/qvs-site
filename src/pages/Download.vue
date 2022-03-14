<template>
  <div>
    <!--small-left-nav-->
    <nav class="small-left-nav">
      <ul>
        <li class="left-nav-item" v-for="(d,index) of details" :key="index">
          <a @click="anchor(`#${d.ver}`)"></a>
        </li>
      </ul>
    </nav>

    <!--	left navigation		-->
    <nav class="left-nav">
      <ul>
        <li class="left-nav-item" v-for="(d,index) of details" :key="index">
          <a @click="anchor(`#${d.ver}`)">version {{ d.ver }}</a>
          <div class="line"></div>
        </li>
      </ul>
    </nav>

    <!--	content		-->
    <div class="content">
      <div class="header-img">
        <router-link to="/home"><img src="@/../public/img/qvs.png" alt="egosub"></router-link>
      </div>
      <div class="download">
        <h2>Download</h2>
        <div v-for="(d,index) of details" :key="index">
          <!--version title		-->
          <h3 :id="d.ver">version {{ d.ver }}</h3>
          <hr>
          <!-- version updated details list	-->
          <ul>
            <li v-for="(item,index) of d.text" :key="index">{{ item }}</li>
          </ul>
          <br>
          <!-- download link list	-->
          <div class="fast-git">
            FastGit:
            <a v-for="(link,index) of d.dl" :key="index"
               :href="link">{{ link.match(RegExp(`(?<=${d.ver}\/)(.+)`, 'i'))[0] }}&nbsp&nbsp</a>
          </div>
        </div>
      </div>
      <div class="more">
        <h3>For more versions</h3>
        <hr>
        <a href="https://github.com/emako/qvs/releases">github</a>
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
  name: "Download",

  //use anchor navbar mixin
  mixins:[anchor,navbar("download")],

  //version data
  data() {
    return {
      details: {
        r17: {
          //updated version
          ver: 'r17',
          //updated details
          text: [
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
          dl: [
            "https://download.fastgit.org/emako/qvs/releases/download/r17/qvs_r17_x64.7z",
            "https://download.fastgit.org/emako/qvs/releases/download/r17/qvs_r17_x64.exe"
          ]
        },
        r16: {
          ver: 'r16',
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
          dl: ["https://download.fastgit.org/emako/qvs/releases/download/r16/qvs_r16_x64.7z",
            "https://download.fastgit.org/emako/qvs/releases/download/r16/qvs_r16_x64.exe"
          ]
        },
        r15: {
          ver: 'r15',
          text: [
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
          dl: [
            "https://github.com/emako/qvs/releases/download/r15/qvs_r15_x64.7z",
            "https://github.com/emako/qvs/releases/download/r15/qvs_r15_x64.exe"
          ]
        },
      }
    }
  },
}
</script>
<style scoped src="../../public/css/Download.css"></style>