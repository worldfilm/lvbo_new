<template>
<div class="pay-bottom-package v-container">
  <div class="bottom-package-title">会员充值</div>
  <package-list></package-list>
</div>
</template>

<script>
import Hub from '@/components/Hub';
import packageList from '@/components/recharge/index.vue'
export default {
  components: {
    packageList
  },
  data() {
    return {
      logoState: false,
      list: []
    }
  },
  methods: {
    getPakage() {
      this.$http.get('/api/pay/payList').then(res => {
        if(res.status === 0) {
          this.list = res.data.rechargeList
        }
      })
    },
    fastjoin() {
      this.checkuser()
    },
    checkuser(){
      let username=sessionStorage.getItem('username')
      if(username){
        this.ShowOnline=true
        this.ShowLog=false
        this.username=username
        Hub.$emit('PayDialog', true);
      }else{
        this.ShowOnline=false
        this.ShowLog=true
        this.username=null
        this.$router.push({
          path: '/Logoin'
        })
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.pay-bottom-package {
    margin-bottom: 30px;
    .bottom-package-title {
        width: 100%;
        font-size: 22px;
        color: #58b59d;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
        height: 45px;
        line-height: 45px;
        text-align: left;
    }
}
</style>
