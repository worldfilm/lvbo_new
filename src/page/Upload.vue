<template>
<div class="Upload">
  <p class="titlee"><span>上传视频</span> </p>
  <div class="content">
    <p class="info"><i class="iconfont icon-ziyuan"></i><span>点击"上传"，既表示您同意服务条款，并且您愿意提供任何信息的要求。</span></p>
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
      <label class='sendingtext'>
        <el-tag
          :key="tag"
          v-for="(tag, $index) in tagsName"
          :closable="true"
          :disable-transitions="true"
          @close="tageclosed($index)"
          type="info"
          size="medium"
          color="#58b59d"
          >
          {{tag}}
        </el-tag>
      </label>
    </p>
    <p>
      <span class="title">是否匿名</span>
      <el-switch v-model="isAnonymous" active-color="#58b59d"></el-switch>
    </p>
    <p>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item>
          <el-checkbox label="我已同意服务条款" name="type" v-model="checkedu"></el-checkbox>
        </el-form-item>
      </el-form>
    </p>
    <p class="choese">
      <el-upload class="upload-demo" ref="upload" :on-change='onchange' :on-success='success' :action='uploadUrl' :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary" @click='addfile'>选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload" :disabled='filedisable' :class="fileupload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">感谢您的每个视频，视频的发布和转换需要一点时间来处理，此过程需要24-48小时， 具体的时间取决与视频容量，格式，服务器负载等，发布完成后，会及时推送信息。</div>
      </el-upload>
    </p>
    <!-- <p class="infotext"></p> -->
    <p class="surep">
      <button type="button" name="button" :disabled='changedisable' :class="sureupload" @click='surebtn'>确认上传</button>
    </p>
  </div>
  <AlertMsg v-show='ShowUmsg'/>
  <masker-nav @selected="selectMark" @closed="closeMask" v-show="showMask"></masker-nav>
</div>
</template>
<script>
import Hub from "@/components/Hub";
import AlertMsg from "@/components/Alert/AlertMsg";
import MaskerNav from "@/components/MaskerNav";
import From from "@/components/MaskerNav";

export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      checkedu:true,
      filedisable:false,
      ShowUmsg: false,
      showMask: false,
      tags: [],
      tagsName: [],
      videoUrl: null,
      successUpLoadVideo:false,
      uploadUrl:null,//上传链接地址
      sendingtext: null,
      titletex: null,
      textareatex: null,
      isText:false,
      isUpload:false,
      isTextare:false,
      isTags:false,
      changedisable: true,
      sureupload:'dissureupload',
      fileupload:'filesureupload',
      api_token: sessionStorage.getItem("TOKEN_KEY"),
      filename: null,
      id: "xx",
      fileList: [
        {
          name: "",
          url: ""
        }
      ],
      isAnonymous: false,
      imgurl:null,
    };
  },
  methods: {
    onSubmit() {
        console.log('submit!');
      },
    success(response) {
      if(response.message=="请先登录"){
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("TOKEN_KEY");
        sessionStorage.removeItem("is_set_pay");
        sessionStorage.removeItem("salt");
        sessionStorage.removeItem("imgsrc");
        sessionStorage.removeItem("psw");
        this.$message({
          message: '帐号在其他设备或者不同浏览器登录，请重新登录',
          type: 'success'
        })
        setTimeout(() => {
          this.$router.push({
            path: "/Logoin"
          });
        }, 3000);
      }
      if(response.status==0){
        this.successUpLoadVideo=true
        this.videoUrl = response.data.video_url;
        this.imgurl=response.data.thumb_img_url
      }
    },
    maskerc() {
      this.showMask = true;
    },
    // 添加文件
    addfile() {
      // console.log(this.$refs.upload);
    },
    onchange(file, fileList){
        console.log(file.name);
        let fileReg = /\w+(.flv|.rvmb|.mp4|.avi|.wmv)$/;
        if(fileReg.test(file.name)){
          this.fileupload=''
        }else{
          this.fileupload='filesureupload'
          this.ShowUmsg=true
          Hub.$emit('changMsg', '不支持改格式视频上传');
          this.$refs.upload.clearFiles();
        }
        // console.log(fileList);
    },
    //上传到服务器
    submitUpload() {
      let name = this.$refs.upload.uploadFiles[0];
      if (name != undefined) {
        let obj = this.$refs.upload.uploadFiles[0].response;
      }
      this.$refs.upload.submit();
    },
    // 确认上传
    surebtn() {
      if(this.titletex&&this.textareatex&&this.videoUrl){
        let api_token = sessionStorage.getItem("TOKEN_KEY");
        let params = {
          title: this.titletex,
          description: this.textareatex,
          tags: this.tagsName,
          is_anonymous: Number(this.isAnonymous),
          video_url: this.videoUrl,
          api_token:api_token,
          thumb_img_url:this.imgurl,
        };
        this.$http.post("/api/video/addMyVideo", params).then(data => {
          if (data.status == 0) {
            Hub.$emit("changMsg", "上传成功!");
            this.ShowUmsg = true;
            setTimeout(() => {
              this.ShowUmsg = false;
            }, 1000);
          } else {
            let msg = data.message;
            Hub.$emit("changMsg", msg);
            this.ShowUmsg = true;
            setTimeout(() => {
              this.ShowUmsg = false;
            }, 1000);
          }
        });
      }else{
        this.ShowUmsg = true;
        Hub.$emit("changMsg","上传视频信息不完整，请检查");
        setTimeout(() => {
          this.ShowUmsg = false;
        }, 1000);
      }
    },
    tageclosed(index) {
      this.tagsName.splice(index, 1);
      this.tags.splice(index, 1);
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePreview(file) {
      // console.log(file);
    },
    selectMark(name, id) {
      if (this.tags.indexOf(id) > -1) {
        this.showMask = false;
        return;
      }
      this.tags.push(id);
      this.tagsName.push(name);
      this.showMask = false;
    },
    closeMask() {
      this.showMask = false;
    },
    checkInfo(){
      if(this.isText&&this.isTextare&&this.isUpload&&this.isTags&&this.checkedu){
        this.changedisable=false
        this.sureupload='sureupload'
      }else{
        this.changedisable=true
        this.sureupload='dissureupload'
      }
    },
  },
  mounted() {
    this.$refs.upload.clearFiles();
  },
  components: { AlertMsg, MaskerNav },
  created() {
    Hub.$on('ShowUmsg', data => {
      this.ShowUmsg=data
    });
    let api_token = sessionStorage.getItem("TOKEN_KEY");
    this.uploadUrl="http://webvideo.6fg645fsd.com/api/video/upload?api_token="+api_token
    if(!api_token){
      this.$router.push({
        path: "/Logoin"
      });
    }
  },
  watch: {
    titletex: function(curVal,oldVal){
        if(curVal){
          this.isText=true
        }
      this.checkInfo()
    },
    textareatex: function(curVal,oldVal){
        if(curVal){
          this.isTextare=true
        }
        this.checkInfo()
    },
    successUpLoadVideo: function(curVal,oldVal){
        if(curVal){
          this.isUpload=true
        }
        this.checkInfo()
    },
    tags: function(curVal,oldVal){
        if(curVal){
          this.isTags=true
        }
        this.checkInfo()
    },
    checkedu:function(curVal,oldVal){
           this.checkInfo()
    },
  },
};
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
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
      }
      .titletex:focus {
        border-color: #58b59d;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #58b59d;
      }
      .textarea {
        outline: none;
        resize: none;
        height: 70px;
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 0 16px;
        border-radius: 4px;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
        width: 280px;
        margin-top: 10px;
        padding: 15px;
      }
      .textarea:focus {
        border-color: #58b59d;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #58b59d;
      }
      .sureupload {
        width: 200px;
        height: 39px;
        font-size: 16px;
      }
      .dissureupload {
        width: 200px;
        height: 39px;
        font-size: 16px;
        background: #b4b6bb;
        cursor:not-allowed;
      }
      .filesureupload {
        background: #b4b6bb;
        cursor: not-allowed;
        border: 1px #b4b6bb solid;
      }
      span.title {
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
      padding: 6px 12px;
      border-radius: 4px;
      background: #58b59d;
      color: #fff;
      font-size: 12px;
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
      .tageclosed {
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
    .el-tag + .el-tag {
      margin-left: 10px;
    }
    .el-tag {
      color: #fff;
    }
  }
}
</style>
