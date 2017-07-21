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

