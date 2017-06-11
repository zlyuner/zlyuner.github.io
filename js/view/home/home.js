define(function(require,exports,module){
	/*首页*/
	// 依赖样式，过滤器，Util
	require('view/home/home.css')
	require('filter/filter');
	var Util = require('util/util');
	var Util = require('util/util');
	var Home = Vue.extend({
		template:Util.tpl('tpl_home'),
		data:function(){
			return {
				mostFavo:{},
				worthBuy:{},
				topic:{},
				items:[]
			}
		},
		created:function(){
			// 通知父组件显示搜索框
			this.$dispatch('showSearch',true);
			this.$dispatch('ifShowSearch',true);
			var me = this;
			Util.ajax('data/home.json',function(res){
				// console.log(res)
				if(res && res.data){
					me.mostFavo = res.data.mostFavo;
					me.worthBuy = res.data.worthBuy;
					me.topic = res.data.topic;
					me.items = res.data.items;
				}
				// console.log(me.list)
			})

		}
	});
	Vue.component('home',Home);
	//暴露接口
	module.exports = Home;
})