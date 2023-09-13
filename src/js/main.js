//main.js file




// Scroll to top
let mybutton = document.getElementById("btn-back-to-top");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);


function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

jQuery('.info-slider').slick({
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  pauseOnHover:true,
  prevArrow: jQuery('#home-info-slider .prev'),
  nextArrow: jQuery('#home-info-slider .next')
});


jQuery('.hero-slider').slick({
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 900,
  fade: true,
  dots: false,
  arrows: false,
});



//Animate


jQuery('.fadeinup').addClass("invisible").viewportChecker({
  classToAdd: 'animate__animated animate__fadeInUp',
  offset: 200
});

jQuery('.fadeinleft').addClass("invisible").viewportChecker({
  classToAdd: 'animate__animated animate__fadeInLeft',
  offset: 200
});


jQuery(document).on("change","#newsyear",function() {
  console.log($(this).val());
  jQuery('.year-filter-line > div').removeClass('active');
  jQuery('#news-filter-by-year .year-filter-line > div[data-value=' + jQuery(this).val() + ']').addClass('active');
 });

 jQuery(document).on("click","#news-filter-by-year .year-filter-line > div",function() {
    jQuery('.year-filter-line > div').removeClass('active');
    jQuery(this).addClass('active');
    var year = jQuery(this).data('value');
    jQuery('#newsyear').val(year).trigger("change");
 });

 jQuery(document).on("change","#publicationsyear",function() {
  console.log($(this).val());
  jQuery('.year-filter-line > div').removeClass('active');
  jQuery('#publications-filter-by-year .year-filter-line > div[data-value=' + jQuery(this).val() + ']').addClass('active');
 });

 jQuery(document).on("click","#publications-filter-by-year .year-filter-line > div",function() {
    jQuery('.year-filter-line > div').removeClass('active');
    jQuery(this).addClass('active');
    var year = jQuery(this).data('value');
    jQuery('#publicationsyear').val(year).trigger("change");
 });

 jQuery(document).on("click",".publication-grid-buttons a[data-type=abstract]",function(event) {
  event.preventDefault();
  var modal = jQuery('#modal-window');
  var html = jQuery(this).parents('publication').find('.publictions-abs').html();
  jQuery('.overlay').addClass('active');
  modal.find('.modal-body').html(html);
  modal.addClass('active');
  jQuery('body').css('overflow-y', 'hidden');
});
jQuery(document).on("click","#modal-window .close",function(event) {
  var modal = jQuery('#modal-window');
  var overlay = jQuery('.overlay');
  overlay.removeClass('active');
  modal.removeClass('active');
  jQuery('body').css('overflow-y', 'auto');
});
jQuery(document).on("click",".publication-grid-buttons a[data-type=bibtex]",function(event) {
  event.preventDefault();
  var modal = jQuery('#modal-window');
  var html = jQuery(this).parents('publication').find('.publication-bib').html();
  jQuery('.overlay').addClass('active');
  modal.find('.modal-body').html(html);
  modal.addClass('active');
  jQuery('body').css('overflow-y', 'hidden');
});

jQuery(document).on("click",".courses-accordion-item-title",function() {
  jQuery('.courses-accordion-item').not(jQuery(this).parents('.courses-accordion-item')).removeClass('open');
  jQuery('.courses-accordion-item-body').removeClass('animate__animated animate__slideInDown');
  jQuery(this).parents('.courses-accordion-item').toggleClass('open');
  jQuery(this).parents('.courses-accordion-item').find('.courses-accordion-item-body').toggleClass('animate__animated animate__slideInDown');
});

jQuery(document).on("click",".member-buttons a[data-modal=info]",function(event) {
  event.preventDefault();
  var modal = jQuery('#modal-window');
  var html = jQuery(this).parents('.member-item').html();
  html = '<div class="flex flex-wrap px-2">' + html + '</div>';
  jQuery('.overlay').addClass('active');
  modal.addClass('member');
  modal.find('.modal-body').html(html);
  modal.addClass('active');
  jQuery('body').css('overflow-y', 'hidden');
});


jQuery(document).click(function(event) { 
  var target = jQuery(event.target);
    if(!target.closest('#modal-window').length && !target.closest('.publication-grid-buttons a').length && !target.closest('.member-buttons a').length && !target.closest('.gallery-button').length && jQuery('#modal-window').is(":visible")){
      jQuery('#modal-window').removeClass('active');
      jQuery('.overlay').removeClass('active');
      jQuery('body').css('overflow-y', 'auto');
    }
  }        
);

function gallery(){
  var slider = jQuery('.gallery-slider');
  for (var i = 0; i < slider.length; i++) {
    var item_width = jQuery(slider[i]).find('.slider-nav-wrap').width() - 4;
    var quantity = jQuery(slider[i]).find('.slider-nav > .flex').length;
    var height = Math.ceil(jQuery(slider[i]).find('.slider-for').height() - 43);
    jQuery(slider[i]).find('.slider-nav').width(item_width * quantity);
    jQuery(slider[i]).find('.slider-nav > .flex').width(item_width);
    jQuery(slider[i]).find('.slider-nav .gallery-item').height(height / 4);
    var buttons = '<div class="gallery-prev"><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1171, -778)"><g transform="translate(1183, 790) rotate(90) translate(-1183, -790)translate(1171, 778)"><polygon points="0 0 24 0 24 24 0 24"></polygon><polyline class="stroked" stroke="#0979FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" points="8 10 12 14 16 10"></polyline></g></g></g></svg></div>';
    for (let j = 0; j < quantity; j++) {
      var page_number = j + 1;
      if (page_number == 1) {
        buttons = buttons + '<div class="gallery-button-number current" data-number="' + page_number + '">' + page_number +  '</div>';
      } else {
        buttons = buttons + '<div class="gallery-button-number" data-number="' + page_number + '">' + page_number +  '</div>';
      }
    }
    buttons = buttons + '<div class="gallery-next"><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1502, -778)"><g transform="translate(1514, 790) scale(-1, 1) rotate(90) translate(-1514, -790)translate(1502, 778)"><polygon points="0 0 24 0 24 24 0 24"></polygon><polyline class="stroked" stroke="#0979FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" points="8 10 12 14 16 10"></polyline></g></g></g></svg></div>';
    jQuery(slider[i]).find('.slider-nav-numbers').html(buttons);
  } 
}

jQuery(document).on('click', '.slider-nav .gallery-item', function(event) {
  var url = jQuery(this).data('url');
  var main = jQuery(this).parents('.gallery-slider').find('.slider-for .gallery-item');
  jQuery(this).parents('.slider-nav').find('.gallery-item').removeClass('current');
  jQuery(this).addClass('current');
  main.css('opacity', '0');
  setTimeout(function() { 
    main.css('background-image', 'url(' + url + ')');
    main.css('opacity', '1');
  }, 500);
  
});

jQuery(document).on('click', '.gallery-button-number', function(event) {
  var pagetoshow = jQuery(this).data('number');
  var currentpage = jQuery(this).parents('.slider-nav-numbers').find('.gallery-button-number.current').data('number');
  var slidetrack = jQuery(this).parents('.slider-nav-wrap').find('.slider-nav');
  var slidewidth = slidetrack.find('> div').width();
  if (pagetoshow == currentpage) {
    return false;
  } else {
    jQuery(this).parents('.slider-nav-numbers').find('.gallery-button-number').removeClass('current');
    slidetrack.css('transform', 'translateX(-' + slidewidth * (pagetoshow - 1) + 'px)');
    jQuery(this).addClass('current');
  } 
});

jQuery(document).on('click', '.gallery-prev', function(event) {
  var currentpage = jQuery(this).parents('.slider-nav-numbers').find('.gallery-button-number.current').data('number');
  var slidetrack = jQuery(this).parents('.slider-nav-wrap').find('.slider-nav');
  var slidewidth = slidetrack.find('> div').width();
  var slidequatity = slidetrack.find('> div').length;
  var newpage = currentpage - 1;
  if (newpage == 0) {
    newpage = slidequatity;
  }
  var n = 0;
  if (currentpage - 1 == 0) {
    var n = slidequatity - 1;
  } else {
    var n = currentpage - 2;
  }
  jQuery(this).parents('.slider-nav-numbers').find('.gallery-button-number').removeClass('current');
  slidetrack.css('transform', 'translateX(-' + slidewidth * n + 'px)');
  jQuery(this).parents('.slider-nav-numbers').find(".gallery-button-number[data-number='" + newpage + "']").addClass('current');
});

jQuery(document).on('click', '.gallery-next', function(event) {
  var currentpage = jQuery(this).parents('.slider-nav-numbers').find('.gallery-button-number.current').data('number');
  var slidetrack = jQuery(this).parents('.slider-nav-wrap').find('.slider-nav');
  var slidewidth = slidetrack.find('> div').width();
  var slidequatity = slidetrack.find('> div').length;
  var newpage = currentpage + 1;
  if (newpage > slidequatity) {
    newpage = 1;
  }
  var n = 0;
  if (currentpage + 1 > slidequatity) {
    var n = 0;
  } else {
    var n = currentpage;
  }
  jQuery(this).parents('.slider-nav-numbers').find('.gallery-button-number').removeClass('current');
  slidetrack.css('transform', 'translateX(-' + slidewidth * n + 'px)');
  jQuery(this).parents('.slider-nav-numbers').find(".gallery-button-number[data-number='" + newpage + "']").addClass('current');
});

jQuery(document).on('click', '.gallery-button', function() {
  var gallerydata = jQuery(this).parents('.gallery-wrap').html();
  var modal = jQuery('#modal-window');
  jQuery('.overlay').addClass('active');
  modal.find('.modal-body').html('<div class="gallery-wrap flex flex-wrap">' + gallerydata + '</div>');
  modal.addClass('active gallery');
  setTimeout(function() { 
    gallery();
  }, 500);
  
  jQuery('body').css('overflow-y', 'hidden');
});


jQuery(document).on('scroll', function() {
  var point = jQuery('.gallery-wrap[data-point=true]');
  var topscroll = jQuery(window).scrollTop();
  point.each(function () {
    if (topscroll + 100 >= jQuery(this).offset().top) {
      jQuery(this).addClass('now');
    }
  })
});