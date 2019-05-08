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


function scrollBanner() {

    var scrollPos;
  
    var parallax = document.querySelector('.parallax');
  
    scrollPos = window.scrollY;

    if (scrollPos <= 500) {
      
        parallax.style.transform =  "translateY(" + (-scrollPos/3) +"px" + ")";

    }
}
window.addEventListener('scroll', scrollBanner);