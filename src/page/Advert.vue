<template>
<div class="advert">
      <p>广告列表页</p>
</div>
</template>

<script>
import Hub from "@/components/Hub";

export default {
  data() {
    return {
    };
  },
  methods: {

  },
  created() {
    // Hub.$on("xxx", data => {
    // });

    // this.$http.get("/api/category/list").then(data => {
    //   this.list = data.data.list;
    // });
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.advert {
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;
  p{
    padding:100px;
  }
}
</style>
