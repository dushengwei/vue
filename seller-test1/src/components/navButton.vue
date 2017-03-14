<template>
  <div class="navButton" id="navButton">
   <ul v-on:click="userFocus"> <li v-bind:class="{shangping:shangping}" v-on:click="shangping=true,pinglun=false,shangjia=false">
    <a href="#" ><router-link  to="/">商品</router-link></a></li>
     <li v-bind:class="{shangping:pinglun}" v-on:click="shangping=false,pinglun=true,shangjia=false"><a href="#"><router-link  to="/">评论</router-link></a></li>
      <li v-bind:class="{shangping:shangjia}" v-on:click="shangping=false,pinglun=false,shangjia=true"><a href="#"><router-link  to="/">商家</router-link></a></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
  data(){
    return {
    shangping:false,
    pinglun:false,
    shangjia:false
    } 
   }
  ,methods:{
   userFocus(e){
     console.info(e.target);
   }
  }
 }
</script>
<style lang="less" scoped>
//@import './index.less'
 .navButton{
   width:100%;
   height:40px;
   background-color:white;
   position:relative;
   top:135px;
   text-align:center;
   ul{
    width:100%;
    @color:red;
    li{
    width:20%;
    height:40px;
    line-height:40px;
    float:left;
    border-bottom:solid 1px #eee;
    margin-left:10%;
    :hover{
      color:@color;
     } 
    }
    .shangping,.pinglun,.shangjia{
      a{
      color:@color;
      }
    }
    }
   }

</style>