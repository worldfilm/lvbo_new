<template>
<div class="AdvertisHome">
<ul>
  <li v-for="(item, index) in list" :key="index">
    <a :href="item.url" target="_blank">
      <img :src="item.img_url" :title="item.title">
    </a>
  </li>
</ul>
</div>
</template>
<script>
import Hub from "@/components/Hub";
import { network } from "@/config/config";
export default {
  data() {
    return {
      list: [],
      data: "最新"
    };
  },
  methods: {
    initial() {
      let api_token = sessionStorage.getItem("TOKEN_KEY");
      network("/api/advert/list?cate_code=IndexHeader", null, data => {
        if (data.data&&data.data.lengt !== 0) {
          this.list = data.data;
          console.log(api_token);
        }
      });
    }
  },
  created() {
    this.initial();
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.AdvertisHome {
  width: 1200px;
  margin: 5px auto;
  text-align: left;
}
</style>
