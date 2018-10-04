<template>
<div class="FloatAD">
  <ul>
    <li v-for="(item, index) in list">
      <a :href="item.url" target="_blank">
        <img :src="item.img_url" :title="item.title">
      </a>
    </li>
  </ul>
</div>
</template>
<script>
import QRCode from 'qrcodejs2'
import Hub from "@/components/Hub";
export default {
  data() {
    return {
      list: [],

    };
  },
  methods: {
    getlist() {
      this.$http.get("/api/advert/list", {cate_code: 'IndexAlter'}).then(data => {
        if (data.data && data.data.lengt !== 0) {
          this.list = data.data;
        }
      });
    },
  },
  created() {
    this.getlist();
  },
  mounted() {
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.FloatAD {
    width: 1200px;
    margin: 5px auto;
    text-align: left;
    height: 270px;
}
</style>
