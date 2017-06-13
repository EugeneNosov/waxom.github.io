$(document).ready(function () {

    //Slider
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        navText: ["<img src='images/left-arrow.png'>","<img src='images/right-arrow.png'>"],
        mouseDrag: true
    });
    // Menu
    $("#burger").on("click", function(){
        $("nav").toggleClass("show-menu");
        $(".bg").addClass("bg-show");
    })
     $(".bg").on("click", function(){
        $("nav").toggleClass("show-menu");
        $(".bg").toggleClass("bg-show");
    })
    //Services
    $(".services-th").hover(function(){
        $(this).find(".head,i").toggleClass("show-color");
        $(this).find("span").toggleClass("show-color-span");
    });
    //Gallery
    $(".gallery").hover(function(){
        $(this).find(".desc li:first-child").toggleClass("desc-color-1");
        $(this).find(".desc li:last-child").toggleClass("desc-color-2");
        $(this).find(".cube, .desc").toggleClass("desc-bg");
        $(this).find(".link").toggleClass("animated fadeInLeft show-hBtn");
        $(this).find(".search-btn").toggleClass("animated fadeInRight show-hBtn");
        $(this).find(".filter").toggleClass("show-hBtn");
        $(this).find(".day").toggleClass("day-bg");
        $(this).find(".month").toggleClass("month-bg");
    });
});