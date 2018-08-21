<template>
<div class="Transaction">
  <div class="myvideo-title">
    <span>交易明细</span>
  </div>
  <div class="myvideo-videolist-box">
    <div class="myvideo-nothing">
      <span class="fas fa-exclamation-circle"></span> 暂无记录,去
      <a href="/Home">首页</a> 观看视频
    </div>
  </div>
</div>
</template>
<script>
import {  network} from '@/config/config';
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
  components: {},
  created() {
    let api_token = sessionStorage.getItem('TOKEN_KEY')
    network('/api/user/getMyOrders?api_token='+api_token, null, data => {
      console.log(data)
      if (data.status == 0) {

      }
    })
  },
}
</script>

<style lang="scss" scoped>
.Transaction {
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
    .myvideo-upload {
        width: 900px;
        height: 88px;
        border-bottom: 1px solid #ddd;
        .myvideo-upload-desc {
            height: 48px;
            width: 280px;
            margin: auto;
            position: relative;
            a {
                background-position: 0 48px;
                position: absolute;
                height: 48px;
                line-height: 48px;
                color: #fff;
                width: 280px;
                top: 20px;
                left: 0;
                background: #58b59d;
                border-radius: 10px;
                i {
                    font-size: 23px;
                    padding: 10px;
                    line-height: 25px;
                }
            }
        }
    }
    .myvideo-videolist-box {
        margin-top: 20px;
        width: 915px;
        .myvideo-nothing {
            text-align: center;
            line-height: 155px;
            height: 155px;
            font-size: 18px;
            color: #b5b5b5;
            span {
                margin-right: 5px;
            }
            a{
              color: #58b59d;    cursor: pointer;
            }
        }
    }
}
</style>
