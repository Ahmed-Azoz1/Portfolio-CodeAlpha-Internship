// =====================================================   TASK 3 CodeAlpha   =====================================================

let typed1 = new Typed('.text',{
    strings:['Designer % }','Developer % }','Freelancer % }'],
    typeSpeed:100,
    backSpeed:100,
    cursorChar:'',
    loop:true,
});

let typed2 = new Typed('.hero_text',{
    strings:['Front-End Web Developer % }','Back-End Web Developer % }','Full-Stack Web Developer % }','Freelancer % }'],
    typeSpeed:100,
    backSpeed:100,
    cursorChar:'',
    loop:true,
});

let swiper = new Swiper('.serviceSwiper',{
    slidesPerView:1,
    spaceBetween:30,
    loop:true,
    autoplay:true,
    breakpoints:{
        1200:{
            slidesPerView:3,
            spaceBetween:30,
        },
        900:{
            slidesPerView:2,
            spaceBetween:30,
        },
        500:{
            slidesPerView:1,
            spaceBetween:30,
        },
    },
});

let swiper2 = new Swiper('.testimonialSwiper',{
    slidesPerView:1,
    spaceBetween:30,
    loop:true,
    autoplay:true,
    breakpoints:{
        1200:{
            slidesPerView:2,
            spaceBetween:30,
        },
        900:{
            slidesPerView:2,
            spaceBetween:30,
        },
        500:{
            slidesPerView:1,
            spaceBetween:30,
        },
    },
});




// =====================================================  END TASK 4 CodeAlpha   =====================================================