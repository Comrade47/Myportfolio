$(document).ready(function(){
    
    $('.nav-icon').click(function(){
        $('.dropdown-menu').css({opacity:'1',visibility:'visible'}).slideDown(300);

        return false
    })
    $('#cross-icon, #main-nav').click(function(){
        $('.dropdown-menu').slideUp(300)
    })

    

    
    $('.responsive').slick({
        dots: false,
        infinite: false,
        speed: 300,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:true,
        prevArrow:'<i class="fas fa-chevron-left prev_icon"></i>',
        nextArrow:'<i class="fas fa-chevron-right next_icon"></i>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
         
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
   
      $('.responsive button:first').html('<i class="fas fa-chevron-left"></i>')
      $('.responsive button:last').html('<i class="fas fa-chevron-right"></i>')
  

        $('#fname, #femail, #ftext').focus(function(){
          $(this).addClass('focus-style');
          
        })
        $('#fname, #femail, #ftext').blur(function(){
          $(this).removeClass('focus-style')
        })


        // menu fix

        var menu_fix=$('#about-me').offset().top;

        $(window).scroll(function(){
          var nav_scroll=$(this).scrollTop()

          if(nav_scroll>menu_fix){
              $('header').addClass('nav-fix')
          }

          else{
            $('header').removeClass('nav-fix')
          }
        })


      



})