export default {
  name: 'kecheng',
  data: function (){
    return {
      msg: '这是课程页',
      names: '',
      list: ''
    }
  },
  beforeCreate: function () {
    	var url="json.jsp";
    	var _self=this;
    	$.get('./static/json/all.json',function(data){
        _self.names = data.names;
        _self.list = data.list;
    	});
  },
  updated:function () {
    var url="json.jsp";
    var _self=this;
    var choice0 = $('.choice:eq(0) span');
    var choice1 = $('.choice:eq(1) span');
    var choice2 = $('.choice:eq(2) span');
    var types = {
      "fe":["HTML/CSS", "JavaScript", "Css3","Html5","Jquery","AngularJS","Bootstrap","Node.js","WebApp","前端工具"],
      "be":["PHP", "JavaEE", "Linux", "C#", "Python", "C++",  "Go"],
      "mobile": ["Android", "IOS","Unity 3D","Cocos2d-x"],
      "photo": ["PhotoShop", "Maya", "Promiere"],
      "data":["MySQL", "MongoDB", "云计算", "大数据", "Oracle", "SQLServer"]
    };
    choice0.bind('click',function(){
      $(this).addClass('current').siblings('span').removeClass('current');
      var nm=$(this).attr('name');
      $.get('./static/json/'+nm+'.json',function(data){
        _self.names=data.names;
        _self.list = data.list;
        $('.choice span').unbind('click')
      });
      choice1.eq(0).addClass('current').siblings('span').removeClass('current');
      choice2.eq(0).addClass('current').siblings('span').removeClass('current');
    });
    choice1.bind('click',function(){
      choice2.eq(0).addClass('current').siblings('span').removeClass('current');
      $(this).addClass('current').siblings('span').removeClass('current');
      var nm=$(this).attr('id');
      $.get('./static/json/'+nm+'.json',function(data){
        _self.list = data.list;
        $('.choice span').unbind('click');
      });
      for(var i in types){//判断目前店的在哪个“方向”中，在哪个“方向”让哪个亮
        var str = $(this).html();
        if($.inArray(str,types[i])>-1){
          $.get('./static/json/'+i+'.json',function(data){
            _self.names = data.names;
            $('.choice span').unbind('click');
            $.each(_self.names,function(i){
              if(str==_self.names[i].name){
                choice1.eq(i).addClass('current').siblings('span').removeClass('current');
              }
            })
          });
          $("."+i).addClass("current").siblings('span').removeClass("current");//让“方向”亮
        }
      }
    });
    choice2.bind('click',function(){
      $(this).addClass('current').siblings('span').removeClass('current');
      var nm=$(this).attr('name');
      $.get('./static/json/'+nm+'.json',function(data){
        _self.list = data.list;
        $('.choice span').unbind('click')
      });
    });
  }
}