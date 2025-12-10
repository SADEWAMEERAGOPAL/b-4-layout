$('#owltestimonials').owlCarousel({
    loop:true,
    margin:10,
    navText:[`<i class="fa-solid fa-arrow-left"></i>`, `<i class="fa-solid fa-arrow-right"></i>`],
    nav:true,
    responsive:{
        0:{
            items:1,
            dots: false,
            nav: false

        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})