<template>
<div class="ChangeEmail">
  <LeftMenu/>
  <div class="ChangeEmail-c">
    <div class="myvideo-title">
      <span>修改绑定邮箱</span>
    </div>
    <div class="content">
      <div class="form-group">
        <span>验证原邮箱-</span><span>绑定新邮箱-</span><span>修改完成</span>
      </div>
      <div class="form-group">
        <span>安全邮箱：</span><input type="text" class="form-control oldpassword" placeholder="请输入邮箱" :value='oldemail'>
      </div>
      <div class="form-group">
        <span>验证码：</span>
        <input type="text" class="form-control verification" placeholder="请输入验证码" v-model='verification' maxlength='4'>
        <input type="button" class="form-control sending" value='发送' @click='sending'>
      </div>
      <div class="form-group">
        <span>新邮箱：</span><input type="text" class="form-control oldpassword" placeholder="请输入新邮箱" v-model='newEmail'>
      </div>
      <p class="personal-warn"><span class="warn passwordtex" v-text='warningtex' style="display:none"></span></p>
      <button type="button" class="surebtn changePassword" @click='changeEmail'>下一步</button>
      <p class="warningt" v-text='warningt'></p>
    </div>
  </div>
  <loading v-show='Showloadin'/>
  <AlertMsg v-show='ShowAlertE'/>
</div>
</template>
<script>
import Hub from '@/components/Hub';
import LeftMenu from '@/page/user/LeftMenu';
import loading from "@/components/loading";
import AlertMsg from "@/components/Alert/AlertMsg";
export default {
  data() {
    return {
      ShowAlertE:false,
      Showloadin:false,
      warningtex: null,
      newEmail: null,
      verification: null,
      warningt: null,
      oldemail: null,
    }
  },
  methods: {
    sending() {
      this.Showloadin=true
      this.$http.get('/api/user/sendMail').then(data => {
        if (data.status == 0) {
          this.ShowAlertE=true
          this.Showloadin=false
          Hub.$emit('changMsg', data.message);
        }
      })
    },
    changeEmail() {
      this.Showloadin=true
      let emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      let api_token = sessionStorage.getItem('TOKEN_KEY')
      if (!emailReg.test(this.newEmail)) {
        this.warningt = "请检查您输入的邮箱~";
      } else {
        this.$http.post('/api/user/editEmail', {
          new_email: this.newEmail,
          code: this.verification
        }).then(data => {
          if (data.status == 0) {
            this.Showloadin=false
            this.ShowAlertE=true
            Hub.$emit('changMsg', data.message);
          }else{
            this.Showloadin=false
            this.ShowAlertE=true
            Hub.$emit('changMsg', data.message);
          }
        })
      }
    },
    getemail() {
      let email = sessionStorage.getItem('email')
      this.oldemail = email
    },
  },
  components: {
    LeftMenu,
    loading,
    AlertMsg,
  },
  created() {
    Hub.$on('ShowAlertE', data => {
      this.ShowAlertE=data
    });
  },
  mounted() {
    this.getemail()
  },
}
</script>

<style lang="scss" scoped>
.ChangeEmail {
    width: 1200px;
    margin: 0 auto;
    height: auto;
    margin-top: 20px;
    margin-bottom: 40px;
    .ChangeEmail-c {
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
            color: #FFF;
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
                i {
                    position: relative;
                    width: 24px;
                    height: 24px;
                    line-height: 24px;
                    border-radius: 50%;
                    font-size: 14px;
                    color: #fff;
                    background-color: #aaa;
                    text-align: center;
                }
                .verification {
                    width: 100px;
                }
                .sending {
                    width: 124px;
                    background-color: #58b49d;
                    border: 1px solid #58b49d;
                    color: #fff;
                    cursor: pointer;
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
            .warningt {
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
