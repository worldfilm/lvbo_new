<template>
<div class="leftmenu">
  <div class="info">
    <div class="infophoto">
      <a href="#/Changehead">
        <img :src="imgsrc">
      <i class="icon iconfont icon-bianji"></i>
      </a>
    </div>
    <p class="infoname">
      <span>{{username}}</span>
    </p>
    <div class="infolist">
      <ul>
        <!-- <li>
          <p>积分</p>
          <p v-text="integral"></p>
        </li> -->
        <li>
          <p @click='videolink' class="videolink">视频</p>
          <p v-text="videonum"></p>
        </li>
        <li>
          <p>注册</p>
          <p v-text="registetime"></p>
        </li>
      </ul>
    </div>
  </div>
  <div class="infooption">
    <ul>
      <li v-for='(item, index) in usercenterlist' @click="userlist(item.component)" :key="index">
        <i :class="['iconfont', item.icon]"></i>
        <span v-text="item.name"></span>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
      imgsrc:null,
      username: null,
      registetime: '2018/05/12',
      videonum: '999',
      integral: '999',
      usercenterlist: [{
        name: '我的账户',
        icon: 'icon-wode1',
        component: 'Accunt'
      }, {
        name: '我的视频',
        icon: 'icon-01',
        component: 'Video'
      }, {
        name: '我的资料',
        icon: 'icon-ziliao',
        component: 'Info'
      }, {
        name: '我的收藏',
        icon: 'icon-shoucang',
        component: 'Favorite'
      }, {
        name: '账户安全',
        icon: 'icon-zhanghuanquan',
        component: 'Safety'
      }]
    }
  },
  methods: {
    userlist(component) {
      this.$router.push({
        path: "/"+component
      });
    },
    videolink(){
      Hub.$emit('component', 'Video');
    },
  },
  components: {},
  created() {
    let registetime=sessionStorage.getItem('created_at').split(' ')[0].split('-').join('/')
    let videos=sessionStorage.getItem('videos')
    this.videonum=videos
    this.registetime=registetime
    let imgsrc=sessionStorage.getItem('imgsrc')
    this.imgsrc=imgsrc
    let username=sessionStorage.getItem('username')
    if(username){
        this.username=username
    }
    Hub.$on('changeheader', data => {
      if(data){
        let imgsrc=sessionStorage.getItem('imgsrc')
        this.imgsrc=data
      }
    });
  },
}
</script>

<style lang="scss" scoped>
.leftmenu {
    width: 280px;
    height: 450px;
    background: #fff;
    float: left;
    .info {
        border-bottom: 1px dashed;
        width: 240px;
        padding: 0 20px;
        .infophoto {
            img {
                margin-top: 20px;
                height: 80px;
                width: 80px;
                border-radius: 50%;
                vertical-align: middle;
            }
            .iconfont{
              display:inline-block;
              width:30px;
              height:30px;
              position: relative;
              top: -20px;
              right: -3px;
              font-size: 23px;
            }
        }
        .infoname {
            width: 100%;
            text-align: center;
            margin: 10px auto;
            color: #58b59d;
            vertical-align: middle;
            span {
                line-height: 29px;
                font-size: 19px;
            }
        }
        .infolist {
            ul {
                li {
                    color: #666;
                    height: 75px;
                    line-height: 75px;
                    width: 60px;
                    display: inline-block;
                    p {
                        height: 30px;
                        line-height: 30px;
                    }
                    .videolink{
                      cursor: pointer;
                    }
                }
            }
        }
    }
    .infooption {
        ul {
            li {
                color: #666;
                height: 45px;
                line-height: 45px;
                font-size: 14px;
                cursor: pointer;
                span {}
                i {
                    height: 30px;
                    width: 30px;
                    display: inline-block;
                    line-height: 30px;
                    font-size: 18px;
                }
            }
            li:hover {
                color: #fff;
                background: #58b59d;
            }
        }
    }
}
</style>
