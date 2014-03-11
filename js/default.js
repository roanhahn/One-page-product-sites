// JavaScript Document

window.onload = function() {
        skrollr.init({
        forceHeight: false
});
}

$(document).ready(function()
{
	// Scroll to functies
	$(".btn_discover").click(function()
	{
		$('html, body').animate({scrollTop:$(".intro").offset().top},1000);
	});
	$(".btn_colors").click(function()
	{
		$('html, body').animate({scrollTop:$(".colors").offset().top},1000);
	});
	$(".btn_video").click(function()
	{
		$('html, body').animate({scrollTop:$(".video").offset().top},1000);
	});
	$(".btn_reviews").click(function()
	{
		$('html, body').animate({scrollTop:$(".reviews").offset().top},1000);
	});
	$(".next").click(function()
	{
		$('html, body').animate({scrollTop:$(".intro").offset().top},1000);
	});
	
	// Lazyload Images
	$("img.lazy").lazyload({
	    effect : "fadeIn",
	    threshold : 200
	});
	

	// scroll to top
	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	
	var $container = $('#container');
// initialize
$container.masonry({
  itemSelector: '.item'
});

	// fancybox
	
	$(".fancybox").fancybox({	
		padding: 0,
		maxWidth: 600,
		openEffect	: 'elastic',
		closeEffect	: 'elastic',
		nextEffect	: 'fade',
		prevEffect	: 'fade',
	    openSpeed	: 'fast',
		closeSpeed	: 'slow',
		nextSpeed	: 'slow',
		prevSpeed	: 'slow',
	    helpers: 
		{
			overlay: 
			{
				locked: false
			}
		}
	});
	
	

	
		
	


	// Carousel functies
	$(".review-carousel").owlCarousel({
 
	// Most important owl features
	items : 3,
	itemsCustom : false,
	itemsDesktop : [1199,4],
	itemsDesktopSmall : [980,3],
	itemsTablet: [768,2],
	itemsTabletSmall: false,
	itemsMobile : [479,1],
	singleItem : false,
	itemsScaleUp : false,
 
	//Basic Speeds
	slideSpeed : 200,
	paginationSpeed : 800,
	rewindSpeed : 1000,
 
	//Autoplay
	autoPlay : false,
	stopOnHover : false,
 
	// Navigation
	navigation : false,
	navigationText : ["prev","next"],
	rewindNav : true,
	scrollPerPage : false,
 
	//Pagination
	pagination : true,
	paginationNumbers: false,
 
	// Responsive 
	responsive: true,
	responsiveRefreshRate : 200,
	responsiveBaseWidth: window,
 
	// CSS Styles
	baseClass : "owl-carousel",
	theme : "owl-theme",
 
	//Lazy load
	lazyLoad : false,
	lazyFollow : true,
	lazyEffect : "fade",
 
	//Auto height
	autoHeight : false,
 
	//JSON 
	jsonPath : false, 
	jsonSuccess : false,
 
	//Mouse Events
	dragBeforeAnimFinish : true,
	mouseDrag : true,
	touchDrag : true,
 
	//Transitions
	transitionStyle : false,
 
	// Other
	addClassActive : false,
 
	//Callbacks
	beforeUpdate : false,
	afterUpdate : false,
	beforeInit: false, 
	afterInit: false, 
	beforeMove: false, 
	afterMove: false,
	afterAction: false,
	startDragging : false,
	afterLazyLoad : false,
 
});

$(".colors-carousel").owlCarousel({
 
	// Most important owl features
	items : 8,
	itemsCustom : false,
	itemsDesktop : [1199,8],
	itemsDesktopSmall : [980,4],
	itemsTablet: [768,4],
	itemsTabletSmall: false,
	itemsMobile : [479,3],
	singleItem : false,
	itemsScaleUp : false,
 
	//Basic Speeds
	slideSpeed : 200,
	paginationSpeed : 800,
	rewindSpeed : 1000,
 
	//Autoplay
	autoPlay : false,
	stopOnHover : false,
 
	// Navigation
	navigation : false,
	navigationText : ["prev","next"],
	rewindNav : true,
	scrollPerPage : false,
 
	//Pagination
	pagination : true,
	paginationNumbers: false,
 
	// Responsive 
	responsive: true,
	responsiveRefreshRate : 200,
	responsiveBaseWidth: window,
 
	// CSS Styles
	baseClass : "owl-carousel",
	theme : "owl-theme",
 
	//Lazy load
	lazyLoad : true,
	lazyFollow : true,
	lazyEffect : "fade",
 
	//Auto height
	autoHeight : false,
 
	//JSON 
	jsonPath : false, 
	jsonSuccess : false,
 
	//Mouse Events
	dragBeforeAnimFinish : true,
	mouseDrag : true,
	touchDrag : true,
 
	//Transitions
	transitionStyle : false,
 
	// Other
	addClassActive : false,
 
	//Callbacks
	beforeUpdate : false,
	afterUpdate : false,
	beforeInit: false, 
	afterInit: false, 
	beforeMove: false, 
	afterMove: false,
	afterAction: false,
	startDragging : false,
	afterLazyLoad : false,
 
});


$(".video-carousel").owlCarousel({
 
	// Most important owl features
	items : 8,
	itemsCustom : false,
	itemsDesktop : [1199,4],
	itemsDesktopSmall : [980,3],
	itemsTablet: [768,2],
	itemsTabletSmall: false,
	itemsMobile : [479,1],
	singleItem : true,
	itemsScaleUp : false,
 
	//Basic Speeds
	slideSpeed : 200,
	paginationSpeed : 800,
	rewindSpeed : 1000,
 
	//Autoplay
	autoPlay : false,
	stopOnHover : false,
 
	// Navigation
	navigation : false,
	navigationText : ["prev","next"],
	rewindNav : true,
	scrollPerPage : false,
 
	//Pagination
	pagination : true,
	paginationNumbers: false,
 
	// Responsive 
	responsive: true,
	responsiveRefreshRate : 200,
	responsiveBaseWidth: window,
 
	// CSS Styles
	baseClass : "owl-carousel",
	theme : "owl-theme",
 
	//Lazy load
	lazyLoad : true,
	lazyFollow : true,
	lazyEffect : "fade",
 
	//Auto height
	autoHeight : false,
 
	//JSON 
	jsonPath : false, 
	jsonSuccess : false,
 
	//Mouse Events
	dragBeforeAnimFinish : true,
	mouseDrag : true,
	touchDrag : true,
 
	//Transitions
	transitionStyle : false,
 
	// Other
	addClassActive : false,
 
	//Callbacks
	beforeUpdate : false,
	afterUpdate : false,
	beforeInit: false, 
	afterInit: false, 
	beforeMove: false, 
	afterMove: false,
	afterAction: false,
	startDragging : false,
	afterLazyLoad : false,
 
});


});






