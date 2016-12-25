$(document).foundation();

new WOW().init();

// Preloader //

$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});

// Mobile Menu //

$(document).ready(function() {
    $('#menu-drawer').on( "click", function() {
        $('.m-drawer').addClass('m-drawer--is-open');
        $('#overlay').addClass('m-drawer--is-open');
    });  
    
    $('#overlay').on( "click", function() {
        $('.m-drawer').removeClass('m-drawer--is-open');
        $('#overlay').removeClass('m-drawer--is-open');
    });
})

$('.m-close').click( function() {
    $(".m-drawer").removeClass("m-drawer--is-open");
    $('#overlay').removeClass('m-drawer--is-open');
} );

// Fade on Scroll //

jQuery(window).scroll(function(){
    $(".lockup").css("opacity", 1 - $(window).scrollTop() / 800);
});

// Countdown Clock //

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = 'October 3 2017';
initializeClock('clockdiv', deadline);

// Smooth Scrolling //

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


