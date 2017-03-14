<template>
 <div class="cartControl" style="width:100%;">
  <div style="width:50px;height:20px;position:absolute;left:950px;top:-20px;">
   <transition name="fade">
  <i class="icon-remove_circle_outline" v-on:click.stop.prevent="dec($event)" v-if="food.qty>0" ></i>
  </transition>
  <span v-if="food.qty>0">{{food.qty}}</span>
  <i class="icon-add_circle" v-on:click.stop.prevent="plus($event)" style="float:right;"></i>
  
  </div>
 </div>
</template>

<script type="javascript/ecmascript-6">
   export default{
    props:{
     food:{}
    },methods:{
     plus:function(event){
       if(!this.food.qty){//为对象添加一个属性
        this.$set(this.food,'qty',1);
       }else{
       this.food.qty++;
       }
      
     //  console.info(this.food);//点击获取对应的数据
       //把数据收集完毕，然后传送  单笔数据
       
         this.$emit('cart-add',this.food);
      },
    dec:function(event){
       if(!this.food.qty){
        this.$set(this.food,'qty',0);
       }else{
        this.food.qty--;
       }
       this.$emit('cart-jian',this.food);
      }
    }
   }
</script>

<style rel="stylesheet/scss" lang="scss"  scoped> 
 .fade-enter-active, .fade-leave-active {
     transition: opacity  ease-in .5s;
     transform:rotate(360deg);
    }
 .fade-enter, .fade-leave-active {
     opacity: 0;
     transform:rotate(0deg);
    }
</style>
