$(document).ready(function(){

    $('.slide-vk').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
       arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
    
    $('.otzovik').slick({
      dots: false,
      infinite: true,
      speed: 300,
      fade: false,
      cssEase: 'linear',
      adaptiveHeight: true    
    }); 
    /*---------------------------------------*/
    $("a.scrool").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
    /*---------------------------------------*/

    /* chapters */

    $(".chapter_item h4").click(function() {
        $(".chapter_item p").slideUp(300);
        if ($(this).parent().children("p").css("display") == "none") {
            $(this).parent().children("p").slideDown(300);
        }
    })
   
});


