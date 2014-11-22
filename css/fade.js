// (function ($) {
//   $(document).ready(function(){


// 	$(function () {
// 		$(window).scroll(function () {
// 			if ($(this).scrollTop() > 50) {
// 				$(".navbar").style.backgroundColor = red;

// 			} else {
// 				$(".navbar").style.backgroundColor = transparent;
// 			}
// 		});


// 	});

// });
//   }(jQuery));

$(document).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('navbar').css({
            "background-color": "blue"
        });
    } else {
        $('navbar').css({
            "background-color": "transparent"
        });
    }
});