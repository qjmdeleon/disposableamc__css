function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Carousel

$("#section2-slider").owlCarousel({
  loop: true,
  responsiveClass: true,
  lazyLoad: true,
  navText: false,
  dots: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    960: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
      loop: true,
    },
  },
});

$(".section-5-cards").owlCarousel({
  loop: true,
  responsiveClass: true,
  lazyLoad: true,
  navText: false,
  dots: true,
  margin: 30,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    960: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
      loop: false,
    },
  },
});

$(".section-7-cards").owlCarousel({
  loop: true,
  responsiveClass: true,
  lazyLoad: true,
  navText: false,
  autoWidth: true,
  dots: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    960: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
      loop: false,
    },
  },
});

$(".owl-carousel").owlCarousel({
  loop: true,
  responsiveClass: true,
  lazyLoad: true,
  navText: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      nav: true,
      loop: false,
    },
  },
});
