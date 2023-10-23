$(document).ready(function(){
    var docWidth = $('body').width(),
        $wrap = $('#shop'),
        $images = $('#shop .hb'),
        slidesWidth = $wrap.width();
    
    $(window).on('resize', function(){
      docWidth = $('body').width();
      slidesWidth = $wrap.width();
    })
    
    $(document).mousemove(function(e) {
      var mouseX = e.pageX,
          offset = mouseX / docWidth * slidesWidth - mouseX / 2;
      
      $images.css({
        '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
                'transform': 'translate3d(' + -offset + 'px,0,0)'
      });
    });
  })

//ーーーーーここから課題２

// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
  $('.eachTextAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });
}

