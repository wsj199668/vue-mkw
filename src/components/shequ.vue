<script src='../../static/shequ.js'></script>
<template>
  <div class="shequ">
    <div class="container clearfix ">
		<div class="left centerLeft mr-top">
          <div class="ty_mksq">
          	<img src="../../static/image/ln_mksq.jpg" alt="" class="left mr-top">
            <ul class="ty_good_anwser_content_noe1 left">
            	<li><a href="javascript:;">课程回答</a></li>
                <li><a href="javascript:;">技术回答</a></li>
                <li><a href="javascript:;">技术分享</a></li>
                <li><a href="javascript:;">活动建议</a></li>
            </ul>
          </div>
          <div class="ty_good_anwser">
          	<strong class="left">全部回答</strong>
            <ul class="ty_good_anwser_content left">
            	<li><a href="javascript:;">课程回答</a></li>
                <li><a href="javascript:;">技术回答</a></li>
                <li><a href="javascript:;">技术分享</a></li>
                <li><a href="javascript:;">活动建议</a></li>
            </ul>
          </div>
          <div class="newCourse clear"><span class="active">最新</span><span>热门</span><span>等待回复</span></div>
      	  <div id="left">
              <div id="comQl" class="comQl"  v-for="newQ in _self.newQ">
                  <div class="comQl-user">
                    <a href="#">
                      <div class="comQl-user-pic"><img :src="'./static/'+newQ.pic" alt=""></div>
                    </a>
                    <span class="comQl-user-nm"><a href="" v-html="newQ.q_name"></a></span>
                  </div>
                  <div class="comQl-queAns">
                    <h2 class="comQl-queAns-Q">
                      <span class="comQl-queAns-Q-tag wjt_ty_margin" v-html="newQ.q_rank"></span>
                      <a class="comQl-queAns-Q-con" href="" v-html="newQ.title"></a>
                    </h2>
                    <div class="comQl-queAns-A">
                      <span class="comQl-queAns-A-tag" v-html="newQ.tag_answer"></span>
                      <a href="javascript:;" class="comQl-queAns-A-pic wjt_ty_margin_small" v-if="newQ.pic_answer"><img :src="'./static/'+newQ.pic_answer" alt=""></a>
                      <a class="comQl-queAns-A-nm" v-html="newQ.nm_answer+':'" v-if="newQ.answer"></a>
                      <span class="comQl-queAns-A-con" v-html="newQ.answer?newQ.answer:Con"></span>
                    </div>
                    <div class="comQl-queAns-O">
                      <span class="comQl-queAns-O-time" v-html="'提问时间：'+newQ.sub_time"></span>
                      <a class="comQl-queAns-O-tag" v-for="tag in newQ.tag" v-html="tag"></a>
                      <a class="comQl-queAns-O-src" href="" v-html="'源自：'+newQ.src_question"></a>
                      <a class="comQl-queAns-O-course" href="">此课问答</a>
                    </div>
                  </div>
                  <div class="comQl-record">
                    <div class="comQl-record-ans wjt_left" :style="newQ.num_answer>0?style1:style2">
                      <span class="comQl-record-ans-num" v-html="newQ.num_answer"></span>
                      <span class="comQl-record-ans-con">回答</span>
                    </div>
                    <div class="comQl-record-scan  wjt_left">
                      <span class="comQl-record-scan-num" v-html="newQ.num_scan"></span>
                      <span class="comQl-record-scan-con">浏览</span>
                    </div>
                  </div>
              </div>
          </div>
      	  <div class="course-page-num">
 	    <div class="pageCenter">
        <span class="page">首页</span>
        <span class="page">上一页</span>
        <span class="pageList class=" page="">
          <ul>
              <li class="current">1</li>
              <li class="page">2</li>
              <li class="page">3</li>
              <li class="page">4</li>
              <li class="page">5</li>
              <li class="page">6</li>
          </ul>
        </span>
        <span class="page">下一个</span>
        <span class="page">尾页</span>     
      </div>
			 </div>
        </div>
        <div class="centerRight right mr-top">
        <!--新问题标签部分-->
            <div id="label">
              <div id="newques-container">
                <a href="#" class="newques-btn ">新问题</a>
              </div>
              <div class="newques-label mr-big">
                <div class="newques-container-label-body">
                  <a href="javascript:"  class="hot-label" v-for="label in _self.label" v-html="label"></a>
                </div>
              </div>
            </div>
        <!--热门排行-->
            <div id="hot-list">
              <div class="hot-list-box">
                <h2 class="hot-list-box-title">一周热门问题</h2>
              </div>
              <div class="hot-list-body">
                <ul class="weekly-hot">
                  <li v-for="(hot,index) in _self.hot"><em :class="[hoticon,('hot'+(index+1))]">热</em>
                    <a href="#" target="_blank" class="hottalk" v-html="hot.hottalk"></a>
                    <i class="rankingnum">{{hot.rankingnum}}<br>回答</i>
                  </li>
                </ul>
              </div>
            </div>
        <!--雷锋排行榜-->
            <div id="leifeng-list">
              <div class="lei-list-box mr-top"><h2 href="#" class="lei-list-box-title">一周回答雷锋榜</h2></div>
              <ul class="leifeng-list-body">
                <li v-for="(leifeng,index) in _self.leifeng">
                <a href="#" class="roll-head left" target="_blank">
                <img :src="'./static/image/'+(index+1)+'.jpg'" width="40" height="40"></a>
                <div class="left">
                <a href="#" target="_blank" class="rankingnickname" v-html="leifeng.rankingnickname">
                </a>
                <em class="archieve" v-html="leifeng.archieve"></em>
                </div><i class="rankingnum">{{leifeng.rankingnum}}<br>回答</i></li>
              </ul>
            </div>
        </div>
     </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./css/shequ.css');
</style>