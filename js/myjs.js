$(window).scroll(function(){
    $(".fadet").css("opacity", 1 - $(window).scrollTop() / 250);
  });


function myFunction() {
    var x = document.getElementById("nheader-r");
    if (x.className === "header-r") {
        x.className += " responsive";
    } else {
        x.className = "header-r";
    }
}
/*
var images=new Array('../image/home/1.jpg','../img/portfolio/3.JPG','../img/portfolio/5.JPG','../img/portfolio/6.JPG');
var nextimage=0;

doSlideshow();

function doSlideshow()
{
    if($('.slideshowimage').length!=0)
    {
        $('.slideshowimage').fadeOut(500,function(){slideshowFadeIn();$(this).remove()});
    }
    else
    {
        slideshowFadeIn();
    }
}
function slideshowFadeIn()
{
  $(".homeb").css("background-image", "url("+images[nextimage++]+")").fadeIn(500,function(){setTimeout(doSlideshow,5000);});
    if(nextimage>=images.length)
        nextimage=0;
}
*/


/*End Navigation Bar*/
jQuery(function() {
    var header = jQuery(".skill_one");
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 100) {
             $('.skill_one').animate({width:'520px'}, 1000);
        }
    });
});

jQuery(function() {
    var header = jQuery(".dish-box");
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();
         if (scroll >= 370) {
          $('.d3').fadeIn();
        }
         if (scroll>=670) {
          $('.d4').fadeIn();
        }
        if (scroll>=970) {
         $('.d5').fadeIn();
       }
       if (scroll>=1370) {
        $('.d6').fadeIn();
      }
      if (scroll>=1670) {
       $('.d7').fadeIn();
     }
     if (scroll>=1970) {
      $('.d8').fadeIn();
    }
    if (scroll>=2270) {
     $('.d9').fadeIn();
   }
   if (scroll>=2570) {
    $('.d10').fadeIn();
  }
  if (scroll>=2870) {
   $('.d11').fadeIn();
 }
 if (scroll>=3170) {
  $('.d12').fadeIn();
}
    });
});

var velocity = 0.5;

function update(){
    var pos = $(window).scrollTop();
    if(screen.width < 800) {
      return;
    }
    else {
    $('.homeb, .porimg, .aboutusimg, .hporimg').each(function() {
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()-920;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px');
    });
    $('.hporimg').each(function() {
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()-(-450);
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px');
    });
}
}
$(window).bind('scroll', update);

//dishendslider
$('.dishendslider').slick({
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        mobileFirst:true,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.clientslider').slick({
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        mobileFirst:true,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();
         if (scroll >= 870) {
        $('.dslider').addClass("animated fadeInLeft");
        }
      });

      jQuery(window).scroll(function() {
          var scroll = jQuery(window).scrollTop();
           if (scroll >= 870) {
          $('.cslider').addClass("animated fadeInRight");
          }
        });
