
<template>
<div class="videonav">
  <ul class="nav">
    <li class="item" v-for='(item,index) in navlist' @click='videonav(item.name,index)' :class="{isactive:index == num}">{{item.name}}</li>
  </ul>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
        num: 0,
      navlist: [{
          name: '最新'
        }, {
          name: '大陆'
        }, {
          name: '无套内射'
        }, {
          name: '口爆'
        },
        {
          name: '人妻'
        }, {
          name: '巨乳'
        }, {
          name: '3p'
        }, {
          name: '肛交'
        }, {
          name: '后入'
        }, {
          name: '欧美'
        }, {
          name: '动漫'
        }
      ],
    }
  },
  methods: {
    videonav(name, index) {
      this.num = index
        Hub.$emit('videonav', name);
    },
  },
  components: {}
}
</script>
 <style lang="scss" scoped>
.videonav{
  margin-bottom: 10px;
  .nav {
      text-align: left;
      .item {
          text-align: center;
          width: 60px;
          height: 30px;
          line-height: 30px;
          border-radius: 5px;
          box-shadow: 0 0 10px #ddd;
          display: inline-block;
          position: relative;
          cursor: pointer;
          font-size: 14px;
          padding: 0 5px;
          margin: 0 3px;
      }
      .item:hover {
          background-color: #58b59d;
          color: #eef1f0;
      }
      .isactive {
          background-color: #58b59d;
          color: #eef1f0;
      }
  }
}
</style>
