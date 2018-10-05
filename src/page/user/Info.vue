<template>
<div class="Info">
  <LeftMenu/>
  <div class="Info-c">
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
          <li><span class="title">会员状态：</span><span v-text='isvip'></span> </li>
          <li><span class="title">上传视频：</span><span v-text='selfvideo'></span><span>个</span> </li>
          <li><span class="title">性别：</span><span v-text='sex'></span> </li>
          <li><span class="title">生日：</span><span v-text='birthday'></span> </li>
          <li><span class="title">个性签名：</span><span v-text='signature'></span></li>
        </ul>
        <button type="button" name="button" class="button" @click='edit' v-show='showbtn'>编辑</button>
      </div>
      <div class="personal-info" v-show='ShowCanEdit'>
        <div class="Info-title">
          <span>个人信息</span>
        </div>
        <ul>
          <li>
            <span class="title">性别：</span>
            <el-radio v-model="sex" :label="1">男</el-radio>
            <el-radio v-model="sex" :label="2">女</el-radio>
          </li>
          <li>
            <span class="title">出生日期：</span>
            <el-date-picker v-model="birthday" type="date" placeholder="选择日期" :picker-options="pickerOptions" value-format="yyyy-MM-dd" size="small">
            </el-date-picker>
          </li>
        </ul>
      </div>
      <div class="name-info" v-show='ShowCanEdit'>
        <div class="Info-title">
          <span>个性信息</span>
        </div>
        <ul>
          <li class="li-textarea">
            <span class="title accont">个性签名：</span>
            <textarea class='textarea' placeholder="描述最多可以输入150个字符" maxlength="150" v-model='textareatex'></textarea>
          </li>
          <li class="li-button">
            <button type="button" class="infobtn" @click='infobtn'> 确认修改 </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Hub from "@/components/Hub";
import LeftMenu from '@/page/user/LeftMenu';

export default {
  data() {
    return {
      showbtn:true,
      ShowCanEdit: false,
      list: [],
      textareatex: null,
      username: null,
      video: null,
      selfvideo: null,
      score: null,
      nickname: null,
      birthday:null,
      isvip:null,
      signature:null,
      sex: 1,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      birthday: ""
    };
  },
  methods: {
    edit(){
      this.ShowCanEdit=true
      this.showbtn=false
    },
    getinfo(){
      this.$http.get("/api/user/detail").then(data => {
        if (data.status === 0) {
           this.signature=data.data.signature
           this.birthday=data.data.birthday
           this.username=data.data.username
           this.selfvideo=data.data.videos
           let sex=data.data.sex
           if(sex==1){
             this.sex='男'
           }
           if(sex==2){
             this.sex='女'
           }
           if(sex==0){
             this.sex='未知 '
           }
        }
      });
    },
    infobtn() {
      let params = {
        sex: this.sex,
        birthday: this.birthday,
        signature: this.textareatex,
        type: 1
      };
      this.$http.post("/api/user/edit", params).then(res => {
        if (res.status === 0) {
          this.getinfo()
          this.$message({
            message: "编辑成功",
            type: "success"
          });
        }
      });
    },
    getExchanges() {
      this.$http.get("/api/user/getExchanges").then(res => {

      });
    }
  },
  components: {
    LeftMenu
  },
  created() {
    this.getinfo()
    this.getExchanges()
    let vip=sessionStorage.getItem("IS_VIP");
    if(vip){
      this.isvip='会员'
    }else{
      this.isvip='非会员'
    }
  }
};
</script>

<style lang="scss" scoped>
.Info {
    width: 1200px;
    margin: 0 auto;
    height: auto;
    margin-top: 20px;
    margin-bottom: 40px;
    .Info-c {
        width: 900px;
        display: inline-block;
        height: auto;
        min-height: 600px;
        .Info-title {
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
                .button {
                    width: 200px;
                    height: 39px;
                    font-size: 16px;
                    padding: 6px;
                    border-radius: 4px;
                    background: #58b59d;
                    color: #fff;
                    margin: 30px;
                    position: relative;
                    left: 160px;
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
