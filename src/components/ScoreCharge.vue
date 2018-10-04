<template>
<div class="charge-box">
    <div class="recharge-top clearfix">
        <ul>
            <li v-for="(item, index) in packageList" :key="index" @click="selectedAmount(item)">
                <label class="recharge-top-price" :class="{'actived':amount===item.amount}">
                    <label class="top-price-first">{{item.amount}}元</label>
                    <label class="top-price-second">{{item.desc}}</label>
                    <label class="top-price-float">{{item.mark}}</label>
                    <label class="top-price-select">
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
                <input type="text" class="input-recharge" v-model="amount" placeholder="元">
                <button type="button" class="btn-up"></button>
                <button type="button" class="btn-down"></button>
                <label for="input-recharge" class="bottom-input-show">{{desc}}</label>
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
</template>

<script>
let data = [
  {
    amount: '50',
    desc: "5000积分/500钻石",
    mark: "推荐"
  },
  {
    amount: '100',
    desc: "10500积分/10550钻石",
    mark: "推荐"
  },
  {
    amount: '150',
    desc: "15750积分/1575钻石",
    mark: "推荐"
  },
  {
    amount: '300',
    desc: "31500积分/3150钻石",
    mark: "推荐"
  },
  {
    amount: '800',
    desc: "89600积分/8960钻石",
    mark: "豪气"
  },
  {
    amount: '1000',
    desc: "112000积分/11200钻石",
    mark: "豪气"
  }
];
export default {
  data() {
    return {
      payType: 0,
      amount: 100,
      desc: '',
      packageList: data
    };
  },
  methods: {
    selectedAmount(item) {
      this.amount = item.amount;
      this.desc = item.desc;
    }
  }
};
</script>

<style lang="scss" scoped>
.pay-icon {
  height: 22px;
  vertical-align: middle;
}
.actived {
  border: 1px solid #58b49d !important;
  .top-price-select {
    visibility: visible !important;
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
      padding-top: 15px;
      &:hover {
        @extend .actived;
      }
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
        position: absolute;
        bottom: 0;
        right: 0;
        width: 19px;
        height: 19px;
        margin-bottom: 0;
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
      .input-recharge {
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
</style>
