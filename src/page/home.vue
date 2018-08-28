<template>
<div class="home">
  <AdvertisHome v-show="ShowAdvertisHome"/>
  <ZhiboList/>
  <ChineseList/>
  <JanpanList/>
  <SelfieList/>
  <MovieList/>
  <VideoList/>
  <Barrage v-show="barrage"/>
</div>
</template>

<script>
  import Hub from '@/components/Hub';
  import Barrage from '@/components/Alert/Barrage';
  import AdvertisHome from '@/components/AdvertisHome';
  import ZhiboList from '@/components/videolist/ZhiboList';
  import ChineseList from '@/components/videolist/ChineseList';
  import JanpanList from '@/components/videolist/JanpanList';
  import SelfieList from '@/components/videolist/SelfieList';
  import MovieList from '@/components/videolist/MovieList';
  import VideoList from '@/components/videolist/VideoList';
  import  {network} from '@/config/config';

  export default {
    data() {
      return {
         barrage:true,
         ShowAdvertisHome:true,
      }
    },
    methods:{
       autoclosed(){
         this.barrage = false
       }
    },
    created() {
      Hub.$on('closed', (data) => {
        this.barrage = data
      });
      setTimeout(()=> {this.autoclosed()}, 5000)
      var warning18=sessionStorage.getItem('warning18')
      if(warning18==undefined){
        sessionStorage.setItem('warning18', 'xxxx')
      }else{
        this.barrage=false
      }
      network('/api/category/list', null, data => {
        console.log(data)
        this.list=data.data.list
      })
    },
    components: {VideoList,Barrage,AdvertisHome,ZhiboList,ChineseList,JanpanList,SelfieList,MovieList},
  }
</script>

<style lang="scss" scoped>
.home {
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
}
</style>
