<template>
  <div class="shopCart">
    <i class="icon-shopping_cart" style="font-size:35px;height:40px;line-height:40px;display:inline-block;
    border-radius:90px;border:solid 1px black;margin:10px auto auto 10px;position:relative;">
    <div style="width:16px;height:16px;background-color:red;color:white;position:absolute;top:-3px;font-size:12px;border-radius:80px;left:20px;line-height:16px;text-align:center;" v-text="totaldingdan"></div>
    </i>
    <span style="color:white;" v-if="totalMoney==0">￥0</span>
    <span style="color:white;" v-if="totalMoney!=0" v-text="totalMoney"></span>
    <span>提示:另需配送费+￥<span v-text="deliveryPrice"></span>元</span>
    <span  style="display:inline-block;float:right;height:60px;line-height:60px;" v-if="totalMoney==0">￥<span v-text="minPrice"></span>元起送</span>
   <span v-if="totalMoney>0 && totalMoney<20"  style="float:right;height:60px;line-height:60px;">还差￥<span v-text="20-totalMoney"></span>元</span>
    <span v-if="totalMoney>=20" v-on:click="jiesuan" style="float:right;height:60px;line-height:60px;">去结算</span>
    
     <div class="shopSelectd">
     <div v-for="ss in shopSelectd" > 
        <div v-if="ss.qty>0" style="margin-top:15px;border-bottom:solid 1px #aaa;height:30px;line-height:10px;">
         <span  v-text="ss.name"></span>
         <i class="icon-remove_circle_outline" v-on:click.stop.prevent="dec($event)" v-bind:name="ss.name"></i>
        <span v-text="ss.qty"></span>
         <i class="icon-add_circle" v-on:click.stop.prevent="plus($event)" v-bind:name="ss.name"></i>
         </div> </div>
     </div>
  
  </div>
</template>

<script type="javascript/text">
 import cartControl from '../cartControl/cartControl'

  export default{
    props:{
     deliveryPrice:0,
     minPrice:0
    },
    components:{
      cartControl
    },
    data(){
    return {
    shopSelectd:[],
    totalMoney:0,
    totaldingdan:0
     }
    },
    methods:{
     jiesuan(){
       alert('您好,一共消费'+this.totalMoney+'元');
     },
       plus:function(event){
       var diandan=0;
       this.totalMoney=0;
        var targetName=event.target.attributes.name.value;
        var sSelected=this.shopSelectd;
         for(var i=0;i<sSelected.length;i++){
           if(sSelected[i].name==targetName){
              sSelected[i].qty+=1;
           }
           if(sSelected[i].qty>0){
            diandan+=1;
           }
            this.totalMoney+=sSelected[i].price*sSelected[i].qty;
         }
          this.totaldingdan=diandan;
      },
    dec:function(event){
     var diandan=0;
      this.totalMoney=0;
       var targetName=event.target.attributes.name.value;
       console.info(targetName);
        var sSelected=this.shopSelectd;
         for(var i=0;i<sSelected.length;i++){
           if(sSelected[i].name==targetName){
              sSelected[i].qty-=1;
           }
           if(sSelected[i].qty>0){
            diandan+=1;
           }
           this.totalMoney+=sSelected[i].price*sSelected[i].qty;
         }
         this.totaldingdan=diandan;
      }
    ,drop(e){
    var sSelected=this.shopSelectd;
    this.totalMoney=0;
      if(sSelected.length==0){
       this.shopSelectd.push(e);
       this.totalMoney=e.price;
       this.totaldingdan=1;
      }else{
        //判断是否存在 如果存在,就不用添加
       var cname=e.name;
       var index=0;
       var diandan=0;
       for(var i=0;i<sSelected.length;i++){
          var lname=sSelected[i].name;
          if(lname.trim()==cname.trim()){
             index=1;
          }
          //判断是否为非空订单
          if(sSelected[i].qty>0){
            console.info('-gggg');
            diandan+=1;
          }
          this.totalMoney+=sSelected[i].price*sSelected[i].qty;
       }
        if(index==0){
          this.shopSelectd.push(e);
          this.totalMoney+=e.price;
          diandan+=1;
        }
        this.totaldingdan=diandan;
      }
      console.info(this.totalMoney); 
      console.info(this.totaldingdan);
    },pop(e){
      var sSelected=this.shopSelectd;
     this.totalMoney=0;
    if(sSelected.length==0){
       return;
      }else{
        //单笔数据删除 判断是否存在 如果存在,就在上面减一，如果不存在则无动作
       var diandan=0;
       for(var i=0;i<sSelected.length;i++){
          if(sSelected[i].qty>0){
            diandan+=1;
          }
          this.totalMoney+=sSelected[i].price*sSelected[i].qty;
       }
        this.totaldingdan=diandan;
      }
    }
   }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .shopCart{
    width:100%;
    height:70px;
    position:absolute;
    top:285px;
    background-color:#aaa;
    .shopSelectd{
     width:100%;
     border:solid 1px #aaa;
     position:absolute;
     top:70px;

    }
  }
</style>