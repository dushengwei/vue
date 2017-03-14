<template>
<!--better-scroll的应用 其实它就一个功能，让绑定元素可以滚动,并且记录滚动的高度  整个ul在div中滚动-->
<div class="test">
   <div class="menu-wrapper" ref="menuWrapper">
    <ul>
        <li>早餐</li>
        <li v-on:click="dinner">中餐</li>
        <li>晚餐</li>
        <li>夜宵</li>
        <li>夜宵1</li>
        <li>夜宵2</li>
        <li>夜宵3</li>
        <li>夜宵4</li>
    </ul>
   </div>

   <div class="foods-wrapper" ref="foodsWrapper">
    <ul>
        <li>早餐</li>
        <li>包子</li>
        <li>馒头</li>
        <li>面条</li>

        <li>中餐</li>
        <li>米饭</li>
        <li>鸡腿</li>
        <li>鸭腿</li>
        <li>牛肉</li>

        <li>晚餐</li>
        <li>沙拉</li>
        <li>饮料</li>
        
        <li>夜宵</li>
        <li>牛奶</li>
        <li>鸡肉</li>
        <li>蛋糕</li>
        <li>麻辣烫</li>
    </ul>
   </div>
</div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'       //1.引入better-scroll

  export default{
     methods: {
       _initScroll () {         // 1.函数声明 绑定元素
        this.menuScroll = new BScroll(this.$refs['menuWrapper'], {click:true});
        
        this.foodsWrapper = new BScroll(this.$refs['foodsWrapper'], {probeType:3,click:true,wheel:false});


        this.foodsWrapper.on('scroll',pos=>{
        //以y=0为始点,pos.y为负值所以abc console.info(pos.y);
            if(Math.abs(pos.y)>=200 && Math.abs(pos.y)<=450 ){
              console.info( this.$refs['menuWrapper'].childNodes[0].childNodes[2].style.cssText="background-color:red;");
            };
        });
      },
      dinner:function(){
      //点击滚动到特定元素位置
        if (!event._constructed) {
          return;
        }
      this.foodsWrapper.scrollToElement(this.$refs['foodsWrapper'].childNodes[0].childNodes[4]);
      }
     },
     created:function(){
       this.$nextTick(()=>{
         this._initScroll ();
       });
     }
   }
</script>

<style scoped lang="less">
 .test{
  position:relative;
  top:200px;
  width:100%;
  height:400px;
  background-color:#eee;
  .menu-wrapper{
    width:100px;
    height:300px;
    overflow:scroll;
    position:absolute;
    ul{ 
    li{
     width:100px;
     height:50px;
     text-align:center;
     line-height:50px;
     border-bottom:solid 1px #aaa;
    }
    } 
  }
  .foods-wrapper{
    width:80%;
    height:300px;
    position:absolute;
    left:100px;
    overflow:auto;
    ul li{
     width:80%;
     height:50px;
     line-height:50px;
     border-bottom:solid 1px #aaa;
     }
   }
 }
</style>
