const slides = document.querySelectorAll('.swiper-slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

const nextSlide = () => {
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');

    if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add('active');
    } else {
        slides[0].classList.add('active');
    }
};

const prevSlide = () => {
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');

    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add('active');
    } else {
        slides[slides.length - 1].classList.add('active');
    }
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });