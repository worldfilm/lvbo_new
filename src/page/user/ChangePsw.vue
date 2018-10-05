<template>
  <div class="ChangePsw">
    <LeftMenu />
    <div class="ChangePsw-c">
      <div class="title">
        <span>修改密码</span>
      </div>
      <div class="content">
        <div class="form-group">
          <span>旧密码：</span><input type="password" class="form-control oldpassword" placeholder="请输入旧密码" v-model='oldpsw'>
        </div>
        <div class="form-group">
          <span>新密码：</span><input type="password" class="form-control newPassword" placeholder="请输入新密码" v-model='newpsw'>
        </div>
        <div class="form-group">
          <span>确认密码：</span><input type="password" class="form-control rePassword" placeholder="请再次输入密码" v-model='replapsw'>
        </div>
        <button type="button" class="surebtn changePassword" @click='changepsw'>更&nbsp;&nbsp;改</button>
        <p class="passwordtexx" v-text='passwordtexx'></p>
      </div>
      <AlertMsg v-show='ShowCpswAlert' />
    </div>
  </div>
</template>
<script>
import Hub from "@/components/Hub";
import AlertMsg from "@/components/Alert/AlertMsg";
import LeftMenu from '@/page/user/LeftMenu';
export default {
  data() {
    return {
      oldpsw: null,
      newpsw: null,
      replapsw: null,
      passwordtexx: null,
      ShowCpswAlert: false
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
        let salt = sessionStorage.getItem("salt");
        var newpsw = sha1(salt + this.newpsw),
          oldpsw = sha1(salt + this.oldpsw),
          newpsw = Base64.encode(newpsw),
          oldpsw = Base64.encode(oldpsw);
        this.$http
          .post("/api/user/editPrivate", {
            type: "1",
            private_str: oldpsw,
            new_private_str: newpsw,
            oldpsw: oldpsw
          })
          .then(data => {
            if (data.status == 0) {
              Hub.$emit("changMsg", "修改密码成功!");
              this.ShowCpswAlert = true;
              this.passwordtexx = data.message;
              this.oldpsw = ''
              this.newpsw = ''
              this.replapsw = ''
              setTimeout(() => {
                this.ShowCpswAlert = false;
              }, 2000);
            } else {
              let msg = data.message;
              Hub.$emit("changMsg", msg);
              this.ShowCpswAlert = true;
              this.passwordtexx = data.message;
              setTimeout(() => {
                this.ShowCpswAlert = false;
              }, 1000);
            }
          });
      } else {
        this.passwordtexx = "两次输入的密码不一致~";
      }
    },
    getoldpsw() {
      let psw = sessionStorage.getItem("psw");
      this.oldpsw = psw;
    }
  },
  components: {
    AlertMsg,
    LeftMenu
  },
  created() {
    // this.getoldpsw();

    Hub.$on("psw", data => {
      this.oldpsw = data;
    });
  }
};
</script>

<style lang="scss" scoped>
.ChangePsw {
  width: 1200px;
  margin: 0 auto;
  height: auto;
  margin-top: 20px;
  margin-bottom: 40px;
  .ChangePsw-c {
    width: 900px;
    display: inline-block;
    height: auto;
    min-height: 600px;
    .title {
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
          width: 100px;
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
        left: -14px;
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
}
</style>
