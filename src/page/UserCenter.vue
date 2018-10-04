<template>
<div class="usercenter">
  <LeftMenu/>
  <component v-bind:is="togglecomponent"></component>
</div>
</template>
<script>
import Hub from '@/components/Hub';
// import Accunt from '@/page/user/Accunt';
// import Favorite from '@/page/user/Favorite';
// import Info from '@/page/user/Info';
// import LeftMenu from '@/page/user/LeftMenu';
// import Safety from '@/page/user/Safety';
// import Video from '@/page/user/Video';
// import Oder from '@/page/user/Oder';
// import RedemptionCode from '@/page/user/RedemptionCode';
// import Transaction from '@/page/user/Transaction';
// import ChangeEmail from '@/page/user/ChangeEmail';
// import ChangePayPsw from '@/page/user/ChangePayPsw';
// import ChangePsw from '@/page/user/ChangePsw';
// import Changehead from '@/page/user/Changehead';

export default {
  data() {
    return {
      ShowPayContain: false,
      togglecomponent:'Accunt',
    }
  },
  components: {
    // Accunt,
    // Favorite,
    // Info,
    // LeftMenu,
    // Safety,
    // Video,
    // Oder,
    // RedemptionCode,
    // Transaction,
    // ChangeEmail,
    // ChangePayPsw,
    // ChangePsw,
    // Changehead,
  },
  methods:{
  },
  created() {
    let username=sessionStorage.getItem('username')
    if(!username){
      this.$router.push({
        path: '/Logoin'
      })
    }
    Hub.$on('component', (data) => {
      this.togglecomponent=data
    });
  }
}
</script>

<style lang="scss" scoped>
.usercenter {
    width: 1200px;
    margin: 0 auto;
    height: auto;
    margin-top: 20px;
    margin-bottom: 40px;
}
</style>
