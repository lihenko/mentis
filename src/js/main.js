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

jQuery('.seals-slider').slick({
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  dots: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
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
  ]
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
});
jQuery(document).on("click","#modal-window .close",function(event) {
  var modal = jQuery('#modal-window');
  var overlay = jQuery('.overlay');
  overlay.removeClass('active');
  modal.removeClass('active');
});
jQuery(document).on("click",".publication-grid-buttons a[data-type=bibtex]",function(event) {
  event.preventDefault();
  var modal = jQuery('#modal-window');
  var html = jQuery(this).parents('publication').find('.publication-bib').html();
  jQuery('.overlay').addClass('active');
  modal.find('.modal-body').html(html);
  modal.addClass('active');
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
});


jQuery(document).click(function(event) { 
  var target = jQuery(event.target);
    if(!target.closest('#modal-window').length && !target.closest('.publication-grid-buttons a').length && !target.closest('.member-buttons a').length && jQuery('#modal-window').is(":visible")){
      jQuery('#modal-window').removeClass('active');
      jQuery('.overlay').removeClass('active');
    }
  }        
);