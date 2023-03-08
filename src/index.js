// add current page class

window.addEventListener('DOMContentLoaded', function() {
  var path = window.location.href;
  var linksDesk = document.querySelectorAll('.site-nav__list--desktop a');
  var linksMob = document.querySelectorAll('.site-nav a');

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

  var splide = new Splide(mainGallery, {
    pagination: false,
  });


  var thumbnails = document.getElementsByClassName('thumbnail');
  var current;


  for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
  }


  function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener('click', function () {
      splide.go(index);
    });
  }


  splide.on('mounted move', function () {
    var thumbnail = thumbnails[splide.index];


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

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();