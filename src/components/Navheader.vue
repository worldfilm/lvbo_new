<!--头部-->
<template>
<div class="header">
  <nav class="xingyu-topnav">
    <div class="v-container">
      <div class="topnav-mainnav">
        <div class="mainnav-nav-div">
          <ul>
            <li><a>VIP</a></li>
            <li><a>上传</a></li>
            <li><a target="_blank">領紅包</a></li>
            <li><a class="main-nav-tag">标签</a></li>
          </ul>
        </div>
      </div>
      <ul class="topnav-mainnav-right">
        <li class="xingyu-search">
          <input type="text" class="form-control" name="title" placeholder="">
          <button type="button" name="button"><span class="el-icon-search"></span></button>
        </li>
        <li class="top-main-nav-collection">
          <i class="el-icon-star-on"></i> <span>收藏书签</span>
        </li>

        <li class="top-nav-guide">
          <a target="_blank">地址发布页</a>
        </li>
        <li class="xingyu-topnav-btn-group">
          <a href="/login" name="btn-login" class="xingyu-btn-login">登录</a>
          <a href="/register" name="btn-register" class="xingyu-btn-register">注册</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="topnav-fix-nav-logo">
    <div class="nav-logo">

    </div>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  name: 'Navheader',
  components: {},
  data() {
    return {
      title: '首页',
      Showlogin: false,
      ShowRegister: false,
    }
  },
  methods: {
    home() {
      this.$router.push({
        path: '/Home'
      })
    },
    movies() {
      this.$router.push({
        path: '/videoList'
      })
    },
    vipag() {
      this.$router.push({
        path: '/Vip'
      })
    },
    login() {
      Hub.$emit('change1', 'true');
      this.Showlogin = true
    },
    register() {
      Hub.$emit('change2', 'true');
      this.ShowRegister = true
    }
  },
  props: [],
  created() {
    Hub.$on('change1', (data) => {
      this.title = data
    });
    Hub.$on('change2', (data) => {
      this.title = data
    });
  }
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
                    overflow: hidden;
                }
                .xingyu-search {
                    width: 210px;
                    border: 1px solid #fff;
                    text-align: center;
                    border-radius: 4px;
                    font-size: 14px;
                    display: inline-block;
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
            }
            .top-main-nav-collection {
                width: 110px;
                background-color: #4fa28d;
                text-align: center;
                border-radius: 4px;
                margin: 0 30px;
                font-size: 14px;
                display: inline-block;
            }
            .top-nav-guide {
                width: 100px;
                background-color: #4fa28d;
                text-align: center;
                border-radius: 4px;
            }
            .xingyu-topnav-btn-group {
                width: 170px;
                display: table;
                padding-top: 13px;
                a {
                    background-color: #4fa28d;
                    color: #fff;
                    border-radius: 4px;
                    margin-left: 30px;
                    font-size: 14px;
                    text-align: center;
                    padding: 5px 11px;
                }
            }
        }
    }
    .topnav-fix-nav-logo{background-color: #2c2c2c;
      height:80px;
     margin: 0 auto;
     .nav-logo{
       width: 184px;
 height: 70px;
 margin: 0 auto;
 background: url(/static/logo.png)no-repeat 0px 4px;

     }
    }
}
</style>
