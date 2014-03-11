// JavaScript Document



$(document).ready(function()
{
	$('.menuBtn').click(function()
	{
		$('#mobileMenu').slideToggle('medium');
	});
	resizeSkin()
});


$(window).resize(function() {
	resizeSkin();
  });
function resizeSkin()
{
	
	

	var skinWidth = $(".absoluteCenter").width();
	var skinHeight = $(".absoluteCenter").height();
	
	
	$('.absoluteCenter').css('margin-left', -skinWidth/2);		
	$('.absoluteCenter').css('margin-top', -skinHeight/2-14.5);
	
	/*
	var splashHeight = $("#splash").height();
	$('#splash .arrowDown').css('height', splashHeight);
	$('#splash').css('height', splashHeight);	
	*/
	
	var menuWith = $("#menu").width();
	$( "#result" ).text(menuWith);
	if (menuWith >= 769)
	{
		$( "#menu" ).addClass( "fixedMenu" );
		var displaymethod = $("#mobileMenu").css( "display" );
		if(displaymethod == "block")
		{
			$('#mobileMenu').css("display","none");
		}
	}
	else if(menuWith <= 768)
	{
		$( "#menu" ).removeClass( "fixedMenu" );
	}
}
$(window).scroll(function() {  
	if ($(this).scrollTop()>=100)
	{
		$('#menu').addClass("transparentMenu");
	}
	else
	{
		$('#menu').removeClass("transparentMenu");
	}
});




