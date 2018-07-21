<template>
<div class="home">
  <VideoListContentLeft/>
  <VideoListContentRight/>
</div>
</template>

<script>

  import Hub from '@/components/Hub';
  import VideoListContentLeft from '@/components/VideoListContentLeft';
	import VideoListContentRight from '@/components/VideoListContentRight';
export default {
  data() {
    return {

    }
  },
  components: {VideoListContentLeft,VideoListContentRight}
}
</script>

<style lang="scss" scoped>
.home {
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
}
</style>
