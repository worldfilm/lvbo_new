<!-- 分页 -->
<template>
  <div class="Pagination">
    <div class="content">
      <span @click="goFirst">首页</span>
      <button @click="prev" :disabled="preDisabled" :class="{disabled: preDisabled}">
        <i class="iconfont icon-zuo"></i>
      </button>
      <ul>
        <li v-for="(n, index) in numberList" :key="index" :class="{active: n-0 === curNum}" @click="goPage(n)">{{n}}</li>
      </ul>
      <button @click="next" :disabled="nextDisabled" :class="{disabled: nextDisabled}">
        <i class="iconfont icon-you"></i>
      </button>
      <span @click="goLast">尾页</span>
      前往 <input type="text" v-model="toNum" @blur="curNum = toNum - 0" class="num-box"> 页
  </div>
    </div>
</template>
<script>
export default {
  props: {
    // 当前页码
    currentNumber: {
      type: [Number, String],
      default: 1
    },
    // 每页显示条数
    perPageNumber: {
      type: [Number, String],
      default: 10
    },
    // 数据总条数
    totalPageNumber: {
      type: [Number, String],
      default: 10
    }
  },
  data() {
    return {
      curNum: 1,
      toNum: 1
    };
  },
  computed: {
    // 计算总页码数
    totalPages() {
      let total = this.totalPageNumber - 0;
      let per = this.perPageNumber - 0;
      let result = Math.ceil(total / per);
      return result < 1 ? 1 : result;
    },
    // 上一页按钮是否禁用
    preDisabled() {
      return this.curNum === 1;
    },
    // 下一页按钮是否禁用
    nextDisabled() {
      return this.curNum === this.totalPages;
    },
    // 分页按钮列表
    numberList() {
      if (this.totalPages <= 5) {
        let arr = [];
        for (let i = 0; i < this.totalPages; i++) {
          arr[i] = i + 1;
        }
        return arr;
      }
      if (this.curNum > 3 && this.curNum < this.totalPages - 2) {
        return [
          this.curNum - 2,
          this.curNum - 1,
          this.curNum,
          this.curNum + 1,
          this.curNum + 2
        ];
      } else if (this.curNum > this.totalPages - 3) {
        return [
          this.totalPages - 4,
          this.totalPages - 3,
          this.totalPages - 2,
          this.totalPages - 1,
          this.totalPages
        ];
      } else {
        return [1, 2, 3, 4, 5];
      }
    }
  },
  watch: {
    curNum(newVal) {
      this.$parent.curPage = newVal;
    },
    totalPageNumber(newVal){
      this.curNum = 1
    }
  },
  methods: {
    // 点击页码数
    goPage(n) {
      this.curNum = n;
    },
    // 上一页
    prev() {
      this.curNum--;
    },
    // 下一页
    next() {
      this.curNum++;
    },
    // 跳转至第一页
    goFirst() {
      if (this.curNum === 1) return;
      this.curNum = 1;
    },
    // 跳转至最后一页
    goLast() {
      if (this.curNum === this.totalPages) return;
      this.curNum = this.totalPages;
    }
  }
};
</script>
<style lang="scss" scoped>
.Pagination {
  margin: 0 auto;
  text-align: center;
  height: 100px;
  .content {
    margin: 0 auto;
    height: 40px;
    button,
    span {
      display: inline-block;
      width: 50px;
      line-height: 36px;
      background-color: #aaa;
      margin: 3px;
      color: #fff;
      cursor: pointer;
    }
    button:hover,
    span:hover {
      background-color: #58b59d;
    }
    .disabled {
      &:hover {
        background-color: #aaa;
      }
      cursor: no-drop;
    }
    ul {
      display: inline-block;
      max-width: 230px;
      li {
        display: inline-block;
        width: 40px;
        line-height: 36px;
        background-color: #aaa;
        color: #fff;
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
    .num-box {
      width: 40px;
      height: 35px;
      border: 1px solid #58b59d;
      text-align: center;
      border-radius: 4px;
      font-size: 14px;
    }
  }
}
</style>
