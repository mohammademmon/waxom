// portfolio slide js start

// $('#slider').cardSlider({
//     slideTag: 'div', 
//     slideClass: 'slide'
// })

var rev = $('.portfolio-slider-main');
rev.on('init', function (event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    prev = cur.prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  cur.removeClass('slick-snext').removeClass('slick-sprev');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  console.log('beforeChange');
  var
    cur = $(slick.$slides[nextSlide]);
  console.log(slick.$prev, slick.$next);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  next = cur.next(),
    prev = cur.prev();
  prev.prev();
  prev.next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev');
});

rev.slick({
  speed: 500,
  arrows: false,
  dots: false,
  focusOnSelect: true,
  prevArrow: '<button> prev</button>',
  nextArrow: '<button> next</button>',
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0',
  swipe: true,
  /*infinite: false,*/
});

// portfolio slide js snd


// project mixitup js start
var mixer = mixitup('.project-item-content-item');
// project mixitup js end

// project lightbox js start
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})
// project lightbox js end

// presentation venobox js start

$(document).ready(function () {
  $('.my-video-links').venobox();
});

// presentation venobox js end

// client counter js start

jQuery(document).ready(function ($) {
  $('.counter').counterUp({
    delay: 15,
    time: 1000
  });
});

// client counter js end

// blog-post-item-main slide js start
$('.blog-post-item-main').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
});
// blog-post-item-main slide js end


// blog-post-main-slider slide js start
$('.blog-post-main-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  prevArrow: ".blog-post-arrows-items-pre",
  nextArrow: ".blog-post-arrows-items-next",
});
// blog-post-main-slider slide js end


// copy to clipboard js start

$(document).ready(function () {
  $(".copy-clip-1").click(function (event) {
    event.preventDefault();
    CopyToClipboard("file:///H:/ES%20RWD%202114/Class%2032/Assignment/images/project-item-content-img-1.png", true, "Link copied");
  });
});
$(document).ready(function () {
  $(".copy-clip-2").click(function (event) {
    event.preventDefault();
    CopyToClipboard("file:///H:/ES%20RWD%202114/Class%2032/Assignment/images/project-item-content-img-1.png", true, "Link copied");
  });
});
$(document).ready(function () {
  $(".copy-clip-3").click(function (event) {
    event.preventDefault();
    CopyToClipboard("file:///H:/ES%20RWD%202114/Class%2032/Assignment/images/project-item-content-img-3.png", true, "Link copied");
  });
});
$(document).ready(function () {
  $(".copy-clip-4").click(function (event) {
    event.preventDefault();
    CopyToClipboard("file:///H:/ES%20RWD%202114/Class%2032/Assignment/images/project-item-content-img-4.png", true, "Link copied");
  });
});
$(document).ready(function () {
  $(".copy-clip-5").click(function (event) {
    event.preventDefault();
    CopyToClipboard("file:///H:/ES%20RWD%202114/Class%2032/Assignment/images/project-item-content-img-5.png", true, "Link copied");
  });
});
$(document).ready(function () {
  $(".copy-clip-6").click(function (event) {
    event.preventDefault();
    CopyToClipboard("file:///H:/ES%20RWD%202114/Class%2032/Assignment/images/project-item-content-img-6.png", true, "Link copied");
  });
});

function CopyToClipboard(value, showNotification, notificationText) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(value).select();
  document.execCommand("copy");
  $temp.remove();

  if (typeof showNotification === 'undefined') {
    showNotification = true;
  }
  if (typeof notificationText === 'undefined') {
    notificationText = "Copied to clipboard";
  }

  var notificationTag = $("div.copy-notification");
  if (showNotification && notificationTag.length == 0) {
    notificationTag = $("<div/>", {
      "class": "copy-notification",
      text: notificationText
    });
    $("body").append(notificationTag);

    notificationTag.fadeIn("slow", function () {
      setTimeout(function () {
        notificationTag.fadeOut("slow", function () {
          notificationTag.remove();
        });
      }, 1000);
    });
  }
}

// copy to clipboard js end