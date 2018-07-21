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
import payContain from '@/components/payContain.vue';
export default {
  data(){
    return {
      ShowPayContain:false
    }
  },
  components: {
    Paytop,Paypackge,Payicons,payContain
  },
  created() {
    Hub.$on('change3', (data) => {
      this.ShowPayContain = data
    });
    Hub.$on('change4', (data) => {
      console.log(data)
      this.ShowPayContain = data
    });
  }
}
</script>

<style lang="scss" scoped>
.vip {
    overflow: hidden;
}
</style>
