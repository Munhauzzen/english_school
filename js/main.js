$(function () {

  $('.header__menu-btn').on('click', function () {
    $('.header__menu ul').slideToggle();
  });

  $('.item__up').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 750);
  })

  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

});