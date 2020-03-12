jQuery(document).ready(function () {
  "use strict";
  hamburger();
  sting_images();
  projects();
  nav_bg_scroll();
  anchor();
  text_animation();
  animate_text();
  popup_blog();
  popupscroll();

  jQuery(window).on("scroll", function () {
    //e.preventDefault();
    nav_bg_scroll();
  });

  jQuery(window).on("resize", function () {
    popupscroll();
    //miniboxes();
  });

  jQuery(window).load("body", function () {
    setTimeout(function () {
      jQuery(".preloader").addClass("loaded");
    }, 1000);
  });
});


// Remove text animation to prevent dynamically generated text overflow.
function removeTextAnimation(screenWidth) {
  if (screenWidth.matches) {
    let titleAnimation = document.getElementById("title-text-animation");
    titleAnimation.classList.remove("animation-text-word");

    let aboutAnimation = document.getElementById("about-text-animation");
    aboutAnimation.classList.remove("animation-text-word-2");
  }
}
let screenWidth = window.matchMedia("(max-width: 480px)")
removeTextAnimation(screenWidth)
screenWidth.addListener(removeTextAnimation)


function sting_images() {
  "use strict";

  var data = jQuery("*[data-img-url]");

  data.each(function () {
    var element = jQuery(this);
    var url = element.data("img-url");
    element.css({
      backgroundImage: "url(" + url + ")"
    });
  });
}

function hamburger() {
  "use strict";

  var hamburger = jQuery(".hamburger");
  var mobileMenu = jQuery(".mobile-menu-wrap");

  hamburger.on("click", function () {
    var element = jQuery(this);

    if (element.hasClass("is-active")) {
      element.removeClass("is-active");
      mobileMenu.slideUp();
    } else {
      element.addClass("is-active");
      mobileMenu.slideDown();
    }
    return false;
  });
}

function projects() {
  "use strict";

  jQuery(".portfolio-animation-wrap").each(function () {
    jQuery(this)
      .on("mouseenter", function () {
        if (jQuery(this).data("title")) {
          jQuery(".portfolio-titles").html(
            jQuery(this).data("title") +
            '<span class="work--cat">' +
            jQuery(this).data("category") +
            "</span>"
          );
          jQuery(".portfolio-titles").addClass("visible");
        }

        jQuery(document).on("mousemove", function (e) {
          jQuery(".portfolio-titles").css({
            left: e.clientX - 10,
            top: e.clientY + 25
          });
        });
      })
      .on("mouseleave", function () {
        jQuery(".portfolio-titles").removeClass("visible");
      });
  });
}

function nav_bg_scroll() {
  "use strict";

  var header = jQuery(".header");
  var headerH = header.outerHeight();
  var WH = jQuery(window).height();
  var windowScroll = jQuery(window).scrollTop();
  var W = jQuery(window).width();

  if (W > 1040) {
    jQuery(window).scroll(function () {
      if (windowScroll >= WH - headerH) {
        header.addClass("scroll");
      } else {
        header.removeClass("scroll");
      }
    });
    if (windowScroll >= WH - headerH) {
      header.addClass("scroll");
    } else {
      header.removeClass("scroll");
    }
  }
}

function anchor() {
  "use strict";

  jQuery(".anchor-nav").onePageNav();

  var scrollOffset = 0;

  jQuery(".anchor a").on("click", function (evn) {
    evn.preventDefault();
    jQuery("html,body").scrollTo(this.hash, this.hash, {
      gap: {
        y: -scrollOffset - 85
      },
      animation: {
        duration: 1500,
        easing: "easeInOutExpo"
      }
    });
    return false;
  });
}

new WOW().init();

function text_animation() {
  "use strict";

  var H = jQuery(window).height();
  var titleHolder = jQuery(".hero-title");
  var titleHeight = titleHolder.outerHeight();
  var headerHeight = jQuery(".header").outerHeight();

  var height = H / 2 + titleHeight / 2 - headerHeight;

  jQuery(window).on("scroll", function () {
    var window_offset = jQuery(window).scrollTop();
    titleHolder.css({
      opacity: 1 - window_offset / height,
      marginTop: (window_offset / height) * 200
    });
  });
}

function animate_text() {
  "use strict";

  var animateSpan = jQuery(".animation-text-word");

  animateSpan.typed({
    strings: [
      "Software Engineer",
      "Technology Solutions",
      "Retail Specialist"
    ],
    loop: true,
    startDelay: 1e3,
    backDelay: 2e3
  });

  var animateSpan2 = jQuery(".animation-text-word-2");

  animateSpan2.typed({
    strings: [
      "Technology Solutions",
      "Retail Specialist"
    ],
    loop: true,
    startDelay: 1e3,
    backDelay: 2e3
  });
}

function tdProgress(container) {
  "use strict";

  container.find(".progress2").each(function (i) {
    var progress = jQuery(this);
    var pValue = parseInt(progress.data("value"), 10);
    var pColor = progress.data("color");
    var pBarWrap = progress.find(".bar-wrap");
    var pBar = progress.find(".bar");
    pBar.css({
      width: pValue + "%",
      backgroundColor: pColor
    });
    setTimeout(function () {
      pBarWrap.addClass("open");
    }, i * 500);
  });
}
jQuery(".progress-wrap").each(function () {
  "use strict";
  var pWrap = jQuery(this);
  pWrap.waypoint({
    handler: function () {
      tdProgress(pWrap);
    },
    offset: "90%"
  });
});

jQuery(".counter").each(function () {
  "use strict";

  var el = jQuery(this);
  el.waypoint({
    handler: function () {
      if (!el.hasClass("stop")) {
        el.addClass("stop").countTo({
          refreshInterval: 50,
          formatter: function (value, options) {
            return value
              .toFixed(options.decimals)
              .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
          }
        });
      }
    },
    offset: "80%"
  });
});




function popup_blog() {
  "use strict";
  var li = jQuery(".list-wrap.blog-list .inner-list");
  var popupBox = jQuery("#popup-blog");
  var popupInner = popupBox.find(".inner-popup");
  var closePopup = popupBox.find(".close");

  li.each(function () {
    var element = jQuery(this);
    var button = element.find(".read-more");
    var html = element.html();



    button.on("click", function () {
      popupBox.addClass("opened");
      popupInner.html(html);
      return false;
    });
  });

  closePopup.on("click", function () {
    popupBox.removeClass("opened");
    popupInner.html("");
    return false;
  });
}

function popupscroll() {
  "use strict";
  var H = jQuery(window).height();
  var scrollable = jQuery(".scrollable");
  var popupBox = jQuery(".popup-blog .inner-popup");
  popupBox.css({
    height: H - 100
  });
  scrollable.each(function () {
    var element = jQuery(this);
    var wH = jQuery(window).height();
    element.css({
      height: wH - 100
    });
    element.niceScroll({
      touchbehavior: false,
      cursorwidth: 0,
      autohidemode: true,
      cursorborder: "0px solid #fff"
    });
  });
}

var currentYear = (new Date).getFullYear();
$(document).ready(function () {
  $("#copyright-year").text((new Date).getFullYear());
});