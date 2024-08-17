var swiper = new Swiper(".mySwiper", {
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
var swiperFirst = new Swiper('.logo__first', {
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  slidesPerView: 5,
});
var swiperSecond = new Swiper('.logo__second', {
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  slidesPerView: 5,
});
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      $(".js-num").each(countUp);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5,
});
observer.observe(document.querySelector(".js-num"));
function countUp() {
  var num = $(this).text();
  var decimal = 0;
  if (num.indexOf(".") > 0) {
    decimal = num.toString().split(".")[1].length;
  }
  $(this)
    .prop("Counter", 1)
    .animate(
      {
        Counter: $(this).text()
      },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          $(this).text(parseFloat(now).toFixed(decimal));
        }
      }
    );
}
$(".box-video").click(function(){
  var iframe = $('iframe',this)[0];
  iframe.src += "&amp;autoplay=1";
  iframe.contentWindow.postMessage('{"method":"play"}','*');
  $(this).addClass('open');
});
document.querySelector('.navbar-toggler').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('show');
});
document.querySelector('.header__toggleIconClose').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.remove('show');
});