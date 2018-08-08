<template>
<div class="Upload">
  <p class="titlee"><span>上传视频</span> </p>
  <div class="content">
    <p class="info"><i class="fas fa-cloud-upload-alt"></i><span>点击"上传"，既表示您同意服务条款，并且您愿意提供任何信息的要求。</span></p>
    <p>
      <span class="title">标题</span>
      <input maxlength="78" type="text" placeholder="视频标题" class="titletex" v-model='titletex'>
    </p>
    <p class="textareap">
      <span class="title">描述</span>
      <textarea class='textarea' placeholder="描述最多可以输入150个字符" maxlength="150" v-model='textareatex'></textarea>
    </p>
    <p class="choese">
      <label class="title">内容标签</label>
      <button type="button" name="button" @click='maskerc'>选择标签</button>
      <label class='sendingtext'  v-html='sendingtext'></label>
      <span @click='tageclosed' class="tageclosed"></span>
    </p>
    <p>
      <span class="title">是否匿名</span>
      <label class="title" for="vyes">是</label>
      <span class="radio" type="radio" id='vyes' name="paytype"></span>
      <label class="title" for="vno">否</label>
      <span class="radio" type="radio" id='vno' name="paytype"></span>
    </p>
    <p>
      <label class="title">服务条款</label>
      <input type="checkbox" id='check'>
      <label class="title" for="check">我已同意服务条款</label>
    </p>
    <p class="choese">
      <span class="title">上传</span>
      <button type="button" name="button" @click='addfile'>添加文件</button>
      <input type="text" placeholder='请上传文件' class="titletex" v-model='filename'>
      <span>上传大小:</span><span>/</span><span></span>
      <span>上传速度:</span><span>/</span>
    </p>
    <p class="infotext">
      <span>感谢您的每个视频，视频的发布和转换需要一点时间来处理，此过程需要24-48小时， 具体的时间取决与视频容量，格式，服务器负载等，发布完成后，会及时推送信息。</span>
    </p>
    <p class="surep">
      <button type="button" name="button" :disabled='changedisable' class="sureupload" @click='surebtn'>确认上传</button>
    </p>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
import {
  network
} from '@/config/config';
export default {
  data() {
    return {
      sendingtext:null,
      titletex: null,
      textareatex: null,
      changedisable: false,
      // changedisable:true,
      filename: null,
    }
  },
  methods: {
    maskerc() {
      Hub.$emit('ShowMask', true);
    },
    addfile() {
      console.log('addfile')
    },
    surebtn() {
      console.log(this.textareatex)
      console.log(this.titletex)
    },
    tageclosed(){
      this.sendingtext=null
    },
  },
  components: {},
  created() {
    let arr=''
    Hub.$on('sendingname', (data) => {
      arr+='<span style="padding:5px 10px;background: #58b59d;border-radius: 5px;margin: 0 5px;color:#fff;">'+data+'</span>'
      this.sendingtext=arr
    });
  }
}
</script>

<style lang="scss" scoped>
.Upload {
    width: 1200px;
    margin: 20px auto;
    border: 1px solid #ddd;
    margin-bottom: 40px;
    background-color: #fff;
    text-align: left;
    .titlee {
        min-height: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        background-color: #58b59d;
        border-bottom: none;
        color: #fff;
        span {
            padding-left: 20px;
        }
    }
    .content {
        width: 800px;
        margin: 0 auto;
        padding: 50px;
        p {
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            .titletex {
                width: 60%;
                height: 30px;
                background-color: #fff;
                border: 1px solid #ccc;
                padding: 0 16px;
                border-radius: 4px;
                box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
                transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
            }
            .titletex:focus {
                border-color: #58b59d;
                box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 6px #58b59d;
            }
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
            .sureupload {
                width: 200px;
                height: 39px;
                font-size: 16px;
            }

            span {
                font-size: 12px;
                padding:5px;
            }
        }
        .radio {
            display: inline-block;
            width: 20px;
            height: 20px;
            line-height: 20px;
        }
        .surep {
            width: 350px;
            height: 80px;
            font-size: 16px;
            line-height: 80px;
            margin: 0 auto;
            text-align: center;
            border-top: 1px dashed #ada0a0;
        }
        button {
            padding: 6px;
            border-radius: 4px;
            background: #58b59d;
            color: #fff;
        }
        .infotext {
            height: 80px;
            font-size: 16px;
            line-height: 25px;
        }
        .choese {
            height: 60px;
            line-height: 60px;
            .sendingtext {
                height: 27px;
                line-height: 26px;
                display: inline-block;
                padding-left: 20px;
                font-size: 16px;

            }
            .tageclosed{

            }

        }
        .textareap {
            height: 120px;
            span {
                float: left;
            }
        }
        .title {
            padding-right: 10px;
        }
        .info {
            font-size: 16px;
            color: #e47c21;
        }
    }
}
</style>
