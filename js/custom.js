(function($) {
    "use strict";

    /**
     * ----------------------------------------------
     * Scrool top js
     * ----------------------------------------------
     */
    var scrollTop = $(".scroll-to-top");
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");
        } else {
            $(scrollTop).css("opacity", "0");
        }
    });
    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    /**
     * ----------------------------------------------
     * counter up
     * ----------------------------------------------
     */
    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        }, {
            duration: 2000,
            easing: 'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }
        });
    });

    /**
     * ----------------------------------------------
     * Nav Scroll
     * ----------------------------------------------
     */
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 25) {
            $(".navbar").addClass("nav2");
        } else {
            $(".navbar").removeClass("nav2");
        }
    });


    /**
     * ----------------------------------------------
     * Smooth scrolling
     * ----------------------------------------------
     */
    var scrollLink = $('.scroll');
    // Smooth scrolling
    scrollLink.on("click", function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 60
        }, 1000);
    });
    // Active link switching
    $(window).on("scroll", function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top - 100;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    });

    /**
     * ----------------------------------------------
     *    Portfolio filter
     * ----------------------------------------------
     */
    $(".filter-button").on("click", function() {
        var value = $(this).attr('data-filter');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        if (value === "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
    });
    /**
     * ----------------------------------------------
     *Testimonials-carousel
     * ----------------------------------------------
     */
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            991: {
                items: 2,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    })
    /**
     * ----------------------------------------------
     * peralux scroll
     * ----------------------------------------------
     */
    var $el = $('.bg-image');
    $(window).on('scroll', function() {
        var scroll = $(document).scrollTop();
        $el.css({
            'background-position': '50% ' + (-.2 * scroll) + 'px'
        });
    })
    /**
     * ----------------------------------------------
     * WOW JS
     * ----------------------------------------------
     */
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();

    /**
     * ----------------------------------------------
     * subscribe-form
     * ----------------------------------------------
     */
    var $subscribe = $("#subscribe-form");
    var $subscribeRes = $(".subscribe-success");
    var $subscribeResEr = $(".subscribe-error");
    $subscribe.ajaxChimp({
        callback: mailchimpCallback,
        url: "https://frndzit.us17.list-manage.com/subscribe/post?u=20f1e1fef716bd68305c719d5&id=4eb56d996b" // Replace your mailchimp post url inside double quote "".  
    });

    function mailchimpCallback(resp) {
        var result = $('.subscribe-result');
        if (resp.result === 'success') {
            $subscribe[0].reset();
            $subscribeResEr.fadeOut(500);
            $subscribeRes.fadeIn(500).fadeOut(1000);

        } else if (resp.result === 'error') {
            $subscribeRes.fadeOut(500);
            $subscribeResEr.fadeIn(500).fadeOut(1000);

        }
    };
    /**
     * ----------------------------------------------
     * CONTACT FORM  
     * ----------------------------------------------
     */
    $("#contact-send").on("click", function(e) {
        e.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var dataString = {
            name: name,
            email: email,
            message: message
        };

        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };

        if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
            $.ajax({
                    url: 'sendmail.php',
                    type: 'POST',
                    dataType: 'json',
                    data: dataString,
                })
                .done(function(data) {
                    if (data.res == true) {
                        $('.success').fadeIn(1000);
                        $('.error').fadeOut(500);
                    } else {
                        $('.success').fadeOut(500);
                        $('.error').fadeIn(1000);
                    }

                })
                .fail(function() {
                    console.log("error");
                });

        } else {
            $('.error').fadeIn(1000);
            $('.success').fadeOut(500);
        }

        return false;
    });

})(jQuery);