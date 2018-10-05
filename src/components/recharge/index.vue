<template>
  <div class="bottom-package-container clearfix">
    <ul class="clearfix">
      <li v-for='(item, index) in list' :key="index" class="package-content" :class="{active: index===selected}" @click="selected = index">
        <div class="package-money">
          <span class="item-price">{{item.dis_price}}元</span>
          <p class="item-dec">{{item.title}}<span style="font-size:14px;">（已优惠{{item.price - item.dis_price}}元）</span></p>
        </div>
        <p>全站畅想<span style="color: #F56C6C;">{{item.period}}个月</span></p>
      </li>
    </ul>
    <div class="pay-list">
      <el-radio v-model="payType" :label="item.method" v-for="(item, index) in payList" :key="index">
        <img :src="imgSrc(item.method)" alt="" srcset="">
      </el-radio>
      <div class="pay-btn" v-if="list.length !== 0">
        <el-button type="danger" @click="getPayUrl">立即加入</el-button>
        <a href="" ref="goPay" target="_blank"></a>
      </div>
    </div>
    <v-loading v-show="loading"></v-loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      list: [],
      payList: [],
      payType: null,
      loading: false,
      payUrl: ''
    }
  },
  methods: {
    getPakage() {
      this.loading = true
      this.$http.get('/api/pay/payList').then(res => {
        this.loading = false
        if (res.status === 0) {
          this.list = res.data.rechargeList
          this.payList = res.data.channelList
        }
      })
    },
    getPayUrl() {
      if(this.selected === null) {
        this.$message({
          type: 'error',
          message: '请选择套餐'
        })
        return
      }
      if(this.payType === null) {
        this.$message({
          type: 'error',
          message: '请选择支付方式'
        })
        return
      }
      this.loading = true
      const params = {
        project_id: 3,
        uid: sessionStorage.getItem('id'),
        pay_method: this.payType,
        money: this.list[this.selected].dis_price
      }
      this.$http.get('http://pay-api.6fg645fsd.com/api/pay/order', params).then(res => {
        this.loading = false
        if (res.status === 0) {
          this.$refs.goPay.href = res.data.pay_html_url
          this.$refs.goPay.click()
        }
      })
    },
    imgSrc(str) {
      return {
        'wechat': '/static/weixin.png',
        'alipay': '/static/zhifubao.png'
      }[str]
    }
  },
  created() {
    this.getPakage();
  }
}
</script>

<style lang="scss" scoped>
.bottom-package-container {
  min-height: 400px;
  width: 100%;
  ul {
    width: 101.7%;
    width: calc(100% + 20px);
    li {
      float: left;
      margin-bottom: 10px;
      padding-bottom: 20px;
      background-color: #fff;
      position: relative;
      width: 23%;
      border: 2px solid #eee;
      text-align: center;
      margin-right: 1.4%;
      font-family: "微软雅黑";
      cursor: pointer;
      &.active {
        border: 2px solid #58b59d;
      }
      .package-money {
        font-size: 20px;
        color: #333;
        margin-top: 10%;
        .item-dec {
          color: #e6a23c;
          font-size: 18px;
        }
        .item-price {
          font-size: 24px;
          color: #58b59d;
          padding: 0 5px;
        }
      }
      p {
        font-size: 14px;
        color: #666;
      }
      .package-login-join-btn {
        font-size: 16px;
        width: 65%;
        height: 38px;
        line-height: 38px;
        cursor: pointer;
        color: #fff;
        border-radius: 2px;
        text-align: center;
        background-color: #58b59d;
        margin: 12px auto;
      }
      .package-tip {
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
  .pay-list {
    padding: 15px 20px;
    text-align: left;
    .pay-btn {
      margin-top: 20px;
    }
  }
}
</style>
