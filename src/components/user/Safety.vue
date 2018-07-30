<template>
<div class="safety">
  <div class="center-right-title">帐号安全</div>
  <div class="center-right-content">
    <div>
      <ul>
        <li>
          <p class="up">帐号密码</p>
        </li>
        <li>
          <p class="up">设置一个包含数字和字母，且长度超过6位以上的密码更安全；并建议你定期更换密码。</p>
        </li>
        <li class="right">
          <a>修改</a>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <p class="up">安全邮箱</p>
          <p>已绑定</p>
        </li>
        <li>
          <p class="up">hghg@gh.kjkj</p>
        </li>
        <li class="right">
          <a>修改</a>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <p class="up">支付密码</p>
          <p>未设置</p>
        </li>
        <li></li>
        <li class="right">
          <a>设置支付密码</a>
        </li>
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
      list: [{}, ]
    }
  },
  methods: {

  },
  components: {}
}
</script>

<style lang="scss" scoped>
.safety {
    width: 900px;
    height: auto;
    float: right;
    .center-right-title {
        width: 100%;
        font-size: 20px;
        color: #333;
        border-bottom: 1px solid #ccc;
        padding-bottom: 4px;
        height: 40px;
        line-height: 40px;
        text-align: left;
    }
    .center-right-content {
        padding: 0 20px;
        div {
            height: 100px;
            width: 100%;
            padding: 0 20px;
            font-size: 14px;
            color: #666;
            line-height: 100px;
            border-bottom: 1px solid #ccc;
            li {
                float: left;
                height: 100%;
                display: inline-block;
                position: relative;
                margin-right: 50px;
                text-align: left;
                p {
                    height: 50px;
                    line-height: 50px;
                    width: 100%;
                    float: left;
                }
                .up{
                      line-height: 100px;
                }
            }
            .right{
              float:right;color:#313bca;
            }
        }
    }
}
</style>
