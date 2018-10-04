<template>
  <ul class="videos-cont">
    <p class="videos-title">
      <!-- <i class="iconfont icon-01"></i> -->
      <span class='title_span'>猜你喜欢</span>
    </p>
    <li v-for="(item,idx) in favorlist" class="item" :key="idx">
      <a :href="`http://wwwvideo.6fg645fsd.com/v/${item.id}`" target="_blank">
        <div class="img-box">
          <img class="video-cover" :src="item.thumb_img_url">
        </div>
        <a class="hide">
          <img src="/static/playbtn.png" alt="">
        </a>
        <p class="title" v-text='item.title'></p>
        <p class="v-mask-layer">
          <span class="peoplenum">{{item.views}}</span>
          <span>人观看</span>
        </p>
      </a>
    </li>
  </ul>
</template>
<script>
import Hub from "@/components/Hub";
import VideoNav from "@/components/VideoNav";
export default {
  data() {
    return {
      title: "home",
      detillist: [],
      videolist: [],
      favorlist:[],
      showLoading: false
      // ChangeClass:null,
    };
  },
  name: "home",
  components: {
    VideoNav
  },
  methods: {
    navquery(data) { },
    // 获取分类列表
    getlist() {
      this.showLoading = true;
      this.$http.get('api/video/list/favor').then(res => {
          this.favorlist=res.data.list
        this.showLoading = false;
      });
    },
    getdetillist() { },
    more(name, id) {
      this.$router.push({
        path: "/VideoMore",
        query: { id, name }
      });
    },
    openvideo(id) {
      // this.$router.push({
      //   path: "/VideoDetil"
      // });
      window.location.href = "http://wwwvideo.6fg645fsd.com/v/" + id;
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
      & > a {
        color: #333;
      }
      p {
        padding-left: 5px;
        height: 20px;
        line-height: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .img-box {
        text-align: center;
        background: #fff;
        height: 106px;
        img {
          max-width: 100%;
          height: 100%;
        }
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
          color: #f00;
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
      & > a {
        color: #333;
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

      span {
      }
      .peoplenum {
        width: 50%;
        float: left;
        color: #f00;
      }
      .beforeday {
      }
      .hide {
        position: absolute;
        z-index: 10;
        width: 49%;
        height: 84%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 1s linear;
        font-size: 48px;
        text-align: center;
        color: #fff;
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
      background: url(/static/redicon.png) no-repeat 0 0;
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
