<template>
<div class="video">
  <div class="myvideo-title">
    <span>我的视频</span>
  </div>
  <div class="myvideo-upload" v-show='NoHaveVideo'>
    <div class="myvideo-upload-desc">
      <a @click="uploadvideo" class="myvideo-upload-desc-img"><i class="fas fa-cloud-upload-alt" ></i>我要上传</a>
    </div>
  </div>
  <div class="myvideo-videolist-box" v-show='NoHaveVideo'>
    <div class="myvideo-nothing">
      <span class="fas fa-exclamation-circle"></span> 暂无记录,去
      <a href="/Home">首页</a> 观看视频
    </div>
  </div>
  <div class="myvideo" v-show='HaveVideo'>
    <ul class="videos-cont">
      <li v-for="(item,idx) in list" class="item" @click='openvideo(item)'>
        <img class="video-cover" :src="item.thumb_href">
        <a class="hide">
          <img src="/static/playbtn.png" alt="">
        </a>
        <p class="title" v-text='item.title'></p>
        <p class="v-mask-layer"><span class="peoplenum"></span><span>人观看</span><span class="beforeday">{{item.duration}}</span><span>天前</span></p>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
import {network} from '@/config/config';
export default {
  data() {
    return {
      pangnum:1,
      page_size:10,
      NoHaveVideo:true,
      HaveVideo:false,
      list:[],
    }
  },
  methods: {
    uploadvideo(){
      console.log('uploadvideo')
    },
    openvideo(item){
      console.log(item)
    },
  },
  components: {},
  created() {
    let api_token = sessionStorage.getItem('TOKEN_KEY')
    let pangnum=this.pangnum
    let page_size=this.page_size
    network('/api/user/getMyVideo?api_token='+api_token+'&page='+pangnum+'&page_size='+page_size, null, data => {
      if (data.status == 0) {
         if(data.data.list.length>0){
           this.NoHaveVideo=false
           this.HaveVideo=true
           this.list=data.data.list
         }
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.video {
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
    .myvideo{
       .videos-cont{
            padding:40px;
         .item {
             width: 185px;
             margin: 0 7px 14px;
             box-shadow: 0 0 10px #ddd;
             display: inline-block;
             position: relative;
             cursor: pointer;
             float: left;
             .title:hover {
                 color: #f07;
             }
             p {
                 height: 20px;
                 line-height: 20px;
                 text-overflow: ellipsis;
                 overflow: hidden;
                 white-space: nowrap;
             }
             img {
                 position: relative;
                 width: 185px;
                 height: 110px;
             }
             .v-mask-layer {
                 margin: 0 auto;
                 line-height: 30px;
                 height: 30px;
                 text-align: left;
                 padding-left: 5px;
                 span {}
                 .peoplenum {
                     width: 50%;
                     float: left;
                 }
                 .beforeday {}
             }
             .hide {
                 position: absolute;
                 z-index: 10;
                 width: 100%;
                 height: 68%;
                 top: 0;
                 left: 0;
                 background-color: rgba(0,0,0,.5);
                 transition: all 1s linear;
                 font-size: 48px;
                 text-align: center;
                 color: #FFF;
                 line-height: 120px;
                 display: none;
                 img {
                     animation: heartbeat 1s infinite;
                     height: auto;
                     width: auto;
                 }
                 @keyframes heartbeat {
                     0% {
                         transform: scale(0.8, 0.8);
                         opacity: 1;
                     }
                     25% {
                         transform: scale(1, 1);
                         opacity: 0.8;
                     }
                     100% {
                         transform: scale(0.8, 0.8);
                         opacity: 1;
                     }
                 }
             }
         }
         .item:hover {
             box-shadow: 5px 4px 7px 1px #aaa;
         }
         .item:hover .hide {
             display: block;
         }
       }
    }
}
</style>
