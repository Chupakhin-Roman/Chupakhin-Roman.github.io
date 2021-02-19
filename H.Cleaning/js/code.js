let wrap__ul = document.querySelector(".wrap__ul");
let nav__logo = document.querySelector(".nav__logo");
let wrap__a = document.querySelectorAll(".wrap__a");
function myFunction(x) {
  if (x.matches) {
    wrap__ul.classList.add('hide');
}else{
    wrap__ul.classList.remove('hide');
    nav__logo.classList.remove('nav__logo-dropping');
    wrap__ul.classList.remove('wrap__ul-dropping');
}
}
let x = window.matchMedia("(max-width: 1130px)")
myFunction(x)
x.addListener(myFunction)
document.querySelector(".fa-bars").onclick = function(){
    if(wrap__ul.classList.contains('hide')){
        wrap__ul.classList.remove('hide');
        nav__logo.classList.add('nav__logo-dropping');
        wrap__ul.classList.add('wrap__ul-dropping');
    }else {
        wrap__ul.classList.add('hide');
        nav__logo.classList.remove('nav__logo-dropping');
        wrap__ul.classList.remove('wrap__ul-dropping');
    }
}
$('.home__box').slick({
    autoplaySpeed: 2000,
    speed: 1000,
    dots: true,
    arrows: false,
    autoplay: true
});
$('.services__carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    speed: 400,
    autoplay: true,
    responsive: [
    {breakpoint: 1500,
      settings: {
          slidesToShow: 3
      }},
    {breakpoint: 1080,
      settings: {
          slidesToShow: 2
      }},
      {breakpoint: 570,
      settings: {
          slidesToShow: 1
      }}]
});
$('.comment__wrap-comments').slick({
    autoplaySpeed: 2000,
    speed: 1000,
    infinite: true,
    autoplay: true
});

let email = document.querySelector('.email__block');
let modal = document.querySelector('.certified__open-block');
document.querySelectorAll('.emaill').forEach(function(element){
    element.onclick = showModal;
})
document.querySelectorAll('.email').forEach(function(element){
    element.onclick = closeModalWrap;
})
document.querySelectorAll('.certified__btn').forEach(function(element){
    element.onclick = showModal;
})
document.querySelectorAll('.close').forEach(function(element){
    element.onclick = closeModal;
})
document.querySelectorAll('.certified__open').forEach(function(element){
    element.onclick = closeModalWrap;
})
function showModal(){
    let modalId = this.dataset.modal;
    let emailId = this.dataset.modal;
    document.querySelector(emailId).classList.remove('hide');
    document.querySelector(modalId).classList.remove('hide');
    document.onkeydown = function (element){
        if(element.keyCode == 27) closeModal();
    }
}
function closeModal(){
    email.parentElement.classList.add('hide');
    modal.parentElement.classList.add('hide');
    document.onkeydown = null;
}
function closeModalWrap(){
    if (!email.contains(event.target)) email.parentElement.classList.add('hide');
    if (!modal.contains(event.target)) modal.parentElement.classList.add('hide');
    document.onkeydown = null;
}


let $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});
document.querySelector('#get__inf-submit').onclick = function (event) {
    event.preventDefault();
    let name = document.querySelector('#get__inf-name').value;
    let tel = document.querySelector('#get__inf-tel').value;
    let email = document.querySelector('#get__inf-email').value;
    let data = {
        "name": name,
        "tel": tel,
        "email": email,
    }
    ajax('core/signup.php', 'POST', sending, data);
    function sending(result) {
        console.log(result);
        if (result == 2) {
            alert('Please fill in all the data!');
        }
        else if (result == 1) {
            alert('Success.Manager will contact you shortly!');
        }
        else {
            alert('Error Retry the operation again!');
        }
    }
}
document.querySelector('#email__contact-button').onclick = function (event) {
    let email = document.querySelector('#email__contact').value;
    let data = {
        "email": email,
    }
    ajax('core/contact_you.php', 'POST', login, data);
    function login(result) {
        console.log(result);
        if (result == 2) {
            alert('Please fill in all the data!');
        }
        else if (result == 1) {
            alert('Success.Manager will contact you shortly!');
        }
        else {
            alert('Error Retry the operation again!');
        }
    }
}
let $Top = $('.top')
$(window).on('scroll', function(){
    if($(window).scrollTop() >= 300){
        $Top.fadeIn();
    }else{
        $Top.fadeOut();
    }
});
$Top.on('click',function(){
    $('html,body').animate({scrollTop:0},900)
});
