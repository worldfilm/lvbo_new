<!-- 分页 -->
<template>
<div class="Pagination">
  <div class="content">
    <span @click="goFirst">首页</span>
    <button @click="prev" :disabled="preDisabled" :class="{disabled: preDisabled}">
      <i class="fas fa-caret-left"></i>
    </button>
    <ul>
      <li v-for="(n, index) in totalPages" :key="index" :class="{active: n-0 === curNum}" @click="goPage(n)">{{n}}</li>
    </ul>
    <button @click="next" :disabled="nextDisabled" :class="{disabled: nextDisabled}">
      <i class="fas fa-caret-right"></i>
    </button>
    <span @click="goLast">尾页</span>
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
    perPagesNumber: {
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
      curNum: 1
    };
  },
  computed: {
    // 计算总页码数
    totalPages() {
      let total = this.totalPageNumber - 0
      let per = this.perPagesNumber - 0
      let result = Math.ceil(total / per)
      return result < 1 ? 1 : result
    },
    // 上一页按钮是否禁用
    preDisabled() {
      return this.curNum === 1;
    },
    // 下一页按钮是否禁用
    nextDisabled() {
      return this.curNum === this.totalPages;
    }
  },
  methods: {
    // 点击页码数
    goPage(index) {
      this.curNum = index;
    },
    // 跳转至第一页
    goFirst() {
      this.curNum = 1;
    },
    // 上一页
    prev() {
      this.curNum--;
    },
    // 下一页
    next() {
      this.curNum++;
    },
    // 跳转至最后一页
    goLast() {
      this.curNum = this.totalPages;
    }
  }
};
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
    button,
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
      float: left;
      max-width: 230px;
      overflow: hidden;
      height: 40px;
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
