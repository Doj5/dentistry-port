$(function (){

  $('.header__burger').on('click ' , function(e){
    e.preventDefault()
    $('.header__burger-body').toggleClass('active')
  })



  var swiper = new Swiper('.stock-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    centerSlide: 'true',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
      },
    }
  });

  $('.play_yt').click(function () {
    $(this).hide();
    $('.ytvideo').attr('src', 'https://www.youtube.com/embed/k40ggCt3LZI?autoplay=1' )
  })


  var swiper = new Swiper(".doctors-thumb-slider", {
    slidesPerView: 4,
  });


  var swiper2 = new Swiper(".doctors-slider", {
    spaceBetween:50,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  $('.doctors-thumb-slide').on('click' , function(){
    $('.doctors-thumb-slide').removeClass('active')
    $(this).toggleClass('active')
  })

  
  $('.choise-item').on('click' , function(){
    $('.choise-item').removeClass('active')
    $(this).toggleClass('active')
  })


  $('.visit__block-btn').on('click' , function(){
    $('.visit__block-btn').removeClass('active')
    $(this).toggleClass('active')
  })


  var swiper = new Swiper(".reviews-content", {
    slidesPerView: 2,
    spaceBetween:30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 70,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  var swiper = new Swiper(".revards-content", {
    slidesPerView: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

});