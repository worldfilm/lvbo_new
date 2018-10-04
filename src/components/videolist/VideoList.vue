<template>
<div class='VideoList'>
  <div class='content_1' v-for='(item, index) in videolist' :key="index">
    <p class="videos-title">
      <i class="iconfont" :class="item.ChangeClass"></i>
      <span class='title_span' v-text='item.name'></span>
      <a class="more" @click='more(item.name,item.id)'>查看更多&gt;</a>
    </p>
    <!-- <VideoNav/> -->
    <ul class="videos-cont">
      <li v-for="(itex,idx) in item.videos" class="item" :key="idx">
        <a :href="`http://wwwvideo.6fg645fsd.com/v/${itex.id}`" target="_blank">
          <img class="video-cover" :src="itex.thumb_img_url">
          <a class="hide">
            <img src="/static/playbtn.png" alt="">
          </a>
        <p class="title" v-text='itex.title'></p>
        <p class="v-mask-layer">
          <span class="peoplenum" v-text='itex.view_times'></span>
          <span>人观看</span>
        </p>
        </a>
      </li>
    </ul>
  </div>
  <v-loading v-show="showLoading"></v-loading>
</div>
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
      showLoading: false
      // ChangeClass:null,
    };
  },
  name: "home",
  components: {
    VideoNav
  },
  methods: {
    navquery(data) {},
    // 获取分类列表
    getlist() {
      this.showLoading = true;
      this.$http.get('/api/category/list').then(data => {
        var list = data.data;
        for (var i in list) {
          if (list[i].name === '原创自拍') {
            list[i].ChangeClass = 'icon-shipin';
          } else {
            list[i].ChangeClass = 'icon-01';
          }
        }
        this.videolist = list;
        this.showLoading = false;
      });
    },
    getdetillist() {},
    more(name, id) {
      this.$router.push({
        path: "/VideoMore",
        query: {
          id,
          name
        }
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
        & > a {
            color: #333;
        }
        .title:hover {
            color: #f07;
        }
        p {
            height: 20px;
            line-height: 20px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            color: #58b59d;
            padding-left: 5px;
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
