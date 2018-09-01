<template>
<div class='VideoList' >
  <div class='content_1' v-for='(item, index) in videolist' :key="index">
    <p class="videos-title">
      <i :class="item.ChangeClass"></i>
      <span class='title_span' v-text='item.name'></span>
      <a class="more" @click='more(item.name,item.id)'>查看更多&gt;</a>
    </p>
    <!-- <VideoNav/> -->
    <ul class="videos-cont">
      <li v-for="(itex,idx) in item.videos" class="item" @click='openvideo(itex)' :key="idx" >
        <img class="video-cover" :src="itex.thumb_img_url">
        <a class="hide">
          <img src="/static/playbtn.png" alt="">
        </a>
        <p class="title" v-text='itex.title'></p>
        <p class="v-mask-layer"><span class="peoplenum" v-text='itex.view_times'></span><span>人观看</span><span class="beforeday">{{itex.duration}}</span><span>天前</span></p>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import Hub from "@/components/Hub";
import { network } from "@/config/config";
import VideoNav from "@/components/VideoNav";
export default {
  data() {
    return {
      title: "home",
      detillist: [],
      videolist: []
      // ChangeClass:null,
    };
  },
  name: "home",
  components: {
    VideoNav
  },
  methods: {
    navquery(data) {
      // network('NavList', {
      //   title: data
      // }, data => {
      //   this.list = data.data
      // })
    },
    // 获取分类列表
    getlist() {
      network("/api/category/list", null, data => {
        var list = data.data;
        var arr = ["fas fa-gift", "fas fa-film", "fas fa-video"];
        for (var i in list) {
          if (list[i].name == "原创自拍") {
            list[i].ChangeClass = arr[2];
          } else if (list[i].name == "中文字幕") {
            list[i].ChangeClass = arr[0];
          } else if (list[i].name == "免费体验") {
            list[i].ChangeClass = arr[0];
          } else {
            list[i].ChangeClass = arr[1];
          }
        }
        this.videolist = list;
      });
    },
    getdetillist() {},
    more(name, id) {
      this.$router.push({
        path: "/VideoMore",
        query: { id, name }
      });
    },
    openvideo(item) {
      this.$router.push({
        path: "/VideoDetil"
      });
    }
  },
  created() {
    Hub.$on("videonav", data => {
      this.navquery(data);
    });
    this.getlist();
  }
};
</script>

<style lang="scss" scoped>
.VideoList {
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
      span {
      }
      .peoplenum {
        width: 50%;
        float: left;
      }
      .beforeday {
      }
    }
    .hide {
      position: absolute;
      z-index: 10;
      width: 100%;
      height: 68%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 1s linear;
      font-size: 48px;
      text-align: center;
      color: #fff;
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
