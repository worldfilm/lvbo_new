<template>
<div class="AdvertisRWM">
  <div class="qrcode">
    <div id="qrcode"></div>
  </div>
  <ul class="rightlist">
    <li v-for="(item,idx) in favorlist" class="item" :key="idx">
      <a :href="`http://wwwvideo.6fg645fsd.com/v/${item.id}`" target="_blank">
        <div class="img-box">
          <img class="video-cover" :src="item.thumb_img_url">
        </div>
        <a class="hide">
        <img src="/static/playbtn.png" alt="">
      </a>
        <p class="title" v-text='item.title'></p>
      </a>
    </li>
  </ul>
</div>
</template>
<script>
import QRCode from 'qrcodejs2'
import Hub from "@/components/Hub";
export default {
  data() {
    return {
      list: [],
      data: "最新",
      favorlist: null,
    };
  },
  methods: {
    getlist() {
      this.$http.get('api/video/list/favor').then(res => {
        this.favorlist = res.data.list
      });
    },
    qrcode() {
      let qrcode = new QRCode('qrcode', {
        width: 100,
        height: 100,
        text: 'http://wwwvideo.6fg645fsd.com', // 二维码内容
      })
    },
  },
  created() {
    this.getlist();
  },
  mounted() {
    this.qrcode()
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.AdvertisRWM {
    width: 1200px;
    margin: 5px auto;
    text-align: left;
    height: 270px;
    .qrcode {
        float: left;
        width: 440px;
        height: 270px;
        background: url("/static/qrcode.png") no-repeat;
            position: relative;
        #qrcode {
            width: 100px;
            height: 100px;
            display: inline;
            position: absolute;
            top: 80px;
            left: 87px;
            img {
                display: inline-block;
            }
        }
        img {
            height: 100%;
            width: 100%;
        }
    }
    .rightlist {
        float: right;
        width: 735px;
        .item {
            width: 230px;
            margin: 0 0 10px 15px;
            box-shadow: 0 0 10px #ddd;
            display: inline-block;
            position: relative;
            cursor: pointer;
            height: 130px;
            & > a {
                color: #333;
            }
            .title:hover {
                color: #f07;
            }
            p {
                height: 20px;
                width: 225px;
                line-height: 20px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                color: #fff;
                float: left;
                position: relative;
                top: -24px;
                z-index: 11;
                padding-left: 5px;
                background-color: rgba(0, 0, 0, 0.5);
            }
            img {
                position: relative;
                width: 230px;
                height: 130px;
            }
            .v-mask-layer {
                margin: 0 auto;
                line-height: 30px;
                height: 30px;
                text-align: left;
                padding-left: 5px;
                float: left;
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
                height: 100%;
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
        .item:hover p {
            color: #fff;
        }
    }
}
</style>
