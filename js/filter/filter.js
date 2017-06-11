define(function(require, exports, module){
	Vue.filter('filterPrice',function(str){
		return "￥"+str+"元";
	})
	Vue.filter('itemPrice',function(str){
		return str + "元";
	})
	Vue.filter('itemOrigne',function(str){
		return "门市价："+str + "元";
	})
	Vue.filter('itemSales',function(str){
		return  "已售" + str;
	})
	/*截取字符串长度*/
	Vue.filter('subGoodsStr',function(str){
		if(str.length > 23){
			return str.substr(0, 23)+'...';
		}
		return str;
	})
})