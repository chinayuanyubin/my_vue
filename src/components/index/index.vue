<template>
  <div class="index">
    <header class="common-header bdbf4">
      <h2 class="common-header-title">IP授权</h2>
    </header>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in swip" :key="index">
        <a :href=item.url><img :src=item.img alt=""></a>
      </swiper-slide>   
      <div class="swiper-pagination"  slot="pagination"></div>  
    </swiper>
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
      <div class="tc lh40" v-show="loading">
        加载中
      </div>
    </ul>
  </div>
</template>

<style scoped>
/*圆角正方形 有图 有字*/


/**
 <div class="ip-rank">
   <ul class="ip-rank-list">
     <li class="ip-rank-item">
       <img alt="{{work.title}" src="http://img3.2ciyuanjie.com/2cyj/20161002/g/ep7b2NwHyfcQ.jpg@0-0-500-500a.jpg" title="经典娃娃头系列-傀儡娃娃">
       <a href="javascript:;" class="ip-rank-item-mask">
         经典娃娃头系列-傀儡娃娃
       </a>
     </li>
   </ul>
 </div>
 */
.ip-rank {
  width: 100%;
  overflow-x: auto;
}
.ip-rank-list {
  width: 800px;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  height: 86px;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.ip-rank-list .ip-rank-item {
  width: 86px;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f99;
  position: relative;
  text-align: center;
}

.ip-rank-list .ip-rank-item img {
  width: 86px;
  height: 100%;
}

.ip-rank-list .ip-rank-item .ip-rank-item-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 86px;
  height: 100%;
  line-height: 86px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: inherit;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  /*font-size: 1.2rem;*/
  padding: 0 10px;
  color: #fff;
}

</style>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      swip: '',
      ranking: '',
      recent: [],
      loadMoreDisable: true,
      distance: 3,
      busy: false,
      loading: false,
      num: 0,
      swiperOption: {
        loop: true,
        initialSlide: 1,
        autoplay: 2000,
        observer: true,
        observeParents: true,
        pagination: '.swiper-pagination'
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    this.getDetail()
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    goUrl () {
      this.$router.push({name: 'iplist'})
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
        this.loading = true
      }
      this.axios.get('manga/recent', this.ipApiConfig).then(res => {
        let arr = res.data.content.slice(this.num, this.num + this.distance)
        this.recent = this.recent.concat(arr)
        this.num += this.distance
        this.busy = false
        this.loading = false
        if (this.num >= res.data.content.length) {
          this.loadMoreDisable = false
          return false
        }
      })
    }
    // lunbo () {
    //   this.Swiper = new Swiper('.swiper-container', {
    //     loop: true,
    //     autoplay: 2000,
    //     observer: true,
    //     observeParents: true,
    //     pagination: '.swiper-pagination'
    //   })
    // }
  }
}
</script>
