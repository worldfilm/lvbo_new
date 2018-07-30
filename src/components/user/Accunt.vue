<template>
<div class="accunt">
  <div class="accountInfo">
    <div class="account-left">
      <p class="account-title">账户余额:</p>
      <p>
        <i class="fas fa-coins"></i>
        <span>9999</span><span>积分</span>
        <i class="fas fa-gem"></i>
        <span>999999</span><span>直播打赏</span>
      </p>
      <p>非会员</p>
      <p>
        <a href="">我的订单</a>
        <a href="">交易明细</a>
        <a href="">兑换码</a>
      </p>
    </div>
    <div class="account-right">
      <p class="account-title"><span>账户充值</span><i class="fas fa-exclamation-circle"></i><span class="info">充值满100返5%,满500返8%,满800返12%</span></p>
      <!-- <div class="accountInfo-hide"><span>1元可购买100积分或10钻石，积分可以用来下载视频，钻石可在直播频道打赏主播。</span></div> -->
      <p class="recharge-detail">
        <span>10元</span>
          <input class="input-recharge" type="text" placeholder="自定义">
          <button type="button" class="btn-up"></button>
          <button type="button" class="btn-down"></button>
      </p>
      <p class="payment-way">
        <input type="radio" id="zhi">
        <label for="zhi">支付宝支付</label>
        <input type="radio" id="wei">
        <label for="wei">微信支付</label>
      </p>
      <p>
        <button class="button-pay">立即充值</button>
        <span class="span-score">1000积分/</span>
        <span class="span-diamond">100钻石</span>
      </p>
    </div>
  </div>
  <Paypackge/>
  <Payicons/>
</div>
</template>
<script>
import Hub from '@/components/Hub';
import Payicons from '@/components/Payicons.vue';
import Paypackge from '@/components/Paypackge.vue';
export default {
  data() {
    return {
      list: [{}, ]


    }
  },
  methods: {

  },
  components: {
    Payicons,
    Paypackge
  }
}
</script>

<style lang="scss" scoped>
.accunt {
    width: 900px;
    height: auto;
    float: right;
    font-size: 15px;
    .accountInfo {
        width: 100%;
        height: 225px;
        border: 1px solid #ddd;
        margin-bottom: 30px;
        .account-left {
            width: 280px;
            height: 170px;
            margin: 28px;
            float: left;
            border-right: 1px dashed #ddd;
            .account-title {
                text-align: left;
                padding: 5px;
                height: 40px;
                line-height: 40px;
                font-size: 18px;
            }
            p {
                text-align: left;
                height: 40px;
                line-height: 40px;
                i {
                    font-size: 30px;
                    color: #58b59d;
                }
            }
        }
        .account-right {
            float: left;
            width: 430px;
            height: 180px;
            padding: 23px;
            .account-title {
                text-align: left;
                padding: 5px;
                height: 40px;
                line-height: 40px;
                font-size: 18px;
            }
            p {
                text-align: left;
                height: 40px;
                line-height: 40px;
                i {
                    font-size: 20px;
                    color: #58b59d;    padding: 0 3px;
                }
                .info {
                    font-size: 13px;
                    color: #7b7b7b;
                }
            }
        }
    }
}
</style>
