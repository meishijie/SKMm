function rotateship(rotatestep){
	
	rotatestep = rotatestep/3;
	var opacityspeed = 700;
	
	if (rotatestep >= 0 && rotatestep <= 49) {
		$("#cloud").css({ top: 95, left: 750 });
	
			$(".mouse").css({"display":"block"})
			
	}
	else if (rotatestep >= 50 && rotatestep <= 99) {
		$("#cloud").css({ top: 95, left: 600 });
		$(".mouse").css({"display":"none"})
		
		
		$("#cloud").css({"display":"none"})
		
	}
	else if (rotatestep >= 100 && rotatestep <= 149) {
		$("#cloud").css({ top: 95, left: 450 });
			$("#cloud").css({"display":"block"})
		
		
			//新路径 关于进场***
				$(".about_Zeus").stop().animate({"right":1920-1920/3.5-400-winW*0.4,"top":1080-1080/3-100-winW*0.4/1028*725,"opacity":1},1000)
				$(".about_Adam").stop().animate({"left":1920-1920/3.5-500-winW*0.41,"bottom":1080-1080/3-220-winW*0.41/790*533,"opacity":1},1000)
				$(".cdc").stop().animate({"opacity":1},1000)
				
				$(".service_long").stop().animate({"left":0,"opacity":1},800)
				$(".service_short_one").stop().animate({"left":279,"opacity":1},800)
				$(".service_short_two").stop().animate({"left":378,"opacity":1},800)
				$(".service_short_three").stop().animate({"left":479,"opacity":1},800)
				$(".service_short_four").stop().animate({"left":575,"opacity":1},800)
				$(".about_service_one,.about_service_two,.about_service_three,.about_service_four").stop().animate({"top":36,"opacity":1},800)
				$(".cdc_brief,.about_brief1,.about_brief2").stop().animate({"opacity":1})
				
			
			//新路径 案例反向出场***
			$(".works").rotate({animateTo:90, duration: opacityspeed}); //旋转
			$(".works").stop().animate({ opacity: 0, top: 600, left: 0 }, opacityspeed ); //渐变移动
			
			

	}
	else if (rotatestep >= 150 && rotatestep <= 199) {
		$("#cloud").css({ top: 95, left: 300 });
		//$("#cloud").css({"opacity":0})
			

			
	}
	else if (rotatestep >= 200 && rotatestep <= 249) {
		$("#cloud").css({ top: 95, left: 150 });
		$("#cloud").rotate({ angle:0 });
		//$("#cloud").css({"opacity":1})
			//新路径 关于出场
			
				
			
			
			
			
			
			
			
			
			
			
			

			
	}
	else if (rotatestep >= 250 && rotatestep <= 299) {
		$("#cloud").css({ top: 95, left: 5 });
		$("#cloud").rotate({ angle:46 });
		
		
		
	
	
	

	}
	else if (rotatestep >= 300 && rotatestep <= 349) {
		$("#cloud").css({ top: -15, left: -15 });
		$("#cloud").rotate({ angle:155 });
		//$("#cloud").css({ top: 116, left: 740 });
		
		
		
		
		
		
		
		
	}
	else if (rotatestep >= 350 && rotatestep <= 399) {
		$("#cloud").css({ top: 10, left: 93 });
		$("#cloud").rotate({ angle:260 });
		//$("#cloud").css({ top: 116, left: 580 });
		
		//新路径 案例反向出场***
		$(".works").rotate({animateTo:90, duration: opacityspeed}); //旋转
		$(".works").stop().animate({ opacity: 0, top: 600, left: 0 }, opacityspeed,function(){
			$(".works").css({"display":"none"})
			
		} ); //渐变移动
		
	}
	else if (rotatestep >= 400 && rotatestep <= 449) {
		$("#cloud").css({ top: 160, left: 93 });
		//$("#cloud").css({ top: 116, left: 420 });
		
		
		//新路径 关于出场***
		$(".about_Zeus").stop().animate({"right":winW*0.55*-1,"top":winW*0.55/1028*725*-1,"opacity":0},1000)
		$(".about_Adam").stop().animate({"left":winW*0.41*-1,"bottom":winW*0.41/790*533*-1,"opacity":0},1000)
		$(".cdc").stop().animate({"opacity":0},800)
		
		$(".service_long").stop().animate({"left":(-50),"opacity":0},800)
		$(".service_short_one").stop().animate({"left":229,"opacity":0},800)
		$(".service_short_two").stop().animate({"left":328,"opacity":0},800)
		$(".service_short_three").stop().animate({"left":429,"opacity":0},800)
		$(".service_short_four").stop().animate({"left":575,"opacity":0},800)
		$(".about_service_one,.about_service_two,.about_service_three,.about_service_four,.about_service_five").stop().animate({"top":150,"opacity":0},800)
		$(".cdc_brief,.about_brief1,.about_brief2").stop().animate({"opacity":0})
		

		
		
		
		
		
		
		
		
	}
	else if (rotatestep >= 450 && rotatestep <= 499) {
		$("#cloud").css({ top: 310, left: 93 });
		//$("#cloud").rotate({ angle:0 });
		
		
		if (rotatestep >= 450 && rotatestep <= 466) {
			$("#cloud").css({"display":"block"})
		}
		
		if (rotatestep >= 483 && rotatestep <= 499) {
			$("#cloud").css({"display":"none"})
		}
		
		
		
	}
	else if (rotatestep >= 500 && rotatestep <= 549) {
		$("#cloud").css({ top: 470, left: 93 });
		//$("#cloud").rotate({ angle:20 });
		
		//新路径 案例进场***
		$(".works").rotate({animateTo:0, duration: opacityspeed}); //旋转
		$(".works").stop().animate({ opacity: 1, top: 331, left: (-91) }, opacityspeed ); //渐变移动
		$(".works").css({"display":"block"})
		
	}
	else if (rotatestep >= 550 && rotatestep <= 599) {
		$("#cloud").css({ top: 620, left: 93 });
		
		//$("#cloud").rotate({ angle:148 });
		
		
		
		
	}
	else if (rotatestep >= 600 && rotatestep <= 649) {
		$("#cloud").css({ top: 770, left: 93 });
		//$("#cloud").rotate({ angle:242 });
		
		
	}
	else if (rotatestep >= 650 && rotatestep <= 699) {
		$("#cloud").css({ top: 920, left: 93 });
		//$("#cloud").rotate({ angle:260 });
		
		
		
	}
	else if (rotatestep >= 700 && rotatestep <= 749) {
		$("#cloud").css({ top: 1070, left: 93 });
	}
	else if (rotatestep >= 750 && rotatestep <= 799) {
		$("#cloud").css({ top: 1220, left: 93 });
		//$("#cloud").css({"opacity":1})
	}
	else if (rotatestep >= 800 && rotatestep <= 849) {
		$("#cloud").css({ top: 1370, left: 93 });
		$("#cloud").rotate({ angle:260 });
		$("#cloud").find("img").eq(0).css({"opacity":1})
		$("#cloud").find("img").eq(1).css({"opacity":0})
		//$("#cloud").css({"opacity":0})
	}
	else if (rotatestep >= 850 && rotatestep <= 899) {
		$("#cloud").css({ top: 1520, left: 185 });
		$("#cloud").rotate({ angle:225 });
		$("#cloud").find("img").eq(0).css({"opacity":0})
		$("#cloud").find("img").eq(1).css({"opacity":1})
		$("#cloud").css({"display":"none"});
		//新路径 案例反向进场***
		$(".works").rotate({animateTo:0, duration: opacityspeed}); //旋转
		$(".works").stop().animate({ opacity: 1, top: 331, left: (-91) }, opacityspeed ); //渐变移动
		
		$(".track").stop().animate({"top":-120},500)
		
	}
	else if (rotatestep >= 900 && rotatestep <= 949) {
		$("#cloud").css({ top: 1606, left: 335 });
		$("#cloud").rotate({ angle:180 });
		$("#cloud").css({"display":"block"});
		
		
		
		//新路径 案例反向出场***
		$(".works").rotate({animateTo:-60, duration: opacityspeed}); //旋转
		$(".works").stop().animate({ opacity: 0, top: 1000, left: -1500 }, opacityspeed ); //渐变移动
			
		
		
		
		$(".works").css({"display":"block"})
		
		
		
		
		
	}
	else if (rotatestep >= 950 && rotatestep <= 999) {
		$("#cloud").css({ top: 1606, left: 535 });
		
		
		//新路径 客户反向离场***
		$(".block_eight").removeClass("block_eight")
		$(".block_seven").removeClass("block_seven")
		$(".block_six").removeClass("block_six")
		$(".block_five").removeClass("block_five")
		$(".client_left").stop().animate({/*"top":360,*/"opacity":0})
		$(".client_right").stop().animate({"left":1900,"top":350,"opacity":0})
		$(".client_title,.client_water").stop().animate({"opacity":0});
		$(".client_page_left,.client_page_right").css({"display":"none"})
		
		
		$(".clients").stop().animate({"left":-500})
	}
	else if (rotatestep >= 1000 && rotatestep <= 1049) {
		$("#cloud").css({ top: 1606, left: 735 });
		$(".track").stop().animate({"top":185},1000)
		$("#cloud").css({"display":"none"});
		//新路径 客户进场***	
		$(".client_page_left,.client_page_right").css({"display":"block"})
		$(".client_title,.client_water").stop().animate({"opacity":1},1000);
		
		$(".client_left").stop().animate({/*"top":200,*/"opacity":1},1000);
		$(".client_right").stop().animate({/*"left":1380*/"left":1230,"top":200/*245*/,"opacity":1},1000);
		
		$(".client_cnt").find("li").eq(0).addClass("block_eight");
		$(".client_cnt").find("li").eq(1).addClass("block_eight");
		$(".client_cnt").find("li").eq(2).addClass("block_five");
		$(".client_cnt").find("li").eq(3).addClass("block_seven");
		$(".client_cnt").find("li").eq(4).addClass("block_six");
		$(".client_cnt").find("li").eq(5).addClass("block_eight");
		$(".client_cnt").find("li").eq(6).addClass("block_eight");
		$(".client_cnt").find("li").eq(7).addClass("block_six");
		$(".client_cnt").find("li").eq(8).addClass("block_seven");
		$(".client_cnt").find("li").eq(9).addClass("block_five");
		$(".client_cnt").find("li").eq(10).addClass("block_eight");
		$(".client_cnt").find("li").eq(11).addClass("block_six");
		$(".client_cnt").find("li").eq(12).addClass("block_eight");
		$(".client_cnt").find("li").eq(13).addClass("block_seven");
		$(".client_cnt").find("li").eq(14).addClass("block_eight");
		$(".client_cnt").find("li").eq(15).addClass("block_six");
		$(".client_cnt").find("li").eq(16).addClass("block_five");
		$(".client_cnt").find("li").eq(17).addClass("block_seven");
		$(".client_cnt").find("li").eq(18).addClass("block_six");
		$(".client_cnt").find("li").eq(19).addClass("block_eight");
		$(".client_cnt").find("li").eq(20).addClass("block_seven");
		$(".client_cnt").find("li").eq(21).addClass("block_six");
		$(".client_cnt").find("li").eq(22).addClass("block_eight");
		$(".client_cnt").find("li").eq(23).addClass("block_eight");
		$(".client_cnt").find("li").eq(24).addClass("block_eight");
		$(".client_cnt").find("li").eq(25).addClass("block_eight");
		$(".client_cnt").find("li").eq(26).addClass("block_five");
		$(".client_cnt").find("li").eq(27).addClass("block_seven");
		$(".client_cnt").find("li").eq(28).addClass("block_six");
		$(".client_cnt").find("li").eq(29).addClass("block_eight");
		$(".client_cnt").find("li").eq(30).addClass("block_eight");
		$(".client_cnt").find("li").eq(31).addClass("block_six");
		$(".client_cnt").find("li").eq(32).addClass("block_seven");
		$(".client_cnt").find("li").eq(33).addClass("block_five");
		$(".client_cnt").find("li").eq(34).addClass("block_eight");
		$(".client_cnt").find("li").eq(35).addClass("block_six");
		$(".client_cnt").find("li").eq(36).addClass("block_eight");
		$(".client_cnt").find("li").eq(37).addClass("block_seven");
		$(".client_cnt").find("li").eq(38).addClass("block_eight");
		$(".client_cnt").find("li").eq(39).addClass("block_six");
		$(".client_cnt").find("li").eq(40).addClass("block_five");
		$(".client_cnt").find("li").eq(41).addClass("block_seven");
		$(".client_cnt").find("li").eq(42).addClass("block_six");
		$(".client_cnt").find("li").eq(43).addClass("block_eight");
		$(".client_cnt").find("li").eq(44).addClass("block_seven");
		$(".client_cnt").find("li").eq(45).addClass("block_six");
		$(".client_cnt").find("li").eq(46).addClass("block_eight");
		$(".client_cnt").find("li").eq(47).addClass("block_eight");
		$(".client_cnt").find("li").eq(48).addClass("block_eight");
		$(".client_cnt").find("li").eq(49).addClass("block_eight");
		$(".client_cnt").find("li").eq(50).addClass("block_five");
		$(".client_cnt").find("li").eq(51).addClass("block_seven");
		$(".client_cnt").find("li").eq(52).addClass("block_six");
		$(".client_cnt").find("li").eq(53).addClass("block_eight");
		$(".client_cnt").find("li").eq(54).addClass("block_eight");
		$(".client_cnt").find("li").eq(55).addClass("block_six");
		$(".client_cnt").find("li").eq(56).addClass("block_seven");
		$(".client_cnt").find("li").eq(57).addClass("block_five");
		$(".client_cnt").find("li").eq(58).addClass("block_eight");
		$(".client_cnt").find("li").eq(59).addClass("block_six");
		$(".client_cnt").find("li").eq(60).addClass("block_eight");
		
		
		
		
		$(".clients").stop().animate({"left":540})
	}
	else if (rotatestep >= 1050 && rotatestep <= 1099) {
		$("#cloud").css({ top: 1606, left: 935 });
		
	}
	else if (rotatestep >= 1100 && rotatestep <= 1149) {
		$("#cloud").css({ top: 1606, left: 1135 });
		


	}
	else if (rotatestep >= 1150 && rotatestep <= 1199) {
		$("#cloud").css({ top: 1606, left: 1335 });
		//$("#cloud").css({"opacity":0})
	}
	else if (rotatestep >= 1200 && rotatestep <= 1249) {
		$("#cloud").css({ top: 1606, left: 1535 });
		//$("#cloud").css({"opacity":1})
		
		
		
		
		
	}
	else if (rotatestep >= 1250 && rotatestep <= 1299) {
		$("#cloud").css({ top: 1606, left: 1735 });
	}
	else if (rotatestep >= 1300 && rotatestep <= 1349) {
		$("#cloud").css({ top: 1606, left: 1935 });
		
		
		
		//$("#cloud").css({ top: 2215, left: 183 });
		//$("#cloud").rotate({ angle:260 });
		//$("#cloud").find("img").eq(0).css({"opacity":1})
		//$("#cloud").find("img").eq(1).css({"opacity":0})
		

		
		
		
		
		
		
		
		
		$("#cloud").css({"display":"none"})
	}
	else if (rotatestep >= 1350 && rotatestep <= 1399) {
		$("#cloud").css({ top: 1606, left: 2135 });
		$("#cloud").css({"display":"block"})

		//$("#cloud").css({ top: 2365, left: 205 });
		//$("#cloud").rotate({ angle:260 });
		//$("#cloud").find("img").eq(0).css({"opacity":0})
		//$("#cloud").find("img").eq(1).css({"opacity":1})
		
		
		
		//新路径 客户进场***	
		$(".client_page_left,.client_page_right").css({"display":"block"})
		$(".client_title,.client_water").stop().animate({"opacity":1},1000);
		
		$(".client_left").stop().animate({/*"top":200,*/"opacity":1},1000);
		$(".client_right").stop().animate({/*"left":1380*/"left":1230,"top":200/*245*/,"opacity":1},1000);
		
		$(".client_cnt").find("li").eq(0).addClass("block_eight");
		$(".client_cnt").find("li").eq(1).addClass("block_eight");
		$(".client_cnt").find("li").eq(2).addClass("block_five");
		$(".client_cnt").find("li").eq(3).addClass("block_seven");
		$(".client_cnt").find("li").eq(4).addClass("block_six");
		$(".client_cnt").find("li").eq(5).addClass("block_eight");
		$(".client_cnt").find("li").eq(6).addClass("block_eight");
		$(".client_cnt").find("li").eq(7).addClass("block_six");
		$(".client_cnt").find("li").eq(8).addClass("block_seven");
		$(".client_cnt").find("li").eq(9).addClass("block_five");
		$(".client_cnt").find("li").eq(10).addClass("block_eight");
		$(".client_cnt").find("li").eq(11).addClass("block_six");
		$(".client_cnt").find("li").eq(12).addClass("block_eight");
		$(".client_cnt").find("li").eq(13).addClass("block_seven");
		$(".client_cnt").find("li").eq(14).addClass("block_eight");
		$(".client_cnt").find("li").eq(15).addClass("block_six");
		$(".client_cnt").find("li").eq(16).addClass("block_five");
		$(".client_cnt").find("li").eq(17).addClass("block_seven");
		$(".client_cnt").find("li").eq(18).addClass("block_six");
		$(".client_cnt").find("li").eq(19).addClass("block_eight");
		$(".client_cnt").find("li").eq(20).addClass("block_seven");
		$(".client_cnt").find("li").eq(21).addClass("block_six");
		$(".client_cnt").find("li").eq(22).addClass("block_eight");
		$(".client_cnt").find("li").eq(23).addClass("block_eight");
		$(".client_cnt").find("li").eq(24).addClass("block_eight");
		$(".client_cnt").find("li").eq(25).addClass("block_eight");
		$(".client_cnt").find("li").eq(26).addClass("block_five");
		$(".client_cnt").find("li").eq(27).addClass("block_seven");
		$(".client_cnt").find("li").eq(28).addClass("block_six");
		$(".client_cnt").find("li").eq(29).addClass("block_eight");
		$(".client_cnt").find("li").eq(30).addClass("block_eight");
		$(".client_cnt").find("li").eq(31).addClass("block_six");
		$(".client_cnt").find("li").eq(32).addClass("block_seven");
		$(".client_cnt").find("li").eq(33).addClass("block_five");
		$(".client_cnt").find("li").eq(34).addClass("block_eight");
		$(".client_cnt").find("li").eq(35).addClass("block_six");
		$(".client_cnt").find("li").eq(36).addClass("block_eight");
		$(".client_cnt").find("li").eq(37).addClass("block_seven");
		$(".client_cnt").find("li").eq(38).addClass("block_eight");
		$(".client_cnt").find("li").eq(39).addClass("block_six");
		$(".client_cnt").find("li").eq(40).addClass("block_five");
		$(".client_cnt").find("li").eq(41).addClass("block_seven");
		$(".client_cnt").find("li").eq(42).addClass("block_six");
		$(".client_cnt").find("li").eq(43).addClass("block_eight");
		$(".client_cnt").find("li").eq(44).addClass("block_seven");
		$(".client_cnt").find("li").eq(45).addClass("block_six");
		$(".client_cnt").find("li").eq(46).addClass("block_eight");
		$(".client_cnt").find("li").eq(47).addClass("block_eight");
		$(".client_cnt").find("li").eq(48).addClass("block_eight");
		$(".client_cnt").find("li").eq(49).addClass("block_eight");
		$(".client_cnt").find("li").eq(50).addClass("block_five");
		$(".client_cnt").find("li").eq(51).addClass("block_seven");
		$(".client_cnt").find("li").eq(52).addClass("block_six");
		$(".client_cnt").find("li").eq(53).addClass("block_eight");
		$(".client_cnt").find("li").eq(54).addClass("block_eight");
		$(".client_cnt").find("li").eq(55).addClass("block_six");
		$(".client_cnt").find("li").eq(56).addClass("block_seven");
		$(".client_cnt").find("li").eq(57).addClass("block_five");
		$(".client_cnt").find("li").eq(58).addClass("block_eight");
		$(".client_cnt").find("li").eq(59).addClass("block_six");
		$(".client_cnt").find("li").eq(60).addClass("block_eight");
		
		
		
		
		$(".works").css({"display":"none"})
		
		$(".clients").stop().animate({"left":540})
		
		
		
	}
	else if (rotatestep >= 1400 && rotatestep <= 1449) {
		$("#cloud").css({ top: 1606, left: 2285 });
		//$("#cloud").rotate({ angle:250 });
		
		if(rotatestep >= 1400 && rotatestep <= 1416)
		{
		//新路径 客户反向离场***
		$(".block_eight").removeClass("block_eight")
		$(".block_seven").removeClass("block_seven")
		$(".block_six").removeClass("block_six")
		$(".block_five").removeClass("block_five")
		$(".client_left").stop().animate({/*"top":360,*/"opacity":0})
		$(".client_right").stop().animate({"left":1900,"top":350,"opacity":0})
		$(".client_title,.client_water").stop().animate({"opacity":0});
		$(".client_page_left,.client_page_right").css({"display":"none"})
		//新路径 一番一站离场***
		$(".stand_title,.yfz_bg").stop().animate({"opacity":0})
		
		$(".stand_down").stop().animate({"top":500,"opacity":0})	
		
		
		$(".clients").stop().animate({"left":-500})
		
		}
		if(rotatestep >= 1433 && rotatestep <= 1449)
		{
		$("#cloud").css({ "display":"none"});	
		//新路径 一番一站进场***
		$(".stand_title,.yfz_bg").stop().animate({"opacity":1})
		$(".stand_down").stop().animate({"top":300,"opacity":1})
		}
		
	}
	else if (rotatestep >= 1450 && rotatestep <= 1499) {
		$("#cloud").css({ top: 1606, left: 2435 });
		//$("#cloud").rotate({ angle:240 });
		
		
		
		
		
		
		
		
		
	}
	else if (rotatestep >= 1500 && rotatestep <= 1549) {
		$("#cloud").css({ top: 1606, left: 2585 });
		//$("#cloud").rotate({ angle:240 });

		
	
	
	
	

	
	
	}
	else if (rotatestep >= 1550 && rotatestep <= 1599) {
		$("#cloud").css({ top: 1606, left: 2735 });
		//$("#cloud").rotate({ angle:225 });
	}
	else if (rotatestep >= 1600 && rotatestep <= 1649) {
		$("#cloud").css({ top: 1606, left: 2885 });
		//$("#cloud").rotate({ angle:210 });
		
		
		
	}
	else if (rotatestep >= 1650 && rotatestep <= 1699) {
		$("#cloud").css({ top: 1606, left: 3035 });
		//$("#cloud").rotate({ angle:195 });
		
	}
	else if (rotatestep >= 1700 && rotatestep <= 1749) {
		$("#cloud").css({ top: 1606, left: 3185 });
		//$("#cloud").rotate({ angle:183 });
		$("#cloud").css({"display":"none"})
	}
	else if (rotatestep >= 1750 && rotatestep <= 1799) {
		$("#cloud").css({ top: 1606, left: 3335 });
		$("#cloud").rotate({ angle:180 });
		
		$("#cloud").css({"display":"block"})
	}
	else if (rotatestep >= 1800 && rotatestep <= 1849) {
		$("#cloud").css({ top: 1606, left: 3485 });
		$("#cloud").rotate({ angle:155 });
		
		
		
		
			
		
		
	
	}
	else if (rotatestep >= 1850 && rotatestep <= 1899) {
		//$("#cloud").css({ top: 1545, left: 3580 });
		//$("#cloud").rotate({ angle:135 });
		
		$("#cloud").css({ top: 1545, left: 3580 });
		$("#cloud").rotate({ angle:135 });
		//$("#cloud").css({"opacity":1})
		
		

		
		
		//新路径 一番一站进场***
		$(".stand_title,.yfz_bg").stop().animate({"opacity":1})
		$(".stand_down").stop().animate({"top":300,"opacity":1})
		
		//新路径 博客出场***
		$(".bolg_hot").removeClass("bolg_move")
	}
	else if (rotatestep >= 1900 && rotatestep <= 1949) {
		$("#cloud").css({ top: 1442, left: 3645 });
		$("#cloud").rotate({ angle:90 });
		//$("#cloud").css({"opacity":0})
		
		
		
		

		
		
		
		
		//新路径 一番一站离场***
		$(".stand_title,.yfz_bg").stop().animate({"opacity":0})
		$(".stand_down").stop().animate({"top":500,"opacity":0})
		
		if(rotatestep >= 1900 && rotatestep <= 1916)
		{
		
		}
	
		//新路径 博客入场***
		$(".bolg_hot").addClass("bolg_move")	
		
	}
	else if (rotatestep >= 1950 && rotatestep <= 1999) {
		$("#cloud").css({ top: 1342, left: 3645 });
			
		
				$(".bolg_list").stop().animate({"opacity":0})
			
			
		
			
				
			
			
			
	}
	else if (rotatestep >= 2000 && rotatestep <= 2049) {
		$("#cloud").css({ top: 1242, left: 3645 });
		
		
		
		//新路径 博客入场***
		$(".bolg_hot").addClass("bolg_move")
		
		
		
		$("#cloud").css({"display":"block"})
	}
	else if (rotatestep >= 2050 && rotatestep <= 2099) {
		$("#cloud").css({ top: 1142, left: 3645 });
		$("#cloud").css({"display":"none"})
		//新路径 博客列表入场***
		$(".bolg_list").stop().animate({"opacity":1})
		

	}
	else if (rotatestep >= 2100 && rotatestep <= 2149) {
		$("#cloud").css({ top: 1042, left: 3645 });
	}
	else if (rotatestep >= 2150 && rotatestep <= 2199) {
		$("#cloud").css({ top: 942, left: 3645 });
		
	}
	else if (rotatestep >= 2200 && rotatestep <= 2249) {
		$("#cloud").css({ top: 842, left: 3645 });
		$(".track").stop().animate({"top":185},500)
		$("#cloud").css({"display":"none"})
	}
	else if (rotatestep >= 2250 && rotatestep <= 2299) {
		$("#cloud").css({ top: 742, left: 3645 });
		$("#cloud").rotate({ angle:90 });
		$("#cloud").css({"display":"block"})
	}
	else if (rotatestep >= 2300 && rotatestep <= 2349) {
		$("#cloud").css({ top: 642, left: 3645 });
		$("#cloud").rotate({ angle:90 });
		
		
		//$("#cloud").css({"opacity":0})
		$(".track").stop().animate({"top":-120},500)
		$(".touch").click();
		
		//新路径 博客出场***
		$(".bolg_hot").removeClass("bolg_move")
		$(".bolg_list").stop().animate({"opacity":0})
	}
	else if (rotatestep >= 2350 && rotatestep <= 2399) {
		$("#cloud").css({ top: 542, left: 3645 });
		$("#cloud").rotate({ angle:90 });
		//$("#cloud").css({"opacity":1})


		
		
		

		
		
		
		
		
		$("#cloud").find("img").eq(0).css({"opacity":0})
		$("#cloud").find("img").eq(1).css({"opacity":1})
	}
	else if (rotatestep >= 2400 && rotatestep <= 2449) {
		$("#cloud").css({ top: 442, left: 3664 });
		$("#cloud").rotate({ angle:83 });
		//$("#cloud").css({ top: 3465, left: 3250 });
		$("#cloud").find("img").eq(0).css({"opacity":1})
		$("#cloud").find("img").eq(1).css({"opacity":0})
		

	}
	else if (rotatestep >= 2450 && rotatestep <= 2499) {
		//$("#cloud").css({ top: 3465, left: 3400 });
		$("#cloud").css({ top: 342, left: 3640 });
		$("#cloud").rotate({ angle:69 });
	}
	else if (rotatestep >= 2500 && rotatestep <= 2549) {
		//$("#cloud").css({ top: 3465, left: 3550 });

		
		
		
		
		$("#cloud").css({ top: 226, left: 3575 });
		$("#cloud").rotate({ angle:44 });
		
		
		
		
		
		
		
		
		
		
		//$("#cloud").css({"opacity":1})
	}
	else if (rotatestep >= 2550 && rotatestep <= 2599) {
		//$("#cloud").css({ top: 3465, left: 3700 });
		//$("#cloud").css({"opacity":0})

		$("#cloud").css({ top: 148, left: 3465 });
		$("#cloud").rotate({ angle:26 });
		
		
		
		
		
		
		
		
		
	}
	else if (rotatestep >= 2600 && rotatestep <= 2649) {
		//$("#cloud").css({ top: 3465, left: 3800 });
		$("#cloud").css({ top: 112, left: 3377 });
		$("#cloud").rotate({ angle:8 });

	}
	else if (rotatestep >= 2650 && rotatestep <= 2699) {
		//$("#cloud").css({ top: 3465, left: 3900 });
		$("#cloud").css({ top: 95, left: 3296 });
		$("#cloud").rotate({ angle:0 });
		$("#cloud").css({"display":"block"})
	}

	else if (rotatestep >= 2700 && rotatestep <= 2749) {
		//$("#cloud").css({ top: 3465, left: 4000 });
		$("#cloud").css({ top: 95, left: 3196 });
		
		
		$("#cloud").css({"display":"none"})
		

	}
	else if (rotatestep >= 2750 && rotatestep <= 2799) {
		//$("#cloud").css({ top: 3465, left: 4100 });
		$("#cloud").css({ top: 95, left: 3096 });
		
		$(".bolgs").click();
		
		//新路径 联系出场***
		$(".sh").removeClass("sh_move")
		$(".jn").removeClass("jn_move")
		$(".nj").removeClass("nj_move")
		$(".cs").removeClass("cs_move")
		$(".contact_big").css({"display":"none"})
		$(".call_big").css({"display":"none"})
		
		$(".call_Area_letter").stop().animate({"height":0})
		$(".contact_Area_letter").stop().animate({"height":0})
		//$(".cdc_brief,.about_brief1").stop().animate({"opacity":1})
		
		$(".contact_title,.call_Area_pic,.call_Area,.contact_line,.call_map,.call_Area_txt").stop().animate({"opacity":0})
		
	}
	else if (rotatestep >= 2800 && rotatestep <= 2849) {
		//$("#cloud").css({ top: 3465, left: 4200 });
		$("#cloud").css({ top: 95, left: 2996 });
		
		//alert('正向进入联系');
		//新路径 联系反向进场***
		$(".sh").addClass("sh_move")
		$(".jn").addClass("jn_move")
		$(".nj").addClass("nj_move")
		$(".cs").addClass("cs_move")
		$(".contact_big").css({"display":"block"})
		$(".call_big").css({"display":"block"})
		
		$(".call_Area_letter").stop().animate({"height":262})
		$(".contact_Area_letter").stop().animate({"height":262})
		
		$(".contact_title,.call_Area_pic,.call_Area,.contact_line,.call_map,.call_Area_txt").stop().animate({"opacity":1})

	}
	else if (rotatestep >= 2850 && rotatestep <= 2899) {
		//$("#cloud").css({ top: 3465, left: 4300 });
		$("#cloud").css({ top: 95, left: 2896 });
		
		
		
		
	}
	else if (rotatestep >= 2900 && rotatestep <= 2949) {	
	//$("#cloud").css({ top: 3465, left: 4400 });
$("#cloud").css({ top: 95, left: 2746 });
		
		
		
		
		//$("#cloud").css({"opacity":0})
	}
	else if (rotatestep >= 2950 && rotatestep <= 2999) {
		$("#cloud").css({ top: 95, left: 2596 });
		//$("#cloud").css({ top: 3465, left: 4500 });
		//$("#cloud").css({"opacity":1})
		
		$("#cloud").css({"display":"none"})
	}
	else if (rotatestep >= 3000 && rotatestep <= 3049) {
		$("#cloud").css({ top: 95, left: 2446 });
		//$("#cloud").css({ top: 3465, left: 4600 });
		$("#cloud").css({"display":"block"})
		
	}
	else if (rotatestep >= 3050 && rotatestep <= 3099) {
		$("#cloud").css({ top: 95, left: 2296 });
		//$("#cloud").css({ top: 3465, left: 4700 });
		
		
		
	}
	else if (rotatestep >= 3100 && rotatestep <= 3149) {
		//$("#cloud").css({ top: 3465, left: 4800 })
		$("#cloud").css({ top: 95, left: 2146 });
		
		
		
		
	}
	else if (rotatestep >= 3150 && rotatestep <= 3199) {
		//$("#cloud").css({ top: 3465, left: 4960 })
		//$("#cloud").rotate({ angle:180 });
		$("#cloud").css({ top: 95, left: 1996 });

		
		//alert('反向进入联系');//ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
		
		//新路径 联系出场***
		$(".sh").removeClass("sh_move")
		$(".jn").removeClass("jn_move")
		$(".nj").removeClass("nj_move")
		$(".cs").removeClass("cs_move")
		$(".contact_big").css({"display":"none"})
		$(".call_big").css({"display":"none"})
		
		$(".call_Area_letter").stop().animate({"height":0})
		$(".contact_Area_letter").stop().animate({"height":0})
		//$(".cdc_brief,.about_brief1").stop().animate({"opacity":1})
		
		$(".contact_title,.call_Area_pic,.call_Area,.contact_line,.call_map,.call_Area_txt").stop().animate({"opacity":0})
		
		//$(".call,.contact").rotate({ angle:180 });
		
		//$(".call,.contact").addClass("remove")
		
	}
	else if (rotatestep >= 3200 && rotatestep <= 3249) {
		//$("#cloud").css({ top: 3450, left: 5070 })
		//$("#cloud").rotate({ angle:160 });
		$("#cloud").css({ top: 95, left: 1846 });
		//$(".call,.contact").removeClass("remove")
		
		
		//新路径 关于出场***
		$(".about_Zeus").stop().animate({"right":winW*0.55*-1,"top":winW*0.55/1028*725*-1,"opacity":0},1000)
		$(".about_Adam").stop().animate({"left":winW*0.41*-1,"bottom":winW*0.41/790*533*-1,"opacity":0},1000)
		$(".cdc").stop().animate({"opacity":0},800)
		
		$(".service_long").stop().animate({"left":(-50),"opacity":0},800)
		$(".service_short_one").stop().animate({"left":229,"opacity":0},800)
		$(".service_short_two").stop().animate({"left":328,"opacity":0},800)
		$(".service_short_three").stop().animate({"left":429,"opacity":0},800)
		$(".service_short_four").stop().animate({"left":575,"opacity":0},800)
		
		$(".about_service_one,.about_service_two,.about_service_three,.about_service_four,.about_service_five").stop().animate({"top":150,"opacity":0},800)
		$(".cdc_brief,.about_brief1,.about_brief2").stop().animate({"opacity":0})
		
		$("#cloud").css({"display":"block"})
	}
	else if (rotatestep >= 3250 && rotatestep <= 3299) {
		//$("#cloud").css({ top: 3340, left: 5220 })
		//$("#cloud").rotate({ angle:120 });
		$("#cloud").css({ top: 95, left: 1696 });
		//alert('aa');
		$("#cloud").css({"display":"none"})
	}
	else if (rotatestep >= 3300 && rotatestep <= 3349) {
		//$("#cloud").css({ top: 3215, left: 5281 })
		//$("#cloud").rotate({ angle:90 });
$("#cloud").css({ top: 95, left: 1546 });
		
		
	}
	else if (rotatestep >= 3350 && rotatestep <= 3399) {
		//$("#cloud").css({ top: 3115, left: 5281 })
		$("#cloud").css({ top: 95, left: 1396 });
		
		
		//alert('aa');
		if(rotatestep >= 3383 && rotatestep <= 3399)
		{
			$(".about_Zeus").stop().animate({"right":1920-1920/3.5-400-winW*0.4,"top":1080-1080/3-100-winW*0.4/1028*725,"opacity":1},1000)
		$(".about_Adam").stop().animate({"left":1920-1920/3.5-500-winW*0.41,"bottom":1080-1080/3-220-winW*0.41/790*533,"opacity":1},1000)
		$(".cdc").stop().animate({"opacity":1},1000)
		
		$(".service_long").stop().animate({"left":0,"opacity":1},800)
		$(".service_short_one").stop().animate({"left":279,"opacity":1},800)
		$(".service_short_two").stop().animate({"left":378,"opacity":1},800)
		$(".service_short_three").stop().animate({"left":479,"opacity":1},800)
		$(".service_short_four").stop().animate({"left":575,"opacity":1},800)
		$(".about_service_one,.about_service_two,.about_service_three,.about_service_four,.about_service_five").stop().animate({"top":36,"opacity":1},800)
		$(".cdc_brief,.about_brief1,.about_brief2").stop().animate({"opacity":1})
			
		}
		
		
		
		
		
		
		
		$(".mouse").css({"display":"none"})
	}
	

}