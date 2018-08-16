<template>
<div class="Pagination">
  <div class="content">
    <span @click="first">首页</span><span @click="prev"><i class="fas fa-caret-left"></i></span>
    <ul>
      <li v-for='item in list' v-text='item' :class="{active:item==num}" @click='jumpag(item)'></li>
    </ul>
    <span @click="next"><i class="fas fa-caret-right"></i></span><span @click="last">尾页</span>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
import  {network} from '@/config/config';
export default {
  data() {
    return {
      list: [1,2,3,4,5],
      num:0,
    }
  },
  methods: {
    sendname(name) {
      // Hub.$emit('sendingname', name);
      // Hub.$emit('closed', false);
    },
    jumpag(index){
      this.num = index;
      this.gopage(this.num+'go')
    },
    first(){
      this.num=1
      this.list[0]=this.num
      this.list[1]=this.num+1
      this.list[2]=this.num+2
      this.list[3]=this.num+3
      this.list[4]=this.num+4
      this.gopage(this.num+'go')
    },
    prev(){
      if(this.num>1){
        this.num=this.num-1
        if(this.num<this.list[0]){
          this.list[0]=this.num-4
          this.list[1]=this.num-3
          this.list[2]=this.num-2
          this.list[3]=this.num-1
          this.list[4]=this.num
        }
          this.gopage(this.num+'go')
      }
    },
    next(){
      this.num=this.num+1
      if(this.num>this.list[4]){
        this.list[0]=this.num
        this.list[1]=this.num+1
        this.list[2]=this.num+2
        this.list[3]=this.num+3
        this.list[4]=this.num+4
      }
      this.gopage(this.num+'go')
    },
    last(){
      this.num = this.list[4]
      this.list[0]=this.list[0]
      this.list[1]=this.list[1]
      this.list[2]=this.list[2]
      this.list[3]=this.list[3]
      this.list[4]=this.list[4]
      this.gopage(this.num+'go')
    },
    gopage(e){
      // console.log(e)
    },
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.Pagination {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    height: 100px;
    float: right;
    .content {
        width: 510px;
        margin: 0 auto;
        height: 40px;
        span {
            display: inline-block;
            width: 50px;
            line-height: 36px;
            background-color: #aaa;
            margin: 3px;
            color: #fff;
            float: left;
            cursor: pointer;
        }
        span:hover {
            background-color: #58b59d;
        }
        ul {
            display: inline-block;
            float: left;
            width: 230px;
            overflow: hidden;height: 40px;
            li {
                display: inline-block;
                width: 40px;
                line-height: 36px;
                background-color: #aaa;
                color: #fff;
                float: left;
                margin: 3px;
                cursor: pointer;
            }
            li:hover {
                background-color: #58b59d;
            }
            .active {
                  background-color: #58b59d;
                  color: #eef1f0;
              }
        }
    }

}
</style>
