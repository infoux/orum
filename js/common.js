$(document).ready(function() {

    $('.main-issue .counter>ul').slick({
        speed: 1000,
        autoplaySpeed: 5000,
        nextArrow: ".main-issue button.next",
        prevArrow: "",
        autoplay: true,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        respondTo: 'slider'
      });

      
    $('.main-issue .weather>ul').slick({
        speed: 1000,
        autoplay: true,
        vertical: true,
        arrows: false
      });
      


      function modeChange() {

        var windowWidth = $(window).width();
        if (windowWidth < 1199) {

            $('.main-best .best>ul').slick({
                speed: 1000,
                autoplay: true,
                vertical: true,
                arrows: false,
                
            });
        }
        else {
            try {
                $('.main-best .best>ul').slick('unslick');
            } catch{};
        }
    }
    modeChange();

    
    $(window).resize(function() {
        try {
            modeChange();
        } catch{};
    });



    $('.mobile-menu').on('click', function() {
        $('nav#main-menu').toggleClass("on");
    });

});

