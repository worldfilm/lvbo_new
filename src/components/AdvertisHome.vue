<template>
<div class="AdvertisHome">
<ul>
  <li>
    <a href="">
      <img src="/static/4.gif" alt="">
    </a>
  </li>
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
      let api_token = sessionStorage.getItem('TOKEN_KEY')
      network('/api/advert/list?cate_code=IndexHeader',null, data => {
        this.list = data.data
        console.log(api_token)
      })
    },
  },
  created() {
    this.initial();
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
