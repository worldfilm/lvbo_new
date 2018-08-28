<template>
    <div class="integral-box">
        <div class="package-div">
            <span>充值300元积分，送1个月VIP</span>
            <div class="clearfix">
                <div class="package-div-left">
                    <div>
                        30000积分<img src="/static/c-mon.png">
                        <span class="left-first">/</span>
                        3000钻石<img src="/static/c-zs.png">
                        <span class="left-second">+</span>赠1个月VIP会员
                        <img src="/static/c-yz.png">
                        <span class="left-third">=</span>
                        <span class="left-four">￥300.00</span>
                    </div>
                    <label class="div-left-pay-type">
                        <div>
                            <el-radio v-model="payType" :label="0">
                                <img src="/static/zhifubao.png" class="pay-icon" alt="">
                            </el-radio>
                        </div>
                        <div>
                            <el-radio v-model="payType" :label="1">
                                <img src="/static/weixin.png" class="pay-icon" alt="">
                            </el-radio>
                        </div>
                    </label>
                    <button type="submit" @click="pay">立即支付</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
      packageInfo: {
          type: Object
      }
  },
  data() {
    return {
      payType: 0
    };
  },
  methods: {
      pay() {
          let payTypeText = {
              '0': '支付宝',
              '1': '微信'
          }[this.payType]
          this.$alert(`你选择了${payTypeText}支付  (支付功能开发中...)`)
      }
  }
};
</script>

<style lang="scss" scoped>
.pay-icon {
  height: 22px;
  vertical-align: middle;
}
.package-div {
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 40px 30px;
  width: 100%;
  margin-bottom: 20px;
  text-align: left;
  & > span {
    font-size: 16px;
    color: #333;
  }
  & > div {
    width: 100%;
    font-size: 24px;
    color: #333;
    position: relative;
  }
  .package-div-left {
    width: 85.5%;
    display: table;
    & > div {
      display: table-cell;
      vertical-align: middle;
      & > img {
        margin-left: 10px;
        vertical-align: text-bottom;
      }
      .left-first {
        margin: 0 10px;
      }
      .left-second,
      .left-third {
        margin: 0 15px;
      }
      .left-four {
        color: #58b49d;
        font-size: 30px;
      }
    }
    .div-left-pay-type {
      display: table-cell;
      vertical-align: middle;
      margin-left: 20px;
      line-height: 0;
    }
    & > button {
      width: 160px;
      height: 50px;
      background-color: #58b49d;
      color: #fff;
      font-size: 22px;
      border-radius: 25px;
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -25px;
      border: none;
      text-align: center;
    }
  }
}
</style>

