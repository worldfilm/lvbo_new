<template>
<div class="leftmenu">
  <div class="info">
    <div class="infophoto">
      <img :src="imgsrc" @click='changehead'>
    </div>
    <p class="infoname">
      <span>{{username}}</span>
    </p>
    <div class="infolist">
      <ul>
        <li>
          <p>积分</p>
          <p v-text="integral"></p>
        </li>
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
      <li v-for='(item, index) in usercenterlist' @click="userlist(item.component)" :key="index"><i :class="['fas', item.icon]"></i><span v-text="item.name"></span></li>
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
        icon: 'fa-user',
        component: 'Accunt'
      }, {
        name: '我的视频',
        icon: 'fa-video',
        component: 'Video'
      }, {
        name: '我的资料',
        icon: 'fa-address-card',
        component: 'Info'
      }, {
        name: '我的收藏',
        icon: 'fa-star',
        component: 'Favorite'
      }, {
        name: '账户安全',
        icon: 'fa-shield-alt',
        component: 'Safety'
      }]
    }
  },
  methods: {
    userlist(component) {
      Hub.$emit('component', component);
    },
    videolink(){
      Hub.$emit('component', 'Video');
    },
    changehead(){
      Hub.$emit('component', 'Changehead');
    },
  },
  components: {},
  created() {
    let imgsrc=sessionStorage.getItem('imgsrc')
    this.imgsrc=imgsrc
    let username=sessionStorage.getItem('username')
    if(username){
        this.username=username
    }
    Hub.$on('changeheader', data => {
      if(data){
        let imgsrc=sessionStorage.getItem('imgsrc')
        this.imgsrc=imgsrc
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
