
$(document).ready(function() {
    
    $('.reviews__wrap').slick({
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        slidesToScroll: 1
    });

    $('.btns__next').on('click', function () { $('.reviews__wrap').slick('slickNext');});
    $('.btns__prev').on('click', function () { $('.reviews__wrap').slick('slickPrev');});
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('.menu').hide();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 34
    }, 1000);
});
