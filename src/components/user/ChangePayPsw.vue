<template>
<div class="ChangePayPsw">
  <div class="myvideo-title">
    <span>设置支付密码</span>
  </div>
  <div class="content">
    <div class="form-group" v-show='ShowOldPsw'>
      <span>旧支付密码：</span><input type="password" class="form-control oldpassword" placeholder="请输入旧密码" v-model='oldpsw'>
    </div>
    <div class="form-group">
      <span>支付密码：</span><input type="password" class="form-control oldpassword" placeholder="请输入新的支付密码" v-model='newpsw'>
    </div>
    <div class="form-group">
      <span>重复支付密码：</span><input type="password" class="form-control newPassword" placeholder="请再次输入新的支付密码" v-model='replapsw'>
    </div>
    <button type="button" class="surebtn changePassword" @click='changepsw'>更&nbsp;&nbsp;改</button>
    <p class="passwordtexx" v-text='passwordtexx'></p>
  </div>
  <AlertMsg v-show='ShowPayAlert'/>
</div>
</template>
<script>
let Base64 = require("js-base64").Base64;
import AlertMsg from "@/components/Alert/AlertMsg";
import Hub from "@/components/Hub";
export default {
  data() {
    return {
      oldpsw: null,
      newpsw: null,
      replapsw: null,
      passwordtexx: null,
      ShowPayAlert: false,
      ShowOldPsw: false
    };
  },
  methods: {
    changepsw() {
      if (this.newpsw == null) {
        this.passwordtexx = "密码不得为空!";
      } else {
        this.sendingpswdata();
      }
    },
    sendingpswdata() {
      if (this.newpsw == this.replapsw) {
        let Base64 = require("js-base64").Base64;
        let sha1 = require("sha1");
        let api_token = sessionStorage.getItem("TOKEN_KEY");
        var oldpsw;
        let salt = sessionStorage.getItem("salt");
        let is_set_pay = sessionStorage.getItem("is_set_pay");
        if (is_set_pay == 1) {
          oldpsw = this.oldpsw;
        }
        if (is_set_pay == 0) {
          oldpsw = sessionStorage.getItem("psw");
        }
        var newpsw = sha1(salt + this.newpsw),
          oldpsw = sha1(salt + this.oldpsw),
          newpsw = Base64.encode(newpsw),
          oldpsw = Base64.encode(oldpsw);
        this.$http
          .post("/api/user/editPrivate", {
            type: "2",
            private_str: oldpsw,
            new_private_str: newpsw
          })
          .then(data => {
            if (data.status == 0) {
              Hub.$emit("changMsg", "修改支付密码成功!");
              this.ShowPayAlert = true;
              this.passwordtexx = data.message;
              sessionStorage.setItem("is_set_pay", 1);
              setTimeout(() => {
                this.ShowPayAlert = false;
              }, 1000);
            } else {
              let msg = data.data.message;
              Hub.$emit("changMsg", msg);
              this.ShowPayAlert = true;
              this.passwordtexx = data.message;
              setTimeout(() => {
                this.ShowPayAlert = false;
              }, 1000);
            }
          });
      } else {
        this.passwordtexx = "两次输入的密码不一致~";
      }
    },
    checkOldPsw() {
      let is_set_pay = sessionStorage.getItem("is_set_pay");
      if (is_set_pay == 1) {
        this.ShowOldPsw = true;
      }
      if (is_set_pay == 0) {
        this.ShowOldPsw = false;
      }
    }
  },
  components: { AlertMsg },
  created() {
    this.checkOldPsw();
  }
};
</script>

<style lang="scss" scoped>
.ChangePayPsw {
  width: 900px;
  display: inline-block;
  height: auto;
  min-height: 600px;
  .myvideo-title {
    width: 900px;
    height: 40px;
    background-color: #58b59d;
    padding-left: 20px;
    font-size: 18px;
    color: #fff;
    line-height: 2.4;
    text-align: left;
  }
  .content {
    margin: 100px auto;
    width: 500px;
    .form-group {
      text-align: left;
      line-height: 50px;
      height: 50px;
      font-size: 18px;
      color: #b5b5b5;
      margin: 10px;
      span {
        margin-right: 5px;
        width: 140px;
        float: left;
        text-align: right;
        cursor: default;
      }
      input {
        color: #58b59d;
        cursor: pointer;
        line-height: 35px;
        height: 35px;
        padding-left: 10px;
        cursor: text;
        border: 1px solid #ddd;
        width: 230px;
      }
    }
    button {
      width: 244px;
      height: 38px;
      line-height: 38px;
      border-radius: 2px;
      background-color: #58b49d;
      color: #fff;
      font-size: 16px;
      text-align: center;
      border: none;
      position: relative;
      left: 27px;
    }
    .passwordtexx {
      height: 40px;
      line-height: 40px;
      color: #f56c6c;
      font-size: 16px;
      padding-top: 20px;
    }
  }
}
</style>
