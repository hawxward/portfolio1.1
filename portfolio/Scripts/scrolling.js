$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);

    });

    //add bootstrap scrollspy
    $("body").scrollspy({
        target: ".navbar",
        offset:160
    });
    // smooth scrolling
    $('nav a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top-100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
        
});