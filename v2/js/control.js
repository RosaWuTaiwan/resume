$(window).scroll(function () {
    if ($(this).scrollTop() > $('#introduction').height()) {
        $('#right-nav2').fadeIn();
        $('#right-nav1').fadeIn();
    } else {
        $('#right-nav2').fadeOut();
        $('#right-nav1').fadeOut();
    }
});

$('.right-nav2').click(function () {
    var top = $('#profolio').offset().top;
    $('body,html').stop().animate({ scrollTop: top }, 800);
    return false;
});
$('#right-nav1').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 'slow');
    return false;
});
$('.topic8btn').click(function () {
    var top = $('.topic8').offset().top;
    $('body,html').stop().animate({ scrollTop: top }, 800);
    return false;
});
$('.topic7btn').click(function () {
    var top = $('.topic7').offset().top;
    $('body,html').stop().animate({ scrollTop: top }, 800);
    return false;
});
$('.topic6btn').click(function () {
    var top = $('.topic6').offset().top;
    $('body,html').stop().animate({ scrollTop: top }, 800);
    return false;
});
$('.topic5btn').click(function () {
    var top = $('.topic5').offset().top;
    $('body,html').stop().animate({ scrollTop: top }, 800);
    return false;
});
$('.topic4btn').click(function () {
    var top = $('.tabUl3topic4').offset().top;
    $('body,html').stop().animate({ scrollTop: top }, 800);
    return false;
});
$('.topic3btn').click(function () {
    var top = $('.tabUl3topic3').offset().top;
    $('body,html').stop().animate({ scrollTop: top }, 800);
    return false;
});
$('.topic2btn').click(function () {
    var top = $('.tabUl3topic2').offset().top;
    $('body,html').stop().animate({ scrollTop: top }, 800);
    return false;
});
$('.topic1btn').click(function () {
    var top = $('.tabUl3topic1').offset().top;
    $('body,html').stop().animate({ scrollTop: top }, 800);
    return false;
});
$("[data-fancybox]").fancybox({});
$("[data-fancybox2]").fancybox({});
$("[data-fancybox3]").fancybox({});
$("[data-fancybox4]").fancybox({});
$("[data-fancybox5]").fancybox({});
$('[data-fancyboxV]').fancybox({
    toolbar  : false,
    smallBtn : false,
    iframe : {
        preload : false
    }
})
$(function () {
    // 預設顯示第一個 Tab
    var _showTab = 0;
    $('#profolio').each(function () {
        var $tab = $(this);
        var $defaultLi = $('nav ul.tabs li', $tab).eq(_showTab).addClass('active');
        $($defaultLi.find('a').attr('href')).siblings().hide();
        $('nav ul.tabs li', $tab).click(function () {
            var $this = $(this),
                _clickTab = $this.find('a').attr('href');
            $this.addClass('active').siblings('.active').removeClass('active');
            $(_clickTab).stop(false, true).fadeIn().siblings().hide();
            return false;
        }).find('a').focus(function () {
            this.blur();
        });
    });
});
// ]]> -->
$('.biographybtn').click(function () {
        $('.biographyStyle').addClass('open').fadeIn();
        $('.biographybtn-close').click(function () {
            $('.biographyStyle').removeClass('open').fadeOut();
        });
    });
$('.contactme').click(function () {
    $(".contact").toggle();
})
$('.relatedworkbtn').click(function () {
    $(".relatedworkbtn").siblings('li').toggle();
})
$('.relatedworkbtn2').click(function () {
    $(".relatedworkbtn2").siblings('li').toggle();
})

function clipboard() {
    var TocopyText = document.getElementById("coppy");
    navigator.clipboard.writeText(TocopyText.innerHTML);
    alert('已複製');
}

