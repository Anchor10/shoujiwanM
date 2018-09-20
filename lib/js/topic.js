$(function () {
    // 展开收起
    if ($('.info').find('span').height() <= 60) {
        $('.icon-more').hide();
    } else {
        $('.icon-more').show();
        $('.info').css('height', '60px');
    }
    $('.icon-more').click(function () {
        var h = $(this).siblings('.info').find('span').height();
        if ($('.con').hasClass('show-more')) {
            $('.con').removeClass('show-more');
            $(this).siblings('.info').animate({
                height: 60
            }, 200);
            $('.icon-more').html('展开');
        } else {
            $('.con').addClass('show-more');
            $(this).siblings('.info').animate({
                height: h
            }, 200);
            $('.icon-more').html('收起');
        }
    })
    // 三列表切换
    $('.nav-tab li').click(function () {
        var index = $(this).index();
        $(this).find('a').addClass('select');
        $(this).siblings().find('a').removeClass('select');
        $('.games').eq(index).show().siblings('.games').hide();
    })
})
//变态破解切换
$(function () {
    $('.tab_btn span').click(function () {
        var index = $(this).index();
        $(this).addClass('cur').siblings().removeClass('cur');
        $('.tab_main').eq(index).show().siblings('.tab_main').hide();
    })
})
