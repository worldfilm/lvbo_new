<template>
    <div>
        <div class="banner">
        </div>
        <div class="integral-container">
            <div class="integral-title">超值积分套餐</div>
            <charge-package></charge-package>
            <charge-package></charge-package>
        </div>
        <div class="integral-container">
            <div class="integral-title">积分充值</div>
            <score-charge></score-charge>
        </div>
        <div class="integral-container mt-30">
            <Payicons/>
        </div>
    </div>
</template>

<script>
import Payicons from '@/components/Payicons.vue'
import ChargePackage from '@/components/ChargePackage.vue'
import ScoreCharge from '@/components/ScoreCharge.vue'

export default {
  components: {
      Payicons,
      ChargePackage,
      ScoreCharge
  },
  data() {
    return {
      payType: "",
    };
  },
  created() {
      // alert(1)
  }
};
</script>

<style lang="scss" scoped>
.mt-30 {
  margin-top: 30px !important;
}
.banner {
  width: 100%;
  height: 400px;
  background: url("/static/index-banner-1.jpg") center;
  margin: 0 auto 30px;
}
.integral-container {
  width: 1170px;
  margin: 0 auto;
  .integral-title {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }
}
</style>

