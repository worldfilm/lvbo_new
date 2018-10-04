<template>
<div class="不用的">
  <ul class="left">
    <li>
      <p><i class="far fa-thumbs-up"></i> 喜欢</p>
      <button type="button" name="button">普通通道</button>
    </li>
    <li>
      <p><i class="far fa-star"></i>收藏</p>
      <button type="button" name="button">高速通道1</button>
    </li>
    <li>
      <p><i class="iconfont icon-ziyuan"></i>下载</p>
      <button type="button" name="button">高速通道2</button>
    </li>
    <li>
      <p><i class="fas fa-share-alt"></i>分享</p>
      <button type="button" name="button">高速通道3</button>
    </li>
  </ul>
  <ul class="right">
    <li><span>22</span>次下載</li>
  </ul>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {}
  },
  methods: {

  },
  mounted() {

  },
  created() {

  },
  components: {}
}
</script>

<style lang="scss" scoped>
.VideoContentMenu {
    width: 68%;
    margin: 5px auto;
    text-align: left;
    float: left;
    height: 100px;
    background: #e6e6e6;
    padding: 5px;
    ul {
        li {
            width: 80px;
            height: 24px;
            line-height: 24px;
            display: inline-block;
            float: left;
            padding: 13px;
            cursor: pointer;
            p {
                height: 40px;
                line-height: 40px;
                i {
                    height: 30px;
                    line-height: 30px;
                    width: 30px;
                    display: inline-block;
                    color: #000;
                    font-size: 20px;
                    text-align: center;
                    padding-left: 8px;
                }
            }
            button {
                border-radius: 3px;
                margin-right: 5px;
                font-size: 13px;
                height: 28px;
                line-height: 28px;
                width: 80px;
                background-color: #666;
                color: #fff;
                cursor: pointer;
            }
            button:hover{
              background-color: #58b59d;
              color: #fff;
            }
        }
        li:hover{
            color: #58b59d;
        }
        li:hover i{
            color: #58b59d;
        }
        li:hover button{
          background-color: #58b59d;
          color: #fff;
        }
    }
    .left {
        float: left;
    }
    .right {
        float: right;
    }
}
</style>
