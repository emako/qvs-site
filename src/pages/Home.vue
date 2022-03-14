<template>
  <div class="content">
    <div class="header-img">
      <router-link to="/home"><img src="@/../public/img/qvs.png" alt="egosub"></router-link>
    </div>
    <h2>qvs</h2>
    <h3>A simple program for using VapourSynth/Avisynth Script previewed and encoded.</h3>
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
<style scoped src="../../public/css/Home.css"></style>