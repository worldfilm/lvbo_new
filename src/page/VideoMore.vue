<template>
<div class="VideoMore">
<AdvertisHome v-show="ShowAdvertisHome"/>
  <div class="morevideo-left">
    <p class="videos-title">
      <i class="fas fa-newspaper"></i>
      <span class='title_span'>全部视频</span>
    </p>
    <ul class="videos-cont">
      <li v-for="(item,idx) in list" class="item" @click='openvideo(item)'>
        <img class="video-cover" :src="item.thumb_href">
        <a class="hide">
            <img src="/static/playbtn.png" alt="">
          </a>
        <p class="title" v-text='item.title'></p>
        <p class="v-mask-layer"><span class="peoplenum"></span><span>人观看</span><span class="beforeday">{{item.duration}}</span><span>天前</span> </p>
      </li>
    </ul>
  </div>
  <div class="morevideo-right">
    <p class="videos-title">
      <span class='title_span'>本周热门排行榜</span>
    </p>
    <ul class="videos-cont">
      <li v-for="(item,idx) in list" class="item" @click='openvideo(item)'>
        <div class="videonumber" v-text='idx+1'></div>
        <img class="video-cover" :src="item.thumb_href">
        <a class="hide">
            <img src="/static/playbtn.png" alt="">
        </a>
        <p class="title" v-text='item.title'></p>
        <p><span class="peoplenum"></span><span>人观看</span><span class="beforeday">{{item.duration}}</span><span>天前</span> </p>
      </li>
    </ul>
    <p class="videos-title">
      <span class='title_span'>本周热门排行榜</span>
    </p>
    <ul class="videos-cont">
      <li v-for="(item,idx) in list" class="item" @click='openvideo(item)'>
        <div class="videonumber"> 3 </div>
        <img class="video-cover" :src="item.thumb_href">
        <a class="hide">
            <img src="/static/playbtn.png" alt="">
        </a>
        <p class="title" v-text='item.title'></p>
        <p><span class="peoplenum"></span><span>人观看</span><span class="beforeday">{{item.duration}}</span><span>天前</span> </p>
      </li>
    </ul>
  </div>
  <Pagination/>
</div>
</template>
<script>
import Hub from '@/components/Hub';
import Pagination from '@/components/Pagination';//分页
import AdvertisHome from '@/components/AdvertisHome';
import {
  network
} from '@/config/config';
export default {
  data() {
    return {
      list: [],
      data: '最新',
      title:null,
      ShowAdvertisHome:true,
    }
  },
  methods: {
    initial() {
      // network('videoList', null, data => {
      //   this.list = data.data
      // })
    },
    openvideo(item){
      this.$router.push({
        path: '/VideoDetil'
      })
    },
  },
  mounted() {
    this.initial()
    this.title=this.$route.query.titlename
    Hub.$on('sendingnamee', (data) => {
           this.title=data
    });
    console.log(this.title)
  },
  created() {},
  components: {Pagination,AdvertisHome}
}
</script>

<style lang="scss" scoped>
.VideoMore {
    width: 1200px;
    margin: 0 auto;
    text-align: left;
    .videos-title {
        width: 98%;
        margin-bottom: 14px;
        font-size: 17px;
        font-weight: 400;
        height: 40px;
        line-height: 40px;
        padding-left: 9px;
        border-bottom: 1px solid #58b59d;
        .title_span {
            height: 40px;
            line-height: 40px;
            float: left;
            color: #58b59d;
            font-size: 22px;
        }
        .more {
            height: 40px;
            line-height: 56px;
            float: right;
            color: #58b59d;
            font-size: 14px;
            cursor: pointer;
        }
        i {
            height: 40px;
            line-height: 40px;
            width: 40px;
            float: left;
            color: #58b59d;
            font-size: 27px;
            display: inline-block;
        }
    }
    .morevideo-left {
        width: 800px;
        display: inline-block;
        .item {
            width: 185px;
            margin: 0 7px 14px;
            box-shadow: 0 0 10px #ddd;
            display: inline-block;
            position: relative;
            cursor: pointer;
            .title:hover {
                color: #f07;
            }
            p {
                padding-left: 5px;
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
    .morevideo-right {
        width: 390px;
        float: right;
        min-height: 400px;
        ul {
            height: 583px;
            overflow: hidden;
        }
        .item {
            margin: 0 7px 14px;
            box-shadow: 0 0 10px #ddd;
            display: inline-block;
            position: relative;
            cursor: pointer;
            padding: 10px;
            .title:hover {
                color: #f07;
            }
            p {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                float: right;
                width: 120px;
                height: 30px;
                line-height: 30px;
            }
            img {
                position: relative;
                width: 220px;
                height: 113px;
                float: left;
            }

            span {}
            .peoplenum {
                width: 50%;
                float: left;
            }
            .beforeday {}
            .hide {
                position: absolute;
                z-index: 10;
                width: 49%;
                height: 84%;
                top: 0;
                left: 0;
                background-color: rgba(0,0,0,.5);
                transition: all 1s linear;
                font-size: 48px;
                text-align: center;
                color: #FFF;
                line-height: 120px;
                display: none;
                margin: 10px;
                img {
                    animation: heartbeat 1s infinite;
                    height: auto;
                    width: auto;
                    left: 50px;
                    top: 22px;
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
        .videonumber {
            background: url(/static/redicon.png)no-repeat 0 0;
            z-index: 2;
            display: inline-block;
            width: 46px;
            height: 40px;
            position: relative;
            right: 220px;
            text-align: left;
            line-height: 27px;
            padding-left: 12px;
            color: #fff;
        }
        .item:hover {
            box-shadow: 3px 4px 4px 0 #aaa;
        }
        .item:hover .hide {
            display: block;
        }
    }

}
</style>
