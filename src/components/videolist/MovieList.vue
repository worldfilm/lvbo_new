<template>
<div class='MovieList'>
  <div class='content_1'>
    <h4 class="videos-title">
      <i class="fas fa-film" ></i>
      <span class='title_span'>黄金正片</span>
      <a class="more" @click='more'>查看更多&gt;</a>
    </h4>
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
import {network} from '@/config/config';
// import newlist from '@/data/newlist';
export default {
  data() {
    return {
      title: 'home',
      list:{},
      num:0,

    }
  },
  name: 'home',
  components:{},
  methods:{
    videonav(e,index){
      this.num = index
      // network('http://192.168.0.110:3000/NavList', {title:e}, data => {
      //   this.list=data.data
      // })
    },
    more(){
      this.$router.push({
        path: '/VideoMore'
      })
    },
    openvideo(item){
      this.$router.push({
        path: '/VideoDetil'
      })
    },
  },
  mounted(){
    // network('http://192.168.0.110:3000/videoList', null, data => {
    //   this.list = data.data
    // })
  },
}
</script>

<style lang="scss" scoped>
.MovieList {
    width: 1200px;
    float: left;
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
</style>
