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
      

      try {
          
        $.datepicker.setDefaults({
            dateFormat: 'yy-mm-dd',
            prevText: '이전 달',
            nextText: '다음 달',
            monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            dayNames: ['일', '월', '화', '수', '목', '금', '토'],
            dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            showMonthAfterYear: true,
            yearSuffix: '년'
        });


      
        $("#day-start").datepicker();
        $("#day-end").datepicker();

    } catch(e){};






      $('.sub-view-head .image ul').slick({
        speed: 1000,
        autoplay: false,
        nextArrow: ".image .next",
        prevArrow: ".image .prev",
        dots: true,
        dotsClass: 'custom-paging',
        customPaging: function (slider, i) {
            //FYI just have a look at the object to find available information
            //press f12 to access the console in most browsers
            //you could also debug or look in the source
            console.log(slider);
            return  (i + 1) + '/' + slider.slideCount;
        }
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
            } catch(e){};


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
        } catch(e){};
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

