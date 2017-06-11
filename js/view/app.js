// 定义vue实例化对象模块
define(function(require,exports,module){
	// 引入list模块，detail模块...各个模块，app样式
	var home = require('view/home/home');
	var category = require('view/category/category');
	var list = require('view/list/list');
	var goods = require('view/goods/goods');
	var detail = require('view/detail/detail');
	require('view/app.css');
	var app = new Vue({
		el:'#app',
		data:{
			view:'home',
			query:[],
			search:'',
			sendSearch:'',
			//是否显示搜索框
			isShow:true,
			ifShow:false,
			ifSearch:true
		},
		methods:{
			goSearch:function(){
				this.sendSearch = this.search;
			},
			goBack:function(){
				history.go(-1);
			},
			goTop:function(){
				window.scrollTo(0, 0);
			}
		},
		// 订阅消息 是否显示轮播图和分类选项
		events:{
			showSearch:function(val){
				this.isShow = val;
			},
			ifShowSearch:function(val){
				this.ifSearch = val;
			}
		}
	})
	//暴露接口
	module.exports = app;
})