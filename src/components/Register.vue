<template>
<div class="register-pop hide">
  <div class="register-pop-container">
    <div class="login-title">注册
      <div class="loginclose close" @click="closed"></div>
    </div>
    <div class="register-pop-content">
      <form role="form" id="signUpForm" novalidate="novalidate">
        <div class="form-group">
          <label for="username">用户名</label>
          <input type="text" class="form-control" id="register_username" name="username" placeholder="登录名为4-12位字母或数字" v-model='username'>
        </div>
        <div class="form-group">
          <label for="username">昵称</label>
          <input type="text" class="form-control" id="register_nickname" name="nickname" placeholder="昵称为2-8位中文、字母或数字" v-model='nickname'>
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input type="password" class="form-control" id="register_password" name="password" placeholder="密码为6-12位字母或数字" v-model='password'>
        </div>
        <div class="form-group">
          <label for="confirmPassword">确认密码</label>
          <input type="password" class="form-control" id="register_confirmPassword" name="confirmPassword" placeholder="请再次输入密码" v-model='confirmPassword'>
        </div>
        <div class="form-group">
          <label for="verifycode">验证码</label>
          <input type="text" class="form-control" id="register_verifycode" name="verifycode" placeholder="右侧图片字母和数字" maxlength="4" style="width:200px;" v-model='verifycode'>
          <a class="input-group-addon vimg" href="Javascript:;" @click='VerifyCode'>
            <img class="verify-img" src="../../static/VerifyCode.png" alt="点击刷新" width="100" height="26" >
          </a>
        </div>
        <p class="sure">
          <label for="over18" style="font-weight:normal" >
                <input @click='checkd' v-model='chose'  class="form-check-input" name="over18" type="checkbox"style="margin-right: 8px;" data-content="请接受此协议">我确认我已年满18周岁，并已阅读和确认本网站的策略，隐私声明、<a >条款及条件</a>
          </label>
        </p>
        <p class="warn" v-text='tex'></p>
        <p class="butn"><button type="button" class="btn signUpBtn" id="btnRegister" @click='btnRegister' :disable='disable'>注&nbsp;&nbsp;册</button></p>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import Hub from '@/components/Hub';
import {
  network
} from '@/config/config';

export default {
  data() {
    return {
      username: null,
      nickname: null,
      password: null,
      confirmPassword: null,
      verifycode: null,
      tex: null,
      data: {},
      chose:true,
      disable:'disable',
    }
  },
  methods: {
    closed() {
      Hub.$emit('closed', false);

    },
    checkd(){
      this.chose?(this.chose=false):(this.chose=true);
    },
    VerifyCode(){
       console.log('验证码')
    },
    btnRegister() {
      let verifycodeReg = /^[a-zA-Z0-9]{4,12}$/;
      let userReg = /^[a-zA-Z0-9]{4,12}$/;
      let nickReg = /^[\u4e00-\u9fa5_a-zA-Z0-9_]{2,8}$/;
      let pwdReg = /^[a-zA-Z0-9]{6,12}$/;
      if (!userReg.test(this.username)) {
        this.tex = "请检查您输入的用户名~";
      } else if (!nickReg.test(this.nickname)) {
        this.tex = "请检查您输入的昵称~";
      } else if (!pwdReg.test(this.password)) {
        this.tex = "请检查您输入的密码~";
      } else if (this.password != this.confirmPassword) {
        this.tex = "两次输入的密码不一致~";
      } else if (!verifycodeReg.test(this.verifycode)) {
        this.tex = "请检查您输入的验证码~";
      } else {
        if(this.chose){
          this.tex = "注册成功~";
          network('Register', {
            username: this.username,
            nickname: this.nickname,
            password: this.password,
            verifycode: this.verifycode
          })
        }else {
          this.tex = "不勾选表示不同意网站协议，不能注册！";
        }

      }
      if (!this.username) {
        this.tex = "用户名不得为空!";
      } else if (!this.nickname) {
        this.tex = "昵称不得为空!";
      } else if (!this.password) {
        this.tex = "密码不得为空!";
      } else if (!this.confirmPassword) {
        this.tex = "请在此输入密码!";
      } else if (!this.verifycode) {
        this.tex = "验证码不得为空!";
      }

    }
  },
}
</script>

<style lang="scss" scoped>
.register-pop {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 2000001;
    left: 0;
    background-color: rgba(0,0,0,.6);
    .register-pop-container {
        width: 460px;
        margin: 10% auto;
        .login-title {
            position: relative;
            height: 38px;
            background-color: #f07;
            color: #fff;
            line-height: 38px;
            font-size: 16px;
            padding-left: 10px;
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
        background-color: #fff;
        padding: 20px 25px;
        form {
            .form-group {
                margin-left: -15px;
                margin-right: -15px;
                label {
                    font-size: 16px;
                    color: #333;
                    font-weight: 400;
                    padding: 7px 0 0;
                    width: 70px;
                }
                .form-control {
                    height: 42px;
                    line-height: 42px;
                    font-size: 16px;
                    color: #666!important;
                    border: 1px solid #ddd;
                    border-radius: 2px;
                    width: 270px;
                    padding: 0 12px;
                    margin-bottom: 15px;
                }
                .input-group-addon {
                    img {}
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
            }
            .warn {
                color: #f07;
                padding: 7px;
            }
            .butn {
                width: 410px;
                text-align: center;
                button {
                    height: 38px;
                    width: 270px;
                    line-height: 38px;
                    background-color: #f07;
                    font-size: 16px;
                    border-radius: 2px;
                    color: #fff;
                }
            }
        }
    }
}
</style>
