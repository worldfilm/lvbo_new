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
export default {
  data() {
    return {
      list: [],
      data: "最新"
    };
  },
  methods: {
    initial() {
      this.$http.get("/api/advert/list", {cate_code: 'IndexHeader'}).then(data => {
        if (data.data && data.data.lengt !== 0) {
          this.list = data.data;
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
