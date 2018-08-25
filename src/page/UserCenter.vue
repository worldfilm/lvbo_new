<template>
<div class="usercenter">
  <LeftMenu/>
  <component v-bind:is="togglecomponent"></component>
</div>
</template>
<script>
import Hub from '@/components/Hub';
import Accunt from '@/components/user/Accunt';
import Favorite from '@/components/user/Favorite';
import Info from '@/components/user/Info';
import LeftMenu from '@/components/user/LeftMenu';
import Safety from '@/components/user/Safety';
import Video from '@/components/user/Video';
import Oder from '@/components/user/Oder';
import RedemptionCode from '@/components/user/RedemptionCode';
import Transaction from '@/components/user/Transaction';
import ChangeEmail from '@/components/user/ChangeEmail';
import ChangePayPsw from '@/components/user/ChangePayPsw';
import ChangePsw from '@/components/user/ChangePsw';
import Changehead from '@/components/user/Changehead';

export default {
  data() {
    return {
      ShowPayContain: false,
      togglecomponent:'Accunt',
    }
  },
  components: {
    Accunt,
    Favorite,
    Info,
    LeftMenu,
    Safety,
    Video,
    Oder,
    RedemptionCode,
    Transaction,
    ChangeEmail,
    ChangePayPsw,
    ChangePsw,
    Changehead,
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
