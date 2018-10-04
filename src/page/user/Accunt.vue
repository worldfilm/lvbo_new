<template>
<div class="accunt">
  <LeftMenu/>
  <div class="accunt-c">
    <div class="accountInfo clearfix">
      <!-- <div class="account-left"> -->
      <!-- <p class="account-title">账户余额:</p> -->
      <!-- <p>
        <i class="iconfont icon-jifen"></i>
        <span>9999</span><span>积分</span>
        <i class="iconfont icon-zuanshi"></i>
        <span>999999</span><span>直播打赏</span>
      </p>
      <p>非会员</p>
      <p class='hreflist'>
        <a @click='order'>我的订单</a>
        <a @click='transaction'>交易明细</a>
        <a @click='redemptionCode'>兑换码</a> -->
      <!-- </p> -->
      <!-- </div> -->
      <div class="account-right">
        <p class="account-title">
          <span>账户充值</span>
          <i class="iconfont icon-tishi" v-on:mouseenter="dataDetails($parent.$index)" v-on:mouseleave="hiddenDetail($parent.$index)"></i>
          <!-- <span class="info">充值满100返5%,满500返8%,满800返12%</span> -->
        </p>
        <!-- <div class="accountInfo-hide" v-show='ShowInfo'><span>1元可购买100积分或10钻石，积分可以用来下载视频，钻石可在直播频道打赏主播。</span></div> -->
        <p class="recharge-detail">
          <span v-for="(item,index) in chargeList" :key="index" @click="selectmoney(item.money,item.id)" :class="{active:amount === item.money}">{{parseInt(item.money)}}元</span>
          <!-- <span class="custom-amount">
          <input type="text" placeholder="自定义金额" v-model="amount" maxlength=13>
          <button type="button" class="up" @click="btnup"><i class="fas fa-caret-up"></i></button>
          <button type="button" class="down" @click="btndown"><i class="fas fa-caret-down"></i></button>
        </span> -->
        </p>
        <p class="payment-way">
          <el-radio v-for="(item, index) in payChannelList" :key="index" v-model="payType" :label="item.method">
            <!-- <img src="/static/zhifubao.png" class="pay-icon" alt=""> -->
            {{item.name}}
          </el-radio>
        </p>
        <p class="btn-p">
          <button class="button-pay" @click="pay">立即充值</button>
          <!-- <span class="span-score" v-text="integraltext"></span><span>积分/</span> -->
          <span class="span-diamond" v-text="diamondtext"></span><span>钻石</span>
        </p>
      </div>
    </div>
    <Paypackge/>
    <Payicons/>
    <payContain v-show='ShowpayContain' />
    <PaySuccess v-show='ShowPaySuccess' />
  </div>
</div>
</template>
<script>
import Hub from "@/components/Hub";
import Payicons from "@/components/Payicons.vue";
import Paypackge from "@/components/Paypackge.vue";
import payContain from "@/page/user/payContain.vue";
import PaySuccess from "@/components/Alert/PaySuccess.vue";
import LeftMenu from '@/page/user/LeftMenu';
// var i = 0
export default {
  components: {
    Payicons,
    Paypackge,
    payContain,
    PaySuccess,
    LeftMenu,
  },
  data() {
    return {
      // 充值金额列表
      chargeList: [],
      // 付款渠道列表
      payChannelList: [],
      // 支付方式
      payType: 0,
      // 充值金额
      amount: 0,
      // 充值金额ID
      amountId: null,
      ShowInfo: false,
      zhifubao: true,
      weixin: false,
      checked: "0",
      pick: null,
      ShowpayContain: false,
      ShowPaySuccess: false,
    };
  },
  computed: {
    // integraltext() {
    //   return 1000;
    // },
    diamondtext() {
      return parseInt(this.amount);
    }
  },
  methods: {
    getPayList() {
      this.$http.get("/api/pay/payList").then(res => {
        if (res.status === 0) {
          this.chargeList = res.data.rechargeList;
          this.payChannelList = res.data.channelList;
        }
      });
    },
    order() {
      Hub.$emit("component", "Oder");
    },
    transaction() {
      Hub.$emit("component", "Transaction");
    },
    redemptionCode() {
      Hub.$emit("component", "RedemptionCode");
    },
    btnup() {
      var i = 0;
      i += 10;
      this.obj.moneytext = parseInt(this.obj.moneytext) + i;
    },
    btndown() {
      // var i = 0;
      // if (
      //   parseInt(this.obj.moneytext) < 10 &&
      //   parseInt(this.obj.moneytext) > 0
      // ) {
      //   this.obj.moneytext = 0;
      // }

      // if (parseInt(this.obj.moneytext) > 9) {
      //   i += 10;
      //   this.obj.moneytext = parseInt(this.obj.moneytext) - i;
      //   this.integraltext = this.integraltext - 10;
      //   this.diamondtext = this.diamondtext - 10;
      // }
    },
    dataDetails(e) {
      this.ShowInfo = true;
    },
    hiddenDetail(e) {
      this.ShowInfo = false;
    },
    pay() {
      if (!this.amount) {
        this.$alert('请选择充值金额')
        return false;
      }
      if (!this.payType) {
        this.$alert('请选择充值方式')
        return false;
      }
      let params = {
        project_id: 3,
        uid: window.sessionStorage.getItem('id'),
        pay_method: this.payType,
        id: this.amountId,
        money: this.amount
      };
      this.$http.get("http://pay-api.6fg645fsd.com/api/pay/order", params).then(res => {
        if (res.status === 0) {
          location.href = res.data.pay_html_url
        } else {
          this.$message(res.message);
        }
      });
    },
    selectmoney(amount, id) {
      this.amount = amount;
      this.amountId = id;
      // Hub.$emit("paymoney", this.obj.moneytext);
    },
    getExchanges(){
      this.$http.get("/api/user/getExchanges").then(res => {

      });
    }
  },
  created() {
    this.getExchanges();
    this.getPayList();
    Hub.$on("PayDialog", data => {
      this.ShowpayContain = data;
    });
    Hub.$on("PaySuccessClosed", data => {
      this.ShowPaySuccess = data;
    });
  },
  watch: {
    // obj: {
    //   handler(newName, oldName) {
    //     this.integraltext = this.obj.moneytext * 100;
    //     this.diamondtext = this.obj.moneytext * 10;
    //     if (parseInt(this.obj.moneytext) < 0) {
    //       this.integraltext = 0;
    //       this.diamondtext = 0;
    //     }
    //   },
    //   immediate: true,
    //   deep: true
    // }
  }
};
</script>
<style lang="scss" scoped>
.accunt {
    width: 1200px;
    margin: 0 auto;
    height: auto;
    margin-top: 20px;
    margin-bottom: 40px;
    .accunt-c {
        width: 900px;
        height: auto;
        display: inline-block;
        font-size: 15px;
        min-height: 600px;
        .accountInfo {
            width: 100%;
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
                .hreflist {
                    a {
                        padding: 10px;
                        cursor: pointer;
                        padding-left: 0;
                    }
                    a:hover {
                        color: #58b59d;
                    }
                }
            }
            .account-right {
                float: left;
                padding: 23px;
                .account-title {
                    text-align: left;
                    padding: 5px;
                    height: 40px;
                    line-height: 40px;
                    font-size: 18px;
                    position: relative;
                }
                .accountInfo-hide {
                    position: absolute;
                    background: #ddd;
                    width: 300px;
                    z-index: 1;
                    -webkit-transition: visibility 0.2s;
                    transition: visibility 0.2s;
                    display: inline-block;
                    top: 223px;
                    left: 647px;
                    width: 273px;
                    background-color: rgba(0, 0, 0, 0.8);
                    border-radius: 10px;
                    color: #fff;
                    font-size: 14px;
                    padding: 10px 20px;
                }
                .recharge-detail {
                    .active {
                        border: 1px solid #58b59d;
                        background: url("/static/selected.png") no-repeat 38px 17px;
                    }
                    span {
                        height: 35px;
                        width: 56px;
                        display: inline-block;
                        border: 1px solid #ddd;
                        text-align: center;
                        margin-right: 7px;
                        position: relative;
                        cursor: pointer;
                        top: 3px;
                    }
                    .custom-amount {
                        position: relative;
                        width: 150px;
                        height: 32px;
                        display: inline-block;
                        input {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 125px;
                            height: 30px;
                            border: 0;
                            text-align: left;
                            padding-left: 5px;
                            background: transparent;
                        }

                        button {
                            display: inline-block;
                            position: absolute;
                            cursor: pointer;
                            height: 17px;
                            right: 1px;
                            i {
                                width: 20px;
                                height: 20px;
                            }
                        }
                        .up {
                            right: 0;
                            top: 0;
                        }
                        .down {
                            right: 0;
                            bottom: 0;
                        }
                    }
                }
                p {
                    text-align: left;
                    // height: 40px;
                    line-height: 40px;
                    overflow: hidden;
                    max-width: 499px;
                    i {
                        font-size: 20px;
                        color: #58b59d;
                        padding: 0 3px;
                    }
                    .info {
                        font-size: 13px;
                        color: #7b7b7b;
                    }
                    .button-pay {
                        font-size: 16px;
                        width: 100px;
                        height: 38px;
                        line-height: 38px;
                        cursor: pointer;
                        color: #fff;
                        border-radius: 2px;
                        text-align: center;
                        background-color: #58b59d;
                        margin: 12px auto;
                    }
                }
                .btn-p {
                    height: 50px;
                    line-height: 50px;
                }
                .payment-way {
                    label {
                        height: 20px;
                        line-height: 20px;
                        display: inline-block;
                        padding-right: 25px;
                        margin-left: 5px;
                        cursor: pointer;
                        img.pay-icon {
                            height: 22px;
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
    }
}
</style>
