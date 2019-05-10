jQuery(function () {
    
    jQuery(window).scroll(function () 
    {
        if (jQuery(this).scrollTop() > 200) 
        {
            $("#mainNavbar").removeClass("navbar-default");
            $("#mainNavbar").addClass("navbar-scroll");
    
        } 
        else 
        {
    
            $("#mainNavbar").removeClass("navbar-scroll");    
            $("#mainNavbar").addClass("navbar-default");
    
        }
      
  });
    
});

function scrollBanner() {

    var scrollPos;
  
    var parallax = document.querySelector('.parallax');
  
    scrollPos = window.scrollY;

    if (scrollPos <= 500) {
      
        parallax.style.transform =  "translateY(" + (-scrollPos/4) +"px" + ")";

    }
}
window.addEventListener('scroll', scrollBanner);