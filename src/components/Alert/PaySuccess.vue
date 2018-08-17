
<template>
<div class="PaySuccess">
  <div class="PaySuccess-container">
    <div class="title">
      <span class="l"><i class="fas fa-exclamation-circle"></i>消息提示</span>
      <span class="r" @click='closed'><i class="fas fa-times"></i></span>
    </div>
    <div class="content">
      <p>若充值成功，请刷新界面!</p>
      <button type="button" name="button" @click='closed'>确定</button>
    </div>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {

    }
  },
  methods: {
    closed() {
      Hub.$emit('PaySuccessClosed', false);
    },
  },
  created() {
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.PaySuccess {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    overflow: auto;
    .PaySuccess-container {
        max-width: 280px;
        height: auto;
        margin: 300px auto;
        background-color: #fff;
        height: 170px;
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
