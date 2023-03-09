import debounce from 'lodash.debounce';

// add current page class

window.addEventListener('DOMContentLoaded', function() {
  const path = window.location.href;
  const linksDesk = document.querySelectorAll('.site-nav__list--desktop a');
  const linksMob = document.querySelectorAll('.site-nav a');

  linksDesk.forEach(function(link) {
    if (link.href === path) {
      link.classList.add('current');
    }
  });
  
  linksMob.forEach(function(link) {
    if (link.href === path) {
      link.classList.add('current');
    }
  });
});

//Mobile menu

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const productsMob = document.querySelector('#products-mob');
  const contactsMob = document.querySelector('#contacts-mob');
  
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    // const scrollLockMethod = !isMenuOpen
    //   ? 'disableBodyScroll'
    //   : 'enableBodyScroll';
   // bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  productsMob.addEventListener('click', toggleMenu);
  contactsMob.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    //bodyScrollLock.enableBodyScroll(document.body);
  });
})();



// photogalleries
import { Splide } from '@splidejs/splide';

const mainGallery = document.querySelector('#main-carousel');

if (mainGallery !== null) {

  const splide = new Splide(mainGallery, {
    pagination: false,
  });


  const thumbnails = document.getElementsByClassName('thumbnail');
  let current;


  for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
  }


  function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener('click', function () {
      splide.go(index);
    });
  }


  splide.on('mounted move', function () {
    const thumbnail = thumbnails[splide.index];


    if (thumbnail) {
      if (current) {
        current.classList.remove('is-active');
      }


      thumbnail.classList.add('is-active');
      current = thumbnail;
    }
  });


  splide.mount();
};


//Modal

const openModalBtn = document.querySelector("[data-modal-open]");
const closeModalBtn = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");
const formModal = document.forms["myForm"];
  

if (openModalBtn !== null) {
  openModalBtn.addEventListener("click", toggleModal);
  closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    modal.classList.toggle("is-hidden");
  }
};

//Modal verification

const name = document.forms["myForm"]["name"];
const phone = document.forms["myForm"]["tel"];
const email = document.forms["myForm"]["email"];

// Regular expressions for name, phone, and email validation
  const nameRegex = /^[a-zA-Z\s\u0400-\u04FF\u0407\u0457\u0491\u0493\u0491]+$/;
  const formats = "(999)9999999|(999)999-99-99|9999999999";
  const phoneRegex = RegExp("^(" +
               formats
                 .replace(/([\(\)])/g, "\\$1")
                 .replace(/9/g,"\\d") +
               ")$");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateName() {
  if (!name.value) {
    name.setCustomValidity("Це поле обов'язкове");
  } else if (!nameRegex.test(name.value)) {
    name.setCustomValidity("Введіть ваше ім'я");
  } else {
    name.setCustomValidity("");
  }
};

function validatePhone() {
  if (!phone.value) {
    phone.setCustomValidity("Це поле обов'язкове");
  } else if (!phoneRegex.test(phone.value)) {
    phone.setCustomValidity("Введіть телефон у форматі 0631112233");
  } else {
    phone.setCustomValidity("");
  }
};

function validateEmail() {
  if (!email.value) {
    email.setCustomValidity("Це поле обов'язкове");
  } else if (!emailRegex.test(email.value)) {
    email.setCustomValidity("Будь ласка, введіть коректний e-mail");
  } else {
    email.setCustomValidity("");
  }
};

name.addEventListener("change", validateName);
phone.addEventListener("change", validatePhone);
email.addEventListener("change", validateEmail);

name.addEventListener("input", resetValidity);
phone.addEventListener("input", resetValidity);
email.addEventListener("input", resetValidity);

function resetValidity() {
  name.setCustomValidity("");
  phone.setCustomValidity("");
  email.setCustomValidity("");
}


//Modal active submit button

const submitModal = document.querySelector(".modal__button");
const checkboxModal = document.querySelector(".modal__checkbox");

checkboxModal.addEventListener('change', function(event) {
  submitModal.disabled = !(checkboxModal.checked);
});


// submit the form

formModal.addEventListener("submit", function(event) {
  event.preventDefault(); 
  validateName();
  formModal.reportValidity();
  validatePhone();
  formModal.reportValidity();
  validateEmail();
  formModal.reportValidity();
  if (formModal.checkValidity()) {
    formModal.submit();
  }
});





