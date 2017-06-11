//我们要干的是什么
//封装一个函数 让某个元素能够动画
//动画：不停地一点一点的改变某个元素的样式
/**
	*dom 就是我们要操作的元素 让它动画
	*dom_properties_json { "width":target, "height": target, "top":target,…… } 就是我们要操作的第一个参数的各种css样式
	*exec_time 执行动画所需要的时间 单位是毫秒值
*/ 
function animate(dom,dom_properties_json,exec_time,callback){
   //第一个 确定元素的现在的状态
   var nowJSON = {};
   //定义帧频率
   var frameNumber = 20;
   //获取定时器需要执行的次数
   var allCount = exec_time/frameNumber;
   console.log(dom_properties_json)
   //定义一个临时变量 用于累计已经执行了多少次
   var count = 0;
   //输出高级浏览器获取的dom的样式对象
   // console.log(window.getComputedStyle(dom))
   //循环遍历dom_properties_json 里面的每个项
   for(var i  in dom_properties_json){
   	//就在这个循环中我们给nowJSON赋值 
   	nowJSON[i] =  parseInt(window.getComputedStyle(dom)[i])
   }
   // console.log(nowJSON)
   //输出
   // console.log(nowJSON);
   //现在已经获取到了dom元素的初识状态
   //那么 与目标值之间的差就获取到了
   // console.log()
   //循环将差值放入一个json
   var changeJSON = {};
   for(var i  in dom_properties_json){
   	 changeJSON[i] = dom_properties_json[i]  - nowJSON[i]
   }
   // console.log("changeJSON",changeJSON)
   //到此为止 我们获取到了差值
   //开启一个定时器 让定时器帮我们不停地改变样式
   var timer = setInterval(function(){
     //累计次数
     count++;
     //更改样式
     for(var i in changeJSON){
      if(i=="opacity"){
        dom.style.opacity = nowJSON[i] + changeJSON[i]*100/allCount * count/100
        console.log(dom.style.opacity)
      }else{
     	  dom.style[i] = nowJSON[i] + changeJSON[i] / allCount * count +"px"; 
      }
     }
     //使用count 与allCount进行比较 
     if(count >= allCount){
     	clearInterval(timer);
     
      for(var i in changeJSON){
        if(i=="opacity"){
          dom.style.opacity = dom_properties_json[i];
        }else{
      	 dom.style[i] = dom_properties_json[i]+"px"; 
        }
      }
        //回调函数
      callback&&callback.call(dom);  
     } 
   },frameNumber)
}