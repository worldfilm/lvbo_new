<template>
<div class="vip">
  <Paytop/>
  <Paypackge/>
  <Payicons/>
  <payContain v-show='ShowPayContain'/>
</div>
</template>
<script>
import Hub from '@/components/Hub';
import Paytop from '@/components/Paytop.vue';
import Paypackge from '@/components/Paypackge.vue';
import Payicons from '@/components/Payicons.vue';
import payContain from '@/page/user/payContain.vue';
export default {
  data(){
    return {
      ShowPayContain:false,
    }
  },
  components: {
    Paytop,Paypackge,Payicons,
    payContain
  },
  methods: {

  },
  created() {
    Hub.$on('PayDialog', (data) => {
      this.ShowPayContain = data
    });
    Hub.$on('username', (data) => {
    });
    Hub.$on('ShowNoLogin', (data) => {
    });
  },
}
</script>

<style lang="scss" scoped>
.vip {
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
}
</style>
