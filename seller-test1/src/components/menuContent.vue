<template>
  <div class="menuContent">
  <ul class="menu" ref="menu">
   <li><a href="#rexiao">热销榜</a></li>
   <li><a href="#">单人精彩套餐</a></li>
   <li><a href="#">冰爽饮品限时特惠</a></li>
    <li><a href="#">精选热菜</a></li>
    <li><a href="#">爽口凉菜</a></li>
    <li><a href="#">精选套餐</a></li>
    </ul>
  <!--请求数据 -->
  <div class='type' >
   <ul name="rexiao" ref="foodsWrapper">
     <li>皮蛋瘦肉粥</li>
     <li>扁豆焖面</li> 
     <li>葱花饼</li>
   </ul>
    <ul>
     <li>红枣山药粥套餐</li>
     <li>VC无限橙果汁</li> 
     <li>娃娃菜炖豆腐</li>
   </ul>
  </div> 
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll' //引入better-scroll
import dataList from'../data/data.json'

 const ERR_OK=0

 export default {
   props:{
   seller:{
     type:Object
    }
   }
  ,data(){
    return {
      goods:[]
    } 
   },
   created(){
     this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
     this.$http.get('/api/goods').then((res) => {
         res = res.body
         if (res.errno === ERR_OK) {
         this.goods = res.data
           this.$nextTick(() => { //在这个函数中调用以防内容还未加载完就执行，获取不到元素的高度导致无法滑动
            //console.log(this)   //可以打印看看this的内容
            this._initScroll()
          })
        }
      })
   },methods:{
    _initScroll () {         // 2 函数声明
        this.menuScroll = new BScroll(this.$refs.menu, {}) //注意此处是this.$refs.xxx
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {})
    }
   }
 }
</script>
<style lang="less" scoped>
//@import './index.less'
  .menuContent{
  width:100%;
  height:270px;
  background-color:#eee;
  position:relative;
  top:140px;
   .menu{
   height:270px;
   width:150px;
   position:absolute;
   left:0;
   top:0;
     li{
      width:150px;
      background-color:white;
      height:43px;
      border-top:solid 1px #eee;
      line-height:43px;
      text-align:center;
      cursor:pointer;
        a:hover{color:red;}   
     }
   }
   .type{
    position:absolute;
    left:150px;
   }
  }

</style>