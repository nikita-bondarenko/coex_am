var element = document.body;
//var element = document.getElementById("myDIV");
if (!(window.ActiveXObject) && "ActiveXObject" in window) {
	element.classList.add("ie");
}


 history.pushState({}, '',location.origin)


  let closestByClass = function (el, clazz) {
    // Traverse the DOM up with a while loop
    while (el.className != clazz) {
      // Increment the loop to the parent node
      el = el.parentNode;

      if (!el) {
        return null;
      }
    } // At this point, the while loop has stopped and `el` represents the element
    // that has the class you specified in the second parameter of the function
    // `clazz`


    return el;
  }; 




$(document).ready(function () {



	var body = $("body");
	var main = $("main");


setTimeout(function()
            {
              	$("body").addClass('loaded');
            }, 100);

	//Cookies

	if (Cookies.get('agreecookies_coex')) {

		if (Cookies.get('agreecookies_coex') == 'agree') {
			$('.alert_cookies').addClass('none');
		}

	} else {

		// Куки нет...

		$('.alert_cookies').removeClass('none');
	}

	$("body").on("click", ".js_agree_cookies", function (e) {
		e.preventDefault();

		Cookies.set('agreecookies_coex', 'agree' , { expires: 180 });

		$('.alert_cookies').addClass('none');

	});


	$.urlParam = function (name) {
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (results == null) {
			var results = new RegExp('[\?&]' + name.toLowerCase() + '=([^&#]*)').exec(window.location.href);
		}		
		if (results == null) {
			return null;
		}
		return decodeURI(results[1]) || 0;
	}

	if ($.urlParam('rel777')){
		var reltourl = $.urlParam('rel');
console.log('rel = ' + reltourl);
var newUrl =  'https://t.me/?start=' + reltourl;


$('.js_runbot').attr("href", newUrl)

}

function iewportHeightFix() {

		var viewportWidth = $(window).width();
		var viewportHeight = $(window).height();

		$('.js_fix_viewportHeight').css('height', viewportHeight + 'px');
		if ($(window).width() < 768) {
			$('.js_fix_viewportHeight_mob').css('min-height', viewportHeight - 112 + 'px');

		}

	}

	iewportHeightFix();
	$(window).resize(function () {
		iewportHeightFix();

	});


// Слайдеры js_history_slider
	
	
var $slickElement2 = $('.js_history_slider');
$slickElement2.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,

//	outerEdgeLimit: true,
	//variableWidth: true,

		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}, {
				breakpoint: 1080,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}, {
				breakpoint: 767,
				settings: {

				}
			}
		]
	});

$('.js-slide-b.next,.js_arr_right_hist').click(function (e) {
		e.preventDefault();
		$(this).parents('section').find('.js_history_slider').slick('slickNext');
	});
	$('.js-slide-b.prev,.js_arr_left_hist').click(function (e) {
		e.preventDefault();
		$(this).parents('section').find('.js_history_slider').slick('slickPrev');
	});
// Слайдеры
	
	

/*
$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
   
    var i = (currentSlide ? currentSlide : 0) + 1;
  	$('.js_about_app_descr_item').removeClass('active');
	$('.js_about_app_descr_item[data-slide="'+i+'"]').addClass('active');

});
*/



$('.js-slide-b.next,.js_arr_right').click(function (e) {
		e.preventDefault();
		$(this).parents('section').find('.js-slider').slick('slickNext');
	});
	$('.js-slide-b.prev,.js_arr_left').click(function (e) {
		e.preventDefault();
		$(this).parents('section').find('.js-slider').slick('slickPrev');
	});

	$('.js_arr_right-mob').click(function (e) {
		e.preventDefault();
		$(this).parents('section').find('.js-slider-mob').slick('slickNext');
	});
	$('.js_arr_right-prev').click(function (e) {
		e.preventDefault();
		$(this).parents('section').find('.js-slider-mob').slick('slickPrev');
	});




	/* АНИМАЦИЯ ПРИ ПРОКРУТКЕ */

	var pageActivated = true;
	var scrollOffset = 0;
	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var scrollPos = $(window).scrollTop();

	

	// при рейсайзе окна
	$(window).on('scroll resize', function () {
		var scrollPos = $(window).scrollTop();
		scrollAnimate(scrollPos);
	});
	// определение блока для анимации

	function scrollAnimate(scrolledTo) {
		var winWidth = $(window).width();
		var winHeight = $(window).height();
		var winHeightHalf = $(window).height() / 1.2;
		var scrollOffset = 0;
		var constanta = 0.06;
		if ($(window).width() < 1023) {
			var constanta = 0.01;
		}
		var threshold = parseInt(winHeight * constanta);

		setTimeout(function () {
			body.find('.animation').each(function () {
				var block = $(this),
				blockHeight = block.outerHeight(),
				blockPos = block.offset().top - scrollOffset;

				//if (scrolledTo > blockPos - threshold && scrolledTo < blockPos + blockHeight - threshold) {
				//if (scrolledTo + winHeight - threshold > blockPos - scrollOffset) {

				if (scrolledTo + winHeight - threshold > blockPos - scrollOffset) {

					//if (blockPos - scrollOffset - threshold - winHeight <= 0) {
					//if (!block.hasClass('animated')) {
					block.addClass('animated');

				}

			});

			body.find('.img_paralax_c').each(function () {
				var block = $(this),
				blockHeight = block.outerHeight(),
				blockPos = block.offset().top - scrollOffset;

				//if (scrolledTo > blockPos - threshold && scrolledTo < blockPos + blockHeight - threshold) {
				//if (scrolledTo + winHeight - threshold > blockPos - scrollOffset) {

				//if (blockPos - scrollOffset - threshold - winHeight <= 0) {


				if (scrolledTo + winHeight > blockPos - scrollOffset) {
					//if (!block.hasClass('animated')) {
					console.log('scrolledTo' + scrolledTo);
					block.addClass('paralaxed');

					var height = parseInt(block.height());
					var diff = scrolledTo - blockPos + winHeightHalf;
					var ratio = Math.round((diff / height) * 2)
						if ($(this).hasClass('img_paralax_c_half')) {
							ratio = Math.round((diff / height) * 1)
						}

						if (ratio < 0) {
							ratio = 0
						}
						console.log(scrolledTo);

					block.css('transform', 'translateY(' + ratio + 'vw)');

				} else {
					block.removeClass('paralaxed');
				}
				//if (blockPos - scrollOffset - threshold + winHeight <= 0) {

				var height = parseInt(block.height());

				if (scrolledTo - height - parseInt(winHeight / 4) > blockPos - scrollOffset) {

					//	block.removeClass('paralaxed');
					//	block.parents('.paralax_subinner').css('transform', 'translateY(' + 0 + ')');

				}

			});

		}, 10);

	}
scrollAnimate(scrollPos);
	

	var head = $('.head-page');
	


	$("body").on("click", ".js_scroll", function (e) {
		e.preventDefault();
		var target = this.hash;
		var blockHeight = 60;
		$("body").css('margin-top', '-' + 0 + 'px');
		var $target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - blockHeight
		}, 500, 'swing', function () {
			//window.location.hash = target;
		});

  //head.removeClass('open');
//body.removeClass('body__menu_open');

	});	


$("body").on("click", ".js_contacts_list_item_show", function (e) {
		e.preventDefault();
		

		$(this).addClass('none');
			$(this).parents('.contacts_list').find('.contacts_list_item').removeClass('none');
		

	});


 $(".inner_table").on("scroll", function(event) {
       var s = $(".inner_table").scrollLeft() + $(window).width();
var w = $('.table_btc').width() ;

console.log('scroll=' + s);
console.log(w);

if (s > w)
{
$('.inner_table_arr').addClass('none');
} 
else
{
$('.inner_table_arr').removeClass('none');
}
    });




	$("body").on("click", ".faq_head", function (e) {
		e.preventDefault();
		if ($(this).parents('.faq_row').hasClass('open')) {
			$(this).parents('.faq_row').removeClass('open')
		} else {
			$(this).parents('.faq_row').addClass('open')
		}
	});
	$("body").on("click", ".js_faq_more", function (e) {
e.preventDefault();
		$(this).parent('.faq_btn').addClass('none');
		$('.faq_row').removeClass('none');
		
	});


    $(document).click(function(e) {
        var $target = $(e.target);
        if ($target.closest(".js_butger_btn").length == 0) {
          // head.removeClass('open');
        }
    });


	$("body").on("click", ".js_butger_btn,.js_scroll", function (e) {

if ($(window).width() < 768) {


		e.preventDefault();
		var head = $('.head-page');
if (head.hasClass('open'))
{
head.removeClass('open');
body.removeClass('body__menu_open');
}
else
{
head.addClass('open');
body.addClass('body__menu_open');
}
}
	});




	


	if ($('.js_player3').length > 0) {

var videoFile = 'video/promo.mp4';
if ($(window).width() < 768) {
videoFile = 'video/promo.mp4';

}

$('.js_player3').find('video source').attr('src', videoFile);

		$('.js_player3').find('video').get(0).load();
		$('.js_player3').find('video').get(0).currentTime = 0;
		$('.js_player3').addClass('play');

        var playPromise = $('.js_player3').find('video').get(0).play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                    // Automatic playback started!
                    // Show playing UI.
                })
                .catch(error => {
                    // Auto-play was prevented
                    // Show paused UI.
                });
        }


		$('.js_player3').find('video').on("ended", function (e) {

			$('.js_player3').find('video').get(0).currentTime = 0;
			        var playPromise = $(this).parents('.js_player3').find('video').get(0).play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                    // Automatic playback started!
                    // Show playing UI.
                })
                .catch(error => {
                    // Auto-play was prevented
                    // Show paused UI.
                });
        }

			console.log('ended');
		});
	}

//onScroll();
	$(document).on("scroll", onScroll);
	$(window).resize(onScroll);

	function onScroll(event) {

		if ($(window).width() < 768) {

			var promoHeight = 0;

			if ($('.promo ').length > 0) {
				var promoHeight = $(".promo").outerHeight(true);

			}

			var scrollPosition = $(document).scrollTop();
			var windowHeight = $(window).height();
			var FormHeight = 0;
			var FormOffset = 0;

			if ($('.js-form-offset ').length > 0) {
				var FormOffset = $(".js-form-offset").offset().top;
				var FormHeight = $(".js-form-offset").height();

			}
			
			var FootOffset = $("footer").offset().top;
			var FootHeight = $("footer").outerHeight(true);
			
		

			if ($('.js-form-offset').length > 0) {

				if ((FormOffset <= scrollPosition + windowHeight)&&(FormOffset + FormHeight + 200 >= scrollPosition + windowHeight)) {
				//if (FormOffset + FormHeight >= scrollPosition + windowHeight) {
					$('.promo_btn').addClass('hide');
				} else {
					$('.promo_btn').removeClass('hide');
				}
			}
			
			
			//if (scrollPosition + 50  < promoHeight) {				$('.promo_btn').addClass('hide');			}
			
			if (scrollPosition + windowHeight + 60 > FootOffset) {
				$('.promo_btn').addClass('hide');
			}
			
			

		}
	}
	

	$('.js_psevdocheckbox').click(function (e) {
		e.preventDefault();
		if ($(this).parents('.psevdocheckbox_item').find('.psevdocheckbox').hasClass('selected'))
			{
$(this).parents('.psevdocheckbox_item').find('.psevdocheckbox').removeClass('selected');
			}
else
{
$(this).parents('.psevdocheckbox_item').find('.psevdocheckbox').addClass('selected');
$(this).parents('.psevdocheckbox_item').removeClass('formitem_error');
}
	});










	//layout. psevdoselect

  document.addEventListener('click', function (e) {
    if (closestByClass(e.target, 'psevdoselect') || closestByClass(e.target, 'psevdoselect open') || closestByClass(e.target, 'psevdoselect psevdoselect-num') || closestByClass(e.target, 'psevdoselect psevdoselect-num open')) {
      let wasopen = 0;

if (e.target.closest(".psevdoselect").classList.contains('open')) {
        wasopen = 1;
      } 

console.log(wasopen);

      document.querySelectorAll(".psevdoselect").forEach(function (el) {
        el.classList.remove("open");
      });

      if (e.target.classList.contains('js_psevdoselect_item')) {
        let mytext = e.target.innerText || e.target.textContent;
        console.log('Клик по значению: ' + mytext);
if ( e.target.closest(".psevdoselect_area") ) {
        e.target.closest(".psevdoselect_area").classList.add('has_val');
        e.target.closest(".select_theme_sel").classList.remove('formitem_error');
		 e.target.closest(".select_theme_sel").querySelector(".select_theme").value = mytext;
}


      //  e.target.closest(".psevdoselect").querySelector(".js_psevdoselect__txt").innerHTML = mytext;
        e.target.closest(".psevdoselect").querySelectorAll(".js_psevdoselect_item").forEach(function (el) {
          el.classList.remove("active");
        });
        e.target.classList.add("active");
      }

      if (wasopen == 0) {
        e.target.closest(".psevdoselect").classList.add("open");
      } else {
        e.target.closest(".psevdoselect").classList.remove("open");
      }
    } else {
      document.querySelectorAll(".psevdoselect").forEach(function (el) {
        el.classList.remove("open");
      });
    }
  }); 

	$('.js_open_popup').click(function (e) {
		e.preventDefault();
		var needpopup = $(this).attr('data-window');
		showPopup(needpopup);

		if (needpopup == 'popup_video')
			{

			var needsource = $(this).attr('data-source');
			$('.js_player').find('source').attr('src',needsource)


			$('.js_player').find('video').get(0).pause();
			$('.js_player').find('video').get(0).load();

				var playPromise = $('.js_player').find('video').get(0).play();

						if (playPromise !== undefined) {
							playPromise.then(_ => {
								// Automatic playback started!
								// Show playing UI.
							})
							.catch(error => {
								// Auto-play was prevented
								// Show paused UI.
							});
						}

						//$('.js_player').addClass('play');
						//$(this).parents('.section_video_bg_mob_helper').addClass('play');

						console.log('play');



						if ($(window).width() < 1024) {
							const div = document.getElementById('tst2');
							if (div.requestFullscreen) 
								div.requestFullscreen();
							else if (div.webkitRequestFullscreen) 
								div.webkitRequestFullscreen();
							else if (div.msRequestFullScreen) 
							  div.msRequestFullScreen();
						}

			}

	});	


	//POPUP
	
	
 

	//$(body).on("click", "a[data-window], span[data-window], button[data-window], input[data-window], div[data-window]", function (e) {
		
		
		function showPopup(name) {
			
			
		console.log('!!!');
		
		var scrolltp = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
		body.attr("data-scroll", scrolltp);
		//e.preventDefault();

		$('.shadow').removeClass('open');
		$('.popup').removeClass('open');
			 

		//Р—Р°РєСЂС‹РІР°РµРј РјРµРЅСЋ
		$('.shadowmm').removeClass('open');
		$('.mobile-menu').removeClass('open');
		$('.js_open_mobile').removeClass('open');
		$("body").addClass("body__popup_open");
		main.css('margin-top', '-' + scrolltp + 'px');

		//var mypopup = $('.' + $(this).attr('data-window'));
		var mypopup = $('.' + name);
		var popup_id = '';


		mypopup.addClass("open");

		$('.shadow').addClass('open');

		$('.shadow').scrollTop(0);
		$('.shadow_scroll').scrollTop(0);

	};
	
	
	

	//POPUP_CLOSE


	$(document).on('click', function (e) {

		if (!$(e.target).closest("a[data-window], span[data-window], button[data-window], input[data-window], div[data-window],.popup_content,.burger_nav,.js_player,.preloader,.click-circle,.mce-container,.mce-container *,.mce-panel,.mce-reset,.mce-btn,.mce-btn button,.remove,.js-header_ico-search,.js_open_menu").length) {
			
			

			hidePopup();

		}

	});

	


$('.js-closepopup').click(function (e) {
		e.preventDefault();
		hidePopup();

	});	




	function hidePopup() {
		
		if ($('.popup').hasClass('open'))
		{
			
		
		 $(location).attr('hash', '');
		
		$('.shadow').removeClass('open');
		$('.popup').removeClass('open');
		$('body').removeClass('open');
		if ($("body").hasClass("body__popup_open")) {
			var needed_scroll = $("body").attr("data-scroll");
			$("body").removeClass("body__popup_open");
			main.css('margin-top', '-' + 0 + 'px');
			$(window).scrollTop(needed_scroll);

		}
		
		


		}
		
		
	};






	

});




