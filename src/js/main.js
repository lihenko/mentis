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
 });

 jQuery(document).on("click",".year-filter-line > div",function() {
    jQuery('.year-filter-line > div').removeClass('active');
    jQuery(this).addClass('active');
    var year = jQuery(this).data('value');
    jQuery('#newsyear').val(year).trigger("change");
 });