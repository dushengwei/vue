<template>
<div class="navHidden">
   <div class="hiddenRangle"></div>
   <p class='title'>粥品香坊（回龙观）</p>
   <div class="star block">
     <img src="../../assets/icon/star24_on@2x.png" />
     <img src="../../assets/icon/star24_on@2x.png" />
     <img src="../../assets/icon/star24_on@2x.png" />
     <img src="../../assets/icon/star24_half@2x.png" />
     <img src="../../assets/icon/star24_off@2x.png" />
   </div> 

    <div class="lined">
         <div class="line"> 
      </div><span>优惠信息</span> <div class="line"></div>
    <ul class="youhuixiangqing">
        <li><img src='../../assets/icon/decrease_1@2x.png'/><span>在线支付满28减5</span> </li>
        <li><img src='../../assets/icon/discount_1@2x.png'/><span>VC无线橙果汁全场8折</span></li>
        <li><img src='../../assets/icon/special_1@2x.png'/><span>单人精彩套餐</span></li>
        <li><img src='../../assets/icon/invoice_1@2x.png'/><span>该商家支持发票,请下单写好发票抬头</span> </li>
        <li><img src='../../assets/icon/guarantee_1@2x.png'/><span>已加入"外卖保"计划,食品安全保障</span></li>
      </ul>
    </div>
    
    <div class="lined" style="position:relative;top:250px;">
         <div class="line"> 
      </div><span>商家公告</span> <div class="line"></div>
    <div  style="margin-left:17%;width:65%;margin-top:10px;">
     <p style="margin-bottom:16px;">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、</p><p>添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
      </div>
    </div>
  <span v-on:click="quxiao" style="display:inline-block;width:100%;height:50px;background-color:white;position:relative;top:400px;color:black;text-align:center;line-height:50px;cursor:pointer;">退出</span>
 </div>
</template>

<script>
//import {Rate} from 'element-ui'
//特别注意
//import Vue from 'vue'
//Vue.use(Rate)

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value1: null,
      value2: null
    }
  },methods:{
    quxiao:function(){
     this.$store.state.sheetVisible=false;
  }
 }
}
</script>
<style scoped>
 .navHidden{
  width:100%;
  min-height:680px;
  background-color:rgba(0, 0, 0, 0.7);
  
  position:absolute;
  top:-134px;
  z-index:999;
  color:white;
 }
 .navHidden .cancel{
  width:100%;
  height:30px;
  background-color:#eee;
  position:relative;
  top:700px;
  text-align:center;
  font-size:35px;
  cursor:pointer;
 }
/*用于弥补之前的top  */
 .navHidden .hiddenRangle{
  width:1px;
  height:134px;
 }
.navHidden .title{
  position:relative;
  text-align:center;
  top:50px;
  font-size:20px;
  font-weight:bold;
}
.navHidden .star{
  width:100%;
  height:38px;
 
  position:relative;
  text-align:center;
  top:70px;
}

.navHidden .lined{
  width:100%;
  height:38px;
  position:relative;
  top:90px;
  text-align:center;
}
.navHidden .lined .line{
  width:30%;
  height:0px;
  border:1px solid white;
  display:inline-block;
}
.navHidden  .youhuixiangqing{
  width:100%;
 
  position:relative;
  left:18%;
}
.navHidden  .youhuixiangqing li{
  height:30px;
  line-height:30px;
  margin-bottom:5px;
  font-size:15px;
  text-align:left;

}
.navHidden  .youhuixiangqing li img{
  width:16px;
  height:16px;
  position:relative;
  top:2px;
  left:-3px;
}
</style>
