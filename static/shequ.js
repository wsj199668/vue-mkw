export default {
  name: 'shequ',
  data:function () {
    return {
      msg: '这是社区页',
      newQ:'',
      Con:'嗯～～，这个提问大家都在考虑......',
      style1:'color: rgb(0, 179, 59)',
      style2:'',
      hoticon:'hoticon'
    }
  },
  beforeCreate: function () {
    	var url="json.jsp";
    	var _self=this;
      $.get('./static/json/leifeng.txt',function(leifeng){
        _self.leifeng=JSON.parse(leifeng).leifengqusetion;
        console.log(_self.leifeng)
      });
      $.get('./static/json/hot.txt',function(hot){
        _self.hot=JSON.parse(hot).hotqusetion;
      });
      $.get('./static/json/label.txt',function(lable){
        _self.label=JSON.parse(lable).label;
      });
    	$.get('./static/json/weda.txt',function(data){
        _self.newQ=JSON.parse(data).newQ;
    	});
  },
}