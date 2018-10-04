<template>
<div class="VideoDetil">
  <AdvertisHome/>
  <VideoPlay/>
  <!-- <video
    id="my-player"
    class="video-js"
    controls
    preload="auto"
    poster="//vjs.zencdn.net/v/oceans.png"
    data-setup='{}'>
    <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
    <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
    <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="http://videojs.com/html5-video-support/" target="_blank">
        supports HTML5 video
      </a>
    </p>
  </video> -->
  <video id="my-player" class="video-js" controls preload="auto" width="640" height="264"
   data-setup="{}">
    <source src="http://video.vbcage.com/2017/04/c41fb26299ca054693eb88f2bec27e72/index.m3u8" type="application/x-mpegURL">
  </video>
  <VideoPlayRightList/>
  <VideoContentMenu/>
  <VideoInfo/>
  <VideoComment/>

</div>
</template>
<script>
import Hub from "@/components/Hub";
import AdvertisHome from "@/components/AdvertisHome";
import VideoPlay from "@/components/VideoPlay";
import VideoPlayRightList from "@/components/VideoPlayRightList";
import VideoContentMenu from "@/components/VideoContentMenu";
import VideoInfo from "@/components/VideoInfo";
import VideoComment from "@/components/VideoComment";

export default {
  data() {
    return {};
  },
  methods: {
    getFingerprint() {
      let Fingerprint = require("fingerprintjs");
      var fingerprint = new Fingerprint().get();
      console.log(fingerprint);
    }
  },
  mounted() {
    var player = videojs("my-player", {}, function onPlayerReady() {
      videojs.log("Your player is ready!");
      this.play();
      this.on("ended", function() {
        videojs.log("Awww...over so soon?!");
      });
    });
  },
  created() {
    this.getFingerprint();
  },
  components: {
    AdvertisHome,
    VideoPlay,
    VideoPlayRightList,
    VideoContentMenu,
    VideoInfo,
    VideoComment
  }
};
</script>

<style lang="scss" scoped>
.VideoDetil {
  width: 1200px;
  margin: 0 auto;
  text-align: left;
}
</style>
