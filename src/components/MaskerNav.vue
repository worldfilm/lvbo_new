
<template>
<div class="maskernav">
  <div class="container">
    <p class="title"><span>标签</span> <i class="close fas fa-times" @click='closed'></i></p>
    <div class="navlist" v-for='item in navlist'>
      <p class="navtitle" v-text='item.title'></p>
      <ul>
        <li v-for='(ite,idx) in item.list' v-text='ite'></li>
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
      navlist: [{
          title: '地区',
          list: ['日本', '大陆', '欧美', '非洲', '韩国', '亚太']
        },
        {
          title: '动作',
          list: ['69式', '后入式', '女上位', '打飞机', '深喉', '自慰', '肛交', '口爆', '潮吹', '无套内射', '吹萧', '手淫']
        },
        {
          title: '部位',
          list: ['巨乳', '平胸', '馒头', '黑木耳', '大屁股', '大公鸡', '蝴蝶逼', '巨根']
        },
        {
          title: '癖好',
          list: ['叫床', '3P', 'SM', '毒龙', '换妻', '恋足', '调教', '异装癖', '人妖', '捆绑', '鞭打', '偷窥', '自拍']
        },
        {
          title: '场景',
          list: ['KTV', '酒店', '车震', '公共厕所', '办公室', '客厅', '野外', '游泳池', '楼梯口', '教室']
        },
        {
          title: '角色',
          list: ['护士', '学生', '空姐', '小姐', '警察', '老师', '少妇', '秘书', '女仆', '人妻', '熟女', '新娘', '保姆', '嫩模']
        },
        {
          title: '道具',
          list: ['丝袜', '蕾丝', '假鸡巴', '跳蛋', '自慰棒', '眼罩', '丁字裤', '皮便', '手铐']
        }
      ]
    }
  },
  methods: {
    closed() {
      Hub.$emit('closed', false);
    }
  },
  components: {}
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
    z-index:10;
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
