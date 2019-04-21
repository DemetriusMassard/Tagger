jQuery(function () {
    
    jQuery(window).scroll(function () 
    {
        if (jQuery(this).scrollTop() > 200) 
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