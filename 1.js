$(document).ready(function(){
	 $('.navbar-brand').click(function(){
	 	$('html,body').animate({scrollTop:0},1000,"easeInOutExpo")
	 	return false;
	 });
	 $('.n1').click(function(){
	 	$('html,body').animate({scrollTop: $('.top3').offset().top - 65},1000,"easeOutBack");
	 	return false;
	 });
	 $('.n2').click(function(){
	 	$('html,body').animate({scrollTop: $('.top4').offset().top - 63},1500,"easeInOutExpo");
	 	return false;
	 });
	 $('.n3').click(function(){
	 	$('html,body').animate({scrollTop: $('.top5').offset().top - 62},1000,"easeInOutExpo");
	 	return false;
	 });
	 $('.n4').click(function(){
	 	$('html,body').animate({scrollTop: $('.footer').offset().top},1500,"easeInOutExpo");
	 	return false;
	 });
	 $(window).scroll(function(){
	 	toado = $('html,body').scrollTop();
	 	if(toado > 500){
	 		$('.banner').addClass('plus');
	 	}else{
	 		$('.banner').removeClass('plus');
	 	}
	 });
	 $(window).scroll(function(){
	 	ho = $('html,body').scrollTop();
	 	if (ho > $('.top5').offset().top - 250) {
	 		$('.top5').addClass('bien');
	 	}else{
	 		$('.top5').removeClass('bien');
	 	};
	 	if (ho > $('.top3').offset().top - 200) {
	 		$('.top3').addClass('bien');
	 	};
	 	if (ho > $('.top4').offset().top - 300) {
	 		$('.top4').addClass('bien');
	 	}else{
	 		$('.top4').removeClass('bien');
	 	};

	 });
}); 

 