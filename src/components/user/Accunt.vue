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
      <p class='hreflist'>
        <a @click='order'>我的订单</a>
        <a @click='transaction'>交易明细</a>
        <a @click='redemptionCode'>兑换码</a>
      </p>
    </div>
    <div class="account-right">
      <p class="account-title">
        <span>账户充值</span>
        <i class="fas fa-exclamation-circle" v-on:mouseenter="dataDetails($parent.$index)" v-on:mouseleave="hiddenDetail($parent.$index)"></i>
        <span class="info">充值满100返5%,满500返8%,满800返12%</span>
      </p>
      <div class="accountInfo-hide" v-show='ShowInfo'><span>1元可购买100积分或10钻石，积分可以用来下载视频，钻石可在直播频道打赏主播。</span></div>
      <p class="recharge-detail">
        <span v-for="(item,index) in list" v-text='item.name' @click="selectmoney(index)" :class="{active:index == number}"></span>
        <input type="text" placeholder="自定义" v-model="obj.moneytext" maxlength=13>
        <button type="button" class="up" @click="btnup"><i class="fas fa-caret-up"></i></button>
        <button type="button" class="down" @click="btndown"><i class="fas fa-caret-down"></i></button>
      </p>
      <p class="payment-way">
        <input type="radio" id="zhi" name="paytype"   value="1" v-model='zhifubao' @click='zhifubaoc'>
        <label for="zhi" @click='zhifubaoc'>支付宝支付</label>
        <input type="radio" id="wei" name="paytype" v-model='weixin' @click='weixinc'>
        <label for="wei" @click='weixinc'>微信支付</label>
      </p>
      <p class="btn-p">
        <button class="button-pay" @click='pay'>立即充值</button>
        <span class="span-score" v-text="integraltext"></span><span>积分/</span>
        <span class="span-diamond" v-text="diamondtext"></span><span>钻石</span>
      </p>
    </div>
  </div>
  <Paypackge/>
  <Payicons/>
  <payContain v-show='ShowpayContain' />
</div>
</template>
<script>
import Hub from '@/components/Hub';
import Payicons from '@/components/Payicons.vue';
import Paypackge from '@/components/Paypackge.vue';
import payContain from '@/components/user/payContain.vue';
// var i = 0
export default {
  data() {
    return {
      list: [{
        name: '10元'
      }, {
        name: '50元'
      }, {
        name: '100元'
      }, {
        name: '150元'
      }, {
        name: '300元'
      }, ],
      integraltext: '1000',
      diamondtext: '100',
      ShowInfo: false,
      zhifubao: '1',
      weixin: false,
      ShowpayContain: false,
      number:'0',
      obj: {
        moneytext: '10',
      },
    }
  },

  methods: {
    order() {
      Hub.$emit('component', 'Oder');
    },
    transaction() {
      Hub.$emit('component', 'Transaction');
    },
    redemptionCode() {
      Hub.$emit('component', 'RedemptionCode');
    },
    btnup() {
      var i = 0
      i += 10
      this.obj.moneytext = parseInt(this.obj.moneytext) + i
      this.integraltext = 1000 + i
      this.diamondtext = 100 + i
    },
    btndown() {
      var i = 0
      if (parseInt(this.obj.moneytext) < 10 && parseInt(this.obj.moneytext) > 0) {
        this.obj.moneytext = 0
      }

      if (parseInt(this.obj.moneytext) > 9) {
        i += 10
        this.obj.moneytext = parseInt(this.obj.moneytext) - i
        this.integraltext = this.integraltext - 10
        this.diamondtext = this.diamondtext - 10
      }
    },
    dataDetails(e) {
      this.ShowInfo = true
    },
    hiddenDetail(e) {
      this.ShowInfo = false
    },
    zhifubaoc() {
      this.zhifubao = true
      this.weixin = false
    },
    weixinc() {
      this.zhifubao = false
      this.weixin = true
    },
    pay() {
      if (this.zhifubao) {
        console.log('zhifubao')
      }
      if (this.weixin) {
        console.log('weixin')
      }
      this.ShowpayContain = true
    },
    selectmoney(e){
      console.log(e)
      this.number=e
    },
  },
  created() {
    Hub.$on('PayDialog', (data) => {
    this.ShowpayContain = data
    });
  },
  watch: {
    obj: {
      handler(newName, oldName) {
        this.integraltext = this.obj.moneytext * 100
        this.diamondtext = this.obj.moneytext * 10
        if (parseInt(this.obj.moneytext) < 0) {
          this.integraltext = 0
          this.diamondtext = 0
        }
      },
      immediate: true,
      deep: true
    },
  },
  components: {
    Payicons,
    Paypackge,
    payContain,
  }
}
</script>

<style lang="scss" scoped>
.accunt {
    width: 900px;
    height: auto;
    display: inline-block;
    font-size: 15px;
    min-height: 600px;
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
            height: 180px;
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
                position: relative;
                .active{
                      border: 1px solid #58b59d;
                      background: url(/static/selected.png) no-repeat 38px 17px;
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
                input {
                    display: inline-block;
                    width: 81px;
                    height: 32px;
                    text-align: left;
                    padding-left: 5px;
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
                    right: 1px;
                    top: 4px;
                }
                .down {
                    right: 1px;
                    top: 21px;
                }
            }
            p {
                text-align: left;
                height: 40px;
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
                }
            }
        }
    }
}
</style>
