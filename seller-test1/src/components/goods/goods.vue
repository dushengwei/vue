<template>
<div class="goods">
   <div class="menu-wrapper" ref="menuWrapper" > 
       <ul class="menuUl" id="tiaozhuan">
         <li v-for="(goods,index) in goodsList" class="menuLi" :class="{current: currentFoodsListIndex === index}"  v-bind:idIndex="index">
            <span v-text="goods.name" style="cursor:pointer;"></span> 
        </li>
       </ul> 
   </div>

   <div class="foods-wrapper" ref="foodsWrapper" id="foodsWrapper">
         <ul class="goodsUl" >
           <li v-for="goods in goodsList" class="goodsLi goodsLi-hack" name="goodsLi-hack">
              <div v-text="goods.name" class="goodsName"></div>
             <ul class="foodsUl"> 
                <li v-for="(item,index)  in goods.foods" class="foodsLi" v-on:click="show(index)"> 
                   <img v-bind:src="item.icon"/>
                   <div v-text="item.name"></div>
                   <div v-text="item.description" style="font-size:8px;color:#aaa;"></div>
                    <span style="font-size:8px;color:#aaa;">月售<span v-text="item.sellCount"></span></span>
                    <span style="font-size:8px;color:#aaa;">好评率<span v-text="item.rating" style="font-size:8px;color:#aaa;"></span></span>
                    <div>￥<span v-text="item.price"></span></div>
                    <cart-control style="position:absolute;width:1"   v-on:cart-jian="cartJian" v-bind:food="item" v-on:cart-add="cartAdd"></cart-control>
                </li>
             </ul>
           </li>
         </ul>
    </div> 
  <shopCart ref="shopCart" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopCart>
</div>
</template>

<script type="text/ecmascript-6">
//1.引入better-scroll
import BScroll from 'better-scroll'       
//axios
import axios from 'axios'
import cartControl from '../cartControl/cartControl'
import shopCart  from '../shopCart/shopCart'

  export default{
      data(){
      return{
       goodsList:[],
       scrollY,
       foodsListHeights:[],
       seller:{},
       currentObj:{},
       currentFoodsListIndex:0
       }
      },
      components:{
        cartControl,shopCart
      }
     ,methods: {
        currentMethod(e){
         var indexEl=e.target.attributes.idindex;
          if(indexEl){
          console.info(indexEl.value);
           this.currentFoodsListIndex=indexEl.value;
           console.info(  this.currentFoodsListIndex);
          }
        }
       ,cartJian(e){
         this.$refs['shopCart'].pop(e); 
        }
       ,cartAdd(e){
       /*e中拿到点击的当前数据,然后扔给购物车*/
         this.$refs['shopCart'].drop(e);
       } 
       ,show(e){
        this.food=this.goodsList[0].foods[e];
       }
       ,_initScroll () {         // 1.函数声明 绑定元素
        this.menuScroll = new BScroll(this.$refs['menuWrapper'], {click:true});
        
       

        /*this.foodsWrapper.on('scroll',pos=>{
        //以y=0为始点,pos.y为负值所以abc 
          console.info(pos.y);
           this.scrollY = Math.abs(Math.round(pos.y));
        });*/
      },
      _calcGoodsListHeight() {
         var foodsWrapper=this.$refs['foodsWrapper'];
         var goodsLi = foodsWrapper.getElementsByClassName('goodsLi-hack');   
        //由于数据过多，js引擎处理缓慢，所以极可能造成,无法有效吧数据放进数组,所以异步实现
         let foodsListHeights=[];
        window.onload=function(){
        var  foodsList=goodsLi;
        let height = 0;
        foodsListHeights.push(height);
        for (let i = 0; i < foodsList.length; i++) {
         height+= foodsList[i].getElementsByClassName('foodsLi').length-1;  
         foodsListHeights.push(height);
        }  
        var tz=document.getElementById('tiaozhuan');
        tz.onclick=function(e){
        var tgName=e.target.tagName;
        var realEl;
        if(tgName=="SPAN"){
          realEl=e.target.parentNode;
         }
         if(realEl){
         var index=realEl.attributes.idindex.value;
        // var realIndex=foodsListHeights[index];
         var foodsWrapper=document.getElementById('foodsWrapper');
         var goodsNameList=foodsWrapper.getElementsByClassName('goodsName');
         var foodsScroll = new BScroll(foodsWrapper, {probeType:3,click:true});
         foodsScroll.scrollToElement(goodsNameList[index]);
         }
        } 
      }   
         }
      },
     created:function(){
       axios.get('/api/goods').then((res)=>{
         this.goodsList=res.data.data;
         this.foodsList=res.data.data[0].foods;
       });
       axios.get('/api/seller').then((res)=>{
         this.seller=res.data.data;
       });

         this.$nextTick(()=>{
         this._initScroll();
          this._calcGoodsListHeight();
       
       }  );
     },
    computed: {
      currentFoodsListIndex() {
        for (let i = 0; i < this.foodsListHeights.length - 1; i++) {
          let height1 = this.foodsListHeights[i];
          let height2 = this.foodsListHeights[i + 1];

          if (this.scrollY >= height1 && this.scrollY < height2) {
            console.info(i);
            return i;
          }
        }
        return 0;
      }
    }
   }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
 .current{
  background-color:red;
 }
 .goods{
  position:relative;
  top:150px;
  width:100%;
  height:280px;
  background-color:#eee;
  .menu-wrapper{
    width:120px;
    height:280px;
    overflow:scroll;
    position:absolute;
    .menuUl .menuLi{
     width:120px;
     height:50px;
     text-align:center;
     line-height:50px;
     border-top:solid 1px #aaa;
     font-size:12px;
    } 
  }
 .foods-wrapper{
    width:80%;
    height:280px;
    position:absolute;
    left:120px;
    overflow:auto;
     .goodsUl .goodsLi{ 
     .goodsName{
     width:100%;
     height:20px;
     line-height:20px;
     border-bottom:solid 1px #eee;
     background-color:red;
     }
      .foodsUl .foodsLi{
       width:100%;
       height:65px;
       background-color:yellow;
       border-bottom:solid 1px #aaa;
       img{
         width:45px; 
         height:45px; 
         margin:3px auto auto 3px;
         float:left;
         }
        
       } 
      }  }
 }
</style>
