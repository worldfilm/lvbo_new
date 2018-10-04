<template>
<div class="register-pop ">
  <div class="left-m"></div>
  <div class="register-pop-container">
    <div class="login-title">视频通行证登录
    </div>
    <div class="register-pop-content">
      <form role="form" id="signUpForm" novalidate="novalidate">
        <div class="form-group">
          <label for="username">账户</label>
          <input v-model='username' @focus='focususername' @blur='blurusername'  type="text" class="form-control" id="register_username" name="username" placeholder="请输入用户名" maxlength='12'>
          <div class="text-danger">
            <i name="name" class="xyvideo-icon xyvideo-icon-cancel3"></i>
            <label name="name" :class="changingClass" v-text='texusername'></label>
          </div>
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input v-model='password' @focus='focuspsw' @blur='blurpsw' maxlength='12' type="password" class="form-control" id="register_password" name="password" placeholder="请输入登录密码" >
          <div class="text-danger">
            <i name="name" class="xyvideo-icon xyvideo-icon-cancel3"></i>
            <label name="name" :class="changingClasspsw" v-text='texpassword'></label>
          </div>
        </div>
        <p class="sure">
          <input @click='checkd' v-model='chose' class="form-check-input" type="checkbox" style="margin-right: 8px;">
          <label for="over18" style="font-weight:normal">记住用户名</label>
          <a class='forgetpsw' href="#/Forgetpsw">忘记密码？</a>
        </p>
        <p class="warn" v-text='logintex'></p>
        <p class="butn"><button type="button" class="btn signUpBtn" id="btnRegister" @click='btnLogin' :disable='disable'>登&nbsp;&nbsp;录</button></p>
        <p class="goregister"><span>还没有账户?</span><span @click="goregister" class="movetoregister">点此注册</span> </p>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import Hub from "@/components/Hub";
import axios from 'axios'

export default {
  data() {
    return {
      username: null,
      password: null,
      verifycode: null,
      logintex: null,
      data: {},
      disable: "disable",
      chose: true,
      texusername: null,
      texpassword: null,
      imgsrc: null,
      changingClass:'green',
      changingClasspsw:'green',
    };
  },
  methods: {
    goregister() {
      this.$router.push({
        path: "/Register"
      });
    },
    checkd() {
      this.chose ? (this.chose = false) : (this.chose = true);
    },
    VerifyCode() {
      console.log("验证码");
    },
    btnLogin() {
      let verifycodeReg = /^[a-zA-Z0-9]{4,12}$/;
      let userReg = /^[a-zA-Z0-9]{6,12}$/;
      let pwdReg = /^[a-zA-Z0-9]{6,12}$/;
      let emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if (!userReg.test(this.username)) {
        this.texusername = "请检查您输入的用户名~";
        this.texpassword = null;
      } else if (!pwdReg.test(this.password)) {
        this.texusername = null;
        this.texpassword = "请检查您输入的密码~";
      } else {
        if (this.chose) {
          this.texusername = null;
          this.texpassword = null;
          let params = {
            username: this.username,
            password: this.password
          };
          this.$http.post("/api/user/login/pc", params).then(data => {
            this.logintex = data.message;
            if (data.status === 0) {
              // let userInfoStr = JSON.stringify(data.data);
              // sessionStorage.setItem("userInfo", userInfoStr);
              this.$message({
                message: '登录成功',
                type: 'success'
              })
              this.imgsrc = data.data.avatar;
              sessionStorage.setItem("imgsrc", this.imgsrc);
              Hub.$emit("ShowLog", false);
              Hub.$emit("ShowOnline", true);
              Hub.$emit("username", data.data.username);
              sessionStorage.setItem("TOKEN_KEY", data.data.api_token);
              sessionStorage.setItem("username", data.data.username);
              sessionStorage.setItem("email", data.data.email);
              sessionStorage.setItem("psw", this.password);
              sessionStorage.setItem("salt", data.data.salt);
              sessionStorage.setItem("is_set_pay", data.data.is_set_pay); // 有无设置支付密码
              sessionStorage.setItem("IS_VIP", data.data.vip.is_vip); // 是否是会员
              sessionStorage.setItem("birthday", data.data.birthday);
              sessionStorage.setItem("signature", data.data.signature);
              sessionStorage.setItem("id", data.data.id);
              sessionStorage.setItem("sex", data.data.sex);
              sessionStorage.setItem("is_set_pay", data.data.is_set_pay);
              sessionStorage.setItem("videos", data.data.videos);
              sessionStorage.setItem("created_at", data.data.created_at);
              axios.defaults.headers.api_token = data.data.api_token
              this.$router.push({
                path: "/Home"
              });
            }
          });
        } else {
          this.logintex = "不勾选表示不同意网站协议，不能！";
        }
      }
      if (!this.username) {
        this.texusername = "用户名不得为空!";
        this.texpassword = null;
      } else if (!this.password) {
        this.texusername = null;
        this.texpassword = "密码不得为空!";
      }
    },
    focususername() {
      this.texusername = "请输入用户名,的由a-z大小写字母和数字组合";
      this.changingClass='green'
    },
    blurusername() {
      let userReg =  /(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{4,12}/;
      if (!userReg.test(this.username)) {
        this.texusername = "请输入用户名,的由4-12个a-z大小写字母和数字组合,请检查!";
        this.changingClass='red'
      }
      else{
        this.texusername = null;
      //   this.changingClass='green'
      }
      if(this.username==null){
        this.texusername = "用户名不得为空!";
        this.changingClasspsw='red'
      }
    },
    focuspsw(){
      this.texpassword = "请输入用户名,的由a-z大小写字母和数字组合";
      this.changingClasspsw='green'
    },
    blurpsw(){
      let pwdReg = /^[a-zA-Z0-9]{6,12}$/;
      if  (!pwdReg.test(this.password)) {
        this.texpassword = "密码由6-12位字母或数字任意组合";
        this.changingClasspsw='red'
      }
      else{
        this.texpassword = null;
        // this.changingClasspsw='green'
      }
      if(this.password==null){
        this.texpassword = "密码不得为空!";
        this.changingClasspswr='red'
      }
    },
  },
  created() {

  },
};
</script>

<style lang="scss" scoped>
.register-pop {
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
    .left-m {
        display: inline-block;
        width: 500px;
        height: 545px;
        padding: 44px 0;
        float: left;
    }
    .register-pop-container {
        width: 500px;
        height: 545px;
        margin: 44px 0;
        float: right;
        margin-right: 80px;
        background-color: #fff;
        float: left;
        .login-title {
            position: relative;
            height: 38px;
            background-color: #58b59d;
            color: #fff;
            line-height: 38px;
            font-size: 16px;
            text-align: left;
            padding-left: 30px;
            .loginclose {
                background-image: url("../../static/v2-login-pop-close.png");
                width: 18px;
                height: 18px;
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;
            }
        }
    }
    .register-pop-content {
        form {
            color: #909090;
            padding: 60px 0;
            .form-group {
                margin-left: -15px;
                margin-right: -15px;
                label {
                    font-size: 16px;
                    font-weight: 400;
                    padding: 7px 0;
                    width: 70px;
                    text-align: right;
                    padding-right: 20px;
                }
                .form-control {
                    height: 35px;
                    line-height: 35px;
                    font-size: 14px;
                    color: #666;
                    border: 1px solid #ddd;
                    border-radius: 2px;
                    width: 270px;
                    padding: 0 12px;
                }
                .input-group-addon {
                    img {}
                }
                .text-danger {
                    height: 30px;
                    line-height: 30px;
                    margin-top: 10px;
                    label {
                        font-size: 13px;
                        width: 100%;
                        padding: 0;
                        color: #f07;
                        text-align: center;
                    }
                    .green{
                        color: #58b59d;
                    }
                    .red{
                      color: #f07;
                    }
                }
            }
            .sure {
                label {
                    display: inline-block;
                    max-width: 100%;
                    margin-bottom: 5px;
                    .form-check-input {
                        margin-right: 8px;

                        font-size: 12px;
                        color: #333;
                        -webkit-font-smoothing: antialiased;
                    }
                }
                .forgetpsw {
                    padding-left: 31px;
                    font-weight: bold;
                    color: #8a8282;
                }
            }
            .warn {
                color: #f07;
                padding: 7px;
            }
            .butn {
                text-align: center;
                button {
                    height: 38px;
                    width: 270px;
                    line-height: 38px;
                    background-color: #58b59d;
                    font-size: 16px;
                    border-radius: 2px;
                    color: #fff;
                }
            }
            .goregister {
                height: 38px;
                line-height: 38px;
                font-size: 14px;
                span {
                    padding: 0 10px;
                }
                .movetoregister {
                    color: #fb0505;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
