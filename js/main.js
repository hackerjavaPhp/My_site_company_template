$(function(){
    
    "use strict";
   
    $('a[href^="#"]').click(function() {
       let target = $(this).attr("href");
       $('html, body').animate({
            scrollTop: $(target).offset().top
       }, 800);
   });
    
    
    let offset = $('nav').offset();
    
    $(window).scroll(function() {
        
        if( $(window).scrollTop() > offset.top ) {
               $('#bottom_header').addClass('fixedNav');
            }
        else {
            $('#bottom_header').removeClass('fixedNav');
        }
        
    });
    
    
    if(window.innerWidth > 1024) {
    
        $('#slide').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3
        });
    
    } else {
        
        $('#slide').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        });  
        
    }
    
    $('#view_all_gallery').click(function() {
        let content = "<div class=\"gallery_line main_flex__nowrap flex__jcontent_between\"><div class=\"box_img_gallery\"><img src=\"images/bg_home_1.jpg\" alt=\"bg_home_1\"></div><div class=\"box_img_gallery\"><img src=\"images/bg_home_2.jpg\" alt=\"bg_home_2\"></div></div><div class=\"name_gallery\">Marina Palms / <span class=\"t_blue\">North Miami Beach, FL33162</span></div>";
        
        $("#gallery_box").append(content);
        $(this).remove();
    });
    
    
})