<template>
    <div>
        <div class="banner">
        </div>
        <div class="integral-container">
            <div class="integral-title">超值积分套餐</div>
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
                            <button type="submit">立即支付</button>
                        </div>
                        
                    </div>
                </div>
            </div>
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
                            <button type="submit">立即支付</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="integral-container">
            <div class="integral-title">积分充值</div>
            <div class="recharge-top">
                <ul>
                    <li>
                        <label for="recharge50" class="recharge-top-price">
                            <label for="recharge50" class="top-price-first">50元</label>
                            <label for="recharge50" class="top-price-second">5000积分/500钻石</label>
                            <label for="recharge50" class="top-price-float">推荐</label>
                            <label for="recharge50" class="top-price-select">
                                <img src="/static/c-slted.png">
                            </label>
                        </label>
                    </li>
                    <li>
                        <label for="recharge50" class="recharge-top-price">
                            <label for="recharge50" class="top-price-first">50元</label>
                            <label for="recharge50" class="top-price-second">5000积分/500钻石</label>
                            <label for="recharge50" class="top-price-float">推荐</label>
                            <label for="recharge50" class="top-price-select">
                                <img src="/static/c-slted.png">
                            </label>
                        </label>
                    </li>
                    <li>
                        <label for="recharge50" class="recharge-top-price">
                            <label for="recharge50" class="top-price-first">50元</label>
                            <label for="recharge50" class="top-price-second">5000积分/500钻石</label>
                            <label for="recharge50" class="top-price-float">推荐</label>
                            <label for="recharge50" class="top-price-select">
                                <img src="/static/c-slted.png">
                            </label>
                        </label>
                    </li>
                    <li>
                        <label for="recharge50" class="recharge-top-price">
                            <label for="recharge50" class="top-price-first">50元</label>
                            <label for="recharge50" class="top-price-second">5000积分/500钻石</label>
                            <label for="recharge50" class="top-price-float">推荐</label>
                            <label for="recharge50" class="top-price-select">
                                <img src="/static/c-slted.png">
                            </label>
                        </label>
                    </li>
                    <li>
                        <label for="recharge50" class="recharge-top-price">
                            <label for="recharge50" class="top-price-first">50元</label>
                            <label for="recharge50" class="top-price-second">5000积分/500钻石</label>
                            <label for="recharge50" class="top-price-float">推荐</label>
                            <label for="recharge50" class="top-price-select">
                                <img src="/static/c-slted.png">
                            </label>
                        </label>
                    </li>
                    <li>
                        <label for="recharge50" class="recharge-top-price">
                            <label for="recharge50" class="top-price-first">50元</label>
                            <label for="recharge50" class="top-price-second">5000积分/500钻石</label>
                            <label for="recharge50" class="top-price-float">推荐</label>
                            <label for="recharge50" class="top-price-select">
                                <img src="/static/c-slted.png">
                            </label>
                        </label>
                    </li>
                </ul>
            </div>
            <div class="recharge-bottom">
                <label for="recharge-custom" class="recharge-bottom-input">
                    <label for="input-recharge">自定义金额充值：</label>
                    <label for="input-recharge" class="bottom-input-container">
                        <input type="text" id="input-recharge" placeholder="元">
                        <button type="button" class="btn-up"></button>
                        <button type="button" class="btn-down"></button>
                        <label for="input-recharge" class="bottom-input-show">10500积分/1050钻石</label>
                    </label>
                    <label class="recharge-pay-type" style="margin-left: 28px;">
                        <el-radio v-model="payType" :label="0">
                            <img src="/static/zhifubao.png" class="pay-icon" alt="">
                        </el-radio>
                    </label>
                    <label class="recharge-pay-type">
                            <el-radio v-model="payType" :label="1">
                                <img src="/static/weixin.png" class="pay-icon" alt="">
                            </el-radio>
                    </label>
                    <button type="submit" class="recharge-submit">立即充值</button>
                </label>
            </div>
        </div>
        <div class="integral-container mt-30">
            <Payicons/>
        </div>
    </div>
</template>

<script>
import Payicons from "@/components/Payicons.vue";
export default {
  components: {
      Payicons
  },
  data() {
    return {
      payType: ""
    };
  },
  created() {
      // alert(1)
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.mt-30 {
  margin-top: 30px !important;
}
.banner {
  width: 100%;
  height: 400px;
  background: url("/static/index-banner-1.jpg") center;
  margin: 0 auto 30px;
}
.pay-icon {
  height: 22px;
  vertical-align: middle;
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
  .recharge-top {
    margin-bottom: 30px;
    width: 100%;
    height: 120px;
    li {
      float: left;
      width: 15.2%;
      height: 120px;
      background-color: #fff;
      label.recharge-top-price {
        background-color: #fff;
        border: 1px solid #ddd;
        text-align: center;
        width: 100%;
        height: 100%;
        position: relative;
        padding-top: 35px;
        .top-price-first {
          font-size: 32px;
          color: #333;
          display: block;
          margin-bottom: -5px;
        }
        .top-price-second {
          font-size: 14px;
          color: #999;
          display: block;
        }
        .top-price-float {
          position: absolute;
          top: 10px;
          right: 0;
          background-color: #ff7800;
          padding: 0 8px;
          height: 20px;
          line-height: 20px;
          font-size: 12px;
          color: #fff;
          text-align: center;
        }
        .top-price-select {
          visibility: hidden;
        }
      }
    }
    li + li {
      margin-left: 20px;
    }
  }
  .recharge-bottom {
    border: 1px solid #ddd;
    background-color: #fff;
    width: 100%;
    height: 150px;
    .recharge-bottom-input {
      height: 38px;
      line-height: 38px;
      text-align: center;
      margin: 0 auto;
      display: block;
      padding-top: 50px;
      & > label {
        margin-bottom: 0;
        font-weight: 400;
        font-size: 16px;
        color: #333;
      }
      .bottom-input-container {
        position: relative;
        width: 150px;
        margin-left: 8px;
        #input-recharge {
          line-height: 38px;
          height: 38px;
          width: 150px;
          border: 1px solid #58b49d;
          border-radius: 2px;
          font-size: 16px;
          color: #333;
          padding-right: 24px;
          padding-left: 5px;
        }
        & > button {
          height: 19px;
          width: 18px;
          background-color: #ccc;
          position: absolute;
          border: none;
        }
        & > button::after {
          content: "";
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          position: absolute;
          display: inline-block;
        }
        .btn-up {
          top: 1px;
          right: 1px;
          &:after {
            border-bottom: 5px solid #000;
          }
        }
        .btn-down {
          bottom: 1px;
          right: 1px;
          &:after {
            border-top: 5px solid #000;
          }
        }
        .bottom-input-show {
          position: absolute;
          bottom: -44px;
          left: 0;
          font-size: 16px;
          color: #58b49d;
          font-weight: 400;
          max-width: 650px;
          width: 650px;
          text-align: left;
        }
      }
      & > button {
        border: none;
        background-color: #58b49d;
        color: #fff;
        width: 160px;
        height: 38px;
        line-height: 38px;
        border-radius: 2px;
        font-size: 16px;
        margin-left: 30px;
      }
    }
  }
}
</style>

