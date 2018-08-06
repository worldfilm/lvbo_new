<template>
<div class="AdvertisHome">

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
      network('videoList', null, data => {
        this.list = data.data
      })
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
