<!-- 消息提示框 -->
<template>
<div class="AlertMsg">
  <div class="AlertMsg-container">
    <div class="title">
      <span class="l"><i class="iconfont icon-tishi"></i>消息提示</span>
      <span class="r" @click='closed'><i class="iconfont icon-guanbi"></i></span>
    </div>
    <div class="content">
      <p v-text='msg'></p>
    </div>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
       msg:null,
    }
  },
  methods: {
    closed() {
      Hub.$emit('PaySuccessClosed', false);
      Hub.$emit('ShowOk', false);
      Hub.$emit('closedShowForgetPSW', false);
      Hub.$emit('ShowAlertE', false);
      Hub.$emit('ShowUmsg', false);

    },
  },
  created() {
    Hub.$on('changMsg', data => {
      this.msg=data
    });
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.AlertMsg {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    overflow: auto;
    .AlertMsg-container {
        max-width: 280px;
        height: auto;
        margin: 300px auto;
        background-color: #fff;
        // height: 170px;
        position: relative;
        .title {
            background-color: #58b59d;
            color: #fff;
            height: 46px;
            width: 100%;
            span {padding-top: 12px;}
            i {    padding-right: 5px;}
            .l {
                float: left;
                padding-left: 16px;
            }
            .r {
                float: right;
                padding-right: 16px;
                color: #fff;
                cursor: pointer;
            }
            .r:hover{
              color: #ff0;
            }
        }
        .content {
            p {
                padding: 20px;
            }
            button {
                border: none;
                border-radius: 2px;
                background-color: #58b59d;
                color: #fff;
                font-size: 16px;
                width: 100px;
                height: 38px;
                line-height: 38px;
                text-align: center;
                margin: 0 auto;
            }
        }
    }
}
</style>
