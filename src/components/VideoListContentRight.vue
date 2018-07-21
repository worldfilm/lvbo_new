<template>
  <div class='container_right'>
    <div class='hot'>
      <h4 class="videos-title">
					<i class="fa fa-anchor" ></i>
					<span class='title_span'>热门排行</span>
				</h4>
      <ul class="videos-cont">
        <li v-for="item in list" class="item">
          <img class="video-cover" :src="item.src">
          <div>
            <span class="title" v-text='item.title'></span>
            <p class="play-info">
              <span class="pull-left" v-text='item.viewtime'></span>次观看
            </p>
          </div>

        </li>
      </ul>
    </div>

		<div class='hot'>
			<h4 class="videos-title">
					<i class="fa fa-anchor" ></i>
					<span class='title_span'>最新上架</span>
				</h4>
			<ul class="videos-cont">
				<li v-for="item in list" class="item">
					<img class="video-cover" :src="item.src">
					<div>
						<span class="title" v-text='item.title'></span>
						<p class="play-info">
							<span class="pull-left" v-text='item.viewtime'></span>次观看
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
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
  components: {}
}
</script>

<style lang="scss" scoped>
    .container_right {
        width: 293px;
        padding-left: 7px;
        float: right;
        .hot {
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
            }
        }

        .videos-cont {
            .item {
                padding-bottom: 10px;
                border-bottom: 1px dash #ccc;
                overflow: hidden;
                box-shadow: 0 0 3px #ddd;
                img {
                    width: 100px;
                    float: left;
                }
                div {
                    float: right;
                    width: 190px;
                    height: 80px;
                    overflow: hidden;
                    .title {
                        }
                    p {
                        text-align: left;
                        color: #948d8d;
                        font-size: 12px;
                    }
                }

            }
        }
    }
</style>
