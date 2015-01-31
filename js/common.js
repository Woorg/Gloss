$(document).ready(function() {
	var nav = $('.banner__paging a'),
    updateNav = function(page){
        nav
            .removeClass('cur')
            .eq(page).addClass('cur');
    }

	$('#banner').anythingSlider({
		// If true, builds a list of anchor links to link to each panel
    	buildNavigation: false,
    	buildStartStop : false,
	 	buildArrows : false,
	 	mode : 'fade',
	 	delay : 3000,
	 	autoPlay : true,
	 	hashTags:false,
    	onInitialized: function(e, slider) {
        updateNav(slider.currentPage-1);
    	},
    	// Callback before slide animates
	    onSlideBegin: function(e, slider) {
	        updateNav(slider.targetPage-1);
    }
	});
	// set up external links
	nav.click(function(){
	    var slide = $(this).attr('href').substring(1);
	    $('#banner').anythingSlider(slide);
	    return false;
	});

	// work slider
	$('.work__slider').anythingSlider({
		// If true, builds a list of anchor links to link to each panel
    	buildNavigation: false,
    	buildStartStop : false,
	 	buildArrows : false,
	 	mode : 'fade',
	 	delay : 3000,
	 	autoPlay : false,
	 	hashTags:false,
    	onInitialized: function(e, slider) {
        	$('.prev').click(function() {
        		slider.goBack();
        	})
        	$('.next').click(function() {
        		slider.goForward();
        	})
    	}
    	
	});

});




$(function() {

	$(window).bind('scroll', function(){
		$('.backtotop').stop().animate({'opacity':'1'});
	});
	
	$('.backtotop').click(
		function (e) {
			$('html, body').animate({scrollTop: '0px'}, 800);
		}
	);
});