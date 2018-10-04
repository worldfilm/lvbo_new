
<template>
<div class="maskernav">
  <div class="container">
    <p class="title"><span>标签</span> <i class="close iconfont icon-guanbi" @click='closed'></i></p>
    <div class="navlist" v-for='(item, index) in navlist' :key="index">
      <p class="navtitle" v-text='item.title'></p>
      <ul>
        <li v-for='(itex, index) in item.childs' :key="index" v-text='itex.title' @click='sendname(itex.title,itex.id)'></li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
      navlist: [],
    }
  },
  methods: {
    closed() {
      this.$emit('closed');
    },
    sendname(name,id){
      this.$emit('selected', name,id)
      Hub.$emit('selected', name,id)
    },
    getlist(){
      this.$http.get('/api/tag/list').then(data => {
        if (data.status == 0) {
          this.navlist=data.data.list
        }
      })
    }
  },
  components: {},
  created(){
    this.getlist()
  }
}
</script>
 <style lang="scss" scoped>
.maskernav {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index:15;
    overflow: auto;
    .container {
      width: 780px;
      margin: 100px auto;
      background-color: #fff;
      position: relative;overflow: hidden;
      .title{
        height: 40px;
        line-height: 40px;
        color: #fff;
        background-color: #58b59d;
        font-size: 16px;
        padding-left: 15px;
        text-align: left;
        span{
              float: left;
        }
      }
      .close{
        height: 40px;
        float: right;
        width: 40px;
        line-height: 40px;
        display: inline-block;
        text-align: center;
            cursor: pointer;
      }
      .navlist{
        height: 150px;
        float: left;
        padding-left: 28px;
        padding-top: 16px;
        .navtitle{
            color: #333;
            font-weight: 700;
            margin-bottom: 10px;
            font-size: 18px;
            text-align: left;
        }
        ul{
           font-size: 14px;
           color: #666;
           width: 230px;
           text-align: left;
          li{
            font-size: 14px;
            display: inline-block;
            width: 76px;
            height: 25px;
            line-height: 25px;
                cursor: pointer;
          }
          li:hover{
            color: #58b59d;
          }
        }
      }
    }
}
</style>
