<template>
<div id="my">
<header class="common-header bdbf4" style="background: #fff;">
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

<style>
@import '/static/css/me-index.css';
</style>

<script type="ecmascript-6">
export default {
  name: 'my'
}
</script>

