<template>
<div class="PromotionList">
  <p>合作伙伴：</p>
  <ul>
    <li v-for='item in list' ><a :href="item.url" v-text='item.title' :class="item.is_light"></a> </li>
  </ul>
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
      list: [],
      light:'',
    }
  },
  methods: {
    getlist() {
      network('/api/cooperation/list', null, data => {
        if (data.status == 0) {
          let list =data.data
          for(var i=0;i<list.length;i++){
            // console.log(list[i].is_light)
            if(list[i].is_light==1){
              list[i].is_light='activetitle'
            }else{
              list[i].is_light=''
            }
          }
          this.list = data.data
          // console.log(list)
        }
      })
    },
  },
  components: {},
  created() {
    this.getlist()
  },
}
</script>

<style lang="scss" scoped>
.PromotionList {
    p {
        text-align: left;
        height: 40px;
        line-height: 40px;
    }
    ul {
        li {
            display: inline-block;
            a {
                color: #666;
                font-size: 12px;
                padding: 0 10px;
                border-right: 1px solid #a0a0a0;
            }
            .activetitle{
              color: #58b59d;
            }
            a:hover{
              color: #58b59d;
            }
        }

    }
}
</style>
