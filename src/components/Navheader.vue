<!--头部-->
<template>
<div class="header">
  <nav class="xingyu-topnav">
    <div class="v-container">
      <div class="topnav-mainnav">
        <div class="mainnav-nav-div">
          <ul>
            <li @click='vipag'><a>VIP</a></li>
            <li @click='upload'><a>上传</a></li>
            <li><a target="_blank">領紅包</a></li>
            <li @click='maskerc'><a class="main-nav-tag">标签</a></li>
          </ul>
        </div>
      </div>
      <ul class="topnav-mainnav-right">
        <li class="xingyu-search">
          <input type="text" class="form-control" name="title" placeholder="">
          <button type="button" name="button"><span class="el-icon-search"></span></button>
        </li>
        <li class="top-main-nav-collection" @click='addBookmark'>
          <i class="el-icon-star-on"></i> <span>收藏书签</span>
        </li>

        <li class="top-nav-guide" @click='networkadress'>
          <a target="_blank">地址发布页</a>
        </li>
        <li class="topnav-btn-group">
          <div v-show='ShowLog'>
            <a class="xingyu-btn-login" @click="login">登录</a>
            <a class="xingyu-btn-register" @click="register">注册</a>
          </div>
          <div v-show='ShowOnline' class="showonline">
            <span>欢迎</span>
            <span class="username">{{username}}</span>
            <span class="arrow el-icon-caret-bottom" @click="showuserlist"></span>
            <ul class="userdeitllist" v-show="ulist">
              <li v-for='item in usercenterlist' @click="userpag(item.component)">{{item.name}}</li>
            </ul>
            <span @click='logout'>退出</span>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  <div class="topnav-fix-nav-logo">
    <div class="nav-logo" @click='home'></div>
  </div>
  <MaskerNav v-show='ShowMask' />
</div>
</template>
<script>
import Hub from '@/components/Hub';
import MaskerNav from '@/components/MaskerNav.vue';
import {  network} from '@/config/config';
export default {
  name: 'Navheader',
  components: {
    MaskerNav
  },
  data() {
    return {
      title: '首页',
      ShowLog: true,
      ShowOnline: false,
      username: 'null',
      ulist: false,
      ShowMask: false,
      usercenterlist: [{
        name: '我的账户',
        component: 'Accunt'
      }, {
        name: '我的视频',
        component: 'Video'
      }, {
        name: '我的资料',
        component: 'Info'
      }, {
        name: '我的收藏',
        component: 'Favorite'
      }, {
        name: '账户安全',
        component: 'Safety'
      }, ]
    }
  },
  methods: {
    upload() {
      this.checkuser()
      this.$router.push({
        path: '/Upload'
      })
    },
    networkadress() {
      this.checkuser()
      this.$router.push({
        path: '/LineStation'
      })
    },
    maskerc() {
      this.checkuser()
      this.ShowMask = true
    },
    home() {
      this.checkuser()
      this.$router.push({
        path: '/Home'
      })
    },
    vipag() {
      this.checkuser()
      if (this.ShowOnline) {
        Hub.$emit('ShowLog', false);
        Hub.$emit('ShowOnline', true);
        Hub.$emit('username', this.username);
        Hub.$emit('ShowNoLogin', this.username);
      }
      this.$router.push({
        path: '/Vip'
      })
    },
    login() {
      this.$router.push({
        path: '/Logoin'
      })
    },
    logout() {
      let api_token = sessionStorage.getItem('TOKEN_KEY')
      network('/api/user/loginout?api_token='+api_token, null,data => {
        if (data.status == 0) {
          sessionStorage.removeItem('username')
          sessionStorage.removeItem('email')
          sessionStorage.removeItem('TOKEN_KEY')
          this.checkuser()
            Hub.$emit('home', true);
        }
      })
    },
    register() {
      this.$router.push({
        path: '/Register'
      })
    },
    showuserlist() {
      this.ulist = true
      setTimeout(() => {
        this.ulist = false
      }, 5000)
    },
    userpag(component) {
      Hub.$emit('component', component);
      this.$router.push({
        path: '/UserCenter'
      })
    },
    checkuser() {
      let username = sessionStorage.getItem('username')
      if (username) {
        this.ShowOnline = true
        this.ShowLog = false
        this.username = username
      } else {
        this.ShowOnline = false
        this.ShowLog = true
        this.username = null
      }
    },
    addBookmark() {
      let url = window.location.href;
      let title
      if (!url) {
        url = window.location
      }
      if (!title) {
        title = document.title
      }
      var browser = navigator.userAgent.toLowerCase();
      if (window.sidebar) { // Mozilla, Firefox, Netscape
        window.sidebar.addPanel(title, url, "");
      } else if (window.external) { // IE or chrome
        if (browser.indexOf('chrome') == -1) { // ie
          window.external.AddFavorite(url, title);
        } else { // chrome
          alert('加入收藏失败，请使用Ctrl+D进行添加');
        }
      } else if (window.opera && window.print) {
        return true;
      } else if (browser.indexOf('konqueror') != -1) {
        alert('加入收藏失败，请使用CTRL+B进行添加');
      } else if (browser.indexOf('webkit') != -1) {
        alert('加入收藏失败，请使用CTRL+B 或者 Command+D 进行添加');
      } else {
        alert('Your browser cannot add bookmarks using this link. Please add this link manually.')
      }
    }
  },
  props: [],
  created() {
    this.checkuser()
    Hub.$on('ShowLog', (data) => {
      this.ShowLog = data
    });
    Hub.$on('ShowOnline', (data) => {
      this.ShowOnline = data
    });
    Hub.$on('closed', (data) => {
      this.ShowMask = data
    });
    Hub.$on('ShowMask', (data) => {
      this.ShowMask = true
    });
    Hub.$on('username', (data) => {
      this.username = data
    });
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.ulist = false;
      }
    })
  },

}
</script>
<style lang="scss" >
.header {
    .xingyu-topnav {
        background-color: #58b59d;
        height: 60px;
        .v-container {
            width: 1080px;
            margin: 0 auto;
            height: 60px;
            .topnav-mainnav {
                float: left;
                display: table;
                .mainnav-nav-div {
                    display: table-cell;
                    vertical-align: middle;
                    ul {
                        font-size: 0;
                        line-height: 0;
                        li {
                            width: 85px;
                            text-align: center;
                            height: 60px;
                            line-height: 60px;
                            font-size: 16px;
                            color: #fff;
                            display: inline-block;
                            cursor: pointer;
                        }
                        li:hover {
                            background: #fff;
                            color: #58b59d;
                        }
                    }
                }
            }
            .topnav-mainnav-right {
                float: right;
                line-height: 60px;
                height: 60px;
                li {
                    display: inline-block;
                    height: 32px;
                    line-height: 32px;
                    color: #fff;
                    cursor: pointer;
                    float: left;
                    margin: 14px 8px;
                }
                .xingyu-search {
                    width: 210px;
                    border: 1px solid #fff;
                    text-align: center;
                    border-radius: 4px;
                    font-size: 14px;
                    overflow: hidden;
                    input {
                        outline: none;
                        background: none;
                        border: none;
                    }
                    button {
                        height: 32px;
                        width: 37px;
                        border: none;
                        position: relative;
                        right: -16px;
                        outline: none;
                        background: #fff;
                        span {
                            font-size: 19px;
                            font-weight: bold;
                            color: #6f6b6b;
                        }
                    }
                }
                .top-main-nav-collection {
                    width: 110px;
                    background-color: #4fa28d;
                    text-align: center;
                    border-radius: 4px;
                    font-size: 14px;
                }
                .top-nav-guide {
                    width: 100px;
                    background-color: #4fa28d;
                    text-align: center;
                    border-radius: 4px;
                }
                .topnav-btn-group {
                    font-size: 16px;
                    a {
                        background-color: #4fa28d;
                        color: #fff;
                        border-radius: 4px;
                        margin-left: 30px;
                        font-size: 14px;
                        text-align: center;
                        padding: 5px 11px;
                    }
                    .showonline {
                        padding: 0 10px;
                        float: left;
                        position: relative;
                        span {
                            display: inline-block;
                            float: left;
                            padding: 0 3px;
                            border-radius: 5px;
                        }
                        span:hover {
                            box-shadow: 3px 1px 10px 0 #5f5a5a;
                        }
                        .arrow {
                            width: 30px;
                            height: 30px;
                            line-height: 32px;
                        }
                        .userdeitllist {
                            display: inline-block;
                            width: 100px;
                            float: left;
                            position: absolute;
                            left: 60px;
                            top: 32px;
                            background: #58b59d;
                            z-index: 1;
                            border-radius: 5px;
                            box-shadow: 1px -1px 7px -1px #5f5a5a;
                            li {
                                overflow: inherit;
                                margin: 0;
                                width: 100px;
                            }
                            li:hover {
                                background: #93c5b8;
                            }

                        }
                        .username {
                            height: 30px;
                            width: 80px;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
    .topnav-fix-nav-logo {
        background-color: #2c2c2c;
        height: 80px;
        margin: 0 auto;
        .nav-logo {
            width: 184px;
            height: 80px;
            line-height: 80px;
            margin: 0 auto;
            background: url("/static/logo.png") no-repeat 0 5px;
            cursor: pointer;
        }
    }
}
</style>
