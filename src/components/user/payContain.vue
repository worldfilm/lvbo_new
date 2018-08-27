
<template>
<div class="pay">
  <div class="pay-layer-container">
    <div class="pay-layer-close  close" @click='closed'><i class="fas fa-times"></i> </div>
    <div class="layer-order-user-info">
      <img src="http://img.cksource.space/user_head/default_4_4.jpg">
      <div>
        <span class="info-username" v-text='username'></span>
        <span>下单时间：2018-06-28 11:13:12</span>
      </div>
    </div>
    <div class="layer-package">
      <div class="layer-package-title">选择套餐：</div>
      <div class="layer-package-container clearfix">
        <ul>
          <li class="layer-package-content" v-for="item in list">
            <div class="layer-package-money">{{item.name}}<span>{{item.moneyy}}</span>元</div>
            <p v-text="item.gift"></p>
            <div class="layer-package-tip" v-text="item.Promotions"></div>
          </li>
        </ul>
      </div>
    </div>
    <div class="layer-pay-type">
      <p class="payment-way">
        <el-radio v-model="payType" :label="0">支付宝</el-radio>
        <el-radio v-model="payType" :label="1">微信</el-radio>
      </p>
    </div>
    <button @click='pay'>立即支付</button>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
      zhifubao: '1',
      weixin: false,
      username:null,
      list: [{
          name: '7天vip',
          month: '',
          moneyy: '30.00',
          gift: '',
          Promotions: '火爆3元/天'
        },
        {
          name: '月度vip',
          month: '',
          moneyy: '100.00',
          gift: '特惠充值月度会员免费续赠3天',
          Promotions: '火爆2元/天'
        },
        {
          name: '季度vip',
          month: '',
          moneyy: '200.00',
          gift: '特惠充值季度会员免费续赠10天',
          Promotions: '火爆1元/天'
        },
        {
          name: '半年vip',
          month: '',
          moneyy: '300.00',
          gift: '特惠充值6个月会员免费续赠25天',
          Promotions: '火爆1元/天'
        },
      ],
      payType: 0
    }
  },
  methods: {
    closed() {
      Hub.$emit('PayDialog', false);
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
    },
  },
  created() {
    Hub.$on('zhifubao', (data) => {
      console.log(data+'zhifubao')
    });
    Hub.$on('weixin', (data) => {
      console.log(data+'weixin')
    });
    Hub.$on('paymoney', (data) => {
      console.log(data+'paymoney')
    });
    let username=sessionStorage.getItem('username')
    if(username){
      this.username=username
    }else{
      this.username=null
    }
  },
  components: {}
}
</script>
 <style lang="scss" scoped>
.pay{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    overflow: auto;
    .pay-layer-container {
        max-width: 980px;
        height: auto;
        margin: 160px auto;
        background-color: #fff;
        padding: 50px 35px;
        position: relative;
            input {
                font-size: 12px;
                color: #333;
                -webkit-font-smoothing: antialiased;
            }
            .pay-layer-close {
                width: 18px;
                height: 18px;
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;
            }
            .layer-order-user-info {text-align: left;
                img {
                    width: 60px;
                    height: 60px;
                    border: 1px solid #ddd;
                    border-radius: 50%;
                    margin-right: 15px;
                    float: left;
                }
                div {
                    color: #333;
                    font-size: 14px;
                    display: inline-block;
                    .info-username {}
                    span {
                        font-size: 20px;
                        margin-right: 60px;
                    }
                }
            }
            .layer-package {
                margin-top: 40px;
                .layer-package-title {
                    font-size: 16px;
                    color: #333;
                    margin-bottom: 15px;
                    text-align: left;
                }
                .layer-package-container {
                    ul {
                        width: 930px;
                        li {
                            float: left;
                            position: relative;
                            width: 220px;
                            height: 120px;
                            border: 1px solid #e5e5e5;
                            text-align: center;
                            margin-right: 10px;
                            cursor: pointer;
                            .layer-package-money {
                                font-size: 20px;
                                color: #333;
                                margin-top: 22px;
                                span {}
                            }
                            p {
                                font-size: 14px;
                                color: #666;
                            }
                            .layer-package-tip {
                                position: absolute;
                                top: 0;
                                right: 0;
                                background-color: #ff7800;
                                color: #fff;
                                font-size: 12px;
                                padding: 0 5px;
                            }
                        }
                    }
                }
            }
            .layer-pay-type {
                font-size: 0;
                margin-top: 40px;
                .payment-way {
                    text-align: left;
                    height: 40px;
                    line-height: 40px;
                    overflow: hidden;
                    label {
                      height: 40px;
                      line-height: 20px;
                      display: inline-block;
                      padding-right: 25px;
                      margin-left: 5px;
                      cursor: pointer;
                      font-size: 14px;
                      z-index: 1;
                        img{

                        }
                    }
                }

            }
            button{
                  border: none;
                  border-radius: 2px;
                  background-color: #58b59d;
                  color: #fff;
                  font-size: 16px;
                  width: 300px;
                  height: 38px;
                  line-height: 38px;
                  text-align: center;
                  margin: 0 auto;
            }
    }
}
</style>
