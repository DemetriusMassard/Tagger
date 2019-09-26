jQuery(function () {
    
    jQuery(window).scroll(function () 
    {
        if (jQuery(this).scrollTop() > 10) 
        {
            $("#navbar").removeClass("navbar-default");
            $("#navbar").addClass("navbar-scroll");
    
        } 
        else 
        {
    
            $("#navbar").removeClass("navbar-scroll");    
            $("#navbar").addClass("navbar-default");
    
        }
      
  });
    
});

    ScrollReveal().reveal('.widget',
    { 
        duration: 600,
        scale: 0.3,
        distance: '50%',
        reset: true,
        interval: 200 
    });

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top - 50;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});