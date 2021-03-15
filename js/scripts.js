// TODO: ↓↓↓ remove this script ↓↓↓
// Current menu item highlithing
$(function () {
	var location = window.location.href;
	var cur_url = location.split('/').pop();

	$('.top-nav li, .mobile-top-nav li, .footer-nav li').each(function () {
		var link = $(this).find('a').attr('href');

		// console.log(link);

		if (cur_url == '') {
			cur_url = 'index.html';
		}

		if (cur_url == link)
		{
			$(this).addClass('current-menu-item');
			$(this).parents('li').addClass('current-menu-parent');
		}
	});
});


document.addEventListener('DOMContentLoaded', function(){

	function getMaxOfArray(numArray) {
		return Math.max.apply(null, numArray);
	}

	// Fields
	$('.field-wrapper input, .field-wrapper textarea').on('change keyup', function(e){
		if ($(this).val() !== '') {
			$(this).addClass('not-empty');
		} else{
			$(this).removeClass('not-empty');
		}
	});

	// Accordions
	$('.accordion, .js-accordion').each(function(i, el){
		let firstClick = false;
		$(el).find('> .ac-header, > .ac-header > .ac-opener').click(function(e){
			e.preventDefault();
			e.stopPropagation();

			$(this).closest('.accordion, .js-accordion').find('> .ac-content').stop().slideToggle(300);
			$(this).closest('.accordion, .js-accordion').find('.slick-slider').slick('setPosition');
			$(this).closest('.accordion, .js-accordion').toggleClass('opened');

			if ($(this).closest('.single-product-page').length != 0) {
				$(this).closest('.accordion').siblings()
					.removeClass('opened')
					.find('> .ac-content').stop().slideUp(300);
			}
		});

		if ($(el).hasClass('opened-on-load')) {
			$(el).find('.ac-header').trigger('click');
		}
	});

	// Header search form
	$('.header-search .search-trigger').click(function(e){
		e.preventDefault();

		$(this).toggleClass('active');
		$(this).parent().toggleClass('form-visible');
	});

	// Sliders
	function equalSlideHeight(slider){
		$(slider).on('setPosition', function () {
			$(this).find('.slick-slide').height('auto');
			var slickTrack = $(this).find('.slick-track');
			var slickTrackHeight = $(slickTrack).height();
			$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
		});
	}

	let arrowsButtons = {
		prevArrow: '<button type="button" class="slick-prev" aria-label="Предыдущий"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.13.45a1 1 0 00-1.41 0L.87 5.29a1 1 0 000 1.42l4.85 4.84a1 1 0 001.41-1.41L2.99 6l4.14-4.14a1 1 0 000-1.41z" fill="#fff"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next" aria-label="Следующий"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M.87.45a1 1 0 011.41 0l4.85 4.84a1 1 0 010 1.42l-4.85 4.84a1 1 0 01-1.41-1.41L5.01 6 .87 1.86a1 1 0 010-1.41z" fill="#fff"/></svg></button>'
	}

	// $('.gallery-slider').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: true,
	// 	dots: true,
	// 	infinite: true,
	// 	speed: 600,
	// 	...arrowsButtons,
	// 	responsive: [
	// 		{
	// 			breakpoint: 576,
	// 			settings: {
	// 				arrows: false
	// 			}
	// 		}
	// 	]
	// });

	$('.js-projects-slider-scope').each(function(i, el){
		$(el).find('.projects-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite: true,
			speed: 600,
			...arrowsButtons,
			appendArrows: $(el).find('.slider-nav'),
			responsive: [
				{
					breakpoint: 1320,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	});

	$('.js-news-slider-scope').each(function(i, el){
		$(el).find('.news-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite: true,
			speed: 600,
			...arrowsButtons,
			appendArrows: $(el).find('.slider-nav'),
			responsive: [
				{
					breakpoint: 1320,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	});

	$('.gallery-slider-wrapper').each(function(i, el){
		$(el).find('.gallery-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite: true,
			speed: 600,
			...arrowsButtons,
			appendArrows: $(el).find('.slider-nav'),
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	});

	$('.awards-slider-wrapper').each(function(i, el){
		$(el).find('.awards-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			infinite: true,
			speed: 600,
			...arrowsButtons,
			appendArrows: $(el).find('.slider-nav'),
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	});

	$('.product-photos-component').each(function(i, el){
		$(el).find('.big-photos-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			vertical: true,
			dots: false,
			infinite: true,
			speed: 600,
			asNavFor: $(el).find('.previews-slider'),
			responsive: [
				{
					breakpoint: 1320,
					settings: {
						vertical: false,
						arrows: true,
						dots: true,
						...arrowsButtons,
						appendArrows: $(el).find('.cmp-main .slider-nav')
					}
				}
			]
		});

		$(el).find('.previews-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			...arrowsButtons,
			vertical: true,
			centerMode: true,
			centerPadding: 0,
			focusOnSelect: true,
			dots: false,
			infinite: true,
			speed: 600,
			asNavFor: $(el).find('.big-photos-slider')
		});
	});

	// Scroll to anchor
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		if ($.attr(this, 'href') === '#') {
			return false;
		}

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 80
		}, 500);
	});

	// Menu opener
	$('.menu-opener').click(function(e){
		e.preventDefault();

		$(this).toggleClass('active');
		$('.mobile-top-nav').toggleClass('opened');
		$('.header').toggleClass('nav-opened');
	});

	// Sticky Header
	function stickyHeader(){
		let header = document.querySelector('.header');

		if (!!header) {
			if (window.scrollY > 0) {
				header.classList.add('sticky');

				if ($(window).width() < 768) {
					$('.header-nav-and-search').stop().hide(0);
				}
			} else{
				header.classList.remove('sticky');

				if ($(window).width() < 768) {
					$('.header-nav-and-search').stop().show(0);
				}
			}
		};
	}


	window.addEventListener('scroll', stickyHeader);
	setTimeout(stickyHeader, 100);

	// Modals
	$('.modal').css('display','block');

	$('.modal-dialog').click(e => e.stopPropagation());
	$('.modal').click(function(e){
		hideModal( $(this) );
		$('.video-modal .modal-video').html('<div id="modal-video-iframe"></div>');
	});

	$('.modal-close, .js-modal-close').click(function(e){
		e.preventDefault();

		hideModal( $(this).closest('.modal') );
		$('.video-modal .modal-video').html('<div id="modal-video-iframe"></div>');
	});

	$('[data-modal]').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		hideModal('.modal');

		if ($(this).data('modal-tab') != undefined) {
			goToTab($(this).data('modal-tab'));
		}

		showModal( $(this).data('modal') );
	});

	// Tabs
	function goToTab(tabId, handler){
		if (handler == undefined) {
			handler = false;
		}

		let dest = $( tabId );
		dest.stop().fadeIn(300).siblings().hide(0);

		$('[data-tab="'+tabId+'"]').addClass('current').parent().siblings().find('[data-tab]').removeClass('current');
	}

	$("[data-tab]").click(function(e){
		e.preventDefault();
		let dest = $(this).data('tab');

		goToTab(dest, $(this));

		$(dest).find('.slick-slider').slick('setPosition');
	});

	$(".filter-nav, .tabs-nav, .cmp-tabs-nav").each(function(i, el){
		$(el).find('[data-tab]').eq(0).click();
	});

	$('.tabs-select').on('change', function(){
		goToTab($(this).val());
	});


	// Video
	$('.video-block:not([data-video-modal])').on('click', function () {
		$(this).addClass('playing');
		$(this).find('.block-overlay').fadeOut(300);

		let videoId = $(this).find('.play-btn').data('video-id');

		if (!videoId) {
			videoId = $(this).data('video-id');
		}

		if (videoId == undefined) {
			$(this).find('video')[0].play();
		} else{
			let videoType = $(this).data('video-type') ? $(this).data('video-type').toLowerCase() : 'youtube';

			if (videoType == 'youtube') {
				$(this).find('.block-video-container').append('<div class="video-iframe" id="'+videoId+'"></div>');
				createVideo(videoId, videoId);
			} else if(videoType == 'vimeo'){
				$(this).find('.block-video-container').append('<div class="video-iframe" id="'+videoId+'"><iframe allow="autoplay" class="video-iframe" src="https://player.vimeo.com/video/'+videoId+'?playsinline=1&autoplay=1&transparent=0&app_id=122963"></div>');
			}
		}
	});

	$('[data-video-modal]').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		let videoId = $(this).data('video-modal');
		let videoType = $(this).data('video-type');

		if (videoType == 'youtube') {
			$('#modal-video-iframe').removeClass('vimeo youtube').addClass('youtube').append('<div class="video-iframe" id="'+videoId+'"></div>');
			createVideo(videoId, videoId);
		} else if(videoType == 'vimeo'){
			$('#modal-video-iframe').removeClass('vimeo youtube').addClass('vimeo').html('<iframe class="video-iframe" allow="autoplay" src="https://player.vimeo.com/video/'+videoId+'?playsinline=1&autoplay=1&transparent=1&app_id=122963">');
		}

		hideModal('.modal');

		showModal( "#video-modal" );
	});

	var player;
	function createVideo(videoBlockId, videoId) {
		player = new YT.Player(videoBlockId, {
			videoId: videoId,
			playerVars: {
				'autohide': 1,
				'showinfo' : 0,
				'rel': 0,
				'loop': 1,
				'playsinline': 1,
				'fs': 0,
				'allowsInlineMediaPlayback': true
			},
			events: {
				'onReady': function (e) {
					// e.target.mute();
					// if ($(window).width() > 991) {
						setTimeout(function(){
							e.target.playVideo();
						}, 200);
					// }
				}
			}
		});
	}
});

function getScrollWidth(){
	// create element with scroll
	let div = document.createElement('div');

	div.style.overflowY = 'scroll';
	div.style.width = '50px';
	div.style.height = '50px';

	document.body.append(div);
	let scrollWidth = div.offsetWidth - div.clientWidth;

	div.remove();

	return scrollWidth;
}

let bodyScrolled = 0;
function showModal(modal){
	$(modal).addClass('visible');
	bodyScrolled = $(window).scrollTop();
	$('body, .header').addClass('modal-visible')
			 .scrollTop(bodyScrolled)
			 .css('padding-right', getScrollWidth());
}

function hideModal(modal){
	$(modal).removeClass('visible');
	bodyScrolled = $(window).scrollTop();
	$('body, .header').removeClass('modal-visible')
			 .scrollTop(bodyScrolled)
			 .css('padding-right', 0);
}