<template>
<div class="pay-top">
  <div class="container">
    <div class="pay-top-container">
      <div class="pay-top-left pull-left">
        <div class="top-left-title">V2会员特权</div>
        <div class="top-left-desc">
          <ul>
            <li v-for='item in list' v-text='item.text'>海量激情自拍,免费下载到本地;</li>
          </ul>
        </div>
      </div>
      <div class="pay-top-right">
        <div class="top-right-no-login" v-show='ShowNoLogin'>
          <p>加入VIP,畅享特权</p>
          <span>最低1.20元/天</span>
          <div class="loginbtn please-login signInBtn signInCre" @click='login'>登录
          </div>
        </div>
        <div class="first-right-login" v-show='ShowLoginUser'>
          <img :src="imgsrc">
          <div>
            <a v-text='username'></a>
            <p>加入VIP，畅想特权</p>
            <span>最低1.20元/天</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
import {  network} from '@/config/config';
export default {
  data() {
    return {
      imgsrc:null,
      list: [{
          text: '海量激情自拍,免费下载到本地'
        },
        {
          text: '清晰无码，观看细节更重要'
        },
        {
          text: '无广告,看片免除广告干扰'
        },
        {
          text: '专属尊贵身份勋章,尊贵如影随形'
        },
        {
          text: 'VIP专属播放通道,更快,更新'
        },
        {
          text: '多屏共享,移动\PC端会员权益共享'
        },
      ],
      ShowLoginUser: false,
      ShowNoLogin: true,
      username:null,
    }
  },
  methods: {
    login() {
      let istrue = false
      if (!istrue){
        this.$router.push({
          path: '/Logoin'
        })
      }
    },
  },
	mounted() {
    let username=sessionStorage.getItem('username')
    let imgsrc=sessionStorage.getItem('imgsrc')
    this.imgsrc=imgsrc
    if(username){
      this.ShowLoginUser=true
      this.ShowNoLogin=false
      this.username=username
    }
 },
 props: {msg: String },
 components: {},

}
</script>

<style lang="scss" scoped>
.pay-top {
    width: 100%;
    height: 290px;
    margin-bottom: 40px;
    background: linear-gradient(to right,#aa9894, #beada3,#af9596,#e7cdbc);
    padding-top: 35px;
    .container {
        width: 1200px;
        margin: 0 auto;
        .pay-top-container {
            background-color: rgba(0,0,0,.15);
            height: 180px;
            padding: 20px 60px;
            .pay-top-left {
                width: 520px;
                padding-top: 20px;
                height: 108px;
                .top-left-title {
                    font-size: 26px;
                    color: #fff;
                    margin-bottom: 10px;
                    text-align: left;
                }
                .top-left-desc {
                    ul {
                        li {
                            width: 240px;
                            display: list-item;
                            font-size: 14px;
                            color: #fff;
                            line-height: 30px;
                            float: left;
                            list-style-type: disc;
                            text-align: left;
                        }
                    }
                }

            }
            .pay-top-right {
                float: right;
                width: 430px;
                background-color: #fff;
                padding: 20px 30px;
                .loginbtn {
                    width: 240px;
                    height: 38px;
                    line-height: 38px;
                    background-color: #58b59d;
                    color: #fff;
                    border-radius: 2px;
                    font-size: 16px;
                    margin: 10px auto;
                    cursor: pointer;
                    p {
                        font-size: 16px;
                        color: #333;
                        margin-bottom: 3px;
                    }
                    span {
                        font-size: 14px;
                        color: #666;
                    }
                }
            }
            .first-right-login {
                img {
                    float: left;
                    width: 100px;
                    height: 100px;
                    border: 1px solid #ddd;
                    border-radius: 50%;
                    vertical-align: middle;
                }
                div {
                    float: left;
                    margin-left: 10px;
                    vertical-align: middle;
                    text-align: left;
                    a {
                        font-size: 26px;
                        color: #58b59d;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        max-width: 215px;
                        display: inline-block;
                        vertical-align: middle;
                    }
                    p {
                        font-size: 16px;
                        color: #333;
                    }
                    span {
                        font-size: 14px;
                        color: #666;
                    }
                }
            }
        }
    }
}
</style>
