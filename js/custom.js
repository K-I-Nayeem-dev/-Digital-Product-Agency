$(function(){
    var mixer = mixitup('.port_main');

    $(".team_main").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        arrows: false,
        dots: true,
        autoplay: true,
    })

    $(".cus_main").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        arrows: false,
        dots: true,
        autoplay: true,
    })
})