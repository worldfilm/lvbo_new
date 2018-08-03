<template>
<div class="ChangeEmail">
  <div class="myvideo-title">
    <span>修改绑定邮箱</span>
  </div>
  <div class="content">
    <div class="form-group">
      <i>1</i><span>验证原邮箱</span><i>2</i><span>绑定新邮箱</span><i>3</i><span>修改完成</span>
    </div>
    <div class="form-group">
      <span>安全邮箱：</span><input type="text" class="form-control oldpassword" placeholder="请输入邮箱">
    </div>
    <div class="form-group">
      <span>验证码：</span><input type="text" class="form-control newPassword" placeholder="请输入验证码">
    </div>
    <div class="form-group">
      <span>确认密码：</span><input type="button" class="form-control rePassword" value='发送'>
    </div>
    <p class="personal-warn"><span class="warn passwordtex" v-text='passwordtex' style="display:none"></span></p>
    <button type="button" class="surebtn changePassword">下一步</button>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
      list: [{}, ]


    }
  },
  methods: {

  },
  components: {}
}
</script>

<style lang="scss" scoped>
.ChangeEmail {
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
    }
}
</style>
