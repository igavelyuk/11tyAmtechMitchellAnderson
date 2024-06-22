(function($) {

	// IMAGE ADD FROM DATA SRC
	$('[data-img-src]').each(function() {
		var Url = $(this).data('img-src');
		$(this).css('background-image', 'url('+Url+')');
	});


    /*═════HEADER SCRIPTS═════*/
    $(".nav_toggle_btn").on("click", function() {
        var ToggleWrap = $(this).data('toggle');
        $(ToggleWrap).slideToggle("500", "easeInOutExpo");
        $(this).toggleClass('open');
    });
    $(window).on('resize', function() {
        var WinWidth = $(this).width();
        $(".nav_toggle_btn").removeClass('open');
        $('.nav_toggle_btn').each(function() {
            var ToggleWrap = $(this).data('toggle');
            if (WinWidth < 991) {
                $(ToggleWrap).css('display', 'none');
                $('.navbar-nav ul').css('display', 'none');
            } else {
                $(ToggleWrap).css('display', '');
                $('.navbar-nav ul').css('display', '');
            }
        });
    });

    $('.header-area .navbar-nav ul').each(function(){
        var HasDropDown = $(this).parent('li');
        if ($(this).find('.dropdown-arrow').length === 0){
            HasDropDown.append('<button class="dropdown-btn"></button>');
            $(this).prev('.nav-link').addClass('dropdown-link');
        }
    });

    $('.navbar-nav .dropdown-btn').on("click", function() {
    var dropDown = $(this).parent('li').children('ul');
    dropDown.slideToggle("500", "easeInOutExpo");
    $(this).toggleClass('active-dropdown');
    });


    $(".toggle-lg-search").on('click', function() {
    	$('.search-box-wrap').slideToggle(600, "easeInOutExpo"); 
    });


	/*═════HERO SLIDE SCRIPTS═════*/
	var interleaveOffset = 0.4;
	new Swiper('.hero-slide-container', {
		loop: true,
		speed:1200,     
		grabCursor: true,
		watchSlidesProgress: true,
		mousewheelControl: true,  
		keyboardControl: true,
		resistance : true, 
		resistanceRatio : 0.5, 
		parallax:true,
		pagination: {
          el: ".hero-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '" data-index="0'+(index + 1)+'">0' + (index + 1) + "</span>";
          },
        },
		on: { 
			progress: function() {
			  var swiper = this;
			  for (var i = 0; i < swiper.slides.length; i++) {
			    var slideProgress = swiper.slides[i].progress;
			    var innerOffset = swiper.width * interleaveOffset;
			    var innerTranslate = slideProgress * innerOffset;
			    swiper.slides[i].querySelector(".slide_bg").style.transform =
			      "translate3d(" + innerTranslate + "px, 0, 0)";
			  }      
			},
			touchStart: function() {
			  var swiper = this;
			  for (var i = 0; i < swiper.slides.length; i++) {
			    swiper.slides[i].style.transition = "";
			  }
			},
			setTransition: function(speed) {
			  var swiper = this;
			  for (var i = 0; i < swiper.slides.length; i++) {
			    swiper.slides[i].style.transition = speed + "ms"; 
			    swiper.slides[i].querySelector(".slide_bg").style.transition = speed + "ms";   
			  }
			}
		}
	}); 


	// Accourdion
    $('.accordion-wrapper > .accordion-item:eq(0) .accordion-title').addClass('active').next().slideDown();
	// Accourdion
    $('.accordion-wrapper > .accordion-item:eq(4) .accordion-title').addClass('active').next().slideDown();

    $('.accordion-wrapper .accordion-title').click(function(j) {
	    var dropDown = $(this).closest('.accordion-item').find('.accordion-body');

	    $(this).closest('.accordion-wrapper').find('.accordion-body').not(dropDown).slideUp();

	    if ($(this).hasClass('active')) {
	        $(this).removeClass('active');
	    } else {
	        $(this).closest('.accordion-wrapper').find('.accordion-title.active').removeClass('active');
	        $(this).addClass('active');
	    }

	    dropDown.stop(false, true).slideToggle();

	    j.preventDefault();
    });


	/* Progress bar scripts */

   // Remove svg.radial-progress .complete inline styling
    $('svg.radial-progress').each(function( index, value ) {
        $(this).find($('circle.complete')).removeAttr( 'style' );
    });

    // Activate progress animation on scroll
    $(window).on("scroll", function(){
        $('svg.radial-progress').each(function( index, value ) { 
            if ( 
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(this).parent('.circle-progress').data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
            }

            

        });
    }).trigger('scroll'); 


    $('.circle-progress').each(function() {
    	$(this).append('<span class="percentage">'+$(this).data('percentage')+'<small>%</small></span>');
    });

    // Masonry
    
    $('.masonry').imagesLoaded(function() {
    	var isotopeContainer = $('.masonry');
    	isotopeContainer.isotope({itemSelector: '.masonry-item'});
    });

	// isotope
	$(".portfolio-list").imagesLoaded(function () { 
		// init Isotope
		var $grid = $(".portfolio-list").isotope({
			itemSelector: ".grid-item",
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-item'
			}
		});
		// filter items on button click
		$(".portfolio-menu").on("click", "button", function () {
			var filterValue = $(this).attr("data-filter");
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$(".portfolio-menu button").on("click", function (event) {
			$(this)
				.siblings(".active")
				.removeClass("active");
			$(this).addClass("active");
			event.preventDefault();
		});
	});

	// Page Loader

	var tl = gsap.timeline({});
	tl.pause();
	tl.set('.sigma_loader', {
		display: 'block'
	}).set('.sigma_loader-element', {
		transformOrigin: 'center right',
	}).to('.sigma_loader-element', 0.8, {
		scaleX: 1,
		ease: 'expo.inOut',
		stagger: 0.1,
	}).set('.sigma_loader-element', {
		transformOrigin: 'center left',
	}).to('.sigma_loader-element', 0.8, {
		scaleX: 0,
		ease: 'expo.inOut',
		stagger: -0.1,
	}).set('.sigma_loader', {
		display: 'none',
	});

	tl.play(0);

	function animation() {
		tl.play(0)    
	}


	// PORTFOLIO-SLIDE
	new Swiper(".portfolio-slide", {
		slidesPerView: 4,
		spaceBetween: 20,
		loop: true,
		autoplay: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            990: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 30
            }

        }
	});

	// POST GALLERY SLIDER
	new Swiper(".post-gallery-slider", {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		grabCursor: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});


	/*-----SLIDE SCRIPS-----*/
	new Swiper(".testimonial-slide", {
		slidesPerView: 1,
	});

	/*-----SLIDE SCRIPS-----*/
	new Swiper(".testimonial-slide-2", {
		slidesPerView: 3,
		spaceBetween: 20,
		loop: true,
		autoplay: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            }

        }
	});

	// Brand-SLIDE

	new Swiper(".sigma_brand-slider", {
		slidesPerView: 5,
		spaceBetween: 15,
		loop: true,
		autoplay: true,
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            575: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 5
            }

        }
	});

	// Team-SLIDE

	new Swiper(".sigma_team-slider", {
		slidesPerView: 3,
		spaceBetween: 20,
		loop: true,
		autoplay: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            }

        }
	});

	// PARALLAX SCRIPTS
	$(".parallax-bg").each(function() {
		jarallax($(this),{
			speed: 0.2
		})
	});
	$(".parallax-img").each(function() {
		jarallax($(this),{
			speed: 0.7
		})
	});


	// Custom Tabs

	$('.custom-tab-nav a').on('click', function(event) {

		event.preventDefault();

		$('.custom-tab-wrapper .tab-item').removeClass('active');
		$('.custom-tab-nav a').removeClass('active');

		var getID = $(this).attr('href');

		$(this).addClass('active');
		$(getID).addClass('active');
		
	});

	// Dark Mode js

	function addDarkmodeWidget() {
	  const options = {
	  bottom: '120px',
	  time: '0.5s',
	  mixColor: '#fff',
	  backgroundColor: '#fff',
	  buttonColorDark: '#050506',
	  buttonColorLight: '#fff',
	  saveInCookies: false,
	  label: '🌓',
	  autoMatchOsTheme: true
	  }

	  const darkmode = new Darkmode(options);
	  darkmode.showWidget();
	  }
	  window.addEventListener('load', addDarkmodeWidget);

	// Back to top

	function stickBackToTop() {
		if (window.pageYOffset > 400) {
			$('.sigma_top').addClass('active');
		} else {
			$('.sigma_top').removeClass('active');
		}
	}
	stickBackToTop();

	$('body').on('click', '.sigma_top', function() {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});

	// Window Load
	$(window).on('load', function() {
		$('.preloader').delay(450).fadeOut('slow');
	});

	$(window).on('scroll', function() {
    // Back to top
    stickBackToTop();

  });



})(jQuery); 