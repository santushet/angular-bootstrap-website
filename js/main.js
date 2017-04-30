// (function ($) {
//     "use strict";
//
//         //Activated Testimonial Carousel
//
//         $('.testimonial-active').owlCarousel({
//             items: 3,
//             margin: 30,
//             autoplay: true,
//             autoplayTimeout: 2000,
//             smartSpeed: 500,
//             autoplaySpeed: 3000,
//             loop: true,
//             responsive: {
//                 992: {
//                     item: 3
//                 },
//                 768: {
//                     items: 2
//                 },
//                 320: {
//                     items: 1
//                 }
//             }
//         });
//
//         //Activated Clients Logo Carousel
//
//         $('.clients-active').owlCarousel({
//             items: 7,
//             margin: 95,
//             autoplay: true,
//             smartSpeed: 500,
//             autoplaySpeed: 3000,
//             loop: true,
//             responsive: {
//                 992: {
//                     item: 6
//                 },
//                 768: {
//                     items: 5
//                 },
//                 320: {
//                     items: 3,
//                     margin: 50
//                 }
//             }
//         });
//
//         //Activated Gallery Photos Carousel
//
//         $('.gallery-wrap').owlCarousel({
//             items: 1,
//             autoplay: true,
//             smartSpeed: 500,
//             autoplaySpeed: 3000,
//             loop: true
//         });
//
//         //Activated Testimonial Widget Carousel
//
//         $('.widget-testimonial').owlCarousel({
//             items: 1,
//             autoplay: true,
//             loop: true,
//             animateOut: 'fadeOut',
//             animateIn: 'fadeIn'
//         });
//
//         //Activated Main Slider
//
//         $(".Modern-Slider").slick({
//             autoplay: true,
//             autoplaySpeed: 10000,
//             speed: 600,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             pauseOnHover: false,
//             dots: true,
//             pauseOnDotsHover: true,
//             cssEase: 'linear',
//             fade: true,
//             //   draggable: true,
//             prevArrow: '<button class="PrevArrow"></button>',
//             nextArrow: '<button class="NextArrow"></button>',
//         });
//
//         //Accordion JS
//
//         var dd = $('dd');
//         dd.filter(':nth-child(n+4)').hide();
//         $('dl.accordion').on('click', 'dt', function () {
//             $(this)
//                 .toggleClass('active')
//                 .siblings('dt')
//                 .removeClass('active');
//
//             $(this)
//                 .next()
//                 .slideToggle(200)
//                 .siblings('dd')
//                 .slideUp(300);
//
//         });
//
//         //Activated jQuery LightBox PrettyPhoto
//
//         $('.light-box').prettyPhoto();
//
//         //Activated jQuery CounterUp
//
//         $('.counter').counterUp({
//             delay: 10,
//             time: 5000
//         });
//
//         //MobileMenu Activated
//
//         $('.mainmenu-area nav').meanmenu();
//
//
//         // preloader
//
//         $(window).on('load', function () {
//             $('body').css('overflow-y', 'visible');
//             $('#preloader').fadeOut('slow', function () {
//                 $(this).remove();
//             });
//         });
//
//
// }(jQuery));

var app = angular.module('laddersApp', ['ngRoute']);


app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "partials/home.html",
			controller: "PageController"
		})
		.when("/about", {
			templateUrl: "partials/about.html",
			controller: "PageController"
		})
		.when("/career", {
			templateUrl: "partials/career.html"
		})
		.when("/contact", {
			templateUrl: "partials/contact.html"
		})
    .when("/solutions", {
      templateUrl: "partials/solutions.html"
    })
		.when("/solutions-1", {
			templateUrl: "partials/solutions-1.html"
		})
		.when("/solutions-2", {
			templateUrl: "partials/solutions-2.html"
		})
		.when("/solutions-3", {
			templateUrl: "partials/solutions-3.html"
		})
		.when("/solutions-4", {
			templateUrl: "partials/solutions-4.html"
		})
		.when("/solutions-5", {
			templateUrl: "partials/solutions-5.html"
		})
		.when("/services", {
			templateUrl: "partials/services.html"
		})
		.when("/services-1", {
			templateUrl: "partials/service1.html"
		})
		.when("/services-2", {
			templateUrl: "partials/service2.html"
		})
		.when("/services-3", {
			templateUrl: "partials/service3.html"
		})
		.when("/services-4", {
			templateUrl: "partials/service4.html"
		})
		.when("/services-5", {
			templateUrl: "partials/service5.html"
		})
		.when("/services-6", {
			templateUrl: "partials/service6.html"
		})
		.when("/services-7", {
			templateUrl: "partials/service7.html"
		})

		.otherwise("/404", {
			templateUrl: "partials/404.html",
			controller: "PageController"
		});

}]);

app.controller('PageController', function () {
	console.log("page controller");

	$(".Modern-Slider").slick({
		autoplay: true,
		autoplaySpeed: 10000,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: true,
		pauseOnDotsHover: true,
		cssEase: 'linear',
		fade: true,
		//   draggable: true,
		prevArrow: '<button class="PrevArrow"></button>',
		nextArrow: '<button class="NextArrow"></button>',
	});

	//Accordion JS

	var dd = $('dd');
	dd.filter(':nth-child(n+4)').hide();
	$('dl.accordion').on('click', 'dt', function () {
		$(this)
			.toggleClass('active')
			.siblings('dt')
			.removeClass('active');

		$(this)
			.next()
			.slideToggle(200)
			.siblings('dd')
			.slideUp(300);

	});

	//Activated jQuery LightBox PrettyPhoto

	$('.light-box').prettyPhoto();

	//Activated jQuery CounterUp

	$('.counter').counterUp({
		delay: 10,
		time: 5000
	});

	//MobileMenu Activated

	$('.mainmenu-area nav').meanmenu();

	//Activated Testimonial Carousel

	$('.testimonial-active').owlCarousel({
		items: 3,
		margin: 30,
		autoplay: true,
		autoplayTimeout: 2000,
		smartSpeed: 500,
		autoplaySpeed: 3000,
		loop: true,
		responsive: {
			992: {
				item: 3
			},
			768: {
				items: 2
			},
			320: {
				items: 1
			}
		}
	});

	//Activated Clients Logo Carousel

	$('.clients-active').owlCarousel({
		items: 7,
		margin: 95,
		autoplay: true,
		smartSpeed: 500,
		autoplaySpeed: 3000,
		loop: true,
		responsive: {
			992: {
				item: 6
			},
			768: {
				items: 5
			},
			320: {
				items: 3,
				margin: 50
			}
		}
	});

	//Activated Gallery Photos Carousel

	$('.gallery-wrap').owlCarousel({
		items: 1,
		autoplay: true,
		smartSpeed: 500,
		autoplaySpeed: 3000,
		loop: true
	});

	//Activated Testimonial Widget Carousel

	$('.widget-testimonial').owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn'
	});
});
