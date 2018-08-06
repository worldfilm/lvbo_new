<template>
<div class="home">
  <AdvertisHome v-show="ShowAdvertisHome"/>
  <VideoList/>
  <Barrage v-show="barrage"/>
</div>
</template>

<script>
  import Hub from '@/components/Hub';
  import VideoList from '@/components/VideoList';
  import Barrage from '@/components/Barrage';
  import AdvertisHome from '@/components/AdvertisHome';
  export default {
    data() {
      return {
         barrage:true,
         ShowAdvertisHome:false,
      }
    },
    methods:{
       autoclosed(){
         this.barrage = false
       }
    },
    created() {
      Hub.$on('closed', (data) => {
        setTimeout(()=> {this.barrage = data}, 500)
      });
      setTimeout(()=> {this.autoclosed()}, 2000)
    },
    components: {VideoList,Barrage,AdvertisHome},
  }
</script>

<style lang="scss" scoped>
.home {
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
}
</style>
