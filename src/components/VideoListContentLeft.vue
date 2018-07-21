<template>
<div class='container_left'>
  <div class='content_1'>
    <h4 class="videos-title">
      <i class="fa fa-anchor" ></i>
      <span class='title_span'>国产自拍</span>
      <a class="more">查看更多&gt;</a>
    </h4>
    <ul class="videos-cont">
      <li v-for="item in list" class="item">
        <div class="videos-info">
          <img class="video-cover" :src="item.src">
          <div class="playContrl">
            <a href=""><i class="fa fa-youtube-play"></i></a>
          </div>
        </div>
        <p class="title" v-text='item.title'></p>
        <p class="play-info">
          <span v-text='item.viewtime'></span>次观看
          <span v-text='item.day'></span><span>天前</span>
        </p>
      </li>
    </ul>
  </div>

  <div class='content_1'>
    <h4 class="videos-title">
      <i class="fa fa-anchor" ></i>
      <span class='title_span'>欧美大片</span>
      <a class="more">查看更多&gt;</a>
    </h4>
    <ul class="videos-cont">
      <li v-for="item in list2" class="item">
        <div class="videos-info">
          <img class="video-cover" :src="item.src">
          <div class="playContrl">
            <a href=""><i class="fa fa-youtube-play"></i></a>
          </div>
        </div>
        <p class="title" v-text='item.title'></p>
        <p class="play-info">
          <span v-text='item.viewtime'></span>次观看
          <span v-text='item.day'></span><span>天前</span>
        </p>
      </li>
    </ul>
  </div>

  <div class='content_1'>
    <h4 class="videos-title">
      <i class="fa fa-anchor" ></i>
      <span class='title_span'>日本无码</span>
      <a class="more">查看更多&gt;</a>
    </h4>
    <ul class="videos-cont">
      <li v-for="item in list2" class="item">
        <div class="videos-info">
          <img class="video-cover" :src="item.src">
          <div class="playContrl">
            <a href=""><i class="fa fa-youtube-play"></i></a>
          </div>
        </div>
        <p class="title" v-text='item.title'></p>
        <p class="play-info">
          <span v-text='item.viewtime'></span>次观看
          <span v-text='item.day'></span><span>天前</span>
        </p>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      title: 'home',
      list2: [{
        viewtime: '12312',
        title: '超絶倫巨乳少女！ 3 突然出来た妹は超ヤリマン女子校に通う女子校生！',
        src: '../static/v-cover-1.jpg',
        day: '1'
      }, {
        viewtime: '12312',
        title: '超絶倫巨乳少女！ 3 突然出来た妹は超ヤリマン女子校に通う女子校生！',
        src: '../static/v-cover-1.jpg',
        day: '1'
      }, {
        viewtime: '12312',
        title: '超絶倫巨乳少女！ 3 突然出来た妹は超ヤリマン女子校に通う女子校生！',
        src: '../static/v-cover-1.jpg',
        day: '1'
      }, ],
      list: [{
        viewtime: '12312',
        title: '超絶倫巨乳少女！ 3 突然出来た妹は超ヤリマン女子校に通う女子校生！',
        src: '../static/v-cover-1.jpg',
        day: '1'
      }, {
        viewtime: '12312',
        title: '超絶倫巨乳少女！ 3 突然出来た妹は超ヤリマン女子校に通う女子校生！',
        src: '../static/v-cover-1.jpg',
        day: '1'
      }, {
        viewtime: '12312',
        title: '超絶倫巨乳少女！ 3 突然出来た妹は超ヤリマン女子校に通う女子校生！',
        src: '../static/v-cover-1.jpg',
        day: '1'
      }, {
        viewtime: '12312',
        title: '超絶倫巨乳少女！ 3 突然出来た妹は超ヤリマン女子校に通う女子校生！',
        src: '../static/v-cover-1.jpg',
        day: '1'
      }, {
        viewtime: '12312',
        title: '超絶倫巨乳少女！ 3 突然出来た妹は超ヤリマン女子校に通う女子校生！',
        src: '../static/v-cover-1.jpg',
        day: '1'
      }, {
        viewtime: '12312',
        title: '超絶倫巨乳少女！ 3 突然出来た妹は超ヤリマン女子校に通う女子校生！',
        src: '../static/v-cover-1.jpg',
        day: '1'
      }]
    }
  },
  name: 'home',
  components: {}
}
</script>

<style lang="scss" scoped>
.container_left {
    width: 900px;
    float: left;
    .videos-title {
        width: 98%;
        margin-bottom: 14px;
        font-size: 17px;
        font-weight: 400;
        height: 30px;
        line-height: 42px;
        padding-left: 9px;
        .title_span {
            float: left;
        }
        .more {
            float: right;
        }
    }
    .item {
        width: 266px;
        margin: 0 7px 14px;
        background: #fff;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 10px #ddd;
        display: inline-block;
        .videos-info {
            position: relative;
            img {
                position: relative;
                width: 266px;
                height: 178px;
            }
            .playContrl {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,.5);
                display: none;
            }

        }
        .title {
            width: 100%;
            height: 20px;
            line-height: 25px;
            margin: 10px 0 5px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .play-info {
            position: absolute;
            display: none;
            left: 0;
            top: 0;
            // width: 100%;
            // height: 100%;
            background: rgba(0, 0, 0, 0.5);
            i {
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -23px;
                margin-top: -23px;
                color: #e4f4ff;
                font-size: 55px;
            }
        }
    }
}
</style>
