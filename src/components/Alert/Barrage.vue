<!-- 18岁提示框 -->
<template>
<div class="pay-layer">
  <div class="pay-layer-container" @click="closeimg">
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {}
  },
  methods: {
    closeimg() {
       Hub.$emit('closed', false);
    }
  },
  components: {},
  created() {
    
  },
}
</script>
 <style lang="scss" scoped>
.pay-layer {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200011;
    overflow: auto;
    .pay-layer-container {
      max-width: 510px;
      height: 470px;
      margin: 160px auto;
      background-color: #fff;
      padding: 50px 35px;
      position: relative;
      background: url(/static/warning18.png) no-repeat 1px 29px;
    }
}
</style>
