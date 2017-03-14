<template>
<div class="realIndex">
   <div class="index">
     <span class="icon brand"></span>
     <div class="navContainer">
       <div class="head"> 
         <img src='../assets/icon/seller_avatar_256px.jpg'  class="navImg" />
         <div class="navTitle">
           <ul>
             <li> <span class="brand">品牌</span><span class='type'>粥品香坊(回龙观)</span></li>
             <li style="font-size:13px;">蜂鸟转送/38分钟送达</li>
             <li style="font-size:12px;"><span><img src="../assets/icon/decrease_1@2x.png" style="width:15px;position:relative;top:2px;margin-right:3px;"/></span>在线支付满28减5</li>
           </ul>
         </div>
         <div  class="button" v-on:click="tanchu">5个&nbsp;<span class="icon-angle-right"></span></div>
         <div class="introduce"><img src="../assets/icon/bulletin@2x.png" /><span style="font-size:10px;">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。</span><span class="icon-keyboard_arrow_right" style="position:relative;top:3px;"></span></div>
       </div>
     </div>
  </div class="hidden">
  <!--弹出框 -->
    <navHidden v-show="sheetVisible" ></navHidden>
 </div>
</template>

<script>
import Vue from 'vue'
import navHidden from './head/navHidden'
import {mapState} from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },computed:{
    ...mapState(['sheetVisible'])
    }
  ,components:{
   navHidden
  },methods:{
  tanchu:function(){
    this.$store.state.sheetVisible=true;
  }
  }
}
</script>

<style scoped >
img{
  width:16px;
  height:16px;
  position:relative;
  top:5px;
  margin-right:5px;
}
.index{
  margin:0;
  padding:0;
  position:relative;
}

 .index .img{
 width:100%;
 height:134px;
 }

.index .navContainer{
  width:100%;
  height:134px;
  background-color: rgba(7, 17, 27, 0.6);
  position:absolute;
  top:0;
}

 .index .navContainer .head{
  width:90%;
  height:115px;
  position:absolute;
  top:15px;
  left:5%;
  z-index:2;
  //border:solid 1px #eee;
 }
.index .navContainer .head .navImg{
  width:64px;
  height:64px;
  position:absolute;
  top:15px;
}
.index .navContainer .head .navTitle{
  width:200px;
  height:64px;
  position:absolute;
  left:70px;
  top:15px;
}
.index .navContainer .head .navTitle ul li .brand{
  background-color:red;
}
.index .navContainer .head .navTitle ul li .type{
  font-size:20px;
  color:white;
}
 
li{
  margin-bottom:5px;
  color:white;
}

.index .navContainer .head .button{
  width:50px;
  height:20px;
  position:absolute;
  left:90%;
  top:60px;
  color:white;
  border:solid 1px #aaa;
  border-radius:90px;
  padding-left:8px;
  cursor:pointer;
 }
 .index .navContainer .head .introduce{
  width:100%;
  height:20px;
  color:white;
  position:absolute;
  top:90px;
  white-space: nowrap;
   overflow: hidden;
  text-overflow: ellipsis;
 }

</style>
