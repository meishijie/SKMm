$(document).ready(function(){
audio.pause();	

winW=$(window).width();	
winH=$(window).height();

$("body").css({"height":winH})







/*导航*/


$(".nav").find("li").hover(function(){
	$(this).addClass("nav_now")
	$(this).find(".nav_box").stop().animate({"top":-30})
	
},function(){
	$(this).find(".nav_box").stop().animate({"top":0})
	$(this).removeClass("nav_now")
})

/*声音的控制*/
$(".music_on").on("click",function(){$(".music_off").css({"display":"block"})})
$(".music_off").on("click",function(){$(".music_off").css({"display":"none"})})

$(".music_control").on("click",function(){
	var audio = document.getElementById("audio");
	
	if(audio!==null){             
		if(!audio.paused)  
		{                 
			audio.pause(); 
		} else{
			audio.play();
			
		}

		
    }  
	
})





$("#cloud").find("img").eq(0).css({"opacity":1})


/*根据锚点跳转指定板块*/
arg=this.location.href.split("#");
val=arg[1];
if(val=="anenst")
{$(".anenst").click();}
if(val=="work")
{
	//$(".work").click();

}
if(val=="client")
{//$(".client").click();
}
if(val=="yfz")
{//$(".yfz").click();
}
if(val=="bolgs")
{$(".bolgs").click();}
if(val=="touch")
{//$(".touch").click();
}

/*关于主营特效*/
$(".about_service_one,.about_service_two,.about_service_three,.about_service_four,.about_service_five").hover(function(){
	$(this).find(".service_bg").stop().animate({"opacity":1})
	
},function(){
	$(this).find(".service_bg").stop().animate({"opacity":0})
	
})




/*案例大图特效*/
$(".trigger").hover(function(){
	$(this).parent().css({"zIndex":3,"opacity":0})
	
	$(this).parent().siblings(".work_big").css({"display":"block"}).stop().animate({"opacity":1},300)

},function(){

$(this).parent().css({"zIndex":1,"opacity":1})

$(this).parent().siblings(".work_big").css
$(this).parent().siblings(".work_big").css({"display":"none"}).stop().animate({"opacity":0},300,function(){
	
	
})

})


/*案例翻页*/
page_number=$(".page_number").find("li").size();
$(".page_number").css({"width":page_number*50})
$(".page_number").find("li").eq(0).addClass("number_now")


$(".work_prev,.work_next").hover(function(){
	$(this).find(".work_page_bg").stop().animate({"opacity":1})
	
},function(){
	$(this).find(".work_page_bg").stop().animate({"opacity":0})
	
})


/*案例显示隐藏*/
$(".work_main").eq(0).addClass("work_appear");



//案例点击页码
$(".page_number").find("li").on("click",function(){
	number_now=$(this).index();
	$(this).addClass("number_now").siblings().removeClass("number_now");
	$(".work_main").eq(number_now).addClass("work_appear").siblings().removeClass("work_appear");
	$(".work").click();
})

//案例点击前后按钮
$(".work_prev").on("click",function(){
	work_appear=$(".work_appear").index()-1;
	

	if(work_appear==0)
	{}
	else{
		$(".work_main").eq(work_appear).prev().addClass("work_appear").siblings().removeClass("work_appear");
		$(".page_number").find("li").eq(work_appear).prev().addClass("number_now").siblings().removeClass("number_now");
		
	}
	$(".work").click();
})
$(".work_next").on("click",function(){
	work_appear=$(".work_appear").index()-1;
	workSize=$(".work_main").size();
	workSize1=$(".work_main").size()-1;
	
	if(work_appear==3  || workSize==1 || work_appear==workSize1)
	{
		//alert('aa');
		
	}
	else{
		$(".work_main").eq(work_appear).next().addClass("work_appear").siblings().removeClass("work_appear");
		$(".page_number").find("li").eq(work_appear).next().addClass("number_now").siblings().removeClass("number_now");
	}
	
	$(".work").click();
})



var ulLi=$(".review").find("ul").position().left;
if(ulLi==0)
{
	$(".client_page_left").addClass("bianmei")
}
else
{$(".client_page_left").removeClass("bianmei")}




$(".client_page_left").hover(function(){//指向右侧按钮定时器
clientTimer = setInterval(clientLeft,500);
},function(){
	clearInterval(clientTimer);
})
$(".client_page_right").hover(function(){//指向左侧按钮定时器
clientTimer = setInterval(clientRight,500);
},function(){
	clearInterval(clientTimer);
})

clientSum=$(".client_list").size()*142;
if(clientSum>852)
{
	$(".client_page_right").css({"display":"block"})
}else{
	$(".client_page_right").css({"display":"none"})
}

$(".client_cnt").find("li").hover(function(){
	$(this).find(".baseimg").stop().animate({"opacity":0},200)
	$(this).find(".baseimg1").stop().animate({"opacity":1},200)
	
	
},function(){
	$(this).find(".baseimg1").stop().animate({"opacity":0},200)
	$(this).find(".baseimg").stop().animate({"opacity":1},200)
	
})



/*一番一站*/
$(".week").hover(function(){
	$(this).find(".week_bg").stop().animate({"opacity":0.5})
	
},function(){
	$(this).find(".week_bg").stop().animate({"opacity":0})
	
})


/*博客按钮特效*/
$(".bolg_btn").hover(function(){
	$(".bolg_btn_box1,.bolg_btn_box2").stop().animate({"opacity":1,"left":0,"top":0},200)
},function(){
	$(".bolg_btn_box1").stop().animate({"opacity":0,"left":20,"top":-20},200)
	$(".bolg_btn_box2").stop().animate({"opacity":0,"left":-20,"top":20},200)
})

$(".bolg_list_btn").hover(function(){
	$(this).find(".bolg_list_btn_bg").stop().animate({"opacity":1},500)
},function(){
	$(this).find(".bolg_list_btn_bg").stop().animate({"opacity":0},200)
})

$(".bolg_list_cnt").find("li").hover(function(){
	$(this).find(".bolg_time_bg").stop().animate({"opacity":1},300)
	
},function(){
	$(this).find(".bolg_time_bg").stop().animate({"opacity":0},300)
	
})



/*联系我们线条*/
/*small*/
$(".contact_big_list").hover(function(){
	$(this).addClass("visible").siblings().removeClass("visible");
},function(){
	$(".visible").removeClass("visible");
})
/*big*/
$(".call_big_list").hover(function(){
	$(this).addClass("visible").siblings().removeClass("visible");
},function(){
	$(".visible").removeClass("visible");
})




$(".stand_main").hover(function(){
	$(".stand_top_line").stop().animate({"height":6},300)
	$(".stand_right_line").stop().animate({"width":6},300)
	$(".stand_bottom_line").stop().animate({"height":6},300)
	$(".stand_left_line").stop().animate({"width":6},300)
	
},function(){
	$(".stand_top_line").stop().animate({"height":0},300)
	$(".stand_right_line").stop().animate({"width":0},300)
	$(".stand_bottom_line").stop().animate({"height":0},300)
	$(".stand_left_line").stop().animate({"width":0},300)
	
})


$(".review").find("li").hover(function(){
	$(this).stop().animate({"marginTop":15},200)
},function(){
	$(this).stop().animate({"marginTop":20},200)
})


$(".yfz_right").on("click",function(){
	right();
})
$(".yfz_left").on("click",function(){
	left();
})







//联系我们点击事件
/*small*/

$(".contact_big_one").hover(function(){
	$(".contact_list_small").find("li").eq(0).addClass("contact_now").siblings().removeClass("contact_now");
	$(".contact_map").find("img").eq(0).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".contact_Area_pic").find("img").eq(0).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".contact_Area_letter").find("img").eq(0).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".contact_Area_txt").find("img").eq(0).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".contact_Area_address").eq(0).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
},function(){})

$(".contact_big_two").hover(function(){
	$(".contact_list_small").find("li").eq(1).addClass("contact_now").siblings().removeClass("contact_now");
	$(".contact_map").find("img").eq(1).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".contact_Area_pic").find("img").eq(1).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".contact_Area_letter").find("img").eq(1).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".contact_Area_txt").find("img").eq(1).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".contact_Area_address").eq(1).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
},function(){})

$(".contact_big_three").hover(function(){
	$(".contact_list_small").find("li").eq(2).addClass("contact_now").siblings().removeClass("contact_now");
	$(".contact_map").find("img").eq(2).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".contact_Area_pic").find("img").eq(2).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".contact_Area_letter").find("img").eq(2).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".contact_Area_txt").find("img").eq(2).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".contact_Area_address").eq(2).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
},function(){})








/*big*/

$(".call_big_one").hover(function(){
	$(".call_list_small").find("li").eq(0).addClass("call_now").siblings().removeClass("call_now");
	$(".call_map").find("img").eq(0).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".call_Area_pic").find("img").eq(0).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".call_Area_letter").find("img").eq(0).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".call_Area_txt").find("img").eq(0).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".call_Area_address").eq(0).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
},function(){})

$(".call_big_two").hover(function(){
	$(".call_list_small").find("li").eq(1).addClass("call_now").siblings().removeClass("call_now");
	$(".call_map").find("img").eq(1).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".call_Area_pic").find("img").eq(1).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".call_Area_letter").find("img").eq(1).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".call_Area_txt").find("img").eq(1).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".call_Area_address").eq(1).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
},function(){})

$(".call_big_three").hover(function(){
	$(".call_list_small").find("li").eq(2).addClass("call_now").siblings().removeClass("call_now");
	$(".call_map").find("img").eq(2).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".call_Area_pic").find("img").eq(2).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".call_Area_letter").find("img").eq(2).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".call_Area_txt").find("img").eq(2).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
	$(".call_Area_address").eq(2).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0})
},function(){})





/*API*/
$(".index_zxzx").hover(function(){
	$(this).stop().animate({"right":0},300)
	
},function(){
	$(this).stop().animate({"right":-80},300)
})










/*视觉差*/
$(document).mousemove(function(e) {
	//e.pageX e.pageY
	var moveForce = -50;
	var rotateForce = -70;
	var docX = $(document).width();
	var docY = $(document).height();
	
	var moveX = (e.pageX - docX/2) / (docX/2) * moveForce;
	var moveY = (e.pageY - docY/2) / (docY/2) * moveForce;
	
	
	$('.work_title,.item1,.item3,.item5,.item7,.item9,.item11,.item13,.item15,.item17,.item19,.item21,.item23,.item25,.item27,.item28,.item30,.about_Zeus,.client_title,.client_left,.contact_Area_pic,.contact_Area_txt,.contact_map,.call_Area_pic,.call_Area_txt,.call_map,.stand_title,.bolg_right1,.about_Zeus1,.about_Adam1')
		.css("transform", "translate("+moveX+"px,"+moveY+"px)")
		.css("-ms-transform", "translate("+moveX+"px,"+moveY+"px)")
		.css("-webkit-transform", "translate("+moveX+"px,"+moveY+"px)")
		.css("-o-transform", "translate("+moveX+"px,"+moveY+"px)")
		.css("-moz-transform", "translate("+moveX+"px,"+moveY+"px)");
		
	$('.ratio,.item2,.item6,.item16,.about_Adam,.client_right,.contact_title,.bolg_left1')
		.css("transform", "translate("+(-moveX)+"px,"+(-moveY)+"px)")
		.css("-ms-transform", "translate("+(-moveX)+"px,"+(-moveY)+"px)")
		.css("-webkit-transform", "translate("+(-moveX)+"px,"+(-moveY)+"px)")
		.css("-o-transform", "translate("+(-moveX)+"px,"+(-moveY)+"px)")
		.css("-moz-transform", "translate("+(-moveX)+"px,"+(-moveY)+"px)");
		
	

	var smallX = (e.pageX - docX/0.5) / (docX/0.5) * moveForce;
	var smallY = (e.pageY - docY/0.5) / (docY/0.5) * moveForce;

		$('.cdc_brief,.item4,.item10,.item12,.item22,.item18,.item24,.cdc,.yfz_bg,.bolg_title_pic,.bolg_pic_bg')
		.css("transform", "translate("+smallX+"px,"+smallY+"px)")
		.css("-ms-transform", "translate("+smallX+"px,"+smallY+"px)")
		.css("-webkit-transform", "translate("+smallX+"px,"+smallY+"px)")
		.css("-o-transform", "translate("+smallX+"px,"+smallY+"px)")
		.css("-moz-transform", "translate("+smallX+"px,"+smallY+"px)");
		
		$('.bolg_pic,.item8,.item14,.item20,.item29,.item26,.client_water,.bolg_top1,.L_left1,.L_right1')
		.css("transform", "translate("+smallY+"px,"+smallX+"px)")
		.css("-ms-transform", "translate("+smallY+"px,"+smallX+"px)")
		.css("-webkit-transform", "translate("+smallY+"px,"+smallX+"px)")
		.css("-o-transform", "translate("+smallY+"px,"+smallX+"px)")
		.css("-moz-transform", "translate("+smallY+"px,"+smallX+"px)");

	
		
	
		
		
		
		
})




//L_title

$(".about_Zeus1").css({"left":winW*0.27*-1-200,"top":winW*0.27/1366*768*-1+210,"width":winW*0.27})
$(".about_Adam1").css({"right":winW*0.27*-1+200,"top":winW*0.27/1366*768*-1+210,"width":winW*0.27})
$(".about_Adam2").css({"width":winW*0.27})

$(".L_title").css({"left":winW*0.13*-1-40,"top":winW*0.27/205*38*-1-220,"width":winW*0.1})
$(".cdc").css({"left":500,"top":320})
//$(".item21").css({"left":700,"top":300})

/*页面重布局开始*/
$(window).resize(function() {
	winW=$(window).width();	
	winH=$(window).height();

$(".about_Zeus1").css({"left":winW*0.27*-1-200,"top":winW*0.27/1366*768*-1+210,"width":winW*0.27})
$(".about_Adam1").css({"right":winW*0.27*-1+200,"top":winW*0.27/1366*768*-1+210,"width":winW*0.27})
$(".about_Adam2").css({"width":winW*0.27})

$(".L_title").css({"left":winW*0.13*-1-40,"top":winW*0.27/205*38*-1-220,"width":winW*0.1})
$(".cdc").css({"left":500,"top":320})
//$(".item21").css({"left":700,"top":300})




});
//页面重布局结束

time=setInterval(mouse,500);
})
function right(){//指向右侧按钮执行
	if (!$(".review").find("ul").is(":animated")){
	size=$(".review").find("li").size();
	ulL=$(".review").find("ul").position().left;
	sum=(size-3)*96*-1;
	if(ulL>sum)
	{
		$(".review").find("ul").stop().animate({"left":ulL-288},500)
		
	}
	
	
	}	
}
function left(){//指向左侧按钮执行
	if (!$(".review").find("ul").is(":animated")){
	ulL=$(".review").find("ul").position().left;
	if(ulL<0)
	{
		$(".review").find("ul").stop().animate({"left":ulL+288},500)
		
	}
	
	
	}	
}
function clientLeft(){
	clientU=$(".client_cnt").find("ul");
	clientP=clientU.position().left;
	 if (!clientU.is(":animated")){
		if(clientP<0)
		{
			$(".client_cnt").find("ul").stop().animate({"left":clientP+142})
			$(".client_page_right").css({"display":"block"})
		}
		else{
			$(".client_page_left").css({"display":"none"})
		}

	 }
	 
}

function clientRight(){
	clientS=$(".client_list").size()-6;
	clientSum=clientS*142*-1;
	clientU=$(".client_cnt").find("ul");
	clientP=clientU.position().left;
	 if (!clientU.is(":animated")){
		if(clientP>clientSum-120)
		{
			$(".client_cnt").find("ul").stop().animate({"left":clientP-142})
			$(".client_page_left").removeClass("bianmei")
			$(".client_page_left").css({"display":"block"})
		}else{
			$(".client_page_right").css({"display":"none"})
			
		}
	 }
}
function mouse(){
	//$(".mouse_cnt").animate({"top":10,"opacity":1},600).animate({"top":20,"opacity":0},600).animate({"top":5,"opacity":0},200)
}