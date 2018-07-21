<!--头部-->
<template>
<div class='header'>
  <div class="header-top">
    <div class="container">
      <a class="logo">
					   <img src='../../static/logo.png' >
					</a>
      <div class="searchForm">
        <i class="fa fa-search"></i>
        <form action="">
          <input type="text" class="searchIpt" placeholder="请输入您喜欢的大片~">
          <input type="submit" class='submit' value="搜索">
        </form>
      </div>
      <ul class="btn-group">
        <li><a class="btn signInBtn signInCre" @click="login">登陆</a></li>
        <li><a class="btn signUpBtn signUpCre" @click="register">注册</a></li>
      </ul>
    </div>
  </div>
  <div class="header-btm">
    <div class="container">
      <ul class="navbar">
        <li @click='home' class="nav-item active"><a>网站首页</a></li>
        <li @click='movies' class="nav-item"><a>国产自拍</a></li>
        <li @click='movies' class="nav-item"><a>黄金正片</a></li>
        <li @click='movies' class="nav-item"><a>日本无码</a></li>
        <li @click='movies' class="nav-item"><a>欧美大片</a></li>
        <li @click='movies' class="nav-item"><a>动漫动画</a></li>
        <li @click='vipag' class="nav-item"><a>获取VIP特权</a></li>
      </ul>
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
      Showlogin:false,
      ShowRegister:false,
    }
  },
  methods: {
    home() {
    this.$router.push({path:'/Home'})
    },
    movies() {
    	this.$router.push({path:'/videoList'})
    },
    vipag() {
    this.$router.push({path:'/Vip'})
    },
    login(){
    	Hub.$emit('change1','true');
    	this.Showlogin=true
    },
    register(){
    	Hub.$emit('change2','true');
    	this.ShowRegister=true
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
<style lang="scss" scoped>
.header {
    background: #fff;
    .header-top {
        padding: 5px 0;
        height: 80px;
        border-bottom: 1px solid #d6e5ef;
        .container {
            width: 1200px;
            margin: 0 auto;
            .logo {
                float: left;
                padding-left: 20px;
                img {
                    width: 65px;
                    height: 65px;
                }
            }
            .searchForm {
                float: left;
                position: relative;
                width: 499px;
                height: 42px;
                margin-left: 255px;
                margin-top: 11px;
                background: #fdfdfe;
                border: 1px solid #008def;
                border-radius: 42px;
                form {
                    margin-left: 35px;
                    .searchIpt {
                        border: none;
                        width: 379px;
                        height: 40px;
                        line-height: 40px;
                    }
                    .submit {
                        position: relative;
                        left: 1px;
                        width: 80px;
                        height: 42px;
                        line-height: 42px;
                        border-radius: 0 42px 42px 0;
                        border: none;
                        background: #008def;
                        color: #fff;
                        letter-spacing: 2px;
                        font-size: 15px;
                        cursor: pointer;
                    }
                }
            }
            .btn-group {
                padding-right: 20px;
                padding-left: 20px;
                float: right;
                display:block;
                li {
                    display: inline-block;
                    padding-top: 18px;
                    margin-left: 10px;
                        .signInBtn {
                            background: #008def;
                            position: relative;
                            display: block;
                            width: 80px;
                            height: 34px;
                            line-height: 34px;
                            text-align: center;
                            font-size: 14px;
                            color: #fff;
                            letter-spacing: 3px;
                            border-radius: 34px;
                            z-index: 1;
                            transition: 0.5s;
                        }
                        .signUpBtn {
                            background: #f1592a;
                            position: relative;
                            display: block;
                            width: 80px;
                            height: 34px;
                            line-height: 34px;
                            text-align: center;
                            font-size: 14px;
                            color: #fff;
                            letter-spacing: 3px;
                            border-radius: 34px;
                            z-index: 1;
                            transition: 0.5s;
                        }
                }
            }
        }
    }
    .header-btm {
        box-shadow: 0 3px 10px #ddd;
        .container {
            width: 1200px;
            margin: 0 auto;
            .navbar {
                padding-bottom: 1px;
                .nav-item {
                    display: inline-block;
                    padding: 18px 18px 15px;
                    margin-right: 18px;
                    transition: 0.3s;
                    border-bottom: 2px solid #fff;
                    cursor: pointer;
                    transition: 0.3s;
                    a {
                        font-size: 15px;
                        color: #818486;
                        transition: 0.3s;
                    }
                }
            }
        }
    }

}
</style>
