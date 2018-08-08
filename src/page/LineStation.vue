<template>
<div class="LineStation">
  <div class="content">
    <p class="title">
      <i class=""></i><span>大陆用户最新地址</span>
    </p>
    <p>
      <ul>
        <li>地址01</li>
        <li>地址02</li>
        <li>地址03</li>
        <li>地址04</li>
        <li>地址05</li>
        <li>地址06</li>
      </ul>
    </p>
    <p class="title">
      <i class=""></i>
      <span>海外用户永久地址</span>
    </p>
    <p>
      <span>xxxx</span><span>xxxxxxx</span><span>国内用户翻墙可访问</span>
    </p>
  </div>

  <p class="info">
    <span>也可以发任意内容邮件到v2dizhi@gmail.com,获取最新地址</span>
  </p>

</div>
</template>
<script>
import Hub from '@/components/Hub';
import {
  network
} from '@/config/config';
export default {
  data() {
    return {}
  },
  methods: {

  },
  components: {}
}
</script>

<style lang="scss" scoped>
.LineStation {
    width: 1200px;
    margin: 0 auto;
    .content {
        width: 700px;
        margin: 40px auto;
        background: #fff;
        text-align: left;
        padding:20px 40px;
        p {
            height: 100px;
            line-height: 100px;
            ul {
                li {
                    display: inline-block;
                    width: 100px;
                    text-align: center;
                    cursor: pointer;
                }
            }
            span{
                  cursor: pointer;
            }
        }

        .title {
            font-size: 17px;
            font-weight: bold;
            color: #e89659;
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid #e89659;
        }
    }
    .info {
        background: #f7f7f8;
        text-align: center;
        height: 50px;
        line-height: 50px;
    }
}
</style>
