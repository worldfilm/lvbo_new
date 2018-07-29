<template>
<div class='VideoList'>
  <div class='content_1'>
    <h4 class="videos-title">
      <i class="fa fa-anchor" ></i>
      <span class='title_span'>最新视频</span>
      <a class="more">查看更多&gt;</a>
    </h4>
    <ul class="nav">
      <li class="item" v-for='(item,index) in navlist' @click='videonav(item.name,index)'  :class="{isactive:index == num}">{{item.name}}</li>
    </ul>
    <ul class="videos-cont">
      <li v-for="item in list" class="item">
        <div class="videos-info">
          <img class="video-cover" :src="item.thumb_href">
          <div class="playContrl">
            <a href=""><i class="fa fa-youtube-play"></i></a>
          </div>
        </div>
        <p class="title" v-text='item.title'></p>
        <div class="v-mask-layer">
          <div class="v-mask-layer-left">人观看 </div>
          <div class="v-mask-layer-right">
            <i class="xyvideo-icon"></i>{{item.duration}}
          </div>
        </div>
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
      navlist: [{
          name: '最新'
        }, {
          name: '大陆'
        }, {
          name: '无套内射'
        }, {
          name: '口爆'
        },
        {
          name: '人妻'
        }, {
          name: '巨乳'
        }, {
          name: '3p'
        }, {
          name: '肛交'
        }, {
          name: '后入'
        }, {
          name: '欧美'
        }, {
          name: '动漫'
        }]
    }
  },
  name: 'home',
  components:{},
  methods:{
    videonav(e,index){
      this.num = index
      network('http://192.168.0.110:3000/NavList', {title:e}, data => {
        this.list=data.data
      })
    },
  },
  mounted(){
    network('http://192.168.0.110:3000/videoList', null, data => {
      this.list = data.data
    })
  },
}
</script>

<style lang="scss" scoped>
.VideoList {
    width: 1200px;
    float: left;
    .videos-title {
        width: 98%;
        margin-bottom: 14px;
        font-size: 17px;
        font-weight: 400;
        height: 30px;
        line-height: 42px;
        padding-left: 9px;
        padding-bottom: 5px;
        border-bottom: 1px solid #58b59d;
        .title_span {
            float: left;
            color: #58b59d;font-size: 22px;
        }
        .more {
            float: right;
            color: #58b59d;
            font-size: 14px;
            cursor: pointer;
        }
    }
    .nav {
        text-align: left;
        .item {
            text-align: center;
            width: 60px;
        }
        .item:hover{
          background-color: #58b59d;
          color: #eef1f0;
        }
        .isactive{
          background-color: #58b59d;
          color: #eef1f0;
        }
    }
    .item {
        width: 266px;
        margin: 0 7px 14px;
        background: #fff;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 10px #ddd;
        display: inline-block;
        position: relative;
        cursor: pointer;
        p {
            height: 32px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .videos-info {
            position: relative;
            img {
                position: relative;
                width: 266px;
                height: 178px;
            }
            .playContrl {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,.5);
                display: none;
            }

        }
        .title {
            // width: 100%;
            // height: 20px;
            // line-height: 25px;
            // margin: 10px 0 5px;
            // overflow: hidden;
            // white-space: nowrap;
            // text-overflow: ellipsis;

        }
        .v-mask-layer {
            position: absolute;
            width: 266px;
            margin: 0 auto;
            height: 30px;
            background-color: #000;
            top: 158px;
            line-height: 30px;
            opacity: 0.6;
                color: #fff;
            .v-mask-layer-left {
                width: 50%;
                float: left;
            }
            .v-mask-layer-right {
                .xyvideo-icon {}
            }
        }
    }

}
</style>
