define(function(require,exports,module){
	require('view/goods/goods.css');
	require('filter/filter');
	var Util = require('util/util');

	/*商品列表部分*/
	var Goods = Vue.extend({
		props:['compSearch'],
		template:Util.tpl('tpl_goods'),
		data:function(){
			return {
				list:[],
				others:[]
			}
		},
		created:function(){
			this.$dispatch('showSearch',false);
			this.$dispatch('ifShowSearch',true);
			var me = this;
			var key = this.$parent.query[0];
			var type = parseInt(this.$parent.query[1]);
			Util.ajax('data/topic.json',function(res){
				if(res && res.data){//获取数据
					// me.list = res.data;
					if(type){
						var arr = res.data;
						for(var i=0;i<arr.length;i++){
							if(arr[i].type === type){
								me.list.push(arr[i]);
							}else{
								me.others.push(arr[i]);
							}
						}
					}else{
						me.list = res.data;
					}
					
				}
			})
		}
	})

	Vue.component('goods',Goods);
	module.exports = Goods;
})