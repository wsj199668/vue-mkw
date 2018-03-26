<template>
  <div id="app">
    <div class="header">
      <div class="lf">
        <div class="lf ln_logo"></div>
        <div class="lf">
          <ul class="ln-nav-item">
            <li><router-link to="/kecheng">课程</router-link></li>
            <li><router-link to="">计划</router-link></li>
            <li><router-link to="">分享</router-link></li>
            <li><router-link to="/shequ">社区</router-link></li>
          </ul>
        </div>
      </div>
      <div class="rt">
        <div class="rt ln-app">
          <div class="lf input-group">
            <input type="text" :class="[{bg:ok},inp]" @click=fn1() @blur=fn2() placeholder="请输入想搜索的内容...">
            <div :class="[lf,gro,{bg:ok}]"></div>
          </div>
          <div class="ln-app-down-area lf">
            <router-link to=""><i class=""></i>慕课APP</router-link>
          </div>
          <div class="lf">
            <ul class="ln-nav-item limt">
              <li><a href="javascript:">登录</a></li>
              <li><a href="javascript:">注册</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="bottom">
      <div class="container clearfix">
        <div class="lf bottom_link">
          <ul class="ln_our clear clearfix">
            <li><a href="#" target="_blank">网站首页</a></li>
            <li><a href="#" target="_blank">人才招聘</a></li>
            <li> <a href="#" target="_blank">联系我们</a></li>
            <li><a href="#" target="_blank">高校联盟</a></li>
            <li><a href="#" target="_blank">关于我们</a></li>
            <li> <a href="#" target="_blank">讲师招募</a></li>
            <li> <a href="#" target="_blank">意见反馈</a></li>
            <li> <a href="#" target="_blank">友情链接</a></li>
          </ul>
          <p class="clear ln_copy">Copyright ? 2015 imooc.com All Rights Reserved | 京ICP备 13046642号-2</p>
        </div>
        <div class="rt bottom_netlink">
          <div class="ln_copy_ewm"></div>
            <ul class="ln_bottom_ewm">
              <li><a href="#" class="ln_bottom_weixin"></a></li>
              <li><a href="#" class="ln_bottom_weibo_content"></a></li>
              <li><a href="#" class="ln_bottom_qq"></a></li>
            </ul>
          </div>
        </div>
      <div style="clear: both;"></div>
    </div>
    <div id="GotoTop" class="GotoTop-info">
      <a class="GotoTop-info-weixin" href="javascript:;"></a>
      <a class="GotoTop-info-msg" href="#" target="_blank" id="feedBack"></a>
      <a class="GotoTop-info-app" href="3"></a>
      <a class="GotoTop-info-top" href="javascript:;" style="display: none;" id="backTop"></a>
    </div>
  </div>
</template>
<script src="../static/appVue.js"></script>
<style scoped>
@import url('components/css/index.css');
</style>
