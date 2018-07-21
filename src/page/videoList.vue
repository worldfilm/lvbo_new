<template>
<div class="videoList">
     <Titlegurd/>
     <VideoListContentLeft/>
     <VideoListContentRight/>
</div>
</template>
<script>
import Titlegurd from '@/components/Titlegurd.vue';
import VideoListContentLeft from '@/components/VideoListContentLeft';
import VideoListContentRight from '@/components/VideoListContentRight';
export default {
  components: {
    Titlegurd,VideoListContentLeft,VideoListContentRight
  }
}
</script>

<style lang="scss" scoped>
.videoList {
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
}
</style>
