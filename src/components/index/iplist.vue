<template>
  <div class="iplist">
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
<style scoped>
.iplist{
  width: 100%;
}
.manga-nav-section a {
  font-size: 16px;
}
/*作者列表开始*/

.author-list {
  overflow-x: auto;
}

.author-list > ul {
  width: 814px;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.author-list .author-item {
  position: relative;
  width: 100px;
  height: 100px;
}

.author-list .author-item-cnt {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.author-list .author-item-img img {
  width: 100px;
  height: 100px;
}

.author-list .author-item-cnt {
  padding-left: 5px;
  padding-right: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 100px;
  color: #fff;
}


/*作者列表结束*/

</style>

<script type="ecmascript-6">
export default {
  data () {
    return {
      distance: '11111111',
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
