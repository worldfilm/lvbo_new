<template>
<div class="VideoDetil">
  <AdvertisHome/>
  <VideoPlay/>
  <VideoPlayRightList/>
  <VideoContentMenu/>
  <VideoInfo/>
  <VideoComment/>
</div>
</template>
<script>
import Hub from '@/components/Hub';
import {network} from '@/config/config';
import AdvertisHome from '@/components/AdvertisHome';
import VideoPlay from '@/components/VideoPlay';
import VideoPlayRightList from '@/components/VideoPlayRightList';
import VideoContentMenu from '@/components/VideoContentMenu';
import VideoInfo from '@/components/VideoInfo';
import VideoComment from '@/components/VideoComment';
export default {
  data() {
    return {}
  },
  methods: {

  },
  mounted() {

  },
  created() {

  },
  components: {AdvertisHome,VideoPlay,VideoPlayRightList,VideoContentMenu,VideoInfo,VideoComment}
}
</script>

<style lang="scss" scoped>
.VideoDetil {
    width: 1200px;
    margin: 0 auto;
    text-align: left;
}
</style>
