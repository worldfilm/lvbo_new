<template>
<div class="Forgetpsw">
  <p class="account-title">
    <span>找回密码</span>
  </p>
  <p class="findtitle"><i></i><span>你可以通过你的绑定邮箱找回密码!</span></p>
  <div class="progress">
    <el-steps :active="active" finish-status="success">
      <el-step title="账号验证"></el-step>
      <el-step title="安全验证"></el-step>
      <el-step title="置换密码"></el-step>
    </el-steps>
  </div>
  <div class="register-pop-content">
    <form role="form">
      <div class="form-group" v-show='progress1'>
        <label for="username">请输入用户名:</label>
        <input type="text" class="form-control" maxlength='16' @focus='focususerf' @blur='bluruserf' name="username" placeholder="请输入用户名" v-model='usernamef'>
        <div class="text-danger">
          <i name="name" class="xyvideo-icon xyvideo-icon-cancel3"></i>
          <label name="name" :class="changingUf" v-text='texusernamef'></label>
        </div>
      </div>
      <div class="form-group" v-show='progress1'>
        <label for="verifycode">验证码:</label>
        <input type="text" class="form-control" @focus='focusverifycodef' @blur='blurverifycodef' name="verifycode" placeholder="右侧图片字母和数字" maxlength="6" style="width:130px;" v-model='verifycodef'>
        <img class="verify-img" src="http://webvideo.6fg645fsd.com/api/user/getCaptcha" ref="verifyImg" onclick="this.src='http://webvideo.6fg645fsd.com/api/user/getCaptcha?d='+Math.random();" alt="点击刷新" width="100" height="26" title="看不清可单击图片刷新">
        <div class="text-danger">
          <i name="name" class="xyvideo-icon xyvideo-icon-cancel3"></i>
          <label name="name" :class="changingV" v-text='texverifycodef'></label>
        </div>
      </div>
      <div class="form-group" v-show='progress2'>
        <label for="username">用户名:</label>
        <input type="text" class="form-control" v-model='username' readonly>
        <div class="text-danger">
          <i name="name" class="xyvideo-icon xyvideo-icon-cancel3"></i>
          <label></label>
        </div>
      </div>
      <div class="form-group" v-show='progress2'>
        <label for="emailf">邮箱:</label>
        <input type="text" class="form-control" style="width:130px;" v-model='email' readonly>
        <button type="button" name="button" v-text='sendcode'  @click='sendMail'></button>
        <div class="text-danger">
          <i name="name" class="xyvideo-icon xyvideo-icon-cancel3"></i>
          <label></label>
        </div>
      </div>
      <div class="form-group" v-show='progress2'>
        <label for="username">请输入验证码:</label>
        <input type="text" class="form-control" v-model='emailcode' placeholder="请输入验证码" maxlength='6'>
      </div>
      <div class="form-group" v-show='progress3'>
        <label for="password">重置登录密码:</label>
        <input type="password" class="form-control" v-model='passwordf' @focus='focuspswf' @blur='blurpswf' id="register_password" name="password" placeholder="密码为6-12位字母或数字">
        <div class="text-danger">
          <i name="name" class="xyvideo-icon xyvideo-icon-cancel3"></i>
          <label name="name" :class="changingCpf" v-text='texpasswordf'></label>
        </div>
      </div>
      <div class="form-group" v-show='progress3'>
        <label for="confirmPassword">确认密码:</label>
        <input type="password" class="form-control" v-model='confirmPasswordf' @focus='focuspswrf' @blur='blurpswrf' id="register_confirmPassword" name="confirmPassword" placeholder="请再次输入密码">
        <div class="text-danger">
          <i name="name" class="xyvideo-icon xyvideo-icon-cancel3"></i>
          <label name="name" :class="changingCprf" v-text='texconfirmPasswordf'></label>
        </div>
      </div>
    </form>
  </div>
  <el-button style="margin-top: 12px;" @click="next" :class="changbtn" :disabled='nextbtn'>下一步</el-button>
  <loading v-show='ShowLoading'/>
  <AlertMsg v-show='ShowAlertF'/>
</div>
</template>
<script>
import Hub from "@/components/Hub";
import loading from "@/components/loading";
import AlertMsg from "@/components/Alert/AlertMsg";

export default {
  data() {
    return {
      ShowAlertF:false,
      ShowLoading:false,
      active: 0,
      username: 'null',
      email: 'null',
      sendcode: '发送验证码',
      emailcode: null,
      usernamef: null,
      verifycodef: null,
      passwordf: null,
      confirmPasswordf: null,
      texusernamef: null,
      texverifycodef: null,
      texpasswordf: null,
      texconfirmPasswordf: null,
      changingUf: null,
      changingV: null,
      changingCpf: null,
      changingCprf: null,
      progress1: true,
      progress2: false,
      progress3: false,
      changbtn: 'dark',
      nextbtn: true,
      testname: false,
      testcode: false,
      ShowFmsg: false,
      userid: null,
      api_token:null,
    };
  },
  components: {loading,AlertMsg},
  methods: {
    // 发送验证码
    sendMail(){
      this.ShowLoading=true
      this.$http.get("/api/user/sendMail", {
        user_id: this.userid
      }).then(data => {
        console.log(data)
        if (data.status == 0) {
          this.ShowLoading=false
          this.ShowAlertF=true
          Hub.$emit('changMsg', data.message);
        }
      })
    },
    // 下一步
    next() {
      this.active++
      if(this.active>2){
        this.active=3
      }
      if (this.active == 0) {
        this.progress1 = true
        this.progress2 = false
        this.progress3 = false
      }
      // 输入用户名,获取已绑定的邮箱
      if (this.active == 1) {
        this.ShowLoading=true
        this.$http.post("/api/user/postVerifyInfo", {
          phrase: this.verifycodef,
          username: this.usernamef
        }).then(data => {
          if (data.status == 0) {
            this.username = data.data.username
            this.email = data.data.email
            this.userid = data.data.id
            this.progress1 = false
            this.progress2 = true
            this.progress3 = false
            this.nextbtn = true
            this.changbtn = 'dark'
            this.ShowLoading=false
          }else{
            this.$refs.verifyImg.src='http://webvideo.6fg645fsd.com/api/user/getCaptcha?d='+Math.random()
            this.active = 0
            this.ShowAlertF=true
            Hub.$emit('changMsg', data.message);
          }
        })
      }
      // 获取邮箱验证码
      if (this.active == 2) {
        this.ShowLoading=true
        this.$http.post("/api/user/postCodeInfo", {
          code: this.emailcode,
          user_id: this.userid
        }).then(data => {
          console.log(data)
          this.ShowAlertF=true
          if (data.status == 0) {
            this.ShowLoading=false
            this.progress1 = false
            this.progress2 = false
            this.progress3 = true
            this.nextbtn = true
            this.changbtn = 'dark'
            this.api_token=data.data.api_token
            Hub.$emit('changMsg', '验证成功');
          }else{
            this.active = 1
            this.ShowAlertF=true
            Hub.$emit('changMsg', data.message);
          }
        })
      }
      // 重新设置密码
      if (this.active == 3) {
        this.ShowLoading=true
        let Base64 = require("js-base64").Base64;
        let sha1 = require("sha1");
        let salt = sessionStorage.getItem("salt");
        console.log(salt)
        var newpsw = sha1(salt + this.confirmPasswordf),
          newpsw = Base64.encode(newpsw)
        // 发请求，显示成功弹框
        this.$http.post("/api/user/postPasswordInfo", {
          api_token: this.api_token,
          password: this.confirmPasswordf,
          code:this.emailcode
        }).then(data => {
          if (data.status == 0) {
            this.ShowLoading=false
            this.progress1 = false
            this.progress2 = false
            this.progress3 = true
            this.nextbtn = true
            this.changbtn = 'dark'
            this.ShowAlertF=true
            Hub.$emit('changMsg', data.message);
            setTimeout(() => {
              this.$router.push({
                path: "/Logoin"
              });
            }, 3000);
          }else{
            this.active = 2
            this.ShowAlertF=true
            Hub.$emit('changMsg', data.message);
          }
        })

      }
    },
    // 用户名
    focususerf() {
      this.texusernamef = "请输入用户名,的由a-z大小写字母和数字组合";
      this.changingUf = 'green'
    },
    bluruserf() {
      let userReg = /(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{4,12}/;
      if (!userReg.test(this.usernamef)) {
        this.texusernamef = "请输入用户名,的由4-12个a-z大小写字母和数字组合,请检查!";
        this.changingUf = 'red'
        this.testname = false;
      } else {
        this.texusernamef = null;
        this.testname = true;
      }
      if (this.usernamef == null) {
        this.texusernamef = "用户名不得为空,请检查!";
        this.changingClasspswr = 'red'
        this.testname = false;
      }
    },
    // 验证码
    focusverifycodef() {
      this.texverifycodef = "请输入右边图片的验证码";
      this.changingV = 'green'
    },
    blurverifycodef() {
      let verifycodeReg = /^[a-zA-Z0-9]{4,6}$/
      if (!verifycodeReg.test(this.verifycodef)) {
        this.texverifycodef = "右边图片刷新验证码!";
        this.changingV = 'red'
        this.testcode = false;
      } else {
        this.texverifycodef = null;
        this.testcode = true;
      }
      if (this.verifycodef == null) {
        this.texverifycodef = "验证码不能为空,请检查!";
        this.changingV = 'red'
        this.testcode = false;
      }
    },
    // 初始密码
    focuspswf() {
      this.texpasswordf = "请输入用户名,的由a-z大小写字母和数字组合";
      this.changingCpf = 'green'
    },
    blurpswf() {
      let pwdReg = /^[a-zA-Z0-9]{6,12}$/;
      if (!pwdReg.test(this.passwordf)) {
        this.texpasswordf = "密码由6-12位字母或数字任意组合";
        this.changingCpf = 'red'
      }
      if (this.passwordf == null) {
        this.texpasswordf = "密码不得为空!";
        this.changingCpf = 'red'
      }
    },
    // 再次输入密码
    focuspswrf() {
      this.texconfirmPasswordf = "请再次输入密码";
      this.changingCprf = 'green'
    },
    blurpswrf() {
      if (this.passwordf != this.confirmPasswordf) {
        this.texconfirmPasswordf = "两次输入的密码不一致~";
        this.changingCprf = 'red'
      }
      if (this.confirmPasswordf == null) {
        this.texconfirmPasswordf = "请再次输入密码";
        this.changingCprf = 'red'
      }
    },
  },

  created() {
    Hub.$on('closedShowForgetPSW', data => {
      this.ShowAlertF=data
    });
  },
  watch: {
    usernamef: function(curVal, oldVal) {
      let userReg = /(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{4,12}/;
      if (userReg.test(this.usernamef)) {
        this.testname = true;
      } else {
        this.testname = false;
      }
    },
    verifycodef: function(curVal, oldVal) {
      let verifycodeReg = /^[a-zA-Z0-9]{4,6}$/
      if (verifycodeReg.test(this.verifycodef)) {
        this.testcode = true;
      } else {
        this.testcode = false;
      }
    },
    testname: function(curVal, oldVal) {
      if (this.testcode && this.testname) {
        this.nextbtn = false
        this.changbtn = 'greend'
      } else {
        this.nextbtn = true
        this.changbtn = 'dark'
      }
    },
    testcode: function(curVal, oldVal) {
      if (this.testcode && this.testname) {
        this.nextbtn = false
        this.changbtn = 'greend'
      } else {
        this.nextbtn = true
        this.changbtn = 'dark'
      }
    },
    emailcode: function(curVal, oldVal) {
      let verifycodeReg = /^[a-zA-Z0-9]{4,6}$/
      if (verifycodeReg.test(this.emailcode)) {
        // 如果通过验证就发请求
        this.nextbtn = false
        this.changbtn = 'greend'
      } else {
        this.nextbtn = true
        this.changbtn = 'dark'
      }
    },
    passwordf: function(curVal, oldVal) {
      let pwdReg = /^[a-zA-Z0-9]{6,12}$/;
      if (!pwdReg.test(this.passwordf)) {
        this.texpasswordf = "密码由6-12位字母或数字任意组合";
        this.changingCpf = 'red'
      } else {
        this.texpasswordf = null
      }
    },
    confirmPasswordf: function(curVal, oldVal) {
      let pwdReg = /^[a-zA-Z0-9]{6,12}$/;
      if (pwdReg.test(this.confirmPasswordf)) {
        if (this.passwordf != this.confirmPasswordf) {
          this.texconfirmPasswordf = "两次输入的密码不一致~";
          this.changingCprf = 'red';
          this.nextbtn = true;
          this.changbtn = 'dark';
        }
        if (this.passwordf == this.confirmPasswordf) {
          this.texconfirmPasswordf = null;
          this.nextbtn = false;
          this.changbtn = 'greend';
        }
      }
    },
    ShowAlertF: function(curVal, oldVal) {
      if(curVal){
        this.ShowLoading=false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.Forgetpsw {
    width: 1200px;
    margin: 0 auto;
    height: auto;
    margin-top: 20px;
    margin-bottom: 40px;
    height: 500px;
    border: 1px solid #58b59d;
    .account-title {
        text-align: left;
        padding: 5px;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        background-color: #58b59d;
        color: #fff;
    }
    .findtitle {
        width: 700px;
        height: 30px;
        margin: 30px auto 0;
        min-height: 30px;
        line-height: 30px;
        color: #58b59d;
        border: 1px dashed #58b59d;
    }
    .progress {
        padding: 30px 247px;
    }
    form {
        color: #909090;
        width: 37%;
        margin: 0 auto;
        .form-group {
            text-align: left;
            label {
                font-size: 16px;
                font-weight: 400;
                padding: 7px 0;
                text-align: right;
                padding-right: 20px;
                width: 120px;
            }
            button {
                width: 100px;
                height: 36px;
                line-height: 36px;
                border-radius: 5px;
                color: #fff;
                background: #58b59d;
            }

            .form-control {
                height: 35px;
                line-height: 35px;
                font-size: 14px;
                color: #666;
                border: 1px solid #ddd;
                border-radius: 2px;
                width: 240px;
                padding: 0 12px;
            }
            .input-group-addon {
                img {}
            }
            .text-danger {
                height: 30px;
                line-height: 30px;
                label {
                    font-size: 13px;
                    width: 100%;
                    padding: 0;
                    color: #f07;
                    text-align: center;
                    padding-left: 30px;
                }
                .green {
                    color: #58b59d;
                }
                .red {
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
        .verify-img {
            height: 36px;
            display: inline-block;
            float: right;
            position: relative;
            right: 34px;
            cursor: pointer;
        }
    }
    .el-button {
        width: 150px;
        margin-top: 12px;
        background: #58b59d;
        color: #fff;
        border: none;
        outline: none;
    }
    .dark {
        background: #bdc1c0;
    }
    .greend {
        background: #58b59d;
    }
}
</style>
