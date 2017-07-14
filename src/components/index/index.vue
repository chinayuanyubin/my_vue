<template>
  <div id="index">
    <header class="common-header bdbf4">
      <h2 class="common-header-title">IP授权</h2>
    </header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="item in swip" class="swiper-slide">
          <a :href=item.url><img :src=item.img alt=""></a>
        </div>     
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 本周排名 -->
    <h3 class="title-bar title-bar-theme">本周排名 <span v-on:click="goUrl"><i class="iconfont icon-gengduo"></i></span></h3>
    <div class="ip-rank">
      <ul class="ip-rank-list">
        <li v-for="item in ranking" class="ip-rank-item">
          <img :alt=item.title :src=item.cover_img :title=item.title>
          <a :href="'/manga/comic/id/' + item.manga_id + '.html'" class="ip-rank-item-mask">
            {{item.title}}        
          </a>
        </li>
       </ul>
    </div>
    <!-- 最新推荐 -->
    <h3 class="title-bar title-bar-theme">最新推荐 <span v-on:click="goUrl"><i class="iconfont icon-gengduo"></i></span></h3>
    <ul class="ip-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="distance">
      <li v-for="item in recent"  class="ip-item">
        <div class="ip-item-img">
          <img :src=item.mobile_cover :alt=item.title :title=item.title>
        </div>
        <a href="'/manga/comic/id/' + item.manga_id + '.html'" class="ip-item-layer">
        </a>
        <div class="ip-item-cnt">
          <h2 class="ip-item-title">{{item.title}}</h2>
          <div class="ip-item-bootm">
            <div class="ip-item-avatar">
              <a href="'/mycenter/worklist/id/' + item.user_id + '.html'" class="avatar">
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
</style>

<script>
import Swiper from '../../../static/lib/swiper.min.js'
export default {
  data () {
    return {
      swip: '',
      ranking: '',
      recent: [],
      loadMoreDisable: true,
      distance: 3,
      busy: false,
      num: 0
    }
  },
  created () {
    this.getDetail()
  },
  mounted () {
    this.lunbo()
  },
  methods: {
    goUrl () {
      this.$router.push({path: '/manga/iplist'})
    },
    getDetail () {
      this.axios.all([this.getSwiper(), this.getRanking()]).then(this.axios.spread((swip, ranking) => {
        this.ranking = ranking.data.content.slice(0, 8)
        this.swip = swip.data.content
      }))
    },
    getSwiper () {
      return this.axios.get('slide/web', this.ipApiConfig)
    },
    getRanking () {
      return this.axios.get('manga/rank', this.ipApiConfig)
    },
    loadMore () {
      if (!this.loadMoreDisable) {
        return false
      } else {
        this.busy = true
      }
      this.axios.get('manga/recent', this.ipApiConfig).then(res => {
        let arr = res.data.content.slice(this.num, this.num + this.distance)
        this.recent = this.recent.concat(arr)
        this.num += this.distance
        this.busy = false
        if (this.num >= res.data.content.length) {
          this.loadMoreDisable = false
          return false
        }
      })
    },
    lunbo () {
      this.Swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 2000,
        observer: true,
        observeParents: true,
        pagination: '.swiper-pagination'
      })
    }
  }
}
</script>
