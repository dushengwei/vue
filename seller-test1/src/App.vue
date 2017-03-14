<template>
  <div id="app">
    <index></index>
    <navButton></navButton>
    <router-view></router-view>
    <!--<test1> </test1> -->
  </div>
</template>

<script>
import navButton from './components/navButton'

import test from './components/test'
import index from './components/index'

export default {
  name: 'app',
  components:{
  navButton,test,index
  }
}
</script>
<style >
  ul,li{
  margin:0;
  padding:0;
  list-style-type:none;
  }
</style>