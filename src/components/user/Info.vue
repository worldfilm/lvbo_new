<template>
<div class="Info">
  <div class="Info-title">
    <span>我的资料</span>
  </div>
  <div class="Info-box">
    <div class="accton-info">
      <div class="Info-title">
        <span>帐号信息</span>
      </div>
      <ul>
        <li><span class="title">帐号：</span><span v-text='username'></span> </li>
        <li><span class="title">视频：</span><span v-text='video'></span> </li>
        <li><span class="title">自拍：</span><span v-text='selfvideo'></span> </li>
        <li><span class="title">积分：</span><span v-text='score'></span> </li>
        <li><span class="title">称号：</span><span v-text='nickname'></span> </li>
      </ul>
    </div>
    <div class="personal-info">
      <div class="Info-title">
        <span>个人信息</span>
      </div>
      <ul>
        <li>
          <span class="title">帐号：</span>
          <label class="checkbox-inline"><input type="radio" name="sex"  checked=""> 男 </label>
          <label class="checkbox-inline"><input type="radio" name="sex"> 女 </label>
        </li>
      </ul>
    </div>
    <div class="name-info">
      <div class="Info-title">
        <span>个性信息</span>
      </div>
      <ul>
        <li class="li-textarea">
          <span class="title accont">帐号：</span>
          <textarea class='textarea' placeholder="描述最多可以输入150个字符" maxlength="150" v-model='textareatex'></textarea>
        </li>
        <li class="li-button">
          <button type="button" class="infobtn" @click='infobtn'> 确认修改 </button>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
import {  network} from '@/config/config';
export default {
  data() {
    return {
      list: [],
      textareatex: null,
      username:null,
      video:0,
      selfvideo:0,
      score:0,
      nickname:null,
    }
  },
  methods: {
    infobtn() {
      let api_token = sessionStorage.getItem('TOKEN_KEY')
      // network('/api/user', {
      //
      // }, data => {
      //   console.log(data)
      // })
    }
  },
  components: {},
  created() {
    let username = sessionStorage.getItem('username')
    this.username=username
  },
}
</script>

<style lang="scss" scoped>
.Info {
    width: 900px;
    display: inline-block;
    height: auto;
    min-height: 600px;
    .Info-title {
        width: 880px;
        height: 40px;
        background-color: #58b59d;
        padding-left: 20px;
        font-size: 18px;
        color: #FFF;
        line-height: 2.4;
        text-align: left;
    }
    .Info-box {
        padding-top: 20px;
        width: 750px;
        text-align: left;
        padding-left: 150px;
        background: #fff;
        .Info-title {
            width: 730px;
            height: 40px;
            background: none;
            padding-left: 0;
            font-size: 18px;
            color: #58b59d;
            line-height: 2.4;
            text-align: left;
            margin-bottom: 17px;
            border-bottom: 1px dashed #000;
        }
        .accton-info {
            ul {
                padding: 10px;
                li {
                    line-height: 30px;
                    height: 30px;
                    .title {}
                }
            }

        }
        .personal-info {
            ul {
                padding: 10px;
                li {
                    line-height: 30px;
                    height: 30px;
                    .title {}
                    span {}
                    label {
                        input {}
                    }
                }
            }
        }
        .name-info {
            ul {
                padding: 10px;
                li {
                    line-height: 30px;
                    height: 30px;
                    .title {}
                    .textarea {
                        outline: none;
                        resize: none;
                        height: 70px;
                        background-color: #fff;
                        border: 1px solid #ccc;
                        padding: 0 16px;
                        border-radius: 4px;
                        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
                        transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
                        width: 280px;
                        margin-top: 10px;
                        padding: 15px;

                    }
                    .textarea:focus {
                        border-color: #58b59d;
                        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 6px #58b59d;
                    }
                    .accont{
                        position: relative;
                        bottom: 87px;
                    }
                }
                .li-textarea {
                    line-height: 150px;
                    height: 150px;
                }
                .li-button {
                    height: 80px;
                    text-align: center;
                    width: 300px;
                    button {
                        width: 200px;
                        height: 39px;
                        font-size: 16px;
                        padding: 6px;
                        border-radius: 4px;
                        background: #58b59d;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
