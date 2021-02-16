$(document).ready(function () { // Start Coding Here
    
    // Author

    $(".btn1").click(function () {
        $(".p1").show();
        $(".p2").hide();
    });

    $(".btn2").click(function () {
        $(".p2").show();
        $(".p1").hide();
    });

    // Toggle

    $(".ap1").css("display", "block");

    $(".acordion h3").click(function () {
        $(this).next().slideToggle();
        $(".acordion p").not($(this).next()).slideUp()
    });

    // Timer

    $(window).scroll(function () {
        var Count = $(this).scrollTop();

            $('.timer').countTo({
                onUpdate: true
            });
    });

    // Mix

    var filterList = {
        init: function () {
            $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.design, .identity, .photo, .application',
                    filter: '.filter'
                },
                load: {
                    filter: '.application'
                }
            });
        }
    };
    filterList.init();

    // Back To Top

    $(".right3 a").click(function () {
        $("body", "html").animate({
            scrollTop: 0
        }, 1200)
    });

}); // End Code