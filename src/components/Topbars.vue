<template>
    <div class="lobby-topbars">
        <div v-for='item in list'  class='lobby-topbar-item-box' >
           <img :src='item.src'/>
           <span >{{item.name}}</span>
        </div>
    </div>
</template>

<script>


export default {
  components: {

  },
  data(){
    return {
      list:[
         {
            src:'../../static/jinjue_youhuihuodong_home.png',
            name:'优惠'
         },{
            src:'../../static/jinjue_bet_history_home.png',
            name:'注单'
         },{
            src:'../../static/jinjue_callcenter_home.png',
            name:'客服'
         },{
            src:'../../static/jinjue_recharge_draw.png',
            name:'提现'
         }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.lobby-topbars {
        width: 100%;
        height: auto;
        background-color: white;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
         .lobby-topbar-item-box{
                margin-top: 10px;
                margin-bottom: 10px;
                -webkit-box-flex: 1;
                -ms-flex-positive: 1;
                flex-grow: 1;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                img{
                height:2rem;
                }
        }
}
</style>
