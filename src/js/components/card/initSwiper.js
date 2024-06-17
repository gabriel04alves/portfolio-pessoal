export function initSwiper() {
    new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000, 
            disableOnInteraction: true, 
        }
    });
}
