
//preloader
$(document).ready(function() {
  $('#preloader').fadeOut(400);
});
//sticky header


$(function() {
  let header = $('#header');
  let hederHeight = header.height(); // вычисляем высоту шапки
  
  

  $(window).scroll(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() >52) {
       header.addClass('header_fixed');
      
      } else {
       header.removeClass('header_fixed');
      }
    });
    if($(this).scrollTop() > 52) {
      header.css({
        'background': '#fff'
      });
     $('body').css({
        'paddingTop': hederHeight +'px' // делаем отступ у body, равный высоте шапки
     });
     
    } else {
     header.removeClass('header_fixed');

     $('body').css({
      'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
     })
    }
  });
});

 // validate

$.validator.addMethod('regex' ,function(value,element,regexp){
  let regExsp = new RegExp(regexp);
  return this.optional(element) || regExsp.test(value)
}, 'please check your intup');


$('#form').validate({
    rules:{
      firstName:{
        required:true,
        regex:"[A-Za-z]{1,32}"
      },
      phone:{
        required:true,
        digits:true,
        minlenght:10,
        maxlenght:12,
        regex:"[0-9]+"
      },
      email:{
        required:true
      },
      country:{
        required:true
      } 
    },
    messages:{
      firstName:'Введите имя правильно',
      phone:'Введите номер правильно',
      email:'Введите почту правильно'
    }
});



/* $('#form-new').validate({
  rules:{
    firstName:{
      required:true,
      regex:"[A-Za-z]{1,32}"
    },
    phone:{
      required:true,
      digits:true,
      minlenght:10,
      maxlenght:12,
      regex:"[0-9]+"
    },
    email:{
      required:true
    },
    country:{
      required:true
    },
    city:{
      required:true
    },
    street:{
      required:true
    },
    house:{
      required:true
    },
    flat:{
      required:true
    }
    
  },
  messages:{
    firstName:'Введите имя правильно',
    phone:'Введите номер правильно',
    email:'Введите почту правильно',
    country:'Введите страну',
    city:'Введите город',
    street:'Введите улицу',
    house:'Введите дом',
    flat:'Введите квартиру'
  }
});  */



//форма + header
document.addEventListener('DOMContentLoaded' ,function (){
  const a = document.querySelector('.phone-top');
  const popup = document.querySelector('.popup');
  const form = document.getElementById('popup');
 
  const b = document.querySelector(".sprint-header-1");
  const с = document.querySelector(".sprint-icon-1");
  const d = document.querySelector(".sprint-text-1");

  const b2 = document.querySelector(".sprint-header-2");
  const с2 = document.querySelector(".sprint-icon-2");
  const d2 = document.querySelector(".sprint-text-2");
  
  const b3 = document.querySelector(".sprint-header-3");
  const с3 = document.querySelector(".sprint-icon-3");
  const d3 = document.querySelector(".sprint-text-3");
 
  a.addEventListener('click', () => {
    form.classList.add('open');
    popup.classList.add('popup_open');
   
  });

  // Получение элемента <span>, который закрывает модальное окно
  const span = document.querySelector('.close');
  // Когда пользователь нажимает кнопку (x) <span>, закрывается окно формы
  span.onclick = function() {
    popup.classList.remove('popup_open');
  }

  // Когда пользователь нажимает в любое место вне формы, закрыть окно формы
  window.onclick = function(event) {
    if (event.target == popup) {
      popup.classList.remove('popup_open');
    }
  }

  b.addEventListener('click', () => {
    с.classList.toggle('rotate-45');
    d.classList.toggle('opacity-1');
  });
  b2.addEventListener('click', () => {
    с2.classList.toggle('rotate-45');
    d2.classList.toggle('opacity-1');
  });
  b3.addEventListener('click', () => {
    с3.classList.toggle('rotate-45');
    d3.classList.toggle('opacity-1');
  });



});

/* $(function () {
  $('input.btn-form').click(function () {
    $('div.'+$(this).attr("rel")).fadeIn(500);
    $("body").append("<div id='overlay'></div>");
    $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
    return false;				
  });	
  $('a.close-form').click(function () {
    $(this).parent().fadeOut(100);
    $('#overlay').remove('#overlay');
    return false;
  });
  
}); */

//tab
$('.tab-pane').on('click',function(){
  var currTab = $(this).index();

  $('.tab-pane ').removeClass('active-tab');
  $(this).addClass('active-tab');

  $('.tab-text').removeClass(' active-tab');
  $('.tab-text').eq(currTab).addClass(' active-tab');
})

//variety
$('.variety-pane').on('click',function(){
  var currTab = $(this).index();

  $('.variety-pane ').removeClass('active-variety');
  $(this).addClass('active-variety');

  $('.variety-text').removeClass(' active-variety');
  $('.variety-text').eq(currTab).addClass(' active-variety');
})

//tires-btn-set-1
$('.tires-btn-pane-1').on('click',function(){
  var currTab = $(this).index();

  $('.tires-btn-pane-1 ').removeClass('active-tires-btn-1');
  $(this).addClass('active-tires-btn-1');

  $('.tires-btn-text-1').removeClass(' active-tires-btn-1');
  $('.tires-btn-text-1').eq(currTab).addClass(' active-tires-btn-1');
})
//tires-btn-set-2
$('.tires-btn-pane-2').on('click',function(){
  var currTab = $(this).index();

  $('.tires-btn-pane-2 ').removeClass('active-tires-btn-2');
  $(this).addClass('active-tires-btn-2');

  $('.tires-btn-text-2').removeClass('active-tires-btn-2');
  $('.tires-btn-text-2').eq(currTab).addClass('active-tires-btn-2');
})

