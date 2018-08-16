<template>
<div class="AdvertisHome">
<ul>
  <li><img src="/static/4.gif" alt=""></li>
  <li><img src="/static/3.gif" alt=""></li>
  <li><img src="/static/4.gif" alt=""></li>
  <li><img src="/static/3.gif" alt=""></li>
  <li><img src="/static/4.gif" alt=""></li>
  <li><img src="/static/3.gif" alt=""></li>
  <li><img src="/static/4.gif" alt=""></li>
</ul>
</div>
</template>
<script>
import Hub from '@/components/Hub';
import {
  network
} from '@/config/config';
export default {
  data() {
    return {
      list: [],
      data: '最新',
    }
  },
  methods: {
    initial() {
      // network('videoList', null, data => {
      //   this.list = data.data
      // })
    },
  },
  mounted() {
    this.initial()
  },
  created() {

  },
  components: {}
}
</script>

<style lang="scss" scoped>
.AdvertisHome {
    width: 1200px;
    margin: 5px auto;
    text-align: left;
}
</style>
