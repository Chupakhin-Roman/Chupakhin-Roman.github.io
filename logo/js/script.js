$(function(){
	$('.toggles button').click(function(){
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(545);
		get_current.show(545);
	});
	$('#showall').click(function(){
		$('.post').show(545);
	});
});
function carouselFn(){
 if ($(window).width() < 545){
    $(".owl-carousel").owlCarousel({

     items:3,
     margin:40,
     loop:true,
     autoplay:true,
     autoplayTimeout:2000
     });
  }
  else{
   $(".owl-carousel").owlCarousel({

    items:5,
    margin:40,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000
   });
  }
 };

 $(document).ready(function() {
     carouselFn();
});
$(window).resize(function(){
     carouselFn();
 });

 function isEmail() {
    var str = document.getElementById("email").value;
    var status = document.getElementById("status");
    var re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    if (re.test(str)) status.innerHTML = "Адрес правильный";
      else status.innerHTML = "Адрес неверный";
    if(isEmpty(str)) status.innerHTML = "Поле пустое";
   }
   function isEmpty(str){
    return (str == null) || (str.length == 0);
   }
