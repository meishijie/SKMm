$(document).ready(function(){
	

winW=$(window).width();	
winH=$(window).height();








$(window).resize(function() {
	winW=$(window).width();	
winH=$(window).height();

if(winW<1600)
{
	
	$(".cdc_logo").css({"display":"none"})
	$(".cnt_cdc_logo").css({"display":"block"})
	
}else{
	$(".cdc_logo").css({"display":"block"})
	$(".cnt_cdc_logo").css({"display":"none"})
}



})






















})