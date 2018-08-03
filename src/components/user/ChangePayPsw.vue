<template>
<div class="ChangePayPsw">
  <div class="myvideo-title">
    <span>设置支付密码</span>
  </div>
  <div class="content">
    <div class="form-group">
      <span>支付密码：</span><input type="password" class="form-control oldpassword" placeholder="请输入旧密码">
    </div>
    <div class="form-group">
      <span>重复支付密码：</span><input type="password" class="form-control newPassword" placeholder="请输入新密码">
    </div>
    <p class="personal-warn"><span class="warn passwordtex" v-text='passwordtex' style="display:none"></span></p>
    <button type="button" class="surebtn changePassword">更&nbsp;&nbsp;改</button>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
      list: [{
        },
      ]


    }
  },
  methods: {

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
    }
}
</style>
