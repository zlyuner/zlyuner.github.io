define(function(require,exports,module){
	require('view/detail/detail.css');
	require('filter/filter');
	var Util = require('util/util');

	var Detail = Vue.extend({
		template:Util.tpl('tpl_detail'),
		data:function(){
			return {
				data:{}
			}
		},
		created:function(){
			//通知父组件隐藏搜索框
			this.$dispatch('showSearch',false);
			this.$dispatch('ifShowSearch',false);
			var id = this.$parent.query[0];
			var me = this;
			Util.ajax('data/product.json?id='+id,function(res){
				if(res && res.data){
					me.data = res.data;
					// console.log(me);
				}
				//加载轮播图
				var swiper = new Swiper(".tp_detail .swiper-container",{  
			        direction:"horizontal",/*横向滑动*/  
			        loop:true,/*形成环路（即：可以从最后一张图跳转到第一张图*/  
			        pagination:".tp_detail .swiper-pagination",/*分页器*/  
			        autoplay : 2000,
			        autoplayDisableOnInteraction : false  
			    })

				/*商品详情页标签切换*/
				$(function() {
				    var aBtn = $('.tab-item');
				    var aDiv = $('.tabpanel-text');
				    aBtn.bind("click",function() {
				        $('.tab-item').removeClass('active')
				        $(this).addClass('active')
				        aDiv.hide();
				        aDiv.eq($(this).index()).show();
				        return;
				    })
				})
			})
		}
	})
	Vue.component('detail',Detail);



	module.exports = Detail;
})