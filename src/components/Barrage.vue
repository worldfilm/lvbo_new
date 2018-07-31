
<template>
<div class="pay-layer">
  <div class="pay-layer-container">
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components: {}
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
        max-width: 980px;
        height: auto;
        margin: 160px auto;
        background-color: #fff;
        padding: 50px 35px;
        position: relative;

    }
}
</style>
