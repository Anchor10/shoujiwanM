
$(function(){
	//幻灯片宽度
	var Wwidth=$(document).width();
	var HalfW=Wwidth/2;
	$(".index_banner,.roll,.roll img,.roll p,.roll a,.pic_box,.line").width(Wwidth-20);
	$(".an_ios_center img").width((Wwidth/2)-20);
	$(".v_roll img,.v_roll p").width((Wwidth/2)-10);
	
	
   //每日一读
	var newwith = (Wwidth-10)/2
	$(".weekly li img").width(newwith-16)
	//游戏视频
	$(".ios_v_roll img,.ios_v_roll p").width((Wwidth/2)-10);
	//弹出菜单
	$(".menu").click(function(event){
		event.stopPropagation();
		if($(".list_menu").css("display")=="none"){
		   $(".list_menu").fadeIn(300);
		   }else{
			  $(".list_menu").fadeOut(300); 
			   }
		})
	$(".list_menu a").click(function(event){
		 event.stopPropagation();
		$(".list_menu").fadeOut(300);
		})
	$(document).click(function(){$(".list_menu").fadeOut(300);})
	//返回顶部
	 $(window).scroll(function () {
		if ($(window).scrollTop() > 0) {
		$(".backtop").fadeIn(400);//当滑动栏向下滑动时，按钮渐现的时间
		} else {
		$(".backtop").fadeOut(200);//当页面回到顶部第一屏时，按钮渐隐的时间
		}
		});
		$(".backtop").click(function () {
		$('html,body').animate({
		scrollTop : '0px'
		}, 200);//返回顶部所用的时间 
	});
	
	//点赞
	$('.ding').click(function(){
		var v = $(this).find('p');
		var i = v.text();
		v.text(++i);
	})
 
})
	//tab切换
	function setTab(name,cursel,n){
		for(i=1;i<=n;i++){
		   var menu=document.getElementById(name+i);
		   var con=document.getElementById("con_"+name+"_"+i);
		   menu.className=i==cursel?"hover":"";
		   con.style.display=i==cursel?"block":"none";
		}
	}

	window.onresize=function(){
	  var Wwidth=$(document).width();
		
		$(".v_roll,.v_pic").width(Wwidth);
		//幻灯片宽度
	    //$(".index_banner,.roll,.roll img,.roll p,.roll a,.pic_box,.line").width(Wwidth-20);
	    $(".an_ios_center img").width((Wwidth/2)-20);
	    $(".v_roll img,.v_roll p").width((Wwidth/2)-10);
		//每日一读
		var newwith = (Wwidth-10)/2;
	    $(".weekly li img").width(newwith-16);
	    //游戏视频
	   $(".ios_v_roll img,.ios_v_roll p").width((Wwidth/2)-10);
		}
		
		
 //控制视频长和宽
 $(function(){  fashsize()  })
 window.onresize=function(){ fashsize()}
   function fashsize(){
     var Wwidth=$(window).width();
      if(Wwidth>310 && Wwidth<350){
          $("embed").width(290);
          $("embed").height(290*0.8);
          }else if(Wwidth>350 && Wwidth<=480){
            $("embed").width(330);
            $("embed").height(330*0.8);  
              }else{
                $("embed").width(500);
                $("embed").height(500*0.8);   
                  }
     }		
		
		
		