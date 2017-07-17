var slide1=$('.Wij-1 ').offset().top;
var slide2=$('.Wij-2 ').outerHeight();
var slide3=$('.Wij-3 ').outerHeight()+slide2;

setTimeout(function(){
	$("#subir").hide();
	$("#recomeco").hide();
},1000);

$("#descer1").click(function (){

	$(".pente").toggle();
	$(".tesoura").animate({left: '-100%'});

	$("body").animate(
	{scrollTop:slide2+"px"},1000);

	setTimeout(function(){
		$(".pente").toggle();
	},1000);

	setTimeout(function(){
	$(".tesoura").animate({left: '0%'});
	},1000);
});

$("#descer2").click(function (){

	$("#recomeco").show();
	$(".cor").toggle();
	$(".lapis").animate({left: '-100%'});

	$("body").animate(
		{scrollTop:slide3+"px"},1000);
		
	setTimeout(function(){
		$("#recomeco").hide();
	},1000);

	setTimeout(function(){
		$(".cor").toggle();
	},1000);

	setTimeout(function(){
		$(".lapis").animate({left: '0%'});
	},1000);
});


$("#subir3").click(function (){

	$(".pente").toggle();
	$(".tesoura").animate({left: '-100%'});

	$("body").animate(
	{scrollTop:slide2+"px"},1000);

	setTimeout(function(){
		$(".pente").toggle();
	},1000);

	setTimeout(function(){
		$(".tesoura").animate({left: '0%'});
	},1000);

});

$("#subir2").click(function (){

	$("#subir").show();
	$(".tempero").toggle();
	$(".prato").animate({left: '-100%'});

	$("body").animate(
	{scrollTop:slide1+"px"},1000);

	setTimeout(function(){
		$("#subir").hide();
	},1000);

	setTimeout(function(){
		$(".tempero").toggle();
	},1000);

	setTimeout(function(){
	$(".prato").animate({left: '0%'});
	},1000);

});