<template>
  <div id="app">
    <router-view></router-view>
    <fixmenu v-show='isShowFixMenu'></fixmenu>
  </div>
  
</template>

<script type="ecmascript-6">
export default {
  name: 'app',
  data () {
    return {
      isShowFixMenu: true
    }
  }
}
</script>

<style>
@import '/static/css/iconfont.css';
@import '/static/css/zcommon.css';
@import '/static/css/ip-index.css';
@import '/static/css/animate.min.css';
</style>
