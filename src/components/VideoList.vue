<template>
<div class='VideoList'>
  <div class='content_1'>
    <h4 class="videos-title">
      <i class="fa fa-anchor" ></i>
      <span class='title_span'>最新视频</span>
      <a class="more">查看更多&gt;</a>
    </h4>
    <ul class="nav">
      <li class="item" v-for='(item,index) in navlist' @click='videonav(item.name,index)' :class="{isactive:index == num}">{{item.name}}</li>
    </ul>
    <ul class="videos-cont">
      <li v-for="item in list" class="item">
        <img class="video-cover" :src="item.thumb_href">
        <p class="title" v-text='item.title'></p>
        <p class="v-mask-layer"><span class="peoplenum"></span><span>人观看</span><span class="beforeday">{{item.duration}}</span><span>天前</span> </p>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import {
  network
} from '@/config/config';
// import newlist from '@/data/newlist';
export default {
  data() {
    return {
      title: 'home',
      list: {},
      num: 0,
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
        }
      ]
    }
  },
  name: 'home',
  components: {},
  methods: {
    videonav(e, index) {
      this.num = index
      network('NavList', {
        title: e
      }, data => {
        this.list = data.data
      })
    },
  },
  mounted() {
    network('videoList', null, data => {
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
            color: #58b59d;
            font-size: 22px;
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
            height: 30px;
            line-height: 30px;
            border-radius: 5px;
        }
        .item:hover {
            background-color: #58b59d;
            color: #eef1f0;
        }
        .isactive {
            background-color: #58b59d;
            color: #eef1f0;
        }
    }
    .item {
        width: 220px;
        margin: 0 7px 14px;
        box-shadow: 0 0 10px #ddd;
        display: inline-block;
        position: relative;
        cursor: pointer;
        p {
            height: 30px;
            line-height: 30px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        img {
            position: relative;
            width: 220px;
            height: 130px;
        }
        .v-mask-layer {
            margin: 0 auto;
            line-height: 30px;
            text-align: left;
            padding-left: 5px;
            span {}
            .peoplenum {
                width: 50%;
                float: left;
            }
            .beforeday {}
        }
    }

}
</style>
