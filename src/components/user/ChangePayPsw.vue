<template>
<div class="ChangePayPsw">
  <div class="myvideo-title">
    <span>设置支付密码</span>
  </div>
  <div class="content">
    <div class="form-group">
      <span>支付密码：</span><input type="password" class="form-control oldpassword" placeholder="请输入新的支付密码" v-model='newpsw'>
    </div>
    <div class="form-group">
      <span>重复支付密码：</span><input type="password" class="form-control newPassword" placeholder="请再次输入新的支付密码" v-model='replapsw'>
    </div>
    <button type="button" class="surebtn changePassword" @click='changepsw'>更&nbsp;&nbsp;改</button>
    <p class="passwordtexx" v-text='passwordtexx'></p>
  </div>
</div>
</template>
<script>
// let Base64 = require('js-base64').Base64;
// import md5 from 'js-md5';
import Hub from '@/components/Hub';
import {
  network
} from '@/config/config';
export default {
  data() {
    return {
      newpsw:null,
      replapsw:null,
      passwordtexx:null,
    }
  },
  methods: {
    changepsw(){
      if(this.newpsw==null){
        this.passwordtexx='密码不得为空!'
      }else{
        this.sendingpswdata()
      }
    },
    sendingpswdata(){
      if(this.newpsw==this.replapsw){
        let sha1 = require('sha1');
        let api_token = sessionStorage.getItem('TOKEN_KEY');
        var newpsw = sha1(this.newpsw);
        var repsw = sha1(this.replapsw);
        network('/api/user/editPrivate', {
           api_token:api_token,
           type:'2',
           private_str:newpsw,
           new_private_str:repsw,
        }, data => {
          if (data.status == 0) {
            this.passwordtexx=data.message
          }else{
            this.passwordtexx=data.message
          }
        })
      }else{
        this.passwordtexx='两次输入的密码不一致~'
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.ChangePayPsw {
    width: 900px;
    display: inline-block;
    height: auto;    min-height: 600px;
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
        .passwordtexx{
          height: 40px;
          line-height: 40px;
          color: #f56c6c;
          font-size: 16px;
          padding-top: 20px;
        }
    }
}
</style>
