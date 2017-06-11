define(function(require,exports,module){
	/*商品分类列表*/
	require('view/category/category.css');
	require('filter/filter');
	var Util = require('util/util');
	var Category = Vue.extend({
		props:['compSearch'],
		//通知父组件隐藏轮播图和分类列表
		template:Util.tpl('tpl_category'),
		data:function(){
			return {
				list:[]
			}
		},
		created:function(){
			// 通知父组件显示搜索框
			this.$dispatch('showSearch',false);
			this.$dispatch('ifShowSearch',true);
			var me = this;
			Util.ajax('data/category.json',function(res){
				if(res && res.data){
					me.list = res.data;
				}
			})
		}
	})
	Vue.component('category',Category);
	module.exports = Category;
})