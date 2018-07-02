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


            $('#header .menu h2 a').bind("click", function(e) {
                e.preventDefault();
                $(this).parent().parent().toggleClass("on");
            });
        

        }
        else {
            try {
                $('.main-best .best>ul').slick('unslick');
            } catch{};


            $('#header .menu li').hover(function() {
                $(this).addClass("on");
            }, function(){
                $(this).removeClass("on")
            });

            $('#header .menu h2 a').unbind("click", function(e) {
                e.preventDefault();
                $(this).parent().parent().toggleClass("on");
            });
        


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

    $('aside.sub-navigation>div>ul>li>a').on('click', function() {
        $(this).toggleClass("on");
        $(this).find("i").toggleClass("on");
    });

    $('.orum-search button.more').on('click', function() {
        $(".orum-search ul").toggleClass("on");
        $(this).find("i").toggleClass("on");
    });
});

