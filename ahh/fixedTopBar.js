function clickContent() {
    $('.goTo1').click(function () {
        $('html,body').animate({ scrollTop: $('.ahrefstep1').offset().top - 50 }, 900);
    });
    $('.goTo2').click(function () {
        $('html,body').animate({ scrollTop: $('.ahrefstep2').offset().top - 50 }, 900);
    });
    $('.goTo3').click(function () {
        $('html,body').animate({ scrollTop: $('.ahrefstep3').offset().top - 50 }, 900);
    });
    $('.goTo4').click(function () {
        $('html,body').animate({ scrollTop: $('.ahrefstep4').offset().top - 50 }, 900);
    });
    $("#opendd").click(function () {
        $(".gifplay").show(500).html('<img src="uxui/ddddd.gif" alt="" id="agif">');

        
        $(".gifbox .closegifplay").show(500);
        $("#opendd").hide(500);
    });
    $(".gifbox .closegifplay").click(function () {
        $(".gifplay").hide(500);
        $(".gifbox .closegifplay").hide(500);
        $("#opendd").show(500);
    });

}
$(document).ready(function () {
    const router = new VueRouter({
        // mode: 'history',
        routes: [
            {
                path: '/UXUI',
                name: 'UXUI',
                components: {
                    default: {
                        template: '#thisisUXUI'
                    },
                }

            },{
                path: '/WEB',
                name: 'WEB',
                components: {
                    default: {
                        template: '#thisisWeb'
                    },
                }

            },{
                path: '/Resume',
                name: 'Resume',
                components: {
                    default: {
                        template: '#thisisResume'
                    },
                }

            },{
                path: '*',
                redirect: (from) => {
                    const processed = {
                        name: 'Resume'
                    }
                    return processed
                }
            }
        ]
    });
    new Vue({
        el: '#app',
        router,
        methods: {
            flash: function () {
                clickContent();
            },
        }
    })
    clickContent();

    $(window).scroll(function () {
        if($(this).scrollTop() > 45) {
            $('.fixed-top-bar').addClass("top");
        }else {
            $('.fixed-top-bar').removeClass("top");
        }

        if($(this).scrollTop() > 300){
            $('#gotop2').fadeIn("fast");
        }else {
            $('#gotop2').stop().fadeOut("fast");
        }        
        
        if($(this).scrollTop() > 300){
            $('.bookmark').fadeIn("fast");
        }else {
            $('.bookmark').stop().fadeOut("fast");
        }


    });

})



