<template>
<div class="pay-middle-icons v-container clearfix">
  <div class="bottom-package-title">
    会员特权
  </div>
  <ul>
    <li v-for='item in list'>
      <img :src="item.src">
      <div>
        <p v-text='item.title'></p>
        <span v-text='item.tex'></span>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        title: '无限下载',
        tex: '免费下载,保存到本地',
        src: '../static/v2-pay-download-8da69912e5.png'
      }, {
        title: '极速播放',
        tex: '观看更快,体验更爽',
        src: '../static/v2-pay-quickplay-a4c05f0c95.png',
      }, {
        title: '屏蔽广告',
        tex: '无广告,观看无干扰',
        src: '../static/v2-pay-nogg-a634b3f129.png',
      }, {
        title: '尊贵徽章',
        tex: '尊贵身份,如影随形',
        src: '../static/v2-pay-badge-568ce88dfa.png',
      }, {
        title: '多屏共享',
        tex: '移动\PC端会员权益',
        src: '../static/v2-pay-multiscreen-ec02a40023.png',
      }, {
        title: 'AV影院',
        tex: 'AV影院无限观看',
        src: '../static/v2-integral-AV-5be1b9e272.png',
      }]
    }
  },
}
</script>

<style lang="scss" scoped>
.pay-middle-icons {
    .bottom-package-title {
        width: 100%;
        font-size: 22px;
        color: #58b59d;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
        height: 45px;
        line-height: 45px;
        text-align: left;
    }
    ul {
        li {
            width: 23%;
            background-color: #fff;
            padding: 3%;
            margin: 2%;
            display: inline-block;
            border: 1px solid #ddd;
            img {
                width: 58px;
                height: 58px;
                margin-right: 18px;
            }
            div {
                color: #666;
                display: inline-block;
                text-align: left;
                font-family: 微软雅黑;
                p {
                    font-size: 22px;
                    margin-bottom: 5px;
                }
                span {
                    font-size: 84%;
                }
            }
        }
    }
}
</style>
