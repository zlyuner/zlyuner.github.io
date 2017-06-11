//定义路由
define(function(require,exports,module){
	var app = require('view/app')
	function route(){
	// var a = $('.topBar .search').val('');
	var hash = location.hash.slice(1).replace(/^\//,'').split('/');
	var map = {
		home:true,
		category:true,
		list:true,
		goods:true,
		detail:true
	}
	if(map[hash[0]]){
		app.view = hash[0];
	}else{
		app.view = 'home';
	}
	app.query = hash.slice(1);
	// console.log(app.query)
}

/*轮播图*/
var mySwiper = new Swiper(".banner .swiper-container",{  
        direction:"horizontal",/*横向滑动*/  
        loop:true,/*形成环路（即：可以从最后一张图跳转到第一张图*/  
        pagination:".banner .swiper-pagination",/*分页器*/  
        autoplay : 2000,
        autoplayDisableOnInteraction : false  
    })

//绑定事件
window.addEventListener('hashchange', route);
window.addEventListener('load', route);
window.addEventListener('scroll', function(){
	var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	if(scrollTop > 300){//显示
		app.ifShow = true;
	}else{
		app.ifShow = false;
	}
});

	// 暴漏接口
	module.exports = route;
})