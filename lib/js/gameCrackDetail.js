$("#slide2 .swiper-slide").on("click", function () {
    $(".logbg").show();
     $("#slide1").show();
     mySwiper1.slideTo($(this).index());
  })
  $("#slide1 .swiper-slide").on("click", function () {
    $(".logbg").hide();
    $("#slide1").hide();
  })
  function getNaturalSize() {
    let img1 = $("#slide2 .swiper-slide:first-of-type img")[0];
    let i = new Image();
    i.src = img1.src;
    let naturalSizeWidth = i.width;
    let naturalSizeHeight = i.height;
    let temp = naturalSizeWidth > naturalSizeHeight ? 1.2 : 1.5;
    return temp;
  }
  var mySwiper1 = new Swiper('#slide1', {
    width: $(window).width() * 0.95,
    hiehgt: ($(window).height() * 0.7),
    freeMode: false,
    pagination: {
        el: '#pagination1',
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  })
  var mySwiper2 = new Swiper('#slide2', {
    pagination: {
        el: '#pagination2',
      },
    freeMode: false,
    freeModeMomentum: false,
    slidesPerView: getNaturalSize(),
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  })