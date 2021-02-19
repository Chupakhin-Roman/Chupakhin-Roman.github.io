var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
     if(n > slides.length){
         slideIndex = 1
     }
     if (n < 1){
         slideInfex=slides.length
     }
     for(i=0;i <slides.length; i++){
         slides[i].style.display="none";
     }
     for(i = 0; i < dots.length; i++){
        dots[i].className= dots[i].className.replace("active", "");
     }
     slides[slideIndex-1].style.display = "block";
     dots[slideIndex-1].className += " active";
}

let wrap__ul = document.querySelector(".nav__wrap-nav");
let wrap__a = document.querySelectorAll(".nav__wrap-nav-text");
let menu = document.querySelector(".menu");
function myFunction(x) {
  if (x.matches) {
    wrap__ul.classList.add('hide');
    menu.classList.remove('hide');

}else{
    wrap__ul.classList.remove('hide');
    wrap__ul.classList.remove('nav__ul-dropping');
    menu.classList.add('hide');
}
}
let x = window.matchMedia("(max-width: 630px)")
myFunction(x)
x.addListener(myFunction)
document.querySelector(".menu").onclick = function(){
    if(wrap__ul.classList.contains('hide')){
        wrap__ul.classList.remove('hide');
        wrap__ul.classList.add('nav__ul-dropping');
    }else {
        wrap__ul.classList.add('hide');
        wrap__ul.classList.remove('nav__ul-dropping');
    }
}
