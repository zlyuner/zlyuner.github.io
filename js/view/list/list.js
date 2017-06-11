define(function(require,exports,module){
	require('view/list/list.css');
	require('filter/filter');
	var Util = require('util/util');

	var List = Vue.extend({
	// 定义props，将搜索的字段注册到组件数据中
		props:['compSearch'],
		template:Util.tpl('tpl_list'),
		data:function(){
			return {
				orders:[
					{id: 'price', text: '价格排序'},
					{id: 'sales', text: '销量排序'},
					{id: 'evaluate', text: '好评排序'},
					{id: 'cutPrice', text: '优惠排序'}
				],
				list:[]
			}
		},
		created:function(){
			//通知父组件显示搜索框
			this.$dispatch('showSearch',false);
			this.$dispatch('ifShowSearch',true);
			var me = this;
			var key = this.$parent.query[0];
			var id = this.$parent.query[1];
			// console.log(key,id)
			Util.ajax('data/list.json?'+key+'='+id,function(res){
				if(res && res.data){
					me.list = res.data;
				}
			})
		},
		// 定义方法
		methods:{
			loadMore:function(){
				this.list = [].concat(this.list,this.others);
				this.others = [];
				// console.log(this.others)
			},
			productSortBy:function(id){
				//获取并修改数组
				if(id === "cutPrice"){
					//按原价-现价结果排序
					this.list.sort(function(a,b){
						var aCurtPrice = a.orignPrice - a.price;
						var bCurtPrice = b.orignPrice - b.price;
						// return aCurtPrice - bCurtPrice;//升序
						return bCurtPrice - aCurtPrice;//降序
					})
				}else if(id === "price"){
					this.list.sort(function(a,b){
						return a[id] - b[id];//价格按升序
					})
				}else{
					this.list.sort(function(a,b){
						// return a[id] - b[id];//升序
						return b[id] - a[id];//降序
					})
				}
			}
		}

	});
	Vue.component('list',List);

	module.exports = List;
})

