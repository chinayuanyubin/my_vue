<template>
  <div id="iplist">
    <header class="common-header bdbf4">
      <span onclick="history.go(-1)" class="common-header-left"><i class="iconfont icon-fanhui"></i></span>
      <h2 class="common-header-title">IP列表</h2>
    </header>
    <ul class="ip-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="distance">
      <li class="ip-item" v-for="item in iplist">
        <div class="ip-item-img">
          <img :src=item.mobile_cover :alt=item.title :title=item.title>
        </div>
        <a :href="'/manga/comic/id/' + item.manga_id + '.html'" class="ip-item-layer">
        </a>
        <div class="ip-item-cnt">
          <h2 class="ip-item-title">{{item.title}}</h2>
          <div class="ip-item-bootm">
            <div class="ip-item-avatar">
              <a :href="'/mycenter/worklist/id/' + item.user_id + '.html'" class="avatar">
                <img :alt=item.username :src=item.header_img>
              </a>
              {{item.username}}            
            </div>
            <div class="ip-handle">
              <span><i class="iconfont icon-guanzhu"></i>{{item.views}}</span>
              <span><i class="iconfont icon-pinglun"></i>{{item.totalcomment}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style>
@import '/static/css/swiper.min.css';
@import '/static/css/manga-index.css';
</style>

<script>
export default {
  data () {
    return {
      distance: '',
      iplist: [],
      loadMoreDisable: true,
      busy: false,
      num: 0
    }
  },
  methods: {
    loadMore () {
      if (!this.loadMoreDisable) {
        return false
      } else {
        this.busy = true
      }
      this.axios.get('manga/iplist', this.ipApiConfig).then(res => {
        this.distance = res.data.content.totalPages
        let arr = res.data.content.data.slice(this.num, this.num + this.distance)
        console.log(res.data.content.data.length)
        this.iplist = this.iplist.concat(arr)
        this.num += this.distance
        this.busy = false
        console.log(this.num)
        if (this.num >= res.data.content.data.length) {
          this.loadMoreDisable = false
          return false
        }
      })
    }
  }
}
</script>
