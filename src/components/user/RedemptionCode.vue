<template>
<div class="RedemptionCode">
  <div class="myvideo-title">
    <span> 兑换码</span>
  </div>
  <div class="myvideo-videolist-box">
    <div class="myvideo-nothing" v-show='ShowNothing'>
      <span class="fas fa-exclamation-circle"></span> 暂无记录,去
      <a href="/Home">首页</a> 观看视频
    </div>
    <div class="myvideo-nothing" v-show='Showlist'>
      <ul>
        <li v-for="item in list">
          <!-- <span>兑换记录id:</span><span v-text="item"> -->
          <!-- </span><span>兑换星票数量:</span><span v-text='item.points'>
          <span>兑换金额:</span><span v-text='item.money'>
          <span>兑换类型(1星钻 2RMB):</span><span v-text='item.type'>
          <span>0申请中 7审核失败 8已完成:</span><span v-text='item.status'>
          <span>兑换时间:</span><span v-text='item.created_at'> -->
         </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
import Hub from "@/components/Hub";
export default {
  data() {
    return {
      Showlist: false,
      ShowNothing: true,
      list: [
        {
          id: 20,
          user_id: 1625,
          outtradeno: "EX2018011911261768141446",
          points: 166.67,
          money: 100,
          type: 2,
          status: 7,
          admin_id: null,
          remark: null,
          created_at: "2018-01-22 07:08:29",
          updated_at: "2018-01-22 07:08:35"
        },
        {
          id: 19,
          user_id: 1625,
          outtradeno: "EX2018011603495882875401",
          points: 166.67,
          money: 100,
          type: 2,
          status: 7,
          admin_id: null,
          remark: null,
          created_at: "2018-01-22 07:08:34",
          updated_at: "2018-01-22 07:08:40"
        }
      ]
    };
  },
  methods: {},
  components: {},
  created() {
    this.$http.get("/api/user/getExchanges").then(data => {
      if (data.status == 0) {
        this.Showlist = true;
        this.ShowNothing = false;
        console.log(data);
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.RedemptionCode {
  width: 900px;
  display: inline-block;
  height: auto;
  min-height: 600px;
  .myvideo-title {
    width: 900px;
    height: 40px;
    background-color: #58b59d;
    padding-left: 20px;
    font-size: 18px;
    color: #fff;
    line-height: 2.4;
    text-align: left;
  }
  .myvideo-upload {
    width: 900px;
    height: 88px;
    border-bottom: 1px solid #ddd;
    .myvideo-upload-desc {
      height: 48px;
      width: 280px;
      margin: auto;
      position: relative;
      a {
        background-position: 0 48px;
        position: absolute;
        height: 48px;
        line-height: 48px;
        color: #fff;
        width: 280px;
        top: 20px;
        left: 0;
        background: #58b59d;
        border-radius: 10px;
        i {
          font-size: 23px;
          padding: 10px;
          line-height: 25px;
        }
      }
    }
  }
  .myvideo-videolist-box {
    margin-top: 20px;
    width: 915px;
    .myvideo-nothing {
      text-align: center;
      line-height: 155px;
      height: 155px;
      font-size: 18px;
      color: #b5b5b5;
      span {
        margin-right: 5px;
      }
      a {
        color: #58b59d;
        cursor: pointer;
      }
    }
  }
}
</style>
