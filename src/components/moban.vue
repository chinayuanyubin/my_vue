
<template>
  <div class="manga">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <div>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
        <li><input v-if="e" v-model="msg"></li>
        <br>
        <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
      </div>
    </ul>
    <!-- <div id="example-1">
      <button @click="count += 1">增加 1</button>
      <p>这个按钮被点击了 {{ count }} 次。</p>
    </div> -->
  </div>
</template>

<script type="ecmascript-6">
// var example = new Vue({
//   el: '#example-1',
//   data: {
//     count: 0
//   }
// })

export default {
  name: 'manga',
  data () {
    return {
      msg: '11',
      e: 1
    }
  },
  created () {
    this.obj()
    console.log(this.obj)
  },
  methods: {
    obj: function () {
      console.log(1)
    }
  },
  watch: {
    'msg': function (val, oldval) {
      console.log(val, oldval)
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
