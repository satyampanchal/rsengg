/*Navigation Bar*/
/*
jQuery(function() {
    var header = jQuery(".x-navbar");
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 50) {
             header.removeClass('darknavbar').addClass("clearnavbar");
        } else {
             header.removeClass("clearnavbar").addClass('darknavbar');
        }
    });
});
jQuery(function() {
    var header = jQuery(".x-navbar a");
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 50) {
             header.removeClass('white').addClass("black");
        } else {
             header.removeClass("black");
        }
    });
});
*/
function myFunction() {
    var x = document.getElementById("nheader-r");
    if (x.className === "header-r") {
        x.className += " responsive";
    } else {
        x.className = "header-r";
    }
}



/*End Navigation Bar*/
jQuery(function() {
    var header = jQuery(".skill_one");
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 100) {
             $('.skill_one').animate({width:'100%'}, 1000);
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

(function($){
  "use strict";

	// Preloader Js
	jQuery(window).on('load', function() {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(200).fadeOut("slow");
	});
})();


function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
