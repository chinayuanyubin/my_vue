<template>
<div v-bind:style="{height: hei + 'px'}" class="my">
<header class="common-header bdbf4">
      <h2 class="common-header-title">我</h2>
      <!-- <span class="common-header-right"><i class="iconfont icon-fanhui"></i></span> -->
    </header>
    <!-- 头部背景s部分开始 -->
    <div class="me-header">
      <div class="avatar">
        <img alt="" src="http://img3.2ciyuanjie.com/2cyj/20161228/k/kksjnRYaN6MW.JPG">
      </div>
      <h2>bin</h2>
      <a class="right-top" href="/mycenter/worklist/id/137411.html">我的空间&gt;</a>
    </div>
    <!-- 头部背景s部分结束 -->
    <ul class="me-nav-list">
      <li class="col-3">
        <a href="/my/record.html">
          <i class="iconfont icon-zhuanqujifen"></i>
          <br> 我的积分
        </a>
      </li>
      <li class="col-3">
        <a href="/user/myPurse.html">
          <i class="iconfont icon-qianbao1"></i>
          <br> 我的钱包
        </a>
      </li>
      <li class="col-3">
        <a href="javascript:;" class="qiaodao-item">
          <i class="iconfont icon-qiandao"></i>
          <br> 签到
        </a>
      </li>
      <li class="col-3">
        <a href="/mycenter/setup.html">
          <i class="iconfont icon-shezhi2"></i>
          <br> 设置
        </a>
      </li>
      <!-- <li style="background: #fff; padding-left: 20px;">
        <a href="/mycenter/management.html">设置</a>
      </li> -->
      <!--  <li style="background: #fff; padding-left: 20px;">
       <a href="/login/loginout.html">退出登录</a>
     </li> -->
    </ul>
    <ul class="mainList">
    <li class="goHrefLi">
      <a class="goHref" href="/my/myLuckyList.html">
        <span class="mainList-bt">我的中奖记录</span>
        <div class="mainList-enter"><i class="iconfont icon-jinru"></i></div>
      </a>
    </li>
    <li class="goHrefLi">
      <a class="goHref" href="/manga/ipbuylist.html">
        <span class="mainList-bt">我购买的IP</span>
        <div class="mainList-enter"><i class="iconfont icon-jinru"></i></div>
      </a>
    </li>
    <li class="goHrefLi">
      <a class="goHref" href="/manga/ipsalelist.html">
        <span class="mainList-bt">我售出的IP</span>
        <div class="mainList-enter"><i class="iconfont icon-jinru"></i></div>
      </a>
    </li>
    <li class="goHrefLi">
      <a class="goHref" href="/manga/trylist.html">
        <span class="mainList-bt">免费授权的IP</span>
        <div class="mainList-enter"><i class="iconfont icon-jinru"></i></div>
      </a>
    </li>
  </ul>
</div>
</template>

<style scoped>
.my{
  background: #f4f4f4;
}
.me-header {
  background-color: #10415f;
  background-size: cover;
  text-align: center;
  padding: 20px;
  position: relative;
}

.head {
  width: 100%;
  height: 0.44rem;
  position: relative;
  line-height: 0.44rem;
  border-bottom: 1px solid #F4F4F4;
  background: #fff;
}

.back {
  width: 0.44rem;
  height: 0.44rem;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
}

.title {
  width: 100%;
  text-align: center;
  font-size: .16rem;
  font-weight: bold;
}
.me-header .avatar img {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.me-header .avatar {
  width: .36rem;
  height: .36rem;
  border-radius: .36rem;
  overflow: hidden;
  display: inline-block;
}

.me-header h2 {
  margin-top: 3px;
  margin-bottom: 15px;
  font-size: .16rem;
  color: #fff;
  font-weight: normal;
}

.me-header .tag-item {
  color: #16d1d7;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 20px;
}

.me-header .right-top {
  color: #fff;
  position: absolute;
  right: 15px;
  top: 15px;
}

.my-room-head {
  min-height: 105px;
  background-color: #10415f;
  background-size: cover;
  position: relative;
  padding: 15px 20px;
  color: #fff;
}

.my-room-head .myh-tag {
  display: inline-block;
  width: 10em;
  font-size: 12px;
  line-height: 16px;
}

.my-room-head .myh-avatar-info-wrap {
  position: relative;
  padding-left: 55px;
  padding-top: 10px;
  color: #999;
  font-weight: bold;
  height: 40px;
}

.my-room-head .myh-avatar-info-wrap em {
  font-style: normal;
  font-weight: normal;
}

.my-room-head .avatar img {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.my-room-head .avatar {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  overflow: hidden;
  display: inline-block;
}

.my-room-head .myh-name {
  margin-top: 10px;
  font-size: 16px;
  font-weight: normal;
}

.my-room-head .note {
  color: #999;
  font-size: 12px;
}
.my-room-head .myh-right {
  position: absolute;
  right: 20px;
  top: 20px;
}

.my-room-head .myh-right a {
  display: inline-block;
  padding-left: 10px;
  color: #16d1d7;
  text-align: right;
}

.mrh-bar {
  line-height: 34px;
  text-align: right;
  position: relative;
  background-color: #f4f4f4;
}

.mhr-bar-link {
  color: #333;
  padding-left: 20px;
  padding-right: 20px;
  display: inline-block;
}

.mrh-bar .iconfont {
  font-size: 22px;
}

.btn-item {
  margin-top: 5px;
}

.btn-item a {
  line-height: 40px;
  display: block;
  background-color: #fff;
  padding-left: 20px;
  color: #000;
}

.mainList li {
  margin-top: 3px;
  position: relative;
  height: 0.4rem;
  line-height: 0.4rem;
  background: #fff;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.mainList .goHrefLi .goHref{
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 .1rem;
}
.mainList-enter {
  width: 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  position: absolute;
  right: 0;
  top: 0;
  color: #CCC;
}

.lotteryList .lotteryItem{
  height: 0.4rem;
  background: #fff;
  padding: 0 .1rem;
  line-height: .4rem;
  border-bottom: 1px solid #f4f4f4
}
.lotteryList .lotteryItem span{
  padding: 0 0.05rem
}
.lotteryList .lotteryItem .time{
  font-size: .12rem;
  color: #999
}
.room-nav {
  line-height: .44rem;
  text-align: center;
  height: .44rem;
  border-bottom: 1px solid #f4f4f4;
}

.room-nav a {
  color: #000;
  font-weight: bold;
  /*border-bottom:2px solid #000;*/
}
.room-manga-list{
  min-height: 260px;
}
</style>

<script type="ecmascript-6">
export default {
  data () {
    return {
      hei: ''
    }
  },
  created () {
    this.myhei()
  },
  methods: {
    myhei () {
      this.hei =  window.document.body.clientHeight - 94
    }
  }
}
</script>

