<template>
<div class="home">
  <AdvertisHome v-show="ShowAdvertisHome"/>
  <AdvertisRWM v-show='ShowAdvertisRWM'/>
  <FloatAD/>
  <!-- <ZhiboList/> -->
  <VideoList/>
  <Barrage v-show="barrage"/>
</div>
</template>

<script>
import Hub from "@/components/Hub";
import Barrage from "@/components/Alert/Barrage";
import AdvertisHome from "@/components/AdvertisHome";
import AdvertisRWM from "@/components/AdvertisRWM";
import FloatAD from "@/components/FloatAD";
// import ZhiboList from '@/components/videolist/ZhiboList';
import VideoList from "@/components/videolist/VideoList";

export default {
  data() {
    return {
      barrage: true,
      ShowAdvertisHome: true,
      ShowAdvertisRWM:true,
    };
  },
  methods: {
    autoclosed() {
      this.barrage = false;
    }
  },
  created() {
    Hub.$on("closed", data => {
      this.barrage = data;
    });
    setTimeout(() => {
      this.autoclosed();
    }, 5000);
    var warning18 = sessionStorage.getItem("warning18");
    if (warning18 == undefined) {
      sessionStorage.setItem("warning18", "xxxx");
    } else {
      this.barrage = false;
    }
    // this.$http.get("/api/category/list").then(data => {
    //   this.list = data.data.list;
    // });
  },
  components: { VideoList, Barrage, AdvertisHome,AdvertisRWM, FloatAD,}
};
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;
}
</style>
