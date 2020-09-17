var currentIdx, totalItems = totalItems = $('#carouselMain li').length;

function toggleNavbar(event) {
  $(event.delegateTarget).collapse('toggle')
}

function init() {
  $('.navbar-collapse').on('click', 'a', toggleNavbar);

  $('#carouselAdditional').carousel({
    interval: false,
    keyboard: false
  })
  $('#carouselMain').carousel({
    interval: 5000,
    keyboard: false
  })

  $('#carouselMain .carousel-control-next').on('click', function () {
    $('#carouselAdditional').carousel('next');
  })
  $('#carouselMain .carousel-control-prev').on('click', function () {
    $('#carouselAdditional').carousel('prev');
  })
  $('#carouselMain').on('slide.bs.carousel', function () {
    $('#carouselAdditional').carousel('next');
  })
}

$(document).ready(init)
