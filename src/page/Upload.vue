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
      <label class='sendingtext' v-html='sendingtext'></label>
      <span @click='tageclosed' class="tageclosed"></span>
    </p>
    <p>
      <span class="title">是否匿名</span>
      <label class="title" for="vyes">是</label>
      <span class="radio" type="radio" id='vyes' name="paytype"></span>
      <label class="title" for="vno">否</label>
      <span class="radio" type="radio" id='vno' name="paytype"></span>
    </p>
    <!-- <p>
      <label class="title">服务条款</label>
      <input type="checkbox" id='check'>
      <label class="title" for="check">我已同意服务条款</label>
    </p> -->
    <p class="choese">
      <el-upload class="upload-demo" ref="upload" :on-success='success' :action='uploadUrl' :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary" @click='addfile'>选取文件</el-button>
        <el-button style="margin-left: 10px;"  size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">感谢您的每个视频，视频的发布和转换需要一点时间来处理，此过程需要24-48小时， 具体的时间取决与视频容量，格式，服务器负载等，发布完成后，会及时推送信息。</div>
      </el-upload>
    </p>
    <!-- <p class="infotext"></p> -->
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
      tags: [],
      videoUrl: null,
      uploadUrl: 'http://192.168.0.106/video_web/public/api/video/upload?api_token=',
      sendingtext: null,
      titletex: null,
      textareatex: null,
      changedisable: false,
      api_token: sessionStorage.getItem('TOKEN_KEY'),
      filename: null,
      id: 'xx',
      fileList: [{
        name: '',
        url: ''
      }]
    }
  },
  methods: {
    success(response){
      this.videoUrl=response.data.video_url
    },
    maskerc() {
      Hub.$emit('ShowMask', true);
    },
    // 添加文件
    addfile() {
      // console.log('addfile')
      console.log(this.$refs.upload)
      // this.$refs.upload.autoUpload=true
    },
    //上传到服务器
    submitUpload() {
        // console.log(this.$refs.upload.uploadFiles.response.data.video_url)
        // console.log(this.$refs.upload.uploadFiles[0])
        let name = this.$refs.upload.uploadFiles[0]
        if (name!=undefined) {
          // this.videoUrl = this.$refs.upload.uploadFiles[0].response.data.video_url
          let obj=this.$refs.upload.uploadFiles[0].response
          // console.log(obj.data.video_url)

        }
        this.$refs.upload.submit();
        // this.$refs.upload.onSuccess();
    },
    // 确认上传
    surebtn() {
      let api_token = sessionStorage.getItem('TOKEN_KEY')
      console.log(this.textareatex)
      console.log(this.titletex)
      //
      // if (this.$refs.upload.uploadFiles[1]) {
      //
      //   this.videoUrl = this.$refs.upload.uploadFiles[1].response.data.video_url
      //   console.log(this.$refs.upload.uploadFiles[1].response.message)
      // }
      network('/api/video/addMyVideo', {
        api_token: api_token,
        title: this.titletex,
        description: this.textareatex,
        tags: this.tags,
        is_anonymous: 1,
        video_url: this.videoUrl,
      }, data => {
        if (data.status == 0) {}
      })
    },
    tageclosed() {
      this.sendingtext = null
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
  },
  mounted() {
   this.$refs.upload.clearFiles()
 },
  components: {},
  created() {
    console.log()
    // this.$refs.upload.clearFiles()
    let api_token = sessionStorage.getItem('TOKEN_KEY')
    this.uploadUrl = 'http://192.168.0.106/video_web/public/api/video/upload?api_token=' + api_token
    // this.$refs.upload.name='video_file'
    let username = sessionStorage.getItem('username')
    if (!username) {
      this.$router.push({
        path: '/Logoin'
      })
    }
    let arr = ''
    Hub.$on('sendingnamee', (data, id) => {
      this.tags.push(id)

      arr += '<span style="padding:5px 10px;background: #58b59d;border-radius: 5px;margin: 0 5px;color:#fff;">' + data + '</span>'
      this.sendingtext = arr
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
                padding: 5px;
            }
        }
        .radio {
            display: inline-block;
            width: 20px;
            height: 20px;
            line-height: 20px;
        }
        .surep {
            height: 80px;
            font-size: 16px;
            line-height: 80px;
            text-align: center;
            border-top: 1px dashed #ada0a0;
            margin-top: 20px;
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
            height: 100%;
            line-height: 100%;
            .sendingtext {
                height: 27px;
                line-height: 26px;
                display: inline-block;
                padding-left: 20px;
                font-size: 16px;
                .el-upload__tip {
                    }
            }
            .tageclosed {}

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
