<script src='../../static/kecheng.js'></script>
<template>
  <div class="kecheng">
    <div class="container clearfix">
	    <div class="course-nav-box">
	        <div class="nav-container">
	            <div class="title"><span class="title-allCourse-yang">全部课程:</span></div>
	            <div class="direction">
	                <div class="head">方向：</div>
	                <div class="choice">
	                    <span name="all" class="all current">全部</span>
	                    <span name="fe" class="fe">前端开发</span>
	                    <span name="be" class="be">后端开发</span>
	                    <span name="mobile" class="mobile">移动开发</span>
	                    <span name="data" class="data">数据处理</span>
	                    <span name="photo" class="photo">图像处理</span>
	                </div>
	            </div>
	            <div class="depart">
	                <div class="head">分类：</div>
	                <div class="choice">
						<span v-for="(self,index) in _self.names" v-html="self.name?self.name:self" :id="self.id" :class="{current : index == 0}"></span>
	                </div>
	            </div>
	            <div class="level">
	                <div class="head">难度：</div>
	                <div class="choice">
	                    <span name="all" class="current">全部</span>
	                    <span name="fe">初级</span>
	                    <span name="be">中级</span>
	                    <span name="mobile">高级</span>
	                </div>
	            </div>
        	</div>
    	</div>
    	<div class="newCourse"><span class="news">最新</span><span class="news">最热</span></div>
    	<div class="container">
			<div class="course-zz">
				<div class="course-list">
					<ul class="js-course-lists">
						<li v-for="list in _self.list">
							<a href="">
								<div class="course-list-img">
									<img :src="'./static/'+list.image" alt="">
								</div>
								<h5><span v-html="list.title"></span></h5>
								<div class="tips">
									<p class="text-ellipsis" v-html="list.content"></p>
									<span class="l" v-html="list.info"></span>
									<span class="l ml20" v-html="list.student"></span>
								</div>
								<span class="time-label" v-html="list.time"></span>
								<b class="follow-label">跟我学</b>
							</a>
						</li>
					</ul>
				</div>
			</div>
    	</div>
	</div>
	<div class="course-page-num clear">
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
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('./css/kecheng.css');
</style>
