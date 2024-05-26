import Swiper from 'swiper/bundle';
import 'swiper/css';

const btnPreview = document.querySelector('.swiper-button-prev');
const btnNext = document.querySelector('.swiper-button-next');

const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

const swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: btnNext,
        prevEl: btnPreview,
    },
    thumbs: {
        swiper: swiper,
    },
});