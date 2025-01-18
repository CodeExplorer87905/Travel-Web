var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


const mobileButton = document.getElementById('mobileButton');
const emailButton = document.getElementById('emailButton');
const inputField = document.getElementById('inputField');

mobileButton.addEventListener('click', () => {
    inputField.placeholder = '+91 Mobile number';
    inputField.type = 'tel';
});

emailButton.addEventListener('click', () => {
    inputField.placeholder = 'Введите email';
    inputField.type = 'email';
});