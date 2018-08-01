<template>
<div class="home">
  <VideoList/>
  <Barrage v-show="barrage"/>
</div>
</template>

<script>
  import Hub from '@/components/Hub';
  import VideoList from '@/components/VideoList';
  import Barrage from '@/components/Barrage';
  export default {
    data() {
      return {
         barrage:true,
      }
    },
    methods:{
       autoclosed(){
         this.barrage = false
       }
    },
    created() {
      Hub.$on('closed', (data) => {
        setTimeout(()=> {this.barrage = data}, 1500)
      });
      setTimeout(()=> {this.autoclosed()}, 2000)
    },
    components: {VideoList,Barrage},
  }
</script>

<style lang="scss" scoped>
.home {
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
}
</style>
  <!-- function(){
    setTimeout(function() {
      this.barrage=false
    }, 1500)
  } -->
