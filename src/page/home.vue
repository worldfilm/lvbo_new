<template>
<div class="home">
  <VideoList/>
</div>
</template>

<script>

  import Hub from '@/components/Hub';
  import VideoList from '@/components/VideoList';
export default {
  data() {
    return {

    }
  },
  components: {VideoList,}
}
</script>

<style lang="scss" scoped>
.home {
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
}
</style>
