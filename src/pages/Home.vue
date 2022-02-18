<template>
  <div class="content">
    <div class="header-img">
      <router-link to="/home"><img src="@/../public/img/qvs.png" alt="egosub"></router-link>
    </div>
    <h1>qvs</h1>
    <h2>A simple program for using VapourSynth/Avisynth Script previewed and encoded.</h2>
    <br>
    <div class="main-features">Main Features</div>
    <hr>
    <ul>
      <li> New script(*.vpy), also using blockly, a visual programming tools.</li>
      <li> Encode script(*.vpy) or video, also using x264/x265/NVEnc/QSVEnc/VCEEnc encoders.</li>
      <li> Encode audio, also using AAC/MP3/ALAC/FLAC/OPUS/OGG Vorbis/AC3/WAV encoders.</li>
      <li> Muxer video and audio, also using MP4Box/L-smash/MKVMerge/FFMpeg tools.</li>
      <li> Demuxer video, also using FFMpeg/Eac3to/MKVExtract/TsDemux tools.</li>
      <li> Create single image video.</li>
      <li> Splite/Merge media file.</li>
      <li> Show MediaInfo.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home"
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

h1 {
  text-align: center;
  font-size: 50px;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, .5);
}

h2 {
  text-align: center;
}

.main-features {
  text-align: center;
  font-size: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
}

.content ul {
  list-style: circle;
  margin-left: 30px;

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