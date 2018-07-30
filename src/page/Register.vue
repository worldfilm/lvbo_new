<template>
<div class="register-pop ">
  <div class="left-m"></div>
  <div class="register-pop-container">
    <div class="login-title">视频通行证注册</div>
    <div class="register-pop-content">
      <form role="form" id="signUpForm" novalidate="novalidate">
        <div class="form-group">
          <label for="username">用户名</label>
          <input type="text" class="form-control" id="register_username" name="username" placeholder="登录名为4-12位字母或数字" v-model='username'>
          <div class="text-danger">
            <i name="name" class="xyvideo-icon xyvideo-icon-cancel3"></i>
            <label name="name" class="" v-text='texusername'></label>
          </div>
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input type="password" class="form-control" id="register_password" name="password" placeholder="密码为6-12位字母或数字" v-model='password'>
          <div class="text-danger">
            <i name="name" class="xyvideo-icon xyvideo-icon-cancel3"></i>
            <label name="name" class="" v-text='texpassword'></label>
          </div>
        </div>
        <div class="form-group">
          <label for="confirmPassword">确认密码</label>
          <input type="password" class="form-control" id="register_confirmPassword" name="confirmPassword" placeholder="请再次输入密码" v-model='confirmPassword'>
          <div class="text-danger">
            <i name="name" class="xyvideo-icon xyvideo-icon-cancel3"></i>
            <label name="name" class="" v-text='texconfirmPassword'></label>
          </div>
        </div>
        <div class="form-group">
          <label for="username">邮件</label>
          <input type="text" class="form-control" id="register_nickname" name="email" placeholder="邮箱格式为xx@xx.xxx" v-model='email'>
          <div class="text-danger">
            <i name="name" class="xyvideo-icon xyvideo-icon-cancel3"></i>
            <label name="name" class="" v-text='texemail'></label>
          </div>
        </div>
        <!-- <div class="form-group">
          <label for="verifycode">验证码</label>
          <input type="text" class="form-control" id="register_verifycode" name="verifycode" placeholder="右侧图片字母和数字" maxlength="4" style="width:200px;" v-model='verifycode'>
          <a class="input-group-addon vimg" href="Javascript:;" @click='VerifyCode'>
            <img class="verify-img" src="../../static/VerifyCode.png" alt="点击刷新" width="100" height="26" >
          </a>
        </div> -->
        <p class="sure">
          <label for="over18" style="font-weight:normal">
                <input @click='checkd' v-model='chose'  class="form-check-input"  type="checkbox">我已经满18周岁?
          </label>
        </p>
        <p class="sure">
          <label for="over18" style="font-weight:normal">
                <input @click='checkd' v-model='chose'  class="form-check-input"  type="checkbox">我同意<a class="condition" @click='condition'>《条款及条件》</a>
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
      email: null,
      password: null,
      confirmPassword: null,
      verifycode: null,
      tex: null,
      data: {},
      chose: true,
      disable: 'disable',
      texusername:null,
      texpassword:null,
      texconfirmPassword:null,
      texemail:null,
    }
  },
  methods: {
    closed() {
      Hub.$emit('closed', false);
    },
    condition(){
      this.$router.push({
        path: '/Protocol'
      })
    },
    checkd() {
      this.chose ? (this.chose = false) : (this.chose = true);
    },
    VerifyCode() {
      console.log('验证码')
    },
    btnRegister() {
      let verifycodeReg = /^[a-zA-Z0-9]{4,12}$/;
      let userReg = /^[a-zA-Z0-9]{6,12}$/;
      let nickReg = /^[\u4e00-\u9fa5_a-zA-Z0-9_]{2,8}$/;
      let pwdReg = /^[a-zA-Z0-9]{6,12}$/;
      let emailReg=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if (!userReg.test(this.username)) {
        this.texusername="请检查您输入的用户名~";
        this.texpassword=null;
        this.texconfirmPassword=null;
        this.texemail=null;
      }  else if (!pwdReg.test(this.password)) {
        this.texusername=null;
        this.texpassword="请检查您输入的密码~";
        this.texconfirmPassword=null;
        this.texemail=null;
      } else if (this.password != this.confirmPassword) {
        this.texusername=null;
        this.texpassword=null;
        this.texconfirmPassword="两次输入的密码不一致~";
        this.texemail=null;
      }else if (!emailReg.test(this.email)) {
        this.texusername=null;
        this.texpassword=null;
        this.texconfirmPassword=null;
        this.texemail="请检查您输入的邮箱~";
      }else {
        if (this.chose) {
          this.tex = "注册成功~";
          network('regist', {
            username: this.username,
            email: this.email,
            password: this.password,
            confirmPassword:this.confirmPassword,
          },data=>{
            if(data.status==1){
              Hub.$emit('ShowLog', false);
              Hub.$emit('ShowOnline', true);
              this.$router.push({
                path: '/Home'
              })
            }
          })
        } else {
          this.tex = "不勾选表示不同意网站协议，不能注册！";
        }
      }
      if (!this.username) {
        this.texusername = "用户名不得为空!";
        this.texpassword=null;
        this.texconfirmPassword=null;
        this.texemail=null;
      }else if (!this.password) {
        this.texusername=null;
        this.texpassword = "密码不得为空!";
        this.texconfirmPassword=null;
        this.texemail=null;
      } else if (this.confirmPassword==''||this.confirmPassword==null) {
        this.texusername=null;
        this.texpassword = null;
        this.texconfirmPassword = "请再次输入密码!";
        this.texemail=null;
      } else if (!this.email) {
        this.texusername=null;
        this.texpassword = null;
        this.texconfirmPassword = null;
        this.texemail= "邮箱不得为空!";
      }
    }
  },
}
// verifycode: this.verifycode
//  else if (!verifycodeReg.test(this.verifycode)) {
//   this.tex = "请检查您输入的验证码~";
// }
// else if (!this.verifycode) {
//   this.tex = "验证码不得为空!";
// }
</script>

<style lang="scss" scoped>
.register-pop {
    // width: 100%;
    // height: 100%;
    // position: fixed;
    // top: 0;
    // z-index: 2000001;
    // left: 0;
    // background-color: rgba(0,0,0,.6);
    .left-m {
        display: inline-block;
        width: 500px;
        height: 545px;
        padding: 44px 0;
    }
    .register-pop-container {
        width: 500px;
        height: 545px;
        margin: 44px 0;
        float: right;
        background-color: #fff;
        margin-right: 80px;
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
        form {color: #909090;
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
                    label{
                      font-size: 13px;
                      width: 123px;    padding: 0;color: #f07;
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
                .condition{
                  color: #f07;cursor: pointer;
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
        }
    }
}
</style>
