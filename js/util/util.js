define(function (require, exports, module){
	// 定义一些工具方法
	var Util = {
		/**
		 * 获取模板内容
		 * @id  	元素的id
		 * return 	模板内容
		 **/ 
		tpl: function (id) {
			return document.getElementById(id).innerHTML;
		},
		/**
		 * 获取异步数据的方法
		 * @url 	请求地址
		 * @fn 		成功时候的回调函数
		 ***/
		ajax: function (url, fn) {
			// 创建xhr对象
			var xhr = new XMLHttpRequest();
			// 监听事件
			xhr.onreadystatechange = function () {
				// 监听readystate
				if(xhr.readyState === 4) {
					// 监听 status
					if (xhr.status === 200) {
						// console.log(xhr)
						// 将解析 的数据传递给fn
						fn && fn(JSON.parse(xhr.responseText))
					}
				}
			}
			// 打开请求
			xhr.open('GET', url, true)
			// 发送数据
			xhr.send(null)
		}
	}
	module.exports = Util;
})