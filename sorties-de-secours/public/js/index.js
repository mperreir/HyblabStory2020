/* =========================
    FULLPAGE INITIALISATION
   ========================= */

// variables
var $header_top = $('.header-top');
var $nav = $('nav');

// toggle menu
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});

// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#1E1E1E', '#1E1E1E', 'white', 'black', '#F2AE72', '#5C832F', 'black'],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  animateAnchor: false,
  navigation: false,
  controlArrows: false,
  scrollOverflow: true,
  anchors: ['home', 'sound', 'presentation', 'menu', 'expo', 'dance'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    console.log($.fn.fullpage);
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
    if (index == 6) {
      $('#fp-nav').hide();
    }
    if(anchorLink == 'menu') {
      $.fn.fullpage.setAllowScrolling(false, 'down');
    }
    if(anchorLink == 'dance') {
      $.fn.fullpage.setAllowScrolling(false, 'up');
    }
    console.log("ici");
    console.log(anchorLink, index);
    if(index == 2)
      $.fn.fullpage.silentMoveTo('menu', undefined);
    console.log("ici2");
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 6) {
      $('#fp-nav').show();
    }
    $.fn.fullpage.setScrollingSpeed(1000);
    $.fn.fullpage.setAllowScrolling(true, 'up');
    $.fn.fullpage.setAllowScrolling(true, 'down');
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      $header_top.css('background', 'transparent');
      $nav.css('background', 'transparent');
      $(this).css('background', '#374140');
      $(this).find('h2').css('color', 'white');
      $(this).find('h3').css('color', 'white');
      $(this).find('p').css(
        {
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        }
      );
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
    }
  }
});
/* =============================
    END FULLPAGE INITIALISATION
   ============================= */
