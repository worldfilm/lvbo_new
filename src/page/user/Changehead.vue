<template>
<div class="Changehead">
  <LeftMenu/>
  <div class="Changehead-c">
    <div class="Info-title">
      <span>我的资料</span>
    </div>
    <div class="Info-box">
      <div class="accton-info">
        <div class="Info-title">
          <span>当前我的头像</span>
        </div>
        <p>如果您还没有设置自己的头像，系统会显示为默认头像，您需要自己上传一张新照片来作为自己的个人头像</p>
        <div class="infophoto">
          <img :src="imgsrc">
        </div>
      </div>
      <div class="personal-info">
        <div class="Info-title">
          <span>设置我的新头像</span>
        </div>
        <p>请选择一个新照片进行上传编辑，投稿箱保存后，您可能需要刷新一下本界面（按F5键），才能查看最新的头像效果</p>
        <ul>
          <li v-for='(item,index) in list' @click='handclick(index,item.id,item.img_url)' :key="index"><span :class="{ 'iconfont icon-selected activeimg':index==numing}"></span><img :src="item.img_url" alt=""></li>
        </ul>
        <p class="surep">
          <button type="button" name="button" class="sureupload" @click='surebtn'>确认修改</button>
        </p>
      </div>
    </div>
    <AlertMsg v-show='ShowOk' />
  </div>
</div>
</template>
<script>
import Hub from "@/components/Hub";
import AlertMsg from "@/components/Alert/AlertMsg";
import LeftMenu from '@/page/user/LeftMenu';
export default {
  data() {
    return {
      list: [],
      ShowOk: false,
      numing: null,
      textareatex: null,
      username: null,
      video: 0,
      selfvideo: 0,
      score: 0,
      nickname: null,
      imgsrc: null,
      choeseId: null,
      imgUrl: null
    };
  },
  methods: {
    // 选择头像
    handclick(index, id, imgUrl) {
      this.numing = index;
      this.choeseId = id;
      this.imgUrl = imgUrl;
    },
    // 从本地存储获取头像地址
    gethead() {
      let imgsrc = sessionStorage.getItem("imgsrc");
      this.imgsrc = imgsrc;
    },
    // 获取头像列表
    getheadlist() {
      let api_token = sessionStorage.getItem("TOKEN_KEY");
      this.$http.get("/api/head/list").then(res => {
        if (res.status === 0) {
          this.list = res.data;
        }
      });
    },
    // 确认修改
    surebtn() {
      let params = {
        avatar: this.imgUrl,
        type: 2
      }
      this.$http.post("/api/user/edit", params).then(res => {
        sessionStorage.setItem("imgsrc", this.imgUrl);
        this.imgsrc = this.imgUrl;
        this.$message({
          message: '头像修改成功!',
          type: 'success'
        })
        Hub.$emit('changeheader', this.imgUrl);
      });
    }
  },
  components: {
    AlertMsg,
    LeftMenu
  },
  created() {
    this.gethead();
    this.getheadlist();
    let username = sessionStorage.getItem("username");
    this.username = username;
    Hub.$on("ShowOk", data => {
      this.ShowOk = data;
    });
  }
};
</script>

<style lang="scss" scoped>
.Changehead {
    width: 1200px;
    margin: 0 auto;
    height: auto;
    margin-top: 20px;
    margin-bottom: 40px;
    .Changehead-c {
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
            color: #fff;
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
            .infophoto {
                img {
                    margin-top: 20px;
                    height: 80px;
                    width: 80px;
                    border-radius: 50%;
                    vertical-align: middle;
                }
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
                button {
                    padding: 6px;
                    border-radius: 4px;
                    background: #58b59d;
                    color: #fff;
                    width: 200px;
                    margin: 20px 20px 20px 0;
                }
                ul {
                    padding: 10px;
                    li {
                        display: inline-block;
                        line-height: 30px;
                        height: 30px;
                        margin-right: 20px;
                        margin-top: 18px;
                        position: relative;
                        img {
                            width: 66px;
                            height: 66px;
                            border-radius: 35px;
                        }
                    }
                    .activeimg {
                        font-size: 23px;
                        color: #58b59d;
                        text-align: center;
                        vertical-align: middle;
                        padding-left: 3px;
                        position: absolute;
                        height: 30px;
                        width: 27px;
                        line-height: 30px;
                        border-radius: 30px;
                        top: 40px;
                        left: 40px;
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
                        .accont {
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
}
</style>
