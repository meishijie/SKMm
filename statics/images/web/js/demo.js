$(document).ready(init);
function init() {
	$.fn.scrollPath("getPath")
	.moveTo(1511,50,{name:"about"})
	.lineTo(800,50)
	
	.arc(800,-20,70,Math.PI/2,0,false)
	.lineTo(870,550,{name:"work"})
	.lineTo(870,1280)
	.arc(1170,1280,300,Math.PI,Math.PI/2,true)//Client
	.lineTo(1350,1580,{name:"client"})
	.lineTo(2695,1580)
	.lineTo(3000,1580,{name:"stand"})
	.lineTo(4150,1580)
	.arc(4150,1300,280,Math.PI/2,Math.PI/4,true,{name:"bolg"})
	.arc(4150,1300,280,Math.PI/4,0,true)
	.lineTo(4430,500)
	.arc(3980,500,450,0,Math.PI*1.5,true)
	.lineTo(3190,50,{name:"contact"})
	.lineTo(1511,50)

	$(".wrapper").scrollPath({drawPath: true, wrapAround: true});

	$(".nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});
	
	$(".sp-canvas").toggle();
}




