<template>
<div class="safety">
  <LeftMenu/>
  <div class="safety-c">
    <div class="center-right-title">帐号安全</div>
    <div class="center-right-content">
      <div>
        <ul>
          <li>
            <p class="up">帐号密码</p>
          </li>
          <li>
            <p class="up">设置一个包含数字和字母，且长度超过6位以上的密码更安全；并建议你定期更换密码。</p>
          </li>
          <li class="right">
            <a @click='changepsw'>修改</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <p class="up">安全邮箱</p>
            <p v-text='bindemail'>已绑定</p>
          </li>
          <li>
            <p class="up" v-text='emailtext'></p>
          </li>
          <li class="right">
            <a @click='changeemail'>修改</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <p class="up">支付密码</p>
            <p v-text='bindpaypsw'>已设定</p>
          </li>
          <li></li>
          <li class="right">
            <a @click='changepaypsw'>设置支付密码</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
import LeftMenu from '@/page/user/LeftMenu';

export default {
  data() {
    return {
      emailtext: 'null',
      list: [{}, ],
      bindemail:'已绑定',
      bindpaypsw:'未设定',
    }
  },
  methods: {
    changepsw() {
      this.$router.push({
        path: "/ChangePsw"
      });
    },
    changeemail() {
      this.$router.push({
        path: "/ChangeEmail"
      });
    },
    changepaypsw() {
      this.$router.push({
        path: "/ChangePayPsw"
      });
    },
    getemail() {
      let email = sessionStorage.getItem('email')
      this.emailtext = email
    },
    getExchanges(){
      this.$http.get("/api/user/getExchanges").then(res => {

      });
    }
  },
  created() {
    let is_set_pay= sessionStorage.getItem("is_set_pay")
    if(is_set_pay==1){this.bindpaypsw='已设定'}
    if(is_set_pay==0){this.bindpaypsw='未设定'}
    this.getExchanges()
    this.getemail()
  },
  components: {
    LeftMenu
  }
}
</script>

<style lang="scss" scoped>
.safety {
    width: 1200px;
    margin: 0 auto;
    height: auto;
    margin-top: 20px;
    margin-bottom: 40px;
    .safety-c {
        width: 900px;
        height: auto;
        display: inline-block;
        min-height: 600px;
        .center-right-title {
            width: 900px;
            height: 40px;
            background-color: #58b59d;
            padding-left: 20px;
            font-size: 18px;
            color: #fff;
            line-height: 2.4;
            text-align: left;
        }
        .center-right-content {
            padding: 0 20px;
            div {
                height: 100px;
                width: 100%;
                padding: 0 20px;
                font-size: 14px;
                color: #666;
                line-height: 100px;
                border-bottom: 1px solid #ccc;
                li {
                    float: left;
                    height: 100%;
                    display: inline-block;
                    position: relative;
                    margin-right: 8%;
                    text-align: left;
                    p {
                        height: 50px;
                        line-height: 50px;
                        width: 100%;
                        float: left;
                    }
                    .up {
                        line-height: 100px;
                    }
                }
                .right {
                    float: right;
                    color: #313bca;
                }
            }
        }
    }
}
</style>
