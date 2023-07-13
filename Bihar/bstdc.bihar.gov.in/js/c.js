function cws_touch_events_fix() {
    is_mobile_device() && (jQuery(".container").on("mouseenter", ".hover-effect, .product .pic", function(n) {
        n.preventDefault(), jQuery(this).trigger("hover")
    }), jQuery(".features-tours-item").on("mouseenter", ".features-info-top, .features-info-bot", function(n) {
        n.preventDefault(), jQuery(this).trigger("hover")
    }), jQuery(".main-nav").on("hover", ".mobile_nav .button_open, .mobile_nav li > a", function(n) {
        n.preventDefault(), jQuery(this).trigger("click")
    }), jQuery(".main-nav").on("hover", ".mobile_nav .mainmenu_open, .mobile_nav li > a", function(n) {
        n.preventDefault(), jQuery(this).trigger("click")
    }), jQuery(".recom-item .recom-media > a").each(function() {
        jQuery(this).on("click", function(n) {
            n.preventDefault()
        })
    }), jQuery(".work-filter ul.magic-line li a").on("mouseenter", function(n) {
        n.preventDefault(), jQuery(this).trigger("click")
    }))
}

function hover_disable() {
    $(".recom-item .recom-media").off("mouseenter mouseleave")
}

function search_open() {
    $(".site-top-panel .top-search").on("click", function() {
        return $(".site-top-panel").addClass("open-search"), !1
    }), $(".site-top-panel .search_menu_cont .search_back_button").on("click", function() {
        $(".site-top-panel").removeClass("open-search")
    }), $(".main-nav .inner-nav .search > a").on("click", function() {
        return $(".main-nav").addClass("open-search"), !1
    }), $(".main-nav .inner-nav .search .close-button").on("click", function() {
        $(".main-nav").removeClass("open-search")
    })
}

function init_classic_menu() {
    function r() {
        $(".inner-nav").each(function() {
            $(".inner-nav").hasClass(".mobile_nav") || $(".mn-has-sub").parent("li").on({
                mouseenter: function() {
                    $(".main-nav").hasClass("mobile-on") || $(this).find(".mn-sub:first").stop(!0, !0).delay(100).fadeIn("fast")
                },
                mouseleave: function() {
                    $(".main-nav").hasClass("mobile-on") || $(this).find(".mn-sub:first").stop(!0, !0).delay(100).fadeOut("fast")
                }
            })
        })
    }
    var i = $(".mobile_nav .mobile_menu_switcher"),
        t = $(".desktop-nav"),
        n, u;
    height_line($(".inner-nav.desktop-nav > ul > li > a"), $(".main-nav")), i.css({
        width: $(".main-nav").height() + "px"
    }), $(".main-nav").hasClass("transparent") && $(".main-nav").addClass("js-transparent"), $(window).scroll(function() {
        $(".sticky-wrapper").length && ($(".sticky-wrapper").hasClass("is-sticky") ? ($(".js-transparent").removeClass("transparent"), $(".main-nav, .nav-logo-wrap .logo, .mobile-nav").addClass("small-height")) : ($(".js-transparent").addClass("transparent"), $(".main-nav, .nav-logo-wrap .logo, .mobile-nav").removeClass("small-height")))
    }), i.on("click", function() {
        t.hasClass("js-opened") ? (t.slideUp("slow", "easeOutExpo").removeClass("js-opened"), $(this).removeClass("active")) : (t.slideDown("slow", "easeOutQuart").addClass("js-opened"), $(this).addClass("active"), $(".main-nav").hasClass("not-top") && $(window).scrollTo(".main-nav", "slow"))
    }), t.find("a:not(.mn-has-sub)").on("click", function() {
        i.hasClass("active") && (t.slideUp("slow", "easeOutExpo").removeClass("js-opened"), i.removeClass("active"))
    }), u = $(".mn-has-sub"), $(".mobile-on .mn-has-sub").find(".fa:first").removeClass("fa-angle-right").addClass("fa-angle-down"), u.on("click", function() {
        if ($(".main-nav").hasClass("mobile-on")) return n = $(this).parent("li:first"), n.hasClass("js-opened") ? n.find(".mn-sub:first").slideUp(function() {
            n.removeClass("js-opened"), n.find(".mn-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down")
        }) : ($(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up"), n.addClass("js-opened"), n.find(".mn-sub:first").slideDown()), !1
    }), $(window).resize(function() {
        r()
    }), r()
}

function sticky_init() {
    var i, n, t;
    jQuery(".main-nav").length && (i = jQuery(".main-nav").clone(), jQuery("body").prepend('<div class="sticky-container"><\/div>'), n = jQuery(".sticky-container"), n.html(i), t = 0, jQuery(window).scroll(function() {
        var r = jQuery(this).scrollTop();
        r > t || 120 >= r ? n.removeClass("sticky-on") : jQuery(window).width() <= 1e3 ? n.removeClass("sticky-on") : n.addClass("sticky-on"), t = r
    }))
}

function height_line(n, t) {
    n.height(t.height()), n.css({
        "line-height": t.height() + "px"
    }), $(".inner-nav.desktop-nav").css("opacity", "1")
}

function init_accordion() {
    $(".accordion").each(function() {
        var n = $(this).children(".content").hide();
        n.first().slideDown("easeOutExpo"), $(this).children(".content-title").first().addClass("active"), $(this).children(".content-title").on("click", function() {
            var t = $(this).next(".content");
            return $(this).parent().children(".content-title").removeClass("active"), $(this).addClass("active"), n.not(t).slideUp("easeInExpo"), $(this).next().slideDown("easeOutExpo"), !1
        })
    })
}

function init_toggle() {
    $(".toggle > .content").hide(), $(".toggle > .content-title.active").next().slideDown(), $(".toggle > .content-title").on("click", function() {
        return $(this).hasClass("active") ? ($(this).next().slideUp("easeOutExpo"), $(this).removeClass("active")) : ($(this).next(".content"), $(this).addClass("active"), $(this).next().slideDown("easeOutExpo")), !1
    })
}

function counter() {
    if ($(".counter").length) {
        var n = $(window).scrollTop(),
            t = $(window).height(),
            i = $(".counter").offset().top;
        $(window).on("scroll", function() {
            n = $(window).scrollTop(), t = $(window).height(), i = $(".counter").offset().top, n + t > i && is_count && ($(".counter").each(function() {
                var i, t = $(this).attr("data-count"),
                    r = $(this),
                    n = 0,
                    u;
                r.text(n), u = setInterval(function() {
                    i = t / 70, n += i, i > t - n && (n = t), r.text(Math.floor(n)), n == t && clearInterval(u)
                }, 50)
            }), is_count = !1)
        })
    }
}

function progress_bar_loader() {
    is_mobile_device() ? $(".skill-bar-progress").each(function() {
        var n = this,
            t = $(n).attr("data-value"),
            i = $(n).parent().parent().find(".skill-bar-perc");
        $(n).css("width", t + "%"), $(i).text(t + "%")
    }) : $(".skill-bar-progress").each(function() {
        var n = this;
        if (is_visible(n) && "true" != $(n).attr("processed")) {
            $(n).css("width", "0%"), $(n).attr("processed", "true");
            var i = parseInt($(n).attr("data-value"), 10),
                t = 0,
                r = i / 100;
            setInterval(function() {
                if (i > t) {
                    t += 1, $(n).css("width", String(t) + "%");
                    var r = $(n).parent().parent().find(".skill-bar-perc");
                    $(r).text(t + "%")
                }
            }, 10 / r)
        }
    })
}

function is_visible(n) {
    var i = $(window).height(),
        t = $(n).offset().top - $(window).scrollTop();
    return t > 0 && i > t
}

function is_mobile_device() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

function video_img() {
    if (is_mobile_device()) {
        var n = $(".row_bg_video").attr("data-img-url");
        $(".row_bg_video").css({
            "background-image": "url(" + n + ")"
        }), $(".row_bg_video").children().hide()
    }
}

function init_twitter_carusel() {
    if ($(".twitter-1").length) {
        $(".twitter-1").tweet({
            username: "Creative_WS",
            count: 3,
            loading_text: "loading twitter feed...",
            template: "<i class='fa fa-twitter twitt-icon'><\/i><p><a href='{user_url}'>@{screen_name}<\/a>{join}{text}<br>{time}<\/p>"
        }), $(".twitter-1.full-screen .tweet_list").addClass("carousel-pag main-color");
        var n = $(".carousel-pag");
        jQuery(n).each(function() {
            jQuery(this).owlCarousel({
                itemsCustom: [
                    [0, 1],
                    [479, 1],
                    [738, 1],
                    [980, 1],
                    [1170, 1]
                ],
                navigation: !1,
                pagination: !0
            })
        })
    }
    $(".twitter-footer").tweet({
        username: "Creative_WS",
        count: 1,
        loading_text: "loading twitter feed...",
        template: "<i class='fa fa-twitter twitt'><\/i><p><a class='link-color' href='{user_url}'>@{screen_name}<\/a>{join}{text}<br>{time}<\/p>"
    })
}

function init_fancy() {
    var n = $(".fancy");
    n.length && (n.fancybox(), $(".fancybox").fancybox({
        helpers: {
            media: {}
        }
    }))
}

function masonry_init() {
    $(".masonry").imagesLoaded(function() {
        $(".masonry").masonry()
    })
}

function filter_init() {
    var n, t = 0;
    n = $("#filter-grid").hasClass("masonry") ? "masonry" : "fitRows", $("#filter-grid").imagesLoaded(function() {
        $("#filter-grid").isotope({
            itemSelector: ".all",
            layoutMode: n,
            filter: t
        })
    }), $(".filter").on("click", function() {
        $(".filter").removeClass("active"), $(this).addClass("active"), t = $(this).attr("data-filter"), $("#filter-grid").isotope({
            itemSelector: ".all",
            layoutMode: n,
            filter: t
        })
    })
}

function init_isotop() {
    var t = $(".isotope-grid"),
        n;
    ($(".isotope-grid").isotope({
        itemSelector: ".isotope-grid .isotope-item",
        columnWidth: ".isotope-item",
        masonry: {}
    }), jQuery(".filter-buttons a.active").length) && (n = jQuery(".filter-buttons a.active").attr("data-filter"), t.isotope({
        filter: n
    }));
    $(".filter-buttons").on("click", "a", function() {
        return $(".isotope-grid").isotope({
            filter: $(this).data("filter")
        }), $(this).addClass("active").siblings().removeClass("active"), !1
    })
}

function init_rev_slider() {
    $(".tp-banner, .tp-banner-slider").on("revolution.slide.onloaded", function() {
        $(".tp-banner, .tp-banner-slider").css("opacity", "1")
    }), $(".tp-banner").length && $(".tp-banner").revolution({
        dottedOverlay: "custom",
        delay: 8e3,
        startwidth: 1170,
        startheight: 700,
        lazyLoad: "on",
        responsiveLevels: [4096, 1025, 778, 480],
        hideThumbs: 1e3,
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 5,
        navigation: {
            arrows: {
                enable: !0
            }
        },
        touchenabled: "on",
        onHoverStop: "on",
        swipe_velocity: .7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: !1,
        keyboardNavigation: "off",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,
        shadow: 0,
        fullWidth: "off",
        fullScreen: "on",
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        forceFullWidth: "off",
        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResolution: 0,
        startWithSlide: 0,
        disableProgressBar: "on"
    }), $(".tp-banner-slider").length && $(".tp-banner-slider").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        navigation: {
            arrows: {
                enable: !0,
                left: {
                    container: "slider",
                    h_align: "left",
                    v_align: "center",
                    h_offset: 0,
                    v_offset: 0
                },
                right: {
                    container: "slider",
                    h_align: "right",
                    v_align: "center",
                    h_offset: 0,
                    v_offset: 0
                }
            }
        },
        gridwidth: 1170,
        gridheight: 700,
        dottedOverlay: "custom",
        lazyLoad: "on",
        responsiveLevels: [4096, 1025, 778, 480],
        delay: 8e3,
        parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 2e3,
            levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55]
        },
        touchenabled: "on",
        onHoverStop: "on",
        startWithSlide: 0,
        disableProgressBar: "on",
        hideArrowsOnMobile: "off"
    })
}

function init_add_cart() {
    $(".add-to-cart").on("click", function() {
        return $(this).parents(".price-review").addClass("added"), !1
    })
}

function init_color_filter() {
    $(".color-filter li, .brand-filter li").on("click", function() {
        return $(this).addClass("active").siblings().removeClass("active"), !1
    })
}

function woocommerce_price_slider() {
    var n, t, i, r;
    if (window.woocommerce_price_slider_params = {
            currency_pos: "right",
            currency_symbol: "<sup>$<\/sup>"
        }, "undefined" == typeof woocommerce_price_slider_params) return !1;
    $("input#min_price, input#max_price").hide(), $(".price_slider, .price_label").show(), i = $(".price_slider_amount #min_price").data("min"), r = $(".price_slider_amount #max_price").data("max"), n = parseInt(i, 10), t = parseInt(r, 10), woocommerce_price_slider_params.min_price && (n = parseInt(woocommerce_price_slider_params.min_price, 10)), woocommerce_price_slider_params.max_price && (t = parseInt(woocommerce_price_slider_params.max_price, 10)), $("body").on("price_slider_create price_slider_slide", function(n, t, i) {
        var r, u;
        switch (woocommerce_price_slider_params.currency_pos) {
            case "left":
                r = woocommerce_price_slider_params.currency_symbol + t, u = woocommerce_price_slider_params.currency_symbol + i;
                break;
            case "left_space":
                r = woocommerce_price_slider_params.currency_symbol + " " + t, u = woocommerce_price_slider_params.currency_symbol + " " + i;
                break;
            case "right":
                r = t + woocommerce_price_slider_params.currency_symbol, u = i + woocommerce_price_slider_params.currency_symbol;
                break;
            case "right_space":
                r = t + " " + woocommerce_price_slider_params.currency_symbol, u = i + " " + woocommerce_price_slider_params.currency_symbol
        }
        $(".price_slider_amount span.from").html(r), $(".price_slider_amount span.to").html(u), $("body").trigger("price_slider_updated", t, i)
    }), $(".price_slider").slider({
        range: !0,
        animate: !0,
        min: i,
        max: r,
        values: [n, t],
        create: function() {
            $(".price_slider_amount #min_price").val(n), $(".price_slider_amount #max_price").val(t), $("body").trigger("price_slider_create", [n, t])
        },
        slide: function(n, t) {
            $("input#min_price").val(t.values[0]), $("input#max_price").val(t.values[1]), $("body").trigger("price_slider_slide", [t.values[0], t.values[1]])
        },
        change: function(n, t) {
            $("body").trigger("price_slider_change", [t.values[0], t.values[1]])
        }
    })
}

function show_address() {
    document.getElementById("ship-to-different-address-checkbox").checked ? $(".shipping_address").show() : $(".shipping_address").hide()
}

function mobile_menu_controller_init() {
    window.mobile_nav = {
        is_mobile_menu: !1,
        nav_obj: jQuery("header .inner-nav>ul").clone(),
        level: 1,
        current_id: !1,
        next_id: !1,
        prev_id: "",
        animation_params: {
            vertical_start: 100,
            vertical_end: 0,
            horizontal_start: 0,
            horizontal_end: 200,
            speed: 300
        }
    }, mobile_menu_controller(), jQuery(window).resize(function() {
        mobile_menu_controller()
    }), mobile_nav_switcher_init()
}

function mobile_nav_switcher_init() {
    var n = jQuery("nav .inner-nav");
    jQuery(document).on("click", "header nav .inner-nav.mobile_nav .mobile_menu_switcher", function() {
        var i = get_current_nav_level(),
            t = "opened";
        n.hasClass(t) ? i.stop().animate({
            "margin-top": window.mobile_nav.animation_params.vertical_start + "px",
            opacity: 0
        }, window.mobile_nav.animation_params.speed, function() {
            n.removeClass(t)
        }) : (n.addClass(t), i.stop().animate({
            "margin-top": window.mobile_nav.animation_params.vertical_end + "px",
            opacity: 1
        }, window.mobile_nav.animation_params.speed))
    })
}

function mobile_nav_handlers_init() {
    jQuery("header nav .inner-nav.mobile_nav .button_open").on("click", function() {
        var u = jQuery(this),
            i = u.closest("li").attr("id"),
            r = get_current_nav_level(),
            t = get_next_nav_level(i);
        r.animate({
            right: window.mobile_nav.animation_params.horizontal_end + "px",
            opacity: 0
        }, window.mobile_nav.animation_params.speed, function() {
            r.remove(), jQuery("header nav .inner-nav").append(t), t.css({
                "margin-top": window.mobile_nav.animation_params.vertical_end + "px",
                right: "-" + window.mobile_nav.animation_params.horizontal_end + "px",
                opacity: 0
            }), t.animate({
                right: window.mobile_nav.animation_params.horizontal_start + "px",
                opacity: 1
            }, window.mobile_nav.animation_params.speed), window.mobile_nav.current_id = i, window.mobile_nav.level++, mobile_nav_handlers_init()
        })
    }), jQuery("header nav .inner-nav.mobile_nav .mainmenu_open").on("click", function() {
        var u = jQuery(this),
            i = u.closest("li").attr("id"),
            r = get_current_nav_level(),
            t = get_next_nav_level(i);
        r.animate({
            right: window.mobile_nav.animation_params.horizontal_end + "px",
            opacity: 0
        }, window.mobile_nav.animation_params.speed, function() {
            r.remove(), jQuery("header nav .inner-nav").append(t), t.css({
                "margin-top": window.mobile_nav.animation_params.vertical_end + "px",
                right: "-" + window.mobile_nav.animation_params.horizontal_end + "px",
                opacity: 0
            }), t.animate({
                right: window.mobile_nav.animation_params.horizontal_start + "px",
                opacity: 1
            }, window.mobile_nav.animation_params.speed), window.mobile_nav.current_id = i, window.mobile_nav.level++, mobile_nav_handlers_init()
        })
    }), jQuery("header nav .inner-nav.mobile_nav .back>a").on("click", function() {
        var t = get_current_nav_level(),
            n = get_prev_nav_level();
        return t.animate({
            right: "-" + window.mobile_nav.animation_params.horizontal_end + "px",
            opacity: 0
        }, window.mobile_nav.animation_params.speed, function() {
            t.remove(), jQuery("header nav .inner-nav").append(n), n.css({
                "margin-top": window.mobile_nav.animation_params.vertical_end + "px",
                right: window.mobile_nav.animation_params.horizontal_end + "px",
                opacity: 0
            }), n.animate({
                right: window.mobile_nav.animation_params.horizontal_start + "px",
                opacity: 1
            }, window.mobile_nav.animation_params.speed), window.mobile_nav.level--, mobile_nav_handlers_init()
        }), !1
    })
}

function get_current_nav_level() {
    var n = window.mobile_nav.level < 2 ? jQuery("header nav .inner-nav>ul") : jQuery("header nav .inner-nav ul");
    return n.find("ul").remove(), n
}

function get_next_nav_level(n) {
    var t = window.mobile_nav.nav_obj.find("#" + n).children("ul").first().clone();
    return t.find("ul").remove(), t
}

function get_prev_nav_level() {
    var n = {};
    return window.mobile_nav.level > 2 ? (n = window.mobile_nav.nav_obj.find("#" + window.mobile_nav.current_id).parent("ul").parent("li"), window.mobile_nav.current_id = n.attr("id"), n = n.children("ul").first()) : (n = window.mobile_nav.nav_obj, window.mobile_nav.current_id = !1), n = n.clone(), n.find("ul").remove(), n
}

function mobile_menu_controller() {
    var n = is_mobile();
    n && !window.mobile_nav.is_mobile_menu ? set_mobile_menu() : !n && window.mobile_nav.is_mobile_menu && reset_mobile_menu()
}

function set_mobile_menu() {
    var n = get_current_nav_level();
    $("header nav .inner-nav").addClass("mobile_nav"), $("header .sticky-menu").addClass("mobile"), $("header .inner-nav").removeClass("scrolling, desktop-nav"), n.css({
        "margin-top": window.mobile_nav.animation_params.vertical_start + "px"
    }), window.mobile_nav.is_mobile_menu = !0, mobile_nav_handlers_init()
}

function reset_mobile_menu() {
    var n = get_current_nav_level();
    $("header nav .inner-nav").removeClass("mobile_nav opened").addClass("desktop-nav"), $("header .sticky-menu").removeClass("mobile"), n.removeAttr("style"), window.mobile_nav.is_mobile_menu = !1, n.remove(), reset_mobile_nav_params()
}

function reset_mobile_nav_params() {
    jQuery("header nav .inner-nav").append(window.mobile_nav.nav_obj.clone()), window.mobile_nav.level = 1, window.mobile_nav.current_id = !1, window.mobile_nav.next_id = !1
}

function is_mobile() {
    return $(window).width() < 992 || navigator.userAgent.match(/(Android|iPhone|iPod|iPad)/)
}

function add_button_menu() {
    for (var t = $("header nav .inner-nav>ul").find("li"), n = 0; n < $("header nav .inner-nav>ul").find("li").length; n++) $(t[n]).attr("id", "menu-item-" + n);
    $("header nav .inner-nav").append("<i class='mobile_menu_switcher'><\/i>"), $("header nav .inner-nav>ul ul").each(function() {
        var n = document.createElement("li");
        $(n).attr("class", "back"), n.innerHTML = "<a href='#'>Back<\/a>", this.insertBefore(n, this.firstElementChild)
    }), $("header nav .inner-nav li").each(function() {
        $(this).children("ul").length > 0 && $(this).append("<span class='button_open'><\/span>")
    }), $("header nav .inner-nav li").each(function() {
        $(this).children("ul").length > 0 && $(this).append("<span class='mainmenu_open'><\/span>")
    })
}

function cws_page_focus() {
    document.getElementsByTagName("html")[0].setAttribute("data-focus-chek", "focused"), window.addEventListener("focus", function() {
        document.getElementsByTagName("html")[0].setAttribute("data-focus-chek", "focused")
    }), window.addEventListener("blur", function() {
        document.getElementsByTagName("html")[0].removeAttribute("data-focus-chek")
    })
}

function scroll_top() {
    $("#scroll-top").on("click", function() {
        return $("html, body").animate({
            scrollTop: 0
        }), !1
    }), $(window).scrollTop() > 700 ? $("#scroll-top").fadeIn() : $("#scroll-top").fadeOut(), $(window).scroll(function() {
        $(window).scrollTop() > 700 ? $("#scroll-top").fadeIn() : $("#scroll-top").fadeOut()
    })
}

function gridList_init() {
    $("#list-grid>div").on("click", function() {
        if ($(this).addClass("active").siblings().removeClass("active"), $(this).hasClass("grid-view")) {
            if ($(".list-grid-view .products").hasClass("grid-view")) return !1;
            $(".list-grid-view .products").fadeOut(300, function() {
                $(".list-grid-view .products").addClass("grid-view").removeClass("list-view").fadeIn(300)
            })
        }
        if ($(this).hasClass("list-view")) {
            if ($(".list-grid-view .products").hasClass("list-view")) return !1;
            $(".list-grid-view .products").fadeOut(300, function() {
                $(".list-grid-view .products").addClass("list-view").removeClass("grid-view").fadeIn(300)
            })
        }
    })
}

function popup_login_init() {
    $(".top-login").on("click", function() {
        $(".login-popup").addClass("open")
    }), $(".login-popup .close-button").on("click", function() {
        $(".login-popup").removeClass("open")
    })
}

function magicline_init() {
    var t, i, r, n;
    $(".inner-nav").hasClass("mobile_nav") || ($("header .inner-nav > ul").addClass("magic-line-main"), $("header .magic-line-main").append("<li class='magic-line-main-li'><\/li>"), $("header .inner-nav > ul > li > a").hasClass("active") && $("header .inner-nav > ul > li > a.active").parent("li").addClass("active-li"), n = $(".magic-line-main-li"), n.width($(".active-li").width()).css("left", $(".active-li").position().left).data("origLeft", n.position().left).data("origWidth", n.width()), $(".magic-line-main > li:not(.slash)").on({
        mouseenter: function() {
            t = $(this), i = t.position().left, r = t.width(), n.stop().animate({
                left: i,
                width: r
            })
        },
        mouseleave: function() {
            n.stop().animate({
                left: n.data("origLeft"),
                width: n.data("origWidth")
            })
        }
    }))
}

function magicline_main_init() {
    if ($(".menu-widget").length) {
        $(".magic-line").append("<li id='magic-line'><\/li>");
        var n = function() {
            var t, i, r, n = $("#magic-line");
            n.width($(".current_item").width()).css("left", $(".current_item a").position().left).data("origLeft", n.position().left).data("origWidth", n.width()), $(".magic-line li").find("a").on({
                mouseenter: function() {
                    t = $(this), i = t.position().left, r = t.parent().width(), n.stop().animate({
                        left: i,
                        width: r
                    })
                },
                mouseleave: function() {
                    n.stop().animate({
                        left: n.data("origLeft"),
                        width: n.data("origWidth")
                    })
                }
            })
        };
        n(), $(".menu-widget").hasClass("with-switch") && $(".menu-widget ul li").on("click", function(t) {
            t.preventDefault(), $(this).siblings().removeClass("current_item"), $(this).addClass("current_item"), n()
        })
    }
}

function footer_height() {
    var n = $(".footer").outerHeight(),
        t;
    $(window).width() > 992 && $(".footer").hasClass("footer-fixed") ? ($(".footer.footer-fixed").addClass("fixed"), $("body").css("margin-bottom", " " + n + "px")) : ($("body").css("margin-bottom", "0px"), $(".footer.footer-fixed").removeClass("fixed")), t = 1.5 * n, $(window).height() < t && ($("body").css("margin-bottom", "0px"), $(".footer.footer-fixed").removeClass("fixed"))
}

function search_form_height() {
    var n = $(".search-tours-wrap .tours-container.active").outerHeight();
    $(".search-tours-content").css({
        height: +n + "px"
    })
}

function search_form_click() {
    $(".tours-tab-btn").each(function() {
        $(this).on("click", function() {
            var t;
            $(this).siblings().removeClass("active"), $(this).addClass("active");
            var i = $(this).attr("data-tours-cat"),
                r = $(this).parents(".search-tours-wrap").find(".tours-container"),
                n = $(".search-tours-wrap [data-tours-cat=" + i + "]");
            $(n).addClass("active").siblings(".tours-container").removeClass("active"), $(r).fadeOut(0), $(n).fadeIn(600), $(this).addClass("active").siblings(".tours-tab-btn").removeClass("active"), t = $(".search-tours-wrap .tours-container.active").outerHeight(), $(".search-tours-content").css({
                height: +t + "px"
            })
        })
    }), $(document).on("click", ".tours-calendar span", function() {
        $(this).siblings(".calendar-widget").toggleClass("active").fadeToggle("fast"), $(this).parent().siblings(".tours-calendar").find(".calendar-widget").hasClass("active") && $(this).parent().siblings(".tours-calendar").find(".calendar-widget").removeClass("active").css("display", "none")
    })
}

function search_tours_form_resize() {
    $(window).width() <= 991 ? ($(".search-tours-form").addClass("mob-search-form"), $(".search-tours-form .search-tours-wrap").parent().removeClass("container")) : ($(".search-tours-form").removeClass("mob-search-form"), $(".search-tours-form .search-tours-wrap").parent().addClass("container"))
}

function slider_info_mob() {
    $(window).width() <= 980 ? $(".slider-info-item").addClass("mobile-on") : $(".slider-info-item").removeClass("mobile-on").removeClass("active")
}

function scrollTo_init() {
    var n, t;
    $("a.scrollto").on("click", function() {
        return n = jQuery(this).attr("href"), t = jQuery(n).offset().top, $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: t
        }, 500), !1
    })
}

function flexslider_init() {
    $("#flex-carousel").flexslider({
        animation: "slide",
        controlNav: !1,
        animationLoop: !1,
        slideshow: !1,
        itemWidth: 130,
        itemMargin: 5,
        asNavFor: "#flex-slider"
    }), $("#flex-slider").flexslider({
        animation: "slide",
        controlNav: !1,
        animationLoop: !1,
        slideshow: !1,
        sync: "#flex-carousel"
    })
}

function vimeo_init() {
    function r() {
        document.getElementsByTagName("html")[0].hasAttribute("data-focus-chek") ? 1 > i ? (i++, jQuery("#" + n).vimeo("play")) : i = 1 : (jQuery("#" + n).vimeo("pause"), i = 0)
    }
    var t, n, i;
    jQuery(".cws_Vimeo_video_bg").each(function() {
        t = jQuery(this);
        var i, u;
        n = jQuery(".cws_Vimeo_video_bg").attr("data-video-id"), jQuery("#" + n).vimeo("play"), jQuery("#" + n).vimeo("setVolume", 0), jQuery("#" + n).vimeo("setLoop", !0), i = t[0].offsetWidth, t[0].offsetHeight < i / 16 * 9 ? u = t[0].offsetWidth / 16 * 9 : (u = t[0].offsetHeight, i = u / 9 * 16), jQuery("#" + n)[0].style.width = i + "px", jQuery("#" + n)[0].style.height = u + "px", setInterval(r, 1e3)
    })
}

function cws_self_hosted_video() {
    var n, t, i;
    jQuery(".cws_self_hosted_video").each(function() {
        n = jQuery(this), i = n.find("video"), t = n[0].offsetWidth, n[0].offsetHeight < t / 16 * 9 ? el_height = n[0].offsetWidth / 16 * 9 : (el_height = n[0].offsetHeight, t = el_height / 9 * 16), i[0].style.width = t + "px", i[0].style.height = el_height + "px"
    })
}

function onYouTubePlayerAPIReady() {
    if ("undefined" != typeof element)
        for (var n = element.length - 1; n >= 0; n--) video_source = element[n].getAttribute("data-video-source"), video_id = element[n].getAttribute("data-video-id"), el_width = element[n].offsetWidth, element[n].offsetHeight < el_width / 16 * 9 ? el_height = element[n].offsetWidth / 16 * 9 : (el_height = element[n].offsetHeight, el_width = el_height / 9 * 16), el_width > 1920 && (el_quality = "highres"), 1920 > el_width && (el_quality = "hd1080"), 1280 > el_width && (el_quality = "hd720"), 853 > el_width && (el_quality = "large"), 640 > el_width && (el_quality = "medium"), window.setTimeout(function() {
            YT.loaded ? video_control(video_id, video_source) : (console.log("not loaded yet"), window.setTimeout(arguments.callee, 50))
        }, 50)
}

function video_control(n, t) {
    function e(n) {
        n.target.mute(), i.setPlaybackQuality(el_quality), i.playVideo()
    }

    function o(n) {
        n.data == YT.PlayerState.PLAYING ? f = setInterval(u, 200) : clearInterval(f), setInterval(h, 1e3)
    }

    function s() {
        i.seekTo(0)
    }

    function u() {
        void 0 !== i && void 0 !== i.getCurrentTime && (currTime = i.getCurrentTime(), duration = i.getDuration(), currTime > duration - .8 ? s(event) : "")
    }

    function h() {
        document.getElementsByTagName("html")[0].hasAttribute("data-focus-chek") ? 1 > r && void 0 !== i.playVideo ? (r++, i.playVideo()) : r = 1 : void 0 !== i.pauseVideo && (i.pauseVideo(), r = 0)
    }
    var f, i, r = 0;
    i = new YT.Player(n, {
        height: el_height,
        width: el_width,
        videoId: t,
        playerVars: {
            autoplay: 1,
            rel: 0,
            showinfo: 0,
            showsearch: 0,
            controls: 0,
            loop: 1,
            enablejsapi: 1,
            theme: "dark",
            modestbranding: 0,
            wmode: "transparent",
            enablejsapi: 1
        },
        events: {
            onReady: e,
            onStateChange: o
        }
    }), window.addEventListener("focus", function() {
        return u(), !0
    })
}

function Video_resizer() {
    var n, t;
    if (element.length)
        for (n = element.length - 1; n >= 0; n--) video_source = element[n].getAttribute("data-video-source"), video_id = element[n].getAttribute("data-video-id"), el_width = document.getElementsByClassName("cws_Yt_video_bg")[0].offsetWidth, element[n].offsetHeight < el_width / 16 * 9 ? el_height = document.getElementsByClassName("cws_Yt_video_bg")[0].offsetWidth / 16 * 9 : (el_height = document.getElementsByClassName("cws_Yt_video_bg")[0].offsetHeight, el_width = el_height / 9 * 16), t = document.getElementById(element[n].getAttribute("data-video-id")), t.style.width = el_width + "px", t.style.height = el_height + "px"
}

function revolutionSlider() {
    $(".rev_slider_wrapper #slider1").length && jQuery("#slider1").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        delay: 5e3,
        navigation: {
            arrows: {
                enable: !0
            }
        },
        gridwidth: 1170,
        gridheight: 950
    }), $(".rev_slider_wrapper #slider2").length && jQuery("#slider2").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        delay: 5e3,
        navigation: {
            arrows: {
                enable: !0
            }
        },
        gridwidth: 1170,
        gridheight: 815,
        fullWidth: "off",
        fullScreen: "on",
        fullScreenOffsetContainer: ""
    })
}

function fullNavToggler() {
    if ($("#full-menu ul.nav").length) {
        $("#full-menu ul.nav li.has-submenu").children("a").append(function() {
            return '<button class="dropdown-expander"><i class="fa fa-bars"><\/i><\/button>'
        });
        $("#full-menu ul.nav li.has-submenu .dropdown-expander").on("click", function() {
            return $(this).parent().parent().children(".submenu").slideToggle(), console.log($(this).parents("li")), !1
        })
    }
}

function mobileNavToggler() {
    if ($(".nav-holder").length) {
        $(".nav-holder .nav-header button.menu-expander").on("click", function() {
            return $(".nav-holder .nav-footer").slideToggle(), !1
        });
        $(".nav-holder li.has-submenu").children("a").append(function() {
            return '<button class="dropdown-expander"><i class="fa fa-angle-down"><\/i><\/button>'
        });
        $(".nav-holder .nav-footer .dropdown-expander").on("click", function() {
            return $(this).parent().parent().children(".submenu").slideToggle(), $(this).find("i").toggleClass("fa-angle-down fa-angle-up"), !1
        })
    }
    if ($(".side-menu-wrapper").length) {
        $(".side-menu-wrapper button.expander").on("click", function() {
            return $(".side-menu-wrapper").toggleClass("opened closed"), $(this).find("i").toggleClass("fa-bars fa-close"), !1
        });
        $("button.side-menu-expander").on("click", function() {
            return $(".side-menu-wrapper").toggleClass("opened closed"), $(".side-menu-wrapper").find("button.expander i").toggleClass("fa-close fa-bars"), !1
        });
        $(".side-menu li.has-submenu").children("a").append(function() {
            return '<button class="dropdown-expander"><i class="fa fa-angle-down"><\/i><\/button>'
        });
        $(".side-menu ul.nav .dropdown-expander").on("click", function() {
            return $(this).parent().parent().children(".submenu").slideToggle(), $(this).find("i").toggleClass("fa-angle-down fa-angle-up"), !1
        })
    }
}

function stickyHeader() {
    if ($(".stricky").length && !$(".stricky.home-two").length) {
        var n = 100;
        $(window).scrollTop() > n ? ($(".stricky").removeClass("fadeIn animated"), $(".stricky").addClass("stricky-fixed fadeInDown animated")) : $(this).scrollTop() <= n && ($(".stricky").removeClass("stricky-fixed fadeInDown animated"), $(".stricky").addClass("slideIn animated"))
    }
}

function searchFrom() {
    if (".form-search-wrap".length) {
        $("#search").on("click", function() {
            $(".form-search-wrap").slideDown()
        });
        $(".close-search").on("click", function() {
            $(".form-search-wrap").slideUp()
        })
    }
}

function famousSlider() {
    ".famous-locations".length && $(".famous-slider").bxSlider({
        mode: "fade",
        auto: !1,
        autoControls: !1
    })
}

function clientsSlider() {
    ".clients-says".length && $(".clients-slider").bxSlider({
        auto: !0,
        autoControls: !1,
        pagerCustom: "#clients-pager"
    })
}

function reviewSlider() {
    ".destination-rivew-wrap".length && $(".destination-rivew-wrap .owl-carousel").owlCarousel({
        loop: !0,
        items: 1,
        center: !0,
        dots: !0,
        autoplayTimeout: 3e3,
        nav: !1
    })
}

function stickyCheckOut() {
    $(".checkout-sidebar-wrap").length && $(".checkout-sidebar-wrap").stick_in_parent({
        offset_top: 100,
        parent: ".zt-container"
    })
}

function galleryMember() {
    $("#gallerymember").length && $("#gallerymember").lightGallery()
}

function galleryWidget() {
    $("#gallerywidget").length && $("#gallerywidget").lightGallery()
}

function galleryMasonry() {
    $(".gallery-masonry").length && $(".gallery-masonry .grid").masonry({
        itemSelector: ".grid-item"
    })
}

function contactFormValidation() {
    $(".contact-form").length && $(".contact-form").validate({
        rules: {
            name: {
                required: !0
            },
            email: {
                required: !0,
                email: !0
            },
            message: {
                required: !0
            }
        },
        submitHandler: function(n) {
            return $.post($(n).attr("action"), $(n).serialize(), function(t) {
                $(n).find(".response").append(t).css("display", "block"), $(n).find('input[type="text"]').val(""), $(n).find('input[type="email"]').val(""), $(n).find("textarea").val("")
            }), !1
        }
    })
}

function googleMap() {
    $(".google-map").length && $(".google-map").each(function() {
        var u = $(this).data("map-lat"),
            f = $(this).data("map-lng"),
            e = $(this).data("icon-path"),
            n = $(this).data("map-zoom"),
            i = $(this).data("map-title"),
            o = $(this).data("markers"),
            t, r;
        n || (n = 15), t = {
            lat: parseInt(u),
            lng: parseInt(f)
        }, r = '<h1 class="heading-map">' + i + '<\/h1><div class="content-map">' + o + "<\/div>", $(this).gmap3({
            zoom: n,
            center: t,
            scrollwheel: !1,
            styles: [{
                featureType: "all",
                stylers: [{
                    saturation: -80
                }]
            }, {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{
                    hue: "#00ffee"
                }, {
                    saturation: 50
                }]
            }, {
                featureType: "poi.business",
                elementType: "labels",
                stylers: [{
                    visibility: "off"
                }]
            }]
        }).marker({
            position: t,
            title: i,
            options: {
                icon: new google.maps.MarkerImage(e)
            }
        }).infowindow({
            content: r
        }).then(function(n) {
            var i = this.get(0),
                t = this.get(1);
            t.addListener("click", function() {
                n.open(i, t)
            })
        })
    })
}

function accrodion() {
    $(".why-choose-us").length && $(".why-choose-us .faq-accrodion").accordion({
        icons: {
            header: "ui-icon-plus",
            activeHeader: "ui-icon-minus"
        }
    })
}

function animation() {
    $(".animation-scroll").length && $(".animation-scroll.scroll-zoomindown").each(function() {
        var n = $(this).offset().top,
            t = $(window).scrollTop();
        n < t + 400 && $(this).addClass("animated zoomInDown")
    })
}

function get_query_arg(n, t) {
    if (-1 < n.indexOf(t + "=")) {
        var i = new RegExp("[?&]" + t + "(.+?)(?=&|$)").exec(n);
        if (null != i) return i[1] ? i[1].replace(/=/g, "") : ""
    }
}

function shuffleText(n, t, i) {
    var r = {
            fps: 20
        },
        u, f;
    if (i && (r = jQuery.extend(r, i)), window.dzsshuffle_currTarget && n.get(0) != window.dzsshuffle_currTarget.get(0) && (window.dzsshuffle_currTarget.text(window.dzsshuffle_finaltext), window.dzsshuffle_currTarget.data("terminate-now", "on"), n.data("terminate-now", "off")), t != window.dzsshuffle_finaltext && (i = n.text(), window.dzsshuffle_finaltext = t, t = t.split(""), window.dzsshuffle_finaltext_arr = t, window.dzsshuffle_temp_arr = i.split(""), n.data("current_k", 0), n.data("current_k_try", 0)), n.data("current_k") && !isNaN(n.data("current_k")) || n.data("current_k", 0), Number(n.data("current_k")) >= window.dzsshuffle_finaltext_arr.length || "on" == n.data("terminate-now")) return n.text(window.dzsshuffle_finaltext), !1;
    if (1 == Number(n.data("current_k_try")))
        for (t = n.data("current_k") + 1; t < window.dzsshuffle_finaltext_arr.length; t++) window.dzsshuffle_temp_arr[t] = randomChar();
    n.data("finaltext") || n.data("finaltext", window.dzsshuffle_finaltext), u = n.data("current_k"), f = "", t = window.dzsshuffle_finaltext_arr[u], f = " " == t ? "space" : /[a-z]/.test(t) ? "lowerLetter" : /[A-Z]/.test(t) ? "upperLetter" : "symbol", setTimeout(function() {
        var t = randomChar(f);
        4 < n.data("current_k_try") && (t = window.dzsshuffle_finaltext_arr[u]);
        try {
            window.dzsshuffle_temp_arr[n.data("current_k")] = t, n.text(window.dzsshuffle_temp_arr.join(""))
        } catch (i) {}
        t == window.dzsshuffle_finaltext_arr[u] || "space" == f ? (n.data("current_k", Number(n.data("current_k")) + 1), n.data("current_k_try", 0), shuffleText(n, window.dzsshuffle_finaltext, r)) : (shuffleText(n, window.dzsshuffle_finaltext, r), n.data("current_k_try", Number(n.data("current_k_try")) + 1))
    }, 30)
}

function randomChar(n) {
    var i = "",
        t;
    return "undefined" == typeof n && (t = 3 * Math.random(), t = Math.floor(t), 0 == t && (n = "lowerLetter"), 1 == t && (n = "upperLetter"), 2 == t && (n = "symbol")), "lowerLetter" == n ? i = "abcdefghijklmnopqrstuvwxyz0123456789" : "upperLetter" == n ? i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" : "symbol" == n && (i = ",.?/\\(^)![]{}*&^%$#'\""), n = i.split(""), n[Math.floor(Math.random() * n.length)]
}

function can_history_api() {
    return !(!window.history || !history.pushState)
}

function is_ios() {
    return -1 != navigator.platform.indexOf("iPhone") || -1 != navigator.platform.indexOf("iPod") || -1 != navigator.platform.indexOf("iPad")
}

function is_android() {
    return -1 < navigator.userAgent.toLowerCase().indexOf("android")
}

function is_ie() {
    return -1 != navigator.appVersion.indexOf("MSIE") ? !0 : !1
}

function is_firefox() {
    return -1 != navigator.userAgent.indexOf("Firefox") ? !0 : !1
}

function is_opera() {
    return -1 != navigator.userAgent.indexOf("Opera") ? !0 : !1
}

function is_chrome() {
    return -1 < navigator.userAgent.toLowerCase().indexOf("chrome")
}

function is_safari() {
    return -1 < navigator.userAgent.toLowerCase().indexOf("safari")
}

function version_ie() {
    return parseFloat(navigator.appVersion.split("MSIE")[1])
}

function version_firefox() {
    if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) return new Number(RegExp.$1)
}

function version_opera() {
    if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) return new Number(RegExp.$1)
}

function is_ie8() {
    return is_ie() && 9 > version_ie() ? !0 : !1
}

function is_ie9() {
    return is_ie() && 9 == version_ie() ? !0 : !1
}

function get_query_arg(n, t) {
    if (-1 < n.indexOf(t + "=")) {
        var i = new RegExp("[?&]" + t + "=.+").exec(n);
        if (null != i) return i = i[0], -1 < i.indexOf("&") && (i = i.split("&")[1]), i.split("=")[1]
    }
}

function add_query_arg(n, t, i) {
    t = encodeURIComponent(t), i = encodeURIComponent(i);
    var r = t + "=" + i;
    return n = n.replace(new RegExp("(&|\\?)" + t + "=[^&]*"), "$1" + r), -1 < n.indexOf(t + "=") || (r = -1 < n.indexOf("?") ? "&" + r : "?" + r, n += r), "NaN" == i && (n = n.replace(new RegExp("[?|&]" + t + "=" + i), "")), n
}

function is_touch_device() {
    return !!("ontouchstart" in window)
}
var is_count, owl_one, owl_two, owl_three, owl_three_small, owl_four, owl_pag, owl_single, submit_handler, i, currTime, duration, video_source, video_id, el_height, element, el_width, el_quality;
! function(n) {
    n.extend(n.fn, {
        validate: function(t) {
            if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var i = n.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
                i.settings.submitHandler && (i.submitButton = t.target), n(t.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== n(t.target).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.submit(function(t) {
                function r() {
                    var r;
                    return i.settings.submitHandler ? (i.submitButton && (r = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(n(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && r.remove(), !1) : !0
                }
                return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
            })), i)
        },
        valid: function() {
            var t, i;
            return n(this[0]).is("form") ? t = this.validate().form() : (t = !0, i = n(this[0].form).validate(), this.each(function() {
                t = i.element(this) && t
            })), t
        },
        removeAttrs: function(t) {
            var i = {},
                r = this;
            return n.each(t.split(/\s/), function(n, t) {
                i[t] = r.attr(t), r.removeAttr(t)
            }), i
        },
        rules: function(t, i) {
            var e, s, f, u, o, h, r = this[0];
            if (t) switch (e = n.data(r.form, "validator").settings, s = e.rules, f = n.validator.staticRules(r), t) {
                case "add":
                    n.extend(f, n.validator.normalizeRule(i)), delete f.messages, s[r.name] = f, i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                    break;
                case "remove":
                    return i ? (h = {}, n.each(i.split(/\s/), function(t, i) {
                        h[i] = f[i], delete f[i], "required" === i && n(r).removeAttr("aria-required")
                    }), h) : (delete s[r.name], f)
            }
            return u = n.validator.normalizeRules(n.extend({}, n.validator.classRules(r), n.validator.attributeRules(r), n.validator.dataRules(r), n.validator.staticRules(r)), r), u.required && (o = u.required, delete u.required, u = n.extend({
                required: o
            }, u), n(r).attr("aria-required", "true")), u.remote && (o = u.remote, delete u.remote, u = n.extend(u, {
                remote: o
            })), u
        }
    }), n.extend(n.expr[":"], {
        blank: function(t) {
            return !n.trim("" + n(t).val())
        },
        filled: function(t) {
            return !!n.trim("" + n(t).val())
        },
        unchecked: function(t) {
            return !n(t).prop("checked")
        }
    }), n.validator = function(t, i) {
        this.settings = n.extend(!0, {}, n.validator.defaults, t), this.currentForm = i, this.init()
    }, n.validator.format = function(t, i) {
        return 1 === arguments.length ? function() {
            var i = n.makeArray(arguments);
            return i.unshift(t), n.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), n.each(i, function(n, i) {
            t = t.replace(new RegExp("\\{" + n + "\\}", "g"), function() {
                return i
            })
        }), t)
    }, n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(n) {
                this.lastActive = n, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(n)).hide())
            },
            onfocusout: function(n) {
                !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            },
            onkeyup: function(n, t) {
                (9 !== t.which || "" !== this.elementValue(n)) && (n.name in this.submitted || n === this.lastElement) && this.element(n)
            },
            onclick: function(n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function(t, i, r) {
                "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function(t, i, r) {
                "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function(t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function i(t) {
                    var r = n.data(this[0].form, "validator"),
                        u = "on" + t.type.replace(/^validate/, ""),
                        i = r.settings;
                    i[u] && !this.is(i.ignore) && i[u].call(r, this[0], t)
                }
                this.labelContainer = n(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm), this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var t, r = this.groups = {};
                n.each(this.settings.groups, function(t, i) {
                    "string" == typeof i && (i = i.split(/\s/)), n.each(i, function(n, i) {
                        r[i] = t
                    })
                }), t = this.settings.rules, n.each(t, function(i, r) {
                    t[i] = n.validator.normalizeRule(r)
                }), n(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", i).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", i), this.settings.invalidHandler && n(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), n(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), n.extend(this.submitted, this.errorMap), this.invalid = n.extend({}, this.errorMap), this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++) this.check(t[n]);
                return this.valid()
            },
            element: function(t) {
                var u = this.clean(t),
                    i = this.validationTargetFor(u),
                    r = !0;
                return this.lastElement = i, void 0 === i ? delete this.invalid[u.name] : (this.prepareElement(i), this.currentElements = n(i), r = this.check(i) !== !1, r ? delete this.invalid[i.name] : this.invalid[i.name] = !0), n(t).attr("aria-invalid", !r), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), r
            },
            showErrors: function(t) {
                if (t) {
                    n.extend(this.errorMap, t), this.errorList = [];
                    for (var i in t) this.errorList.push({
                        message: t[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = n.grep(this.successList, function(n) {
                        return !(n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                n.fn.resetForm && n(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(n) {
                var i, t = 0;
                for (i in n) t++;
                return t
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === n.grep(this.errorList, function(n) {
                    return n.element.name === t.name
                }).length && t
            },
            elements: function() {
                var t = this,
                    i = {};
                return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !t.objectLength(n(this).rules()) ? !1 : (i[this.name] = !0, !0)
                })
            },
            clean: function(t) {
                return n(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return n(this.settings.errorElement + "." + t, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = n([]), this.toHide = n([]), this.currentElements = n([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(n) {
                this.reset(), this.toHide = this.errorsFor(n)
            },
            elementValue: function(t) {
                var i, r = n(t),
                    u = r.attr("type");
                return "radio" === u || "checkbox" === u ? n("input[name='" + r.attr("name") + "']:checked").val() : (i = r.val(), "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var i, r, u, f = n(t).rules(),
                    o = n.map(f, function(n, t) {
                        return t
                    }).length,
                    e = !1,
                    s = this.elementValue(t);
                for (r in f) {
                    u = {
                        method: r,
                        parameters: f[r]
                    };
                    try {
                        if (i = n.validator.methods[r].call(this, s, t, u.parameters), "dependency-mismatch" === i && 1 === o) {
                            e = !0;
                            continue
                        }
                        if (e = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!i) return this.formatAndAdd(t, u), !1
                    } catch (h) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + u.method + "' method.", h), h;
                    }
                }
                if (!e) return this.objectLength(f) && this.successList.push(t), !0
            },
            customDataMessage: function(t, i) {
                return n(t).data("msg" + i[0].toUpperCase() + i.substring(1).toLowerCase()) || n(t).data("msg")
            },
            customMessage: function(n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor === String ? i : i[t])
            },
            findDefined: function() {
                for (var n = 0; n < arguments.length; n++)
                    if (void 0 !== arguments[n]) return arguments[n];
                return void 0
            },
            defaultMessage: function(t, i) {
                return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), !this.settings.ignoreTitle && t.title || void 0, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
            },
            formatAndAdd: function(t, i) {
                var r = this.defaultMessage(t, i.method),
                    u = /\$?\{(\d+)\}/g;
                "function" == typeof r ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters)), this.errorList.push({
                    message: r,
                    element: t,
                    method: i.method
                }), this.errorMap[t.name] = r, this.submitted[t.name] = r
            },
            addWrapper: function(n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))), n
            },
            defaultShowErrors: function() {
                for (var i, t, n = 0; this.errorList[n]; n++) t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0, i = this.validElements(); i[n]; n++) this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return n(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var r = this.errorsFor(t);
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = n("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, n(t)) : r.insertAfter(t))), !i && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t)), this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) {
                var i = this.idOrName(t);
                return this.errors().filter(function() {
                    return n(this).attr("for") === i
                })
            },
            idOrName: function(n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
            },
            validationTargetFor: function(n) {
                return this.checkable(n) && (n = this.findByName(n.name).not(this.settings.ignore)[0]), n
            },
            checkable: function(n) {
                return /radio|checkbox/i.test(n.type)
            },
            findByName: function(t) {
                return n(this.currentForm).find("[name='" + t + "']")
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return n("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(n, t) {
                return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
            },
            dependTypes: {
                boolean: function(n) {
                    return n
                },
                string: function(t, i) {
                    return !!n(t, i.form).length
                },
                "function": function(n, t) {
                    return n(t)
                }
            },
            optional: function(t) {
                var i = this.elementValue(t);
                return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function(n) {
                this.pending[n.name] || (this.pendingRequest++, this.pending[n.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {},
                r = n(t).attr("class");
            return r && n.each(r.split(" "), function() {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }), i
        },
        attributeRules: function(t) {
            var r, i, u = {},
                e = n(t),
                f = t.getAttribute("type");
            for (r in n.validator.methods) "required" === r ? (i = t.getAttribute(r), "" === i && (i = !0), i = !!i) : i = e.attr(r), /min|max/.test(r) && (null === f || /number|range|text/.test(f)) && (i = Number(i)), i || 0 === i ? u[r] = i : f === r && "range" !== f && (u[r] = !0);
            return u.maxlength && /-1|2147483647|524288/.test(u.maxlength) && delete u.maxlength, u
        },
        dataRules: function(t) {
            var i, r, u = {},
                f = n(t);
            for (i in n.validator.methods) r = f.data("rule" + i[0].toUpperCase() + i.substring(1).toLowerCase()), void 0 !== r && (u[i] = r);
            return u
        },
        staticRules: function(t) {
            var i = {},
                r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}), i
        },
        normalizeRules: function(t, i) {
            return n.each(t, function(r, u) {
                if (u === !1) return void delete t[r];
                if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                        case "string":
                            f = !!n(u.depends, i.form).length;
                            break;
                        case "function":
                            f = u.depends.call(i, i)
                    }
                    f ? t[r] = void 0 !== u.param ? u.param : !0 : delete t[r]
                }
            }), n.each(t, function(r, u) {
                t[r] = n.isFunction(u) ? u(i) : u
            }), n.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }), n.each(["rangelength", "range"], function() {
                var i;
                t[this] && (n.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
            }), n.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var i = {};
                n.each(t.split(/\s/), function() {
                    i[this] = !0
                }), t = i
            }
            return t
        },
        addMethod: function(t, i, r) {
            n.validator.methods[t] = i, n.validator.messages[t] = void 0 !== r ? r : n.validator.messages[t], i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, r) {
                if (!this.depend(r, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var u = n(i).val();
                    return u && u.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : n.trim(t).length > 0
            },
            email: function(n, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(n)
            },
            url: function(n, t) {
                return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
            },
            date: function(n, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(n).toString())
            },
            dateISO: function(n, t) {
                return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(n)
            },
            number: function(n, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
            },
            digits: function(n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            },
            creditcard: function(n, t) {
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(n)) return !1;
                var i, f, e = 0,
                    r = 0,
                    u = !1;
                if (n = n.replace(/\D/g, ""), n.length < 13 || n.length > 19) return !1;
                for (i = n.length - 1; i >= 0; i--) f = n.charAt(i), r = parseInt(f, 10), u && (r *= 2) > 9 && (r -= 9), e += r, u = !u;
                return e % 10 == 0
            },
            minlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r
            },
            maxlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || r >= u
            },
            rangelength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r[0] && u <= r[1]
            },
            min: function(n, t, i) {
                return this.optional(t) || n >= i
            },
            max: function(n, t, i) {
                return this.optional(t) || i >= n
            },
            range: function(n, t, i) {
                return this.optional(t) || n >= i[0] && n <= i[1]
            },
            equalTo: function(t, i, r) {
                var u = n(r);
                return this.settings.onfocusout && u.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    n(i).valid()
                }), t === u.val()
            },
            remote: function(t, i, r) {
                if (this.optional(i)) return "dependency-mismatch";
                var u, e, f = this.previousValue(i);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), f.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = f.message, r = "string" == typeof r && {
                    url: r
                } || r, f.old === t ? f.valid : (f.old = t, u = this, this.startRequest(i), e = {}, e[i.name] = t, n.ajax(n.extend(!0, {
                    url: r,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: e,
                    context: u.currentForm,
                    success: function(r) {
                        var o, e, h, s = r === !0 || "true" === r;
                        u.settings.messages[i.name].remote = f.originalMessage, s ? (h = u.formSubmitted, u.prepareElement(i), u.formSubmitted = h, u.successList.push(i), delete u.invalid[i.name], u.showErrors()) : (o = {}, e = r || u.defaultMessage(i, "remote"), o[i.name] = f.message = n.isFunction(e) ? e(t) : e, u.invalid[i.name] = !0, u.showErrors(o)), f.valid = s, u.stopRequest(i, s)
                    }
                }, r)), "pending")
            }
        }
    }), n.format = function() {
        throw "$.format has been deprecated. Please use $.validator.format instead.";
    }
}(jQuery),
function(n) {
    var i, t = {};
    n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
        var u = n.port;
        "abort" === n.mode && (t[u] && t[u].abort(), t[u] = r)
    }) : (i = n.ajax, n.ajax = function(r) {
        var f = ("mode" in r ? r : n.ajaxSettings).mode,
            u = ("port" in r ? r : n.ajaxSettings).port;
        return "abort" === f ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments), t[u]) : i.apply(this, arguments)
    })
}(jQuery),
function(n) {
    n.extend(n.fn, {
        validateDelegate: function(t, i, r) {
            return this.bind(i, function(i) {
                var u = n(i.target);
                if (u.is(t)) return r.apply(u, arguments)
            })
        }
    })
}(jQuery),
function(n) {
    "use strict";

    function r(t) {
        var i = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), n(this).ajaxSubmit(i))
    }

    function u(t) {
        var r = t.target,
            u = n(r),
            f, i, e;
        if (!u.is("[type=submit],[type=image]")) {
            if (f = u.closest("[type=submit]"), 0 === f.length) return;
            r = f[0]
        }
        i = this, (i.clk = r, "image" == r.type) && (void 0 !== t.offsetX ? (i.clk_x = t.offsetX, i.clk_y = t.offsetY) : "function" == typeof n.fn.offset ? (e = u.offset(), i.clk_x = t.pageX - e.left, i.clk_y = t.pageY - e.top) : (i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop)), setTimeout(function() {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function t() {
        if (n.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var i = {},
        f;
    i.fileapi = void 0 !== n("<input type='file'/>").get(0).files, i.formdata = void 0 !== window.FormData, f = !!n.fn.prop, n.fn.attr2 = function() {
        if (!f) return this.attr.apply(this, arguments);
        var n = this.prop.apply(this, arguments);
        return n && n.jquery || "string" == typeof n ? n : this.attr.apply(this, arguments)
    }, n.fn.ajaxSubmit = function(r) {
        function et(t) {
            for (var f, u = n.param(t, r.traditional).split("&"), o = u.length, e = [], i = 0; o > i; i++) u[i] = u[i].replace(/\+/g, " "), f = u[i].split("="), e.push([decodeURIComponent(f[0]), decodeURIComponent(f[1])]);
            return e
        }

        function ot(t) {
            for (var f, u, o, e = new FormData, i = 0; t.length > i; i++) e.append(t[i].name, t[i].value);
            if (r.extraData)
                for (f = et(r.extraData), i = 0; f.length > i; i++) f[i] && e.append(f[i][0], f[i][1]);
            return r.data = null, u = n.extend(!0, {}, n.ajaxSettings, r, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: h || "POST"
            }), r.uploadProgress && (u.xhr = function() {
                var t = n.ajaxSettings.xhr();
                return t.upload && t.upload.addEventListener("progress", function(n) {
                    var t = 0,
                        i = n.loaded || n.position,
                        u = n.total;
                    n.lengthComputable && (t = Math.ceil(100 * (i / u))), r.uploadProgress(n, i, u, t)
                }, !1), t
            }), u.data = null, o = u.beforeSend, u.beforeSend = function(n, t) {
                t.data = e, o && o.call(this, n, t)
            }, n.ajax(u)
        }

        function d(i) {
            function ut(n) {
                var i = null;
                try {
                    n.contentWindow && (i = n.contentWindow.document)
                } catch (r) {
                    t("cannot get iframe.contentWindow document: " + r)
                }
                if (i) return i;
                try {
                    i = n.contentDocument ? n.contentDocument : n.document
                } catch (r) {
                    t("cannot get iframe.contentDocument: " + r), i = n.document
                }
                return i
            }

            function ft() {
                function f() {
                    try {
                        var n = ut(a).readyState;
                        t("state = " + n), n && "uninitialized" == n.toLowerCase() && setTimeout(f, 50)
                    } catch (i) {
                        t("Server abort: ", i, " (", i.name, ")"), b(rt), g && clearTimeout(g), g = void 0
                    }
                }
                var o = u.attr2("target"),
                    s = u.attr2("action"),
                    r, i, c;
                l.setAttribute("target", d), h || l.setAttribute("method", "POST"), s != e.url && l.setAttribute("action", e.url), e.skipEncodingOverride || h && !/post/i.test(h) || u.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), e.timeout && (g = setTimeout(function() {
                    it = !0, b(et)
                }, e.timeout)), r = [];
                try {
                    if (e.extraData)
                        for (i in e.extraData) e.extraData.hasOwnProperty(i) && (n.isPlainObject(e.extraData[i]) && e.extraData[i].hasOwnProperty("name") && e.extraData[i].hasOwnProperty("value") ? r.push(n('<input type="hidden" name="' + e.extraData[i].name + '">').val(e.extraData[i].value).appendTo(l)[0]) : r.push(n('<input type="hidden" name="' + i + '">').val(e.extraData[i]).appendTo(l)[0]));
                    e.iframeTarget || (v.appendTo("body"), a.attachEvent ? a.attachEvent("onload", b) : a.addEventListener("load", b, !1)), setTimeout(f, 15);
                    try {
                        l.submit()
                    } catch (y) {
                        c = document.createElement("form").submit, c.apply(l)
                    }
                } finally {
                    l.setAttribute("action", s), o ? l.setAttribute("target", o) : u.removeAttr("target"), n(r).remove()
                }
            }

            function b(i) {
                var u, r, w, f, k, d, h, c, l;
                if (!o.aborted && !ct) {
                    if (s = ut(a), s || (t("cannot access response document"), i = rt), i === et && o) return o.abort("timeout"), y.reject(o, "timeout"), void 0;
                    if (i == rt && o) return o.abort("server abort"), y.reject(o, "error", "server abort"), void 0;
                    if (s && s.location.href != e.iframeSrc || it) {
                        a.detachEvent ? a.detachEvent("onload", b) : a.removeEventListener("load", b, !1), r = "success";
                        try {
                            if (it) throw "timeout";
                            if (w = "xml" == e.dataType || s.XMLDocument || n.isXMLDoc(s), t("isXml=" + w), !w && window.opera && (null === s.body || !s.body.innerHTML) && --lt) return t("requeing onLoad callback, DOM not available"), setTimeout(b, 250), void 0;
                            f = s.body ? s.body : s.documentElement, o.responseText = f ? f.innerHTML : null, o.responseXML = s.XMLDocument ? s.XMLDocument : s, w && (e.dataType = "xml"), o.getResponseHeader = function(n) {
                                var t = {
                                    "content-type": e.dataType
                                };
                                return t[n]
                            }, f && (o.status = Number(f.getAttribute("status")) || o.status, o.statusText = f.getAttribute("statusText") || o.statusText), k = (e.dataType || "").toLowerCase(), d = /(json|script|text)/.test(k), d || e.textarea ? (h = s.getElementsByTagName("textarea")[0], h ? (o.responseText = h.value, o.status = Number(h.getAttribute("status")) || o.status, o.statusText = h.getAttribute("statusText") || o.statusText) : d && (c = s.getElementsByTagName("pre")[0], l = s.getElementsByTagName("body")[0], c ? o.responseText = c.textContent ? c.textContent : c.innerText : l && (o.responseText = l.textContent ? l.textContent : l.innerText))) : "xml" == k && !o.responseXML && o.responseText && (o.responseXML = at(o.responseText));
                            try {
                                ht = yt(o, k, e)
                            } catch (nt) {
                                r = "parsererror", o.error = u = nt || r
                            }
                        } catch (nt) {
                            t("error caught: ", nt), r = "error", o.error = u = nt || r
                        }
                        o.aborted && (t("upload aborted"), r = null), o.status && (r = o.status >= 200 && 300 > o.status || 304 === o.status ? "success" : "error"), "success" === r ? (e.success && e.success.call(e.context, ht, "success", o), y.resolve(o.responseText, "success", o), p && n.event.trigger("ajaxSuccess", [o, e])) : r && (void 0 === u && (u = o.statusText), e.error && e.error.call(e.context, o, r, u), y.reject(o, "error", u), p && n.event.trigger("ajaxError", [o, e, u])), p && n.event.trigger("ajaxComplete", [o, e]), p && !--n.active && n.event.trigger("ajaxStop"), e.complete && e.complete.call(e.context, o, r), ct = !0, e.timeout && clearTimeout(g), setTimeout(function() {
                            e.iframeTarget || v.remove(), o.responseXML = null
                        }, 100)
                    }
                }
            }
            var tt, nt, e, p, d, v, a, o, k, w, it, g, l = u[0],
                y = n.Deferred();
            if (i)
                for (nt = 0; c.length > nt; nt++) tt = n(c[nt]), f ? tt.prop("disabled", !1) : tt.removeAttr("disabled");
            if (e = n.extend(!0, {}, n.ajaxSettings, r), e.context = e.context || e, d = "jqFormIO" + +new Date, e.iframeTarget ? (v = n(e.iframeTarget), w = v.attr2("name"), w ? d = w : v.attr2("name", d)) : (v = n('<iframe name="' + d + '" src="' + e.iframeSrc + '" />'), v.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), a = v[0], o = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function() {},
                    getResponseHeader: function() {},
                    setRequestHeader: function() {},
                    abort: function(i) {
                        var r = "timeout" === i ? "timeout" : "aborted";
                        t("aborting upload... " + r), this.aborted = 1;
                        try {
                            a.contentWindow.document.execCommand && a.contentWindow.document.execCommand("Stop")
                        } catch (u) {}
                        v.attr("src", e.iframeSrc), o.error = r, e.error && e.error.call(e.context, o, r, i), p && n.event.trigger("ajaxError", [o, e, r]), e.complete && e.complete.call(e.context, o, r)
                    }
                }, p = e.global, p && 0 == n.active++ && n.event.trigger("ajaxStart"), p && n.event.trigger("ajaxSend", [o, e]), e.beforeSend && e.beforeSend.call(e.context, o, e) === !1) return e.global && n.active--, y.reject(), y;
            if (o.aborted) return y.reject(), y;
            k = l.clk, k && (w = k.name, w && !k.disabled && (e.extraData = e.extraData || {}, e.extraData[w] = k.value, "image" == k.type && (e.extraData[w + ".x"] = l.clk_x, e.extraData[w + ".y"] = l.clk_y)));
            var et = 1,
                rt = 2,
                ot = n("meta[name=csrf-token]").attr("content"),
                st = n("meta[name=csrf-param]").attr("content");
            st && ot && (e.extraData = e.extraData || {}, e.extraData[st] = ot), e.forceSync ? ft() : setTimeout(ft, 10);
            var ht, s, ct, lt = 50,
                at = n.parseXML || function(n, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(n)) : t = (new DOMParser).parseFromString(n, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                },
                vt = n.parseJSON || function(e) {
                    return window.eval("(" + e + ")")
                },
                yt = function(t, i, r) {
                    var f = t.getResponseHeader("content-type") || "",
                        e = "xml" === i || !i && f.indexOf("xml") >= 0,
                        u = e ? t.responseXML : t.responseText;
                    return e && "parsererror" === u.documentElement.nodeName && n.error && n.error("parsererror"), r && r.dataFilter && (u = r.dataFilter(u, i)), "string" == typeof u && ("json" === i || !i && f.indexOf("json") >= 0 ? u = vt(u) : ("script" === i || !i && f.indexOf("javascript") >= 0) && n.globalEval(u)), u
                };
            return y
        }
        var h, b, e, u, a, v, y, c, o, l, s, g, nt, tt, p, ft, w;
        if (!this.length) return t("ajaxSubmit: skipping submit process - no element selected"), this;
        if (u = this, "function" == typeof r ? r = {
                success: r
            } : void 0 === r && (r = {}), h = r.type || this.attr2("method"), b = r.url || this.attr2("action"), e = "string" == typeof b ? n.trim(b) : "", e = e || window.location.href || "", e && (e = (e.match(/^([^#]+)/) || [])[1]), r = n.extend(!0, {
                url: e,
                success: n.ajaxSettings.success,
                type: h || "GET",
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
            }, r), a = {}, this.trigger("form-pre-serialize", [this, r, a]), a.veto) return t("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (r.beforeSerialize && r.beforeSerialize(this, r) === !1) return t("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        if (v = r.traditional, void 0 === v && (v = n.ajaxSettings.traditional), c = [], o = this.formToArray(r.semantic, c), r.data && (r.extraData = r.data, y = n.param(r.data, v)), r.beforeSubmit && r.beforeSubmit(o, this, r) === !1) return t("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [o, this, r, a]), a.veto) return t("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        l = n.param(o, v), y && (l = l ? l + "&" + y : y), "GET" == r.type.toUpperCase() ? (r.url += (r.url.indexOf("?") >= 0 ? "&" : "?") + l, r.data = null) : r.data = l, s = [], (r.resetForm && s.push(function() {
            u.resetForm()
        }), r.clearForm && s.push(function() {
            u.clearForm(r.includeHidden)
        }), !r.dataType && r.target) ? (g = r.success || function() {}, s.push(function(t) {
            var i = r.replaceTarget ? "replaceWith" : "html";
            n(r.target)[i](t).each(g, arguments)
        })) : r.success && s.push(r.success), (r.success = function(n, t, i) {
            for (var e = r.context || this, f = 0, o = s.length; o > f; f++) s[f].apply(e, [n, t, i || u, u])
        }, r.error) && (nt = r.error, r.error = function(n, t, i) {
            var f = r.context || this;
            nt.apply(f, [n, t, i, u])
        }), r.complete && (tt = r.complete, r.complete = function(n, t) {
            var i = r.context || this;
            tt.apply(i, [n, t, u])
        });
        var st = n('input[type=file]:enabled[value!=""]', this),
            it = st.length > 0,
            rt = "multipart/form-data",
            ut = u.attr("enctype") == rt || u.attr("encoding") == rt,
            k = i.fileapi && i.formdata;
        for (t("fileAPI :" + k), ft = (it || ut) && !k, r.iframe !== !1 && (r.iframe || ft) ? r.closeKeepAlive ? n.get(r.closeKeepAlive, function() {
                p = d(o)
            }) : p = d(o) : p = (it || ut) && k ? ot(o) : n.ajax(r), u.removeData("jqxhr").data("jqxhr", p), w = 0; c.length > w; w++) c[w] = null;
        return this.trigger("form-submit-notify", [this, r]), this
    }, n.fn.ajaxForm = function(i) {
        if (i = i || {}, i.delegation = i.delegation && n.isFunction(n.fn.on), !i.delegation && 0 === this.length) {
            var f = {
                s: this.selector,
                c: this.context
            };
            return !n.isReady && f.s ? (t("DOM not ready, queuing ajaxForm"), n(function() {
                n(f.s, f.c).ajaxForm(i)
            }), this) : (t("terminating; zero elements found by selector" + (n.isReady ? "" : " (DOM not ready)")), this)
        }
        return i.delegation ? (n(document).off("submit.form-plugin", this.selector, r).off("click.form-plugin", this.selector, u).on("submit.form-plugin", this.selector, i, r).on("click.form-plugin", this.selector, i, u), this) : this.ajaxFormUnbind().bind("submit.form-plugin", i, r).bind("click.form-plugin", i, u)
    }, n.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, n.fn.formToArray = function(t, r) {
        var e = [],
            o, c, l, s, f, h, u, p, w, a, y, v;
        if (0 === this.length || (o = this[0], c = t ? o.getElementsByTagName("*") : o.elements, !c)) return e;
        for (l = 0, p = c.length; p > l; l++)
            if (u = c[l], f = u.name, f && !u.disabled)
                if (t && o.clk && "image" == u.type) o.clk == u && (e.push({
                    name: f,
                    value: n(u).val(),
                    type: u.type
                }), e.push({
                    name: f + ".x",
                    value: o.clk_x
                }, {
                    name: f + ".y",
                    value: o.clk_y
                }));
                else if (h = n.fieldValue(u, !0), h && h.constructor == Array)
            for (r && r.push(u), s = 0, w = h.length; w > s; s++) e.push({
                name: f,
                value: h[s]
            });
        else if (i.fileapi && "file" == u.type)
            if (r && r.push(u), a = u.files, a.length)
                for (s = 0; a.length > s; s++) e.push({
                    name: f,
                    value: a[s],
                    type: u.type
                });
            else e.push({
                name: f,
                value: "",
                type: u.type
            });
        else null !== h && h !== void 0 && (r && r.push(u), e.push({
            name: f,
            value: h,
            type: u.type,
            required: u.required
        }));
        return !t && o.clk && (y = n(o.clk), v = y[0], f = v.name, f && !v.disabled && "image" == v.type && (e.push({
            name: f,
            value: y.val()
        }), e.push({
            name: f + ".x",
            value: o.clk_x
        }, {
            name: f + ".y",
            value: o.clk_y
        }))), e
    }, n.fn.formSerialize = function(t) {
        return n.param(this.formToArray(t))
    }, n.fn.fieldSerialize = function(t) {
        var i = [];
        return this.each(function() {
            var f = this.name,
                r, u, e;
            if (f)
                if (r = n.fieldValue(this, t), r && r.constructor == Array)
                    for (u = 0, e = r.length; e > u; u++) i.push({
                        name: f,
                        value: r[u]
                    });
                else null !== r && r !== void 0 && i.push({
                    name: this.name,
                    value: r
                })
        }), n.param(i)
    }, n.fn.fieldValue = function(t) {
        for (var f, i, r = [], u = 0, e = this.length; e > u; u++) f = this[u], i = n.fieldValue(f, t), null !== i && void 0 !== i && (i.constructor != Array || i.length) && (i.constructor == Array ? n.merge(r, i) : r.push(i));
        return r
    }, n.fieldValue = function(t, i) {
        var a = t.name,
            u = t.type,
            h = t.tagName.toLowerCase(),
            e, r, f;
        if (void 0 === i && (i = !0), i && (!a || t.disabled || "reset" == u || "button" == u || ("checkbox" == u || "radio" == u) && !t.checked || ("submit" == u || "image" == u) && t.form && t.form.clk != t || "select" == h && -1 == t.selectedIndex)) return null;
        if ("select" == h) {
            if (e = t.selectedIndex, 0 > e) return null;
            for (var c = [], l = t.options, o = "select-one" == u, v = o ? e + 1 : l.length, s = o ? e : 0; v > s; s++)
                if (r = l[s], r.selected) {
                    if (f = r.value, f || (f = r.attributes && r.attributes.value && !r.attributes.value.specified ? r.text : r.value), o) return f;
                    c.push(f)
                }
            return c
        }
        return n(t).val()
    }, n.fn.clearForm = function(t) {
        return this.each(function() {
            n("input,select,textarea", this).clearFields(t)
        })
    }, n.fn.clearFields = n.fn.clearInputs = function(t) {
        var i = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var r = this.type,
                u = this.tagName.toLowerCase();
            i.test(r) || "textarea" == u ? this.value = "" : "checkbox" == r || "radio" == r ? this.checked = !1 : "select" == u ? this.selectedIndex = -1 : "file" == r ? /MSIE/.test(navigator.userAgent) ? n(this).replaceWith(n(this).clone(!0)) : n(this).val("") : t && (t === !0 && /hidden/.test(r) || "string" == typeof t && n(this).is(t)) && (this.value = "")
        })
    }, n.fn.resetForm = function() {
        return this.each(function() {
            "function" != typeof this.reset && ("object" != typeof this.reset || this.reset.nodeType) || this.reset()
        })
    }, n.fn.enable = function(n) {
        return void 0 === n && (n = !0), this.each(function() {
            this.disabled = !n
        })
    }, n.fn.selected = function(t) {
        return void 0 === t && (t = !0), this.each(function() {
            var r = this.type,
                i;
            "checkbox" == r || "radio" == r ? this.checked = t : "option" == this.tagName.toLowerCase() && (i = n(this).parent("select"), t && i[0] && "select-one" == i[0].type && i.find("option").selected(!1), this.selected = t)
        })
    }, n.fn.ajaxSubmit.debug = !1
}(jQuery), $(document).ready(function() {
    scroll_top(), sticky_init(), hover_disable(), init_classic_menu(), init_accordion(), init_toggle(), counter(), $(window).on("scroll", progress_bar_loader), cws_page_focus(), progress_bar_loader(), init_twitter_carusel(), init_fancy(), search_open(), $(".cws_prlx_section").length && $(".cws_prlx_section").cws_prlx(), init_rev_slider(), init_add_cart(), init_color_filter(), $(".price_slider_wrapper").length && woocommerce_price_slider($), video_img(), cws_touch_events_fix(), masonry_init(), filter_init(), gridList_init(), popup_login_init(), magicline_init(), magicline_main_init(), footer_height(), search_form_height(), search_form_click(), search_tours_form_resize(), slider_info_mob(), scrollTo_init(), flexslider_init(), add_button_menu(), mobile_menu_controller_init(), $(".isotope-grid").length && init_isotop()
}), $(window).resize(function() {
    $(".isotope-grid").length && init_isotop(), masonry_init(), search_form_height(), search_tours_form_resize(), slider_info_mob(), footer_height(), cws_touch_events_fix()
}), is_count = !0;
$(".tabs .tabs-btn").on("click", function() {
    var t = $(this).attr("data-tabs-id"),
        i = $(this).parents(".tabs").find(".container-tabs"),
        n = $(".tabs [data-tabs-id=cont-" + t + "]");
    $(n).addClass("active").siblings(".container-tabs").removeClass("active"), $(i).fadeOut(0), $(n).fadeIn(300), $(this).addClass("active").siblings(".tabs-btn").removeClass("active")
});
if (owl_one = $(".owl-one-item"), jQuery(owl_one).each(function() {
        jQuery(this).owlCarousel({
            itemsCustom: [
                [0, 1],
                [479, 1],
                [738, 1],
                [980, 1],
                [1170, 1]
            ],
            navigation: !1,
            pagination: !1
        });
        var n = $(this);
        $(this).parent().parent().find(".carousel-nav .next").on("click", function() {
            n.trigger("owl.next")
        }), jQuery(this).parent().parent().find(".carousel-nav .prev").on("click", function() {
            n.trigger("owl.prev")
        })
    }), owl_two = $(".owl-two-item"), jQuery(owl_two).each(function() {
        jQuery(this).owlCarousel({
            itemsCustom: [
                [0, 1],
                [479, 1],
                [630, 2],
                [980, 2],
                [1170, 2]
            ],
            navigation: !1,
            pagination: !1
        });
        var n = $(this);
        $(this).parent().parent().find(".carousel-nav .next").on("click", function() {
            n.trigger("owl.next")
        }), jQuery(this).parent().parent().find(".carousel-nav .prev").on("click", function() {
            n.trigger("owl.prev")
        })
    }), owl_three = $(".owl-three-item"), jQuery(owl_three).each(function() {
        jQuery(this).owlCarousel({
            itemsCustom: [
                [0, 1],
                [430, 1],
                [767, 2],
                [980, 3],
                [1170, 3]
            ],
            navigation: !0,
            navigationText: ["<i class='fa fa-angle-left'><\/i>", "<i class='fa fa-angle-right'><\/i>"],
            pagination: !1
        });
        var n = $(this);
        $(this).parent().parent().find(".carousel-nav .next").on("click", function() {
            n.trigger("owl.next")
        }), jQuery(this).parent().parent().find(".carousel-nav .prev").on("click", function() {
            n.trigger("owl.prev")
        })
    }), owl_three_small = $(".owl-three-item-small"), jQuery(owl_three_small).each(function() {
        jQuery(this).owlCarousel({
            itemsCustom: [
                [0, 1],
                [540, 2],
                [767, 2],
                [980, 3],
                [1170, 3]
            ],
            navigation: !0,
            navigationText: ["<i class='fa fa-angle-left'><\/i>", "<i class='fa fa-angle-right'><\/i>"],
            pagination: !1
        });
        var n = $(this);
        $(this).parent().parent().find(".carousel-nav .next").on("click", function() {
            n.trigger("owl.next")
        }), jQuery(this).parent().parent().find(".carousel-nav .prev").on("click", function() {
            n.trigger("owl.prev")
        })
    }), owl_four = $(".owl-four-item"), jQuery(owl_four).each(function() {
        jQuery(this).owlCarousel({
            itemsCustom: [
                [0, 1],
                [479, 2],
                [738, 2],
                [980, 3],
                [1170, 4]
            ],
            navigation: !1,
            pagination: !1
        });
        var n = $(this);
        $(this).parent().parent().find(".carousel-nav .next").on("click", function() {
            n.trigger("owl.next")
        }), jQuery(this).parent().parent().find(".carousel-nav .prev").on("click", function() {
            n.trigger("owl.prev")
        })
    }), owl_single = $(".owl-single-item"), jQuery(owl_single).each(function() {
        jQuery(this).owlCarousel({
            itemsCustom: [
                [0, 1],
                [479, 1],
                [738, 1],
                [980, 1],
                [1170, 1]
            ],
            autoHeight: !0,
            navigation: !0,
            pagination: !1
        })
    }), owl_pag = $(".carousel-pag"), jQuery(owl_pag).each(function() {
        jQuery(this).owlCarousel({
            itemsCustom: [
                [0, 1],
                [479, 1],
                [738, 1],
                [980, 1],
                [1170, 1]
            ],
            navigation: !1,
            pagination: !0
        })
    }), owl_single = $(".owl-two-pag"), jQuery(owl_single).each(function() {
        jQuery(this).owlCarousel({
            itemsCustom: [
                [0, 1],
                [479, 2],
                [585, 1],
                [980, 1],
                [1200, 2]
            ],
            navigation: !1,
            pagination: !0
        })
    }), owl_single = $(".owl-three-pag"), jQuery(owl_single).each(function() {
        jQuery(this).owlCarousel({
            itemsCustom: [
                [0, 1],
                [479, 1],
                [738, 2],
                [980, 2],
                [1170, 3]
            ],
            navigation: !1,
            pagination: !0
        })
    }), $("#calendar").length && $("#calendar").datepicker({
        prevText: '<i class="fa fa-angle-left"><\/i>',
        nextText: '<i class="fa fa-angle-right"><\/i>',
        firstDay: 1,
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    }), $("#ship-to-different-address-checkbox").length && ($("#ship-to-different-address-checkbox").on("click", show_address), show_address()), $(".woocommerce-checkout").length && $(".input-radio").on("click", function() {
        switch ($(".payment_box.payment_method_paypal").slideUp(400), $(".payment_box.payment_method_bacs").slideUp(400), $(".payment_box.payment_method_cheque").slideUp(400), !0) {
            case document.getElementById("payment_method_bacs").checked:
                $(".payment_box.payment_method_bacs").slideDown(400);
                break;
            case document.getElementById("payment_method_cheque").checked:
                $(".payment_box.payment_method_cheque").slideDown(400);
                break;
            case document.getElementById("payment_method_paypal").checked:
                $(".payment_box.payment_method_paypal").slideDown(400)
        }
    }), $(".contact-form").length) {
    $(".contact-form").each(function() {
        $(this).validate({
            onkeyup: !1,
            onfocusout: !1,
            errorElement: "p",
            errorLabelContainer: $(this).parent().children(".alert.alert-danger").children(".message"),
            rules: {
                name: {
                    required: !0
                },
                email: {
                    required: !0,
                    email: !0
                },
                message: {
                    required: !0
                }
            },
            messages: {
                name: {
                    required: "Please enter your name"
                },
                email: {
                    required: "Please enter your email address",
                    email: "Please enter a VALID email address"
                },
                message: {
                    required: "Please enter your message"
                }
            },
            invalidHandler: function() {
                $(this).parent().children(".alert.alert-danger").slideDown("fast"), $("#feedback-form-success").slideUp("fast")
            },
            submitHandler: function(n) {
                $(n).parent().children(".alert.alert-danger").slideUp("fast");
                var t = $(n).ajaxSubmit();
                submit_handler(t, $(n).parent().children(".email_server_responce"))
            }
        })
    }), submit_handler = function(n, t) {
        var i = $(t),
            r;
        return i.css("display", "block"), r = {
            action: "email_server_responce",
            values: $(n).serialize()
        }, $.post("php/contacts-process.php", r, function(t) {
            t = $.parseJSON(t), "success" == t.info ? (i.addClass("message message-success").append('<div role="alert" class="alert alert-success alt alert-dismissible fade in"><button type="button" data-dismiss="alert" aria-label="Close" class="close"><\/button><i class="alert-icon flaticon-suntour-check"><\/i><strong>Success!<\/strong><br>Your message was successfully delivered.<\/div>'), i.delay(5e3).slideUp(300, function() {
                $(this).removeClass("message message-success").text("").fadeOut(500), i.css("display", "none")
            }), $(n)[0].reset()) : (i.addClass("message message-error").append('<div role="alert" class="alert alert-warning alt alert-dismissible fade in"><button type="button" data-dismiss="alert" aria-label="Close" class="close"><\/button><i class="alert-icon flaticon-warning"><\/i><strong>Error!<\/strong><br>Server fail! Please try again later!<\/div>'), i.delay(5e3).hide(500, function() {
                $(this).removeClass("message message-success").text("").fadeIn(500), i.css("display", "none")
            }))
        }), !1
    };
    $("form.form.contact-form").on("click", function() {
        $(this).find("p.error").remove()
    })
}
$(".slider-info-item").each(function() {
        $(this).on("click", function() {
            $(".slider-info-item").hasClass("mobile-on") && $(this).toggleClass("active").siblings(".slider-info-item").removeClass("active")
        })
    }), jQuery(document).ready(function() {
        vimeo_init(), cws_self_hosted_video()
    }), jQuery(window).resize(function() {
        vimeo_init(), cws_self_hosted_video()
    }), ! function(n, t) {
        var i = {
            catchMethods: {
                methodreturn: [],
                count: 0
            },
            init: function(t) {
                var r, u, i;
                t.originalEvent.origin.match(/vimeo/g) && "data" in t.originalEvent && (i = "string" === n.type(t.originalEvent.data) ? n.parseJSON(t.originalEvent.data) : t.originalEvent.data, i && (r = this.setPlayerID(i), r.length && (u = this.setVimeoAPIurl(r), i.hasOwnProperty("event") && this.handleEvent(i, r, u), i.hasOwnProperty("method") && this.handleMethod(i, r, u))))
            },
            setPlayerID: function(t) {
                return n("iframe[src*=" + t.player_id + "]")
            },
            setVimeoAPIurl: function(n) {
                return "http" !== n.attr("src").substr(0, 4) ? "https:" !== t.location.protocol ? "http:" + n.attr("src").split("?")[0] : "https:" + n.attr("src").split("?")[0] : n.attr("src").split("?")[0]
            },
            handleMethod: function(n) {
                this.catchMethods.methodreturn.push(n.value)
            },
            handleEvent: function(t, i, r) {
                var e, f, u;
                switch (t.event.toLowerCase()) {
                    case "ready":
                        for (e in n._data(i[0], "events")) e.match(/loadProgress|playProgress|play|pause|finish|seek|cuechange/) && i[0].contentWindow.postMessage(JSON.stringify({
                            method: "addEventListener",
                            value: e
                        }), r);
                        if (i.data("vimeoAPICall")) {
                            for (f = i.data("vimeoAPICall"), u = 0; u < f.length; u++) i[0].contentWindow.postMessage(JSON.stringify(f[u].message), f[u].api);
                            i.removeData("vimeoAPICall")
                        }
                        i.data("vimeoReady", !0), i.triggerHandler("ready");
                        break;
                    case "seek":
                        i.triggerHandler("seek", [t.data]);
                        break;
                    case "loadprogress":
                        i.triggerHandler("loadProgress", [t.data]);
                        break;
                    case "playprogress":
                        i.triggerHandler("playProgress", [t.data]);
                        break;
                    case "pause":
                        i.triggerHandler("pause");
                        break;
                    case "finish":
                        i.triggerHandler("finish");
                        break;
                    case "play":
                        i.triggerHandler("play");
                        break;
                    case "cuechange":
                        i.triggerHandler("cuechange")
                }
            }
        };
        jQuery(document).ready(function() {
            n("iframe[src*='vimeo.com']").each(function(t) {
                var i = n(this).attr("src"),
                    r, u;
                null === i.match(/player_id/g) && (r = -1 === i.indexOf("?") ? "?" : "&", u = n.param({
                    api: 1,
                    player_id: "vvvvimeoVideo-" + t
                }), n(this).attr("src", i + r + u))
            })
        }), n(t).on("message", function(n) {
            i.init(n)
        }), n.vimeo = function(n, r, u) {
            var f = {},
                o = i.catchMethods.methodreturn.length,
                e;
            return ("string" == typeof r && (f.method = r), void 0 !== typeof u && "function" != typeof u && (f.value = u), "iframe" === n.prop("tagName").toLowerCase() && f.hasOwnProperty("method")) && (n.data("vimeoReady") ? n[0].contentWindow.postMessage(JSON.stringify(f), i.setVimeoAPIurl(n)) : (e = n.data("vimeoAPICall") ? n.data("vimeoAPICall") : [], e.push({
                message: f,
                api: i.setVimeoAPIurl(n)
            }), n.data("vimeoAPICall", e))), "get" !== r.toString().substr(0, 3) && "paused" !== r.toString() || "function" != typeof u || (! function(n, r, u) {
                var f = t.setInterval(function() {
                    i.catchMethods.methodreturn.length != n && (t.clearInterval(f), r(i.catchMethods.methodreturn[u]))
                }, 10)
            }(o, u, i.catchMethods.count), i.catchMethods.count++), n
        }, n.fn.vimeo = function(t, i) {
            return n.vimeo(this, t, i)
        }
    }(jQuery, window), element = document.getElementsByClassName("cws_Yt_video_bg"), jQuery(document).ready(function() {}), jQuery(window).resize(function() {}), jQuery(window).load(function() {
        onYouTubePlayerAPIReady()
    }),
    function(n) {
        typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery)
    }(function(n) {
        n.fn.tweet = function(t) {
            function r(n, t) {
                var i, r, u;
                if (typeof n == "string") {
                    i = n;
                    for (r in t) u = t[r], i = i.replace(new RegExp("{" + r + "}", "g"), u === null ? "" : u);
                    return i
                }
                return n(t)
            }

            function u(t, i) {
                return function() {
                    var r = [];
                    return this.each(function() {
                        r.push(this.replace(t, i))
                    }), n(r)
                }
            }

            function e(n) {
                return n.replace(/</g, "&lt;").replace(/>/g, "^&gt;")
            }

            function s(n, t) {
                return n.replace(f, function(n) {
                    for (var u = /^[a-z]+:/i.test(n) ? n : "http://" + n, f = n, i, r = 0; r < t.length; ++r)
                        if (i = t[r], i.url == u && i.expanded_url) {
                            u = i.expanded_url, f = i.display_url;
                            break
                        }
                    return '<a href="' + e(u) + '">' + e(f) + "<\/a>"
                })
            }

            function h(n) {
                return Date.parse(n.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, "$1,$2$4$3"))
            }

            function c(n) {
                var r = arguments.length > 1 ? arguments[1] : new Date,
                    t = parseInt((r.getTime() - n) / 1e3, 10),
                    i = "";
                return i = t < 1 ? "just now" : t < 60 ? t + " seconds ago" : t < 120 ? "about a minute ago" : t < 2700 ? "about " + parseInt(t / 60, 10).toString() + " minutes ago" : t < 7200 ? "about an hour ago" : t < 86400 ? "about " + parseInt(t / 3600, 10).toString() + " hours ago" : t < 172800 ? "about a day ago" : "about " + parseInt(t / 86400, 10).toString() + " days ago"
            }

            function l(n) {
                return n.match(/^(@([A-Za-z0-9-_]+)) .*/i) ? i.auto_join_text_reply : n.match(f) ? i.auto_join_text_url : n.match(/^((\w+ed)|just) .*/im) ? i.auto_join_text_ed : n.match(/^(\w*ing) .*/i) ? i.auto_join_text_ing : i.auto_join_text_default
            }

            function a() {
                var f = i.modpath,
                    t = i.fetch === null ? i.count : i.fetch,
                    r = {
                        include_entities: 1
                    },
                    u;
                return i.list ? {
                    host: i.twitter_api_url,
                    url: "/1.1/lists/statuses.json",
                    parameters: n.extend({}, r, {
                        list_id: i.list_id,
                        slug: i.list,
                        owner_screen_name: i.username,
                        page: i.page,
                        count: t,
                        include_rts: i.retweets ? 1 : 0
                    })
                } : i.favorites ? {
                    host: i.twitter_api_url,
                    url: "/1.1/favorites/list.json",
                    parameters: n.extend({}, r, {
                        list_id: i.list_id,
                        screen_name: i.username,
                        page: i.page,
                        count: t
                    })
                } : i.query === null && i.username.length === 1 ? {
                    host: i.twitter_api_url,
                    url: "/1.1/statuses/user_timeline.json",
                    parameters: n.extend({}, r, {
                        screen_name: i.username,
                        page: i.page,
                        count: t,
                        include_rts: i.retweets ? 1 : 0
                    })
                } : (u = i.query || "from:" + i.username.join(" OR from:"), {
                    host: i.twitter_search_url,
                    url: "/1.1/search/tweets.json",
                    parameters: n.extend({}, r, {
                        q: u,
                        count: t
                    })
                })
            }

            function o(n, t) {
                return t ? "user" in n ? n.user.profile_image_url_https : o(n, !1).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/") : n.profile_image_url || n.user.profile_image_url
            }

            function v(t) {
                var u = {};
                return u.item = t, u.source = t.source, u.name = t.from_user_name || t.user.name, u.screen_name = t.from_user || t.user.screen_name, u.avatar_size = i.avatar_size, u.avatar_url = o(t, document.location.protocol === "https:"), u.retweet = typeof t.retweeted_status != "undefined", u.tweet_time = h(t.created_at), u.join_text = i.join_text == "auto" ? l(t.text) : i.join_text, u.tweet_id = t.id_str, u.twitter_base = "http://" + i.twitter_url + "/", u.user_url = u.twitter_base + u.screen_name, u.tweet_url = u.user_url + "/status/" + u.tweet_id, u.reply_url = u.twitter_base + "intent/tweet?in_reply_to=" + u.tweet_id, u.retweet_url = u.twitter_base + "intent/retweet?tweet_id=" + u.tweet_id, u.favorite_url = u.twitter_base + "intent/favorite?tweet_id=" + u.tweet_id, u.retweeted_screen_name = u.retweet && t.retweeted_status.user.screen_name, u.tweet_relative_time = c(u.tweet_time), u.entities = t.entities ? (t.entities.urls || []).concat(t.entities.media || []) : [], u.tweet_raw_text = u.retweet ? "RT @" + u.retweeted_screen_name + " " + t.retweeted_status.text : t.text, u.tweet_text = n([s(u.tweet_raw_text, u.entities)]).linkUser().linkHash()[0], u.tweet_text_fancy = n([u.tweet_text]).makeHeart()[0], u.user = r('<a class="tweet_user" href="{user_url}">{screen_name}<\/a>', u), u.join = i.join_text ? r(' <span class="tweet_join">{join_text}<\/span> ', u) : " ", u.avatar = u.avatar_size ? r('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/><\/a>', u) : "", u.time = r('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}<\/a><\/span>', u), u.text = r('<span class="tweet_text">{tweet_text_fancy}<\/span>', u), u.reply_action = r('<a class="tweet_action tweet_reply" href="{reply_url}">reply<\/a>', u), u.retweet_action = r('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet<\/a>', u), u.favorite_action = r('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite<\/a>', u), u
            }
            var i = n.extend({
                    modpath: "php/twitter/cws_tweet.php",
                    username: null,
                    list_id: null,
                    list: null,
                    favorites: !1,
                    query: null,
                    avatar_size: null,
                    count: 3,
                    fetch: null,
                    page: 1,
                    retweets: !0,
                    intro_text: null,
                    outro_text: null,
                    join_text: null,
                    auto_join_text_default: "i said,",
                    auto_join_text_ed: "i",
                    auto_join_text_ing: "i am",
                    auto_join_text_reply: "i replied to",
                    auto_join_text_url: "i was looking at",
                    loading_text: null,
                    refresh_interval: null,
                    twitter_url: "twitter.com",
                    twitter_api_url: "api.twitter.com",
                    twitter_search_url: "api.twitter.com",
                    template: "{avatar}{time}{join}{text}",
                    comparator: function(n, t) {
                        return t.tweet_time - n.tweet_time
                    },
                    filter: function() {
                        return !0
                    }
                }, t),
                f = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;
            return n.extend({
                tweet: {
                    t: r
                }
            }), n.fn.extend({
                linkUser: u(/(^|[\W])@(\w+)/gi, '$1<span class="at">@<\/span><a href="http://' + i.twitter_url + '/$2">$2<\/a>'),
                linkHash: u(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi, ' <a href="https://twitter.com/search?q=%23$1' + (i.username && i.username.length == 1 && !i.list ? "&from=" + i.username.join("%2BOR%2B") : "") + '" class="tweet_hashtag">#$1<\/a>'),
                makeHeart: u(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;<\/tt>")
            }), this.each(function(t, u) {
                var f = n('<ul class="tweet_list">'),
                    e = '<p class="tweet_intro">' + i.intro_text + "<\/p>",
                    o = '<p class="tweet_outro">' + i.outro_text + "<\/p>",
                    s = n('<p class="loading">' + i.loading_text + "<\/p>");
                i.username && typeof i.username == "string" && (i.username = [i.username]), n(u).unbind("tweet:load").bind("tweet:load", function() {
                    i.loading_text && n(u).empty().append(s), n.ajax({
                        dataType: "json",
                        type: "post",
                        async: !1,
                        url: i.modpath || "/twitter/",
                        data: {
                            request: a()
                        },
                        success: function(t) {
                            var c, h;
                            t.message && console.log(t.message), c = t, n(u).empty().append(f), i.intro_text && f.before(e), f.empty(), resp = c, h = n.map(resp, v), h = n.grep(h, i.filter).sort(i.comparator).slice(0, i.count), f.append(n.map(h, function(n) {
                                return "<li>" + r(i.template, n) + "<\/li>"
                            }).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd"), i.outro_text && f.after(o), n(u).trigger("loaded").trigger(h ? "empty" : "full"), i.refresh_interval && window.setTimeout(function() {
                                n(u).trigger("tweet:load")
                            }, 1e3 * i.refresh_interval)
                        }
                    })
                }).trigger("tweet:load")
            })
        }
    }),
    function(n) {
        var t = !0;
        n.flexslider = function(i, r) {
            var u = n(i);
            u.vars = n.extend({}, n.flexslider.defaults, r);
            var e = u.vars.namespace,
                y = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                p = ("ontouchstart" in window || y || window.DocumentTouch && document instanceof DocumentTouch) && u.vars.touch,
                v = "click touchend MSPointerUp keyup",
                h = "",
                w, c = u.vars.direction === "vertical",
                s = u.vars.reverse,
                o = u.vars.itemWidth > 0,
                l = u.vars.animation === "fade",
                a = u.vars.asNavFor !== "",
                f = {};
            n.data(i, "flexslider", u), f = {
                init: function() {
                    u.animating = !1, u.currentSlide = parseInt(u.vars.startAt ? u.vars.startAt : 0, 10), isNaN(u.currentSlide) && (u.currentSlide = 0), u.animatingTo = u.currentSlide, u.atEnd = u.currentSlide === 0 || u.currentSlide === u.last, u.containerSelector = u.vars.selector.substr(0, u.vars.selector.search(" ")), u.slides = n(u.vars.selector, u), u.container = n(u.containerSelector, u), u.count = u.slides.length, u.syncExists = n(u.vars.sync).length > 0, u.vars.animation === "slide" && (u.vars.animation = "swing"), u.prop = c ? "top" : "marginLeft", u.args = {}, u.manualPause = !1, u.stopped = !1, u.started = !1, u.startTimeout = null, u.transitions = !u.vars.video && !l && u.vars.useCSS && function() {
                        var i = document.createElement("div"),
                            n = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"],
                            t;
                        for (t in n)
                            if (i.style[n[t]] !== undefined) return u.pfx = n[t].replace("Perspective", "").toLowerCase(), u.prop = "-" + u.pfx + "-transform", !0;
                        return !1
                    }(), u.ensureAnimationEnd = "", u.vars.controlsContainer !== "" && (u.controlsContainer = n(u.vars.controlsContainer).length > 0 && n(u.vars.controlsContainer)), u.vars.manualControls !== "" && (u.manualControls = n(u.vars.manualControls).length > 0 && n(u.vars.manualControls)), u.vars.customDirectionNav !== "" && (u.customDirectionNav = n(u.vars.customDirectionNav).length === 2 && n(u.vars.customDirectionNav)), u.vars.randomize && (u.slides.sort(function() {
                        return Math.round(Math.random()) - .5
                    }), u.container.empty().append(u.slides)), u.doMath(), u.setup("init"), u.vars.controlNav && f.controlNav.setup(), u.vars.directionNav && f.directionNav.setup(), u.vars.keyboard && (n(u.containerSelector).length === 1 || u.vars.multipleKeyboard) && n(document).bind("keyup", function(n) {
                        var t = n.keyCode,
                            i;
                        u.animating || t !== 39 && t !== 37 || (i = t === 39 ? u.getTarget("next") : t === 37 ? u.getTarget("prev") : !1, u.flexAnimate(i, u.vars.pauseOnAction))
                    }), u.vars.mousewheel && u.bind("mousewheel", function(n, t) {
                        n.preventDefault();
                        var f = t < 0 ? u.getTarget("next") : u.getTarget("prev");
                        u.flexAnimate(f, u.vars.pauseOnAction)
                    }), u.vars.pausePlay && f.pausePlay.setup(), u.vars.slideshow && u.vars.pauseInvisible && f.pauseInvisible.init(), u.vars.slideshow && (u.vars.pauseOnHover && u.hover(function() {
                        u.manualPlay || u.manualPause || u.pause()
                    }, function() {
                        u.manualPause || u.manualPlay || u.stopped || u.play()
                    }), u.vars.pauseInvisible && f.pauseInvisible.isHidden() || (u.vars.initDelay > 0 ? u.startTimeout = setTimeout(u.play, u.vars.initDelay) : u.play())), a && f.asNav.setup(), p && u.vars.touch && f.touch(), (!l || l && u.vars.smoothHeight) && n(window).bind("resize orientationchange focus", f.resize), u.find("img").attr("draggable", "false"), setTimeout(function() {
                        u.vars.start(u)
                    }, 200)
                },
                asNav: {
                    setup: function() {
                        if (u.asNav = !0, u.animatingTo = Math.floor(u.currentSlide / u.move), u.currentItem = u.currentSlide, u.slides.removeClass(e + "active-slide").eq(u.currentItem).addClass(e + "active-slide"), y) i._slider = u, u.slides.each(function() {
                            var t = this;
                            t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function(n) {
                                n.preventDefault(), n.currentTarget._gesture && n.currentTarget._gesture.addPointer(n.pointerId)
                            }, !1), t.addEventListener("MSGestureTap", function(t) {
                                t.preventDefault();
                                var i = n(this),
                                    r = i.index();
                                n(u.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (u.direction = u.currentItem < r ? "next" : "prev", u.flexAnimate(r, u.vars.pauseOnAction, !1, !0, !0))
                            })
                        });
                        else u.slides.on(v, function(t) {
                            t.preventDefault();
                            var i = n(this),
                                r = i.index(),
                                f = i.offset().left - n(u).scrollLeft();
                            f <= 0 && i.hasClass(e + "active-slide") ? u.flexAnimate(u.getTarget("prev"), !0) : n(u.vars.asNavFor).data("flexslider").animating || i.hasClass(e + "active-slide") || (u.direction = u.currentItem < r ? "next" : "prev", u.flexAnimate(r, u.vars.pauseOnAction, !1, !0, !0))
                        })
                    }
                },
                controlNav: {
                    setup: function() {
                        u.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
                    },
                    setupPaging: function() {
                        var l = u.vars.controlNav === "thumbnails" ? "control-thumbs" : "control-paging",
                            c = 1,
                            o, t, i, s, r;
                        if (u.controlNavScaffold = n('<ol class="' + e + "control-nav " + e + l + '"><\/ol>'), u.pagingCount > 1)
                            for (i = 0; i < u.pagingCount; i++) t = u.slides.eq(i), undefined === t.attr("data-thumb-alt") && t.attr("data-thumb-alt", ""), s = "" !== t.attr("data-thumb-alt") ? s = ' alt="' + t.attr("data-thumb-alt") + '"' : "", o = u.vars.controlNav === "thumbnails" ? '<img src="' + t.attr("data-thumb") + '"' + s + "/>" : '<a href="#">' + c + "<\/a>", "thumbnails" === u.vars.controlNav && !0 === u.vars.thumbCaptions && (r = t.attr("data-thumbcaption"), "" !== r && undefined !== r && (o += '<span class="' + e + 'caption">' + r + "<\/span>")), u.controlNavScaffold.append("<li>" + o + "<\/li>"), c++;
                        u.controlsContainer ? n(u.controlsContainer).append(u.controlNavScaffold) : u.append(u.controlNavScaffold), f.controlNav.set(), f.controlNav.active(), u.controlNavScaffold.delegate("a, img", v, function(t) {
                            if (t.preventDefault(), h === "" || h === t.type) {
                                var i = n(this),
                                    r = u.controlNav.index(i);
                                i.hasClass(e + "active") || (u.direction = r > u.currentSlide ? "next" : "prev", u.flexAnimate(r, u.vars.pauseOnAction))
                            }
                            h === "" && (h = t.type), f.setToClearWatchedEvent()
                        })
                    },
                    setupManual: function() {
                        u.controlNav = u.manualControls, f.controlNav.active(), u.controlNav.bind(v, function(t) {
                            if (t.preventDefault(), h === "" || h === t.type) {
                                var i = n(this),
                                    r = u.controlNav.index(i);
                                i.hasClass(e + "active") || (u.direction = r > u.currentSlide ? "next" : "prev", u.flexAnimate(r, u.vars.pauseOnAction))
                            }
                            h === "" && (h = t.type), f.setToClearWatchedEvent()
                        })
                    },
                    set: function() {
                        var t = u.vars.controlNav === "thumbnails" ? "img" : "a";
                        u.controlNav = n("." + e + "control-nav li " + t, u.controlsContainer ? u.controlsContainer : u)
                    },
                    active: function() {
                        u.controlNav.removeClass(e + "active").eq(u.animatingTo).addClass(e + "active")
                    },
                    update: function(t, i) {
                        u.pagingCount > 1 && t === "add" ? u.controlNavScaffold.append(n('<li><a href="#">' + u.count + "<\/a><\/li>")) : u.pagingCount === 1 ? u.controlNavScaffold.find("li").remove() : u.controlNav.eq(i).closest("li").remove(), f.controlNav.set(), u.pagingCount > 1 && u.pagingCount !== u.controlNav.length ? u.update(i, t) : f.controlNav.active()
                    }
                },
                directionNav: {
                    setup: function() {
                        var t = n('<ul class="' + e + 'direction-nav"><li class="' + e + 'nav-prev"><a class="' + e + 'prev" href="#">' + u.vars.prevText + '<\/a><\/li><li class="' + e + 'nav-next"><a class="' + e + 'next" href="#">' + u.vars.nextText + "<\/a><\/li><\/ul>");
                        u.customDirectionNav ? u.directionNav = u.customDirectionNav : u.controlsContainer ? (n(u.controlsContainer).append(t), u.directionNav = n("." + e + "direction-nav li a", u.controlsContainer)) : (u.append(t), u.directionNav = n("." + e + "direction-nav li a", u)), f.directionNav.update(), u.directionNav.bind(v, function(t) {
                            t.preventDefault();
                            var i;
                            (h === "" || h === t.type) && (i = n(this).hasClass(e + "next") ? u.getTarget("next") : u.getTarget("prev"), u.flexAnimate(i, u.vars.pauseOnAction)), h === "" && (h = t.type), f.setToClearWatchedEvent()
                        })
                    },
                    update: function() {
                        var n = e + "disabled";
                        u.pagingCount === 1 ? u.directionNav.addClass(n).attr("tabindex", "-1") : u.vars.animationLoop ? u.directionNav.removeClass(n).removeAttr("tabindex") : u.animatingTo === 0 ? u.directionNav.removeClass(n).filter("." + e + "prev").addClass(n).attr("tabindex", "-1") : u.animatingTo === u.last ? u.directionNav.removeClass(n).filter("." + e + "next").addClass(n).attr("tabindex", "-1") : u.directionNav.removeClass(n).removeAttr("tabindex")
                    }
                },
                pausePlay: {
                    setup: function() {
                        var t = n('<div class="' + e + 'pauseplay"><a href="#"><\/a><\/div>');
                        u.controlsContainer ? (u.controlsContainer.append(t), u.pausePlay = n("." + e + "pauseplay a", u.controlsContainer)) : (u.append(t), u.pausePlay = n("." + e + "pauseplay a", u)), f.pausePlay.update(u.vars.slideshow ? e + "pause" : e + "play"), u.pausePlay.bind(v, function(t) {
                            t.preventDefault(), (h === "" || h === t.type) && (n(this).hasClass(e + "pause") ? (u.manualPause = !0, u.manualPlay = !1, u.pause()) : (u.manualPause = !1, u.manualPlay = !0, u.play())), h === "" && (h = t.type), f.setToClearWatchedEvent()
                        })
                    },
                    update: function(n) {
                        n === "play" ? u.pausePlay.removeClass(e + "pause").addClass(e + "play").html(u.vars.playText) : u.pausePlay.removeClass(e + "play").addClass(e + "pause").html(u.vars.pauseText)
                    }
                },
                touch: function() {
                    var p, w, f, r, n, e, d, b, k, h = !1,
                        a = 0,
                        v = 0,
                        t = 0;
                    if (y) {
                        i.style.msTouchAction = "none", i._gesture = new MSGesture, i._gesture.target = i, i.addEventListener("MSPointerDown", g, !1), i._slider = u, i.addEventListener("MSGestureChange", nt, !1), i.addEventListener("MSGestureEnd", tt, !1);

                        function g(n) {
                            n.stopPropagation(), u.animating ? n.preventDefault() : (u.pause(), i._gesture.addPointer(n.pointerId), t = 0, r = c ? u.h : u.w, e = Number(new Date), f = o && s && u.animatingTo === u.last ? 0 : o && s ? u.limit - (u.itemW + u.vars.itemMargin) * u.move * u.animatingTo : o && u.currentSlide === u.last ? u.limit : o ? (u.itemW + u.vars.itemMargin) * u.move * u.currentSlide : s ? (u.last - u.currentSlide + u.cloneOffset) * r : (u.currentSlide + u.cloneOffset) * r)
                        }

                        function nt(u) {
                            var o, s, a;
                            if (u.stopPropagation(), o = u.target._slider, o) {
                                if (s = -u.translationX, a = -u.translationY, t = t + (c ? a : s), n = t, h = c ? Math.abs(t) < Math.abs(-s) : Math.abs(t) < Math.abs(-a), u.detail === u.MSGESTURE_FLAG_INERTIA) {
                                    setImmediate(function() {
                                        i._gesture.stop()
                                    });
                                    return
                                }(!h || Number(new Date) - e > 500) && (u.preventDefault(), !l && o.transitions && (o.vars.animationLoop || (n = t / (o.currentSlide === 0 && t < 0 || o.currentSlide === o.last && t > 0 ? Math.abs(t) / r + 2 : 1)), o.setProps(f + n, "setTouch")))
                            }
                        }

                        function tt(i) {
                            var u, o, c;
                            (i.stopPropagation(), u = i.target._slider, u) && (u.animatingTo !== u.currentSlide || h || n === null || (o = s ? -n : n, c = o > 0 ? u.getTarget("next") : u.getTarget("prev"), u.canAdvance(c) && (Number(new Date) - e < 550 && Math.abs(o) > 50 || Math.abs(o) > r / 2) ? u.flexAnimate(c, u.vars.pauseOnAction) : l || u.flexAnimate(u.currentSlide, u.vars.pauseOnAction, !0)), p = null, w = null, n = null, f = null, t = 0)
                        }
                    } else d = function(n) {
                        u.animating ? n.preventDefault() : (window.navigator.msPointerEnabled || n.touches.length === 1) && (u.pause(), r = c ? u.h : u.w, e = Number(new Date), a = n.touches[0].pageX, v = n.touches[0].pageY, f = o && s && u.animatingTo === u.last ? 0 : o && s ? u.limit - (u.itemW + u.vars.itemMargin) * u.move * u.animatingTo : o && u.currentSlide === u.last ? u.limit : o ? (u.itemW + u.vars.itemMargin) * u.move * u.currentSlide : s ? (u.last - u.currentSlide + u.cloneOffset) * r : (u.currentSlide + u.cloneOffset) * r, p = c ? v : a, w = c ? a : v, i.addEventListener("touchmove", b, !1), i.addEventListener("touchend", k, !1))
                    }, b = function(t) {
                        a = t.touches[0].pageX, v = t.touches[0].pageY, n = c ? p - v : p - a, h = c ? Math.abs(n) < Math.abs(a - w) : Math.abs(n) < Math.abs(v - w);
                        var i = 500;
                        (!h || Number(new Date) - e > i) && (t.preventDefault(), !l && u.transitions && (u.vars.animationLoop || (n = n / (u.currentSlide === 0 && n < 0 || u.currentSlide === u.last && n > 0 ? Math.abs(n) / r + 2 : 1)), u.setProps(f + n, "setTouch")))
                    }, k = function() {
                        if (i.removeEventListener("touchmove", b, !1), u.animatingTo === u.currentSlide && !h && !(n === null)) {
                            var o = s ? -n : n,
                                c = o > 0 ? u.getTarget("next") : u.getTarget("prev");
                            u.canAdvance(c) && (Number(new Date) - e < 550 && Math.abs(o) > 50 || Math.abs(o) > r / 2) ? u.flexAnimate(c, u.vars.pauseOnAction) : l || u.flexAnimate(u.currentSlide, u.vars.pauseOnAction, !0)
                        }
                        i.removeEventListener("touchend", k, !1), p = null, w = null, n = null, f = null
                    }, i.addEventListener("touchstart", d, !1)
                },
                resize: function() {
                    !u.animating && u.is(":visible") && (o || u.doMath(), l ? f.smoothHeight() : o ? (u.slides.width(u.computedW), u.update(u.pagingCount), u.setProps()) : c ? (u.viewport.height(u.h), u.setProps(u.h, "setTotal")) : (u.vars.smoothHeight && f.smoothHeight(), u.newSlides.width(u.computedW), u.setProps(u.computedW, "setTotal")))
                },
                smoothHeight: function(n) {
                    if (!c || l) {
                        var t = l ? u : u.viewport;
                        n ? t.animate({
                            height: u.slides.eq(u.animatingTo).innerHeight()
                        }, n) : t.innerHeight(u.slides.eq(u.animatingTo).innerHeight())
                    }
                },
                sync: function(t) {
                    var i = n(u.vars.sync).data("flexslider"),
                        r = u.animatingTo;
                    switch (t) {
                        case "animate":
                            i.flexAnimate(r, u.vars.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            i.playing || i.asNav || i.play();
                            break;
                        case "pause":
                            i.pause()
                    }
                },
                uniqueID: function(t) {
                    return t.filter("[id]").add(t.find("[id]")).each(function() {
                        var t = n(this);
                        t.attr("id", t.attr("id") + "_clone")
                    }), t
                },
                pauseInvisible: {
                    visProp: null,
                    init: function() {
                        var n = f.pauseInvisible.getHiddenProp(),
                            t;
                        n && (t = n.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(t, function() {
                            f.pauseInvisible.isHidden() ? u.startTimeout ? clearTimeout(u.startTimeout) : u.pause() : u.started ? u.play() : u.vars.initDelay > 0 ? setTimeout(u.play, u.vars.initDelay) : u.play()
                        }))
                    },
                    isHidden: function() {
                        var n = f.pauseInvisible.getHiddenProp();
                        return n ? document[n] : !1
                    },
                    getHiddenProp: function() {
                        var t = ["webkit", "moz", "ms", "o"],
                            n;
                        if ("hidden" in document) return "hidden";
                        for (n = 0; n < t.length; n++)
                            if (t[n] + "Hidden" in document) return t[n] + "Hidden";
                        return null
                    }
                },
                setToClearWatchedEvent: function() {
                    clearTimeout(w), w = setTimeout(function() {
                        h = ""
                    }, 3e3)
                }
            }, u.flexAnimate = function(t, i, r, h, v) {
                var b, y, d, w, k;
                if (u.vars.animationLoop || t === u.currentSlide || (u.direction = t > u.currentSlide ? "next" : "prev"), a && u.pagingCount === 1 && (u.direction = u.currentItem < t ? "next" : "prev"), !u.animating && (u.canAdvance(t, v) || r) && u.is(":visible")) {
                    if (a && h)
                        if (b = n(u.vars.asNavFor).data("flexslider"), u.atEnd = t === 0 || t === u.count - 1, b.flexAnimate(t, !0, !1, !0, v), u.direction = u.currentItem < t ? "next" : "prev", b.direction = u.direction, Math.ceil((t + 1) / u.visible) - 1 !== u.currentSlide && t !== 0) u.currentItem = t, u.slides.removeClass(e + "active-slide").eq(t).addClass(e + "active-slide"), t = Math.floor(t / u.visible);
                        else return u.currentItem = t, u.slides.removeClass(e + "active-slide").eq(t).addClass(e + "active-slide"), !1;
                    u.animating = !0, u.animatingTo = t, i && u.pause(), u.vars.before(u), u.syncExists && !v && f.sync("animate"), u.vars.controlNav && f.controlNav.active(), o || u.slides.removeClass(e + "active-slide").eq(t).addClass(e + "active-slide"), u.atEnd = t === 0 || t === u.last, u.vars.directionNav && f.directionNav.update(), t === u.last && (u.vars.end(u), u.vars.animationLoop || u.pause()), l ? p ? (u.slides.eq(u.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), u.slides.eq(t).css({
                        opacity: 1,
                        zIndex: 2
                    }), u.wrapup(y)) : (u.slides.eq(u.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, u.vars.animationSpeed, u.vars.easing), u.slides.eq(t).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, u.vars.animationSpeed, u.vars.easing, u.wrapup)) : (y = c ? u.slides.filter(":first").height() : u.computedW, o ? (d = u.vars.itemMargin, k = (u.itemW + d) * u.move * u.animatingTo, w = k > u.limit && u.visible !== 1 ? u.limit : k) : w = u.currentSlide === 0 && t === u.count - 1 && u.vars.animationLoop && u.direction !== "next" ? s ? (u.count + u.cloneOffset) * y : 0 : u.currentSlide === u.last && t === 0 && u.vars.animationLoop && u.direction !== "prev" ? s ? 0 : (u.count + 1) * y : s ? (u.count - 1 - t + u.cloneOffset) * y : (t + u.cloneOffset) * y, u.setProps(w, "", u.vars.animationSpeed), u.transitions ? (u.vars.animationLoop && u.atEnd || (u.animating = !1, u.currentSlide = u.animatingTo), u.container.unbind("webkitTransitionEnd transitionend"), u.container.bind("webkitTransitionEnd transitionend", function() {
                        clearTimeout(u.ensureAnimationEnd), u.wrapup(y)
                    }), clearTimeout(u.ensureAnimationEnd), u.ensureAnimationEnd = setTimeout(function() {
                        u.wrapup(y)
                    }, u.vars.animationSpeed + 100)) : u.container.animate(u.args, u.vars.animationSpeed, u.vars.easing, function() {
                        u.wrapup(y)
                    })), u.vars.smoothHeight && f.smoothHeight(u.vars.animationSpeed)
                }
            }, u.wrapup = function(n) {
                l || o || (u.currentSlide === 0 && u.animatingTo === u.last && u.vars.animationLoop ? u.setProps(n, "jumpEnd") : u.currentSlide === u.last && u.animatingTo === 0 && u.vars.animationLoop && u.setProps(n, "jumpStart")), u.animating = !1, u.currentSlide = u.animatingTo, u.vars.after(u)
            }, u.animateSlides = function() {
                !u.animating && t && u.flexAnimate(u.getTarget("next"))
            }, u.pause = function() {
                clearInterval(u.animatedSlides), u.animatedSlides = null, u.playing = !1, u.vars.pausePlay && f.pausePlay.update("play"), u.syncExists && f.sync("pause")
            }, u.play = function() {
                u.playing && clearInterval(u.animatedSlides), u.animatedSlides = u.animatedSlides || setInterval(u.animateSlides, u.vars.slideshowSpeed), u.started = u.playing = !0, u.vars.pausePlay && f.pausePlay.update("pause"), u.syncExists && f.sync("play")
            }, u.stop = function() {
                u.pause(), u.stopped = !0
            }, u.canAdvance = function(n, t) {
                var i = a ? u.pagingCount - 1 : u.last;
                return t ? !0 : a && u.currentItem === u.count - 1 && n === 0 && u.direction === "prev" ? !0 : a && u.currentItem === 0 && n === u.pagingCount - 1 && u.direction !== "next" ? !1 : n === u.currentSlide && !a ? !1 : u.vars.animationLoop ? !0 : u.atEnd && u.currentSlide === 0 && n === i && u.direction !== "next" ? !1 : u.atEnd && u.currentSlide === i && n === 0 && u.direction === "next" ? !1 : !0
            }, u.getTarget = function(n) {
                return u.direction = n, n === "next" ? u.currentSlide === u.last ? 0 : u.currentSlide + 1 : u.currentSlide === 0 ? u.last : u.currentSlide - 1
            }, u.setProps = function(n, t, i) {
                var r = function() {
                    var i = n ? n : (u.itemW + u.vars.itemMargin) * u.move * u.animatingTo,
                        r = function() {
                            if (o) return t === "setTouch" ? n : s && u.animatingTo === u.last ? 0 : s ? u.limit - (u.itemW + u.vars.itemMargin) * u.move * u.animatingTo : u.animatingTo === u.last ? u.limit : i;
                            switch (t) {
                                case "setTotal":
                                    return s ? (u.count - 1 - u.currentSlide + u.cloneOffset) * n : (u.currentSlide + u.cloneOffset) * n;
                                case "setTouch":
                                    return s ? n : n;
                                case "jumpEnd":
                                    return s ? n : u.count * n;
                                case "jumpStart":
                                    return s ? u.count * n : n;
                                default:
                                    return n
                            }
                        }();
                    return r * -1 + "px"
                }();
                u.transitions && (r = c ? "translate3d(0," + r + ",0)" : "translate3d(" + r + ",0,0)", i = i !== undefined ? i / 1e3 + "s" : "0s", u.container.css("-" + u.pfx + "-transition-duration", i), u.container.css("transition-duration", i)), u.args[u.prop] = r, (u.transitions || i === undefined) && u.container.css(u.args), u.container.css("transform", r)
            }, u.setup = function(t) {
                if (l) u.slides.css({
                    width: "100%",
                    float: "left",
                    marginRight: "-100%",
                    position: "relative"
                }), t === "init" && (p ? u.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + u.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(u.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : u.vars.fadeFirstSlide == !1 ? u.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(u.currentSlide).css({
                    zIndex: 2
                }).css({
                    opacity: 1
                }) : u.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(u.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, u.vars.animationSpeed, u.vars.easing)), u.vars.smoothHeight && f.smoothHeight();
                else {
                    var i, r;
                    t === "init" && (u.viewport = n('<div class="' + e + 'viewport"><\/div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(u).append(u.container), u.cloneCount = 0, u.cloneOffset = 0, s && (r = n.makeArray(u.slides).reverse(), u.slides = n(r), u.container.empty().append(u.slides))), u.vars.animationLoop && !o && (u.cloneCount = 2, u.cloneOffset = 1, t !== "init" && u.container.find(".clone").remove(), u.container.append(f.uniqueID(u.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(f.uniqueID(u.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), u.newSlides = n(u.vars.selector, u), i = s ? u.count - 1 - u.currentSlide + u.cloneOffset : u.currentSlide + u.cloneOffset, c && !o ? (u.container.height((u.count + u.cloneCount) * 200 + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                        u.newSlides.css({
                            display: "block"
                        }), u.doMath(), u.viewport.height(u.h), u.setProps(i * u.h, "init")
                    }, t === "init" ? 100 : 0)) : (u.container.width((u.count + u.cloneCount) * 200 + "%"), u.setProps(i * u.computedW, "init"), setTimeout(function() {
                        u.doMath(), u.newSlides.css({
                            width: u.computedW,
                            marginRight: u.computedM,
                            float: "left",
                            display: "block"
                        }), u.vars.smoothHeight && f.smoothHeight()
                    }, t === "init" ? 100 : 0))
                }
                o || u.slides.removeClass(e + "active-slide").eq(u.currentSlide).addClass(e + "active-slide"), u.vars.init(u)
            }, u.doMath = function() {
                var r = u.slides.first(),
                    n = u.vars.itemMargin,
                    t = u.vars.minItems,
                    i = u.vars.maxItems;
                u.w = u.viewport === undefined ? u.width() : u.viewport.width(), u.h = r.height(), u.boxPadding = r.outerWidth() - r.width(), o ? (u.itemT = u.vars.itemWidth + n, u.itemM = n, u.minW = t ? t * u.itemT : u.w, u.maxW = i ? i * u.itemT - n : u.w, u.itemW = u.minW > u.w ? (u.w - n * (t - 1)) / t : u.maxW < u.w ? (u.w - n * (i - 1)) / i : u.vars.itemWidth > u.w ? u.w : u.vars.itemWidth, u.visible = Math.floor(u.w / u.itemW), u.move = u.vars.move > 0 && u.vars.move < u.visible ? u.vars.move : u.visible, u.pagingCount = Math.ceil((u.count - u.visible) / u.move + 1), u.last = u.pagingCount - 1, u.limit = u.pagingCount === 1 ? 0 : u.vars.itemWidth > u.w ? u.itemW * (u.count - 1) + n * (u.count - 1) : (u.itemW + n) * u.count - u.w - n) : (u.itemW = u.w, u.itemM = n, u.pagingCount = u.count, u.last = u.count - 1), u.computedW = u.itemW - u.boxPadding, u.computedM = u.itemM
            }, u.update = function(n, t) {
                u.doMath(), o || (n < u.currentSlide ? u.currentSlide += 1 : n <= u.currentSlide && n !== 0 && (u.currentSlide -= 1), u.animatingTo = u.currentSlide), u.vars.controlNav && !u.manualControls && (t === "add" && !o || u.pagingCount > u.controlNav.length ? f.controlNav.update("add") : (t === "remove" && !o || u.pagingCount < u.controlNav.length) && (o && u.currentSlide > u.last && (u.currentSlide -= 1, u.animatingTo -= 1), f.controlNav.update("remove", u.last))), u.vars.directionNav && f.directionNav.update()
            }, u.addSlide = function(t, i) {
                var r = n(t);
                u.count += 1, u.last = u.count - 1, c && s ? i !== undefined ? u.slides.eq(u.count - i).after(r) : u.container.prepend(r) : i !== undefined ? u.slides.eq(i).before(r) : u.container.append(r), u.update(i, "add"), u.slides = n(u.vars.selector + ":not(.clone)", u), u.setup(), u.vars.added(u)
            }, u.removeSlide = function(t) {
                var i = isNaN(t) ? u.slides.index(n(t)) : t;
                u.count -= 1, u.last = u.count - 1, isNaN(t) ? n(t, u.slides).remove() : c && s ? u.slides.eq(u.last).remove() : u.slides.eq(t).remove(), u.doMath(), u.update(i, "remove"), u.slides = n(u.vars.selector + ":not(.clone)", u), u.setup(), u.vars.removed(u)
            }, f.init()
        }, n(window).blur(function() {
            t = !1
        }).focus(function() {
            t = !0
        }), n.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            fadeFirstSlide: !0,
            thumbCaptions: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            pauseInvisible: !0,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            customDirectionNav: "",
            sync: "",
            asNavFor: "",
            itemWidth: 0,
            itemMargin: 0,
            minItems: 1,
            maxItems: 0,
            move: 0,
            allowOneSlide: !0,
            start: function() {},
            before: function() {},
            after: function() {},
            end: function() {},
            added: function() {},
            removed: function() {},
            init: function() {}
        }, n.fn.flexslider = function(t) {
            if (t === undefined && (t = {}), typeof t == "object") return this.each(function() {
                var i = n(this),
                    u = t.selector ? t.selector : ".slides > li",
                    r = i.find(u);
                r.length === 1 && t.allowOneSlide === !1 || r.length === 0 ? (r.fadeIn(400), t.start && t.start(i)) : i.data("flexslider") === undefined && new n.flexslider(this, t)
            });
            var i = n(this).data("flexslider");
            switch (t) {
                case "play":
                    i.play();
                    break;
                case "pause":
                    i.pause();
                    break;
                case "stop":
                    i.stop();
                    break;
                case "next":
                    i.flexAnimate(i.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    i.flexAnimate(i.getTarget("prev"), !0);
                    break;
                default:
                    typeof t == "number" && i.flexAnimate(t, !0)
            }
        }
    }(jQuery),
    function(n, t, i, r) {
        "use strict";
        var p = i("html"),
            o = i(n),
            e = i(t),
            u = i.fancybox = function() {
                u.open.apply(this, arguments)
            },
            y = navigator.userAgent.match(/msie/i),
            v = null,
            s = t.createTouch !== r,
            a = function(n) {
                return n && n.hasOwnProperty && n instanceof i
            },
            c = function(n) {
                return n && i.type(n) === "string"
            },
            l = function(n) {
                return c(n) && n.indexOf("%") > 0
            },
            w = function(n) {
                return n && !(n.style.overflow && n.style.overflow === "hidden") && (n.clientWidth && n.scrollWidth > n.clientWidth || n.clientHeight && n.scrollHeight > n.clientHeight)
            },
            f = function(n, t) {
                var i = parseInt(n, 10) || 0;
                return t && l(n) && (i = u.getViewport()[t] / 100 * i), Math.ceil(i)
            },
            h = function(n, t) {
                return f(n, t) + "px"
            };
        i.extend(u, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !s,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"><\/div><\/div><\/div><\/div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (y ? ' allowtransparency="true"' : "") + "><\/iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.<\/p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><\/a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span><\/span><\/a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span><\/span><\/a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: i.noop,
                beforeLoad: i.noop,
                afterLoad: i.noop,
                beforeShow: i.noop,
                afterShow: i.noop,
                beforeChange: i.noop,
                beforeClose: i.noop,
                afterClose: i.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(n, t) {
                if (n) return (i.isPlainObject(t) || (t = {}), !1 === u.close(!0)) ? void 0 : (i.isArray(n) || (n = a(n) ? i(n).get() : [n]), i.each(n, function(f, e) {
                    var h = {},
                        s, p, l, o, v, y, w;
                    i.type(e) === "object" && (e.nodeType && (e = i(e)), a(e) ? (h = {
                        href: e.data("fancybox-href") || e.attr("href"),
                        title: i("<div/>").text(e.data("fancybox-title") || e.attr("title")).html(),
                        isDom: !0,
                        element: e
                    }, i.metadata && i.extend(!0, h, e.metadata())) : h = e), s = t.href || h.href || (c(e) ? e : null), p = t.title !== r ? t.title : h.title || "", l = t.content || h.content, o = l ? "html" : t.type || h.type, !o && h.isDom && (o = e.data("fancybox-type"), o || (v = e.prop("class").match(/fancybox\.(\w+)/), o = v ? v[1] : null)), c(s) && (o || (u.isImage(s) ? o = "image" : u.isSWF(s) ? o = "swf" : s.charAt(0) === "#" ? o = "inline" : c(e) && (o = "html", l = e)), o === "ajax" && (y = s.split(/\s+/, 2), s = y.shift(), w = y.shift())), l || (o === "inline" ? s ? l = i(c(s) ? s.replace(/.*(?=#[^\s]+$)/, "") : s) : h.isDom && (l = e) : o === "html" ? l = s : o || s || !h.isDom || (o = "inline", l = e)), i.extend(h, {
                        href: s,
                        type: o,
                        content: l,
                        title: p,
                        selector: w
                    }), n[f] = h
                }), u.opts = i.extend(!0, {}, u.defaults, t), t.keys !== r && (u.opts.keys = t.keys ? i.extend({}, u.defaults.keys, t.keys) : !1), u.group = n, u._start(u.opts.index))
            },
            cancel: function() {
                var n = u.coming;
                n && !1 === u.trigger("onCancel") || (u.hideLoading(), n) && (u.ajaxLoad && u.ajaxLoad.abort(), u.ajaxLoad = null, u.imgPreload && (u.imgPreload.onload = u.imgPreload.onerror = null), n.wrap && n.wrap.stop(!0, !0).trigger("onReset").remove(), u.coming = null, u.current || u._afterZoomOut(n))
            },
            close: function(n) {
                (u.cancel(), !1 !== u.trigger("beforeClose")) && (u.unbindEvents(), u.isActive) && (u.isOpen && n !== !0 ? (u.isOpen = u.isOpened = !1, u.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), u.wrap.stop(!0, !0).removeClass("fancybox-opened"), u.transitions[u.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), u._afterZoomOut()))
            },
            play: function(n) {
                var t = function() {
                        clearTimeout(u.player.timer)
                    },
                    i = function() {
                        t(), u.current && u.player.isActive && (u.player.timer = setTimeout(u.next, u.current.playSpeed))
                    },
                    r = function() {
                        t(), e.unbind(".player"), u.player.isActive = !1, u.trigger("onPlayEnd")
                    },
                    f = function() {
                        u.current && (u.current.loop || u.current.index < u.group.length - 1) && (u.player.isActive = !0, e.bind({
                            "onCancel.player beforeClose.player": r,
                            "onUpdate.player": i,
                            "beforeLoad.player": t
                        }), i(), u.trigger("onPlayStart"))
                    };
                n !== !0 && (u.player.isActive || n === !1) ? r() : f()
            },
            next: function(n) {
                var t = u.current;
                t && (c(n) || (n = t.direction.next), u.jumpto(t.index + 1, n, "next"))
            },
            prev: function(n) {
                var t = u.current;
                t && (c(n) || (n = t.direction.prev), u.jumpto(t.index - 1, n, "prev"))
            },
            jumpto: function(n, t, i) {
                var e = u.current;
                e && (n = f(n), u.direction = t || e.direction[n >= e.index ? "next" : "prev"], u.router = i || "jumpto", e.loop && (n < 0 && (n = e.group.length + n % e.group.length), n = n % e.group.length), e.group[n] !== r && (u.cancel(), u._start(n)))
            },
            reposition: function(n, t) {
                var f = u.current,
                    e = f ? f.wrap : null,
                    r;
                e && (r = u._getPosition(t), n && n.type === "scroll" ? (delete r.position, e.stop(!0, !0).animate(r, 200)) : (e.css(r), f.pos = i.extend({}, f.dim, r)))
            },
            update: function(n) {
                var t = n && n.originalEvent && n.originalEvent.type,
                    i = !t || t === "orientationchange";
                (i && (clearTimeout(v), v = null), u.isOpen && !v) && (v = setTimeout(function() {
                    var r = u.current;
                    r && !u.isClosing && (u.wrap.removeClass("fancybox-tmp"), (i || t === "load" || t === "resize" && r.autoResize) && u._setDimension(), t === "scroll" && r.canShrink || u.reposition(n), u.trigger("onUpdate"), v = null)
                }, i && !s ? 0 : 300))
            },
            toggle: function(n) {
                u.isOpen && (u.current.fitToView = i.type(n) === "boolean" ? n : !u.current.fitToView, s && (u.wrap.removeAttr("style").addClass("fancybox-tmp"), u.trigger("onUpdate")), u.update())
            },
            hideLoading: function() {
                e.unbind(".loading"), i("#fancybox-loading").remove()
            },
            showLoading: function() {
                var t, n;
                u.hideLoading(), t = i('<div id="fancybox-loading"><div><\/div><\/div>').click(u.cancel).appendTo("body"), e.bind("keydown.loading", function(n) {
                    (n.which || n.keyCode) === 27 && (n.preventDefault(), u.cancel())
                }), u.defaults.fixed || (n = u.getViewport(), t.css({
                    position: "absolute",
                    top: n.h * .5 + n.y,
                    left: n.w * .5 + n.x
                })), u.trigger("onLoading")
            },
            getViewport: function() {
                var i = u.current && u.current.locked || !1,
                    t = {
                        x: o.scrollLeft(),
                        y: o.scrollTop()
                    };
                return i && i.length ? (t.w = i[0].clientWidth, t.h = i[0].clientHeight) : (t.w = s && n.innerWidth ? n.innerWidth : o.width(), t.h = s && n.innerHeight ? n.innerHeight : o.height()), t
            },
            unbindEvents: function() {
                u.wrap && a(u.wrap) && u.wrap.unbind(".fb"), e.unbind(".fb"), o.unbind(".fb")
            },
            bindEvents: function() {
                var n = u.current,
                    t;
                n && (o.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (n.autoCenter && !n.locked ? " scroll.fb" : ""), u.update), t = n.keys, t && e.bind("keydown.fb", function(f) {
                    var e = f.which || f.keyCode,
                        o = f.target || f.srcElement;
                    if (e === 27 && u.coming) return !1;
                    f.ctrlKey || f.altKey || f.shiftKey || f.metaKey || o && (o.type || i(o).is("[contenteditable]")) || i.each(t, function(t, o) {
                        return n.group.length > 1 && o[e] !== r ? (u[t](o[e]), f.preventDefault(), !1) : i.inArray(e, o) > -1 ? (u[t](), f.preventDefault(), !1) : void 0
                    })
                }), i.fn.mousewheel && n.mouseWheel && u.wrap.bind("mousewheel.fb", function(t, r, f, e) {
                    for (var h = t.target || null, o = i(h), s = !1; o.length;) {
                        if (s || o.is(".fancybox-skin") || o.is(".fancybox-wrap")) break;
                        s = w(o[0]), o = i(o).parent()
                    }
                    r === 0 || s || u.group.length > 1 && !n.canShrink && (e > 0 || f > 0 ? u.prev(e > 0 ? "down" : "left") : (e < 0 || f < 0) && u.next(e < 0 ? "up" : "right"), t.preventDefault())
                }))
            },
            trigger: function(n, t) {
                var f, r = t || u.coming || u.current;
                if (r) {
                    if (i.isFunction(r[n]) && (f = r[n].apply(r, Array.prototype.slice.call(arguments, 1))), f === !1) return !1;
                    r.helpers && i.each(r.helpers, function(t, f) {
                        f && u.helpers[t] && i.isFunction(u.helpers[t][n]) && u.helpers[t][n](i.extend(!0, {}, u.helpers[t].defaults, f), r)
                    })
                }
                e.trigger(n)
            },
            isImage: function(n) {
                return c(n) && n.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function(n) {
                return c(n) && n.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(n) {
                var t = {},
                    c, l, r, e, o;
                if (n = f(n), c = u.group[n] || null, !c) return !1;
                if (t = i.extend(!0, {}, u.opts, c), e = t.margin, o = t.padding, i.type(e) === "number" && (t.margin = [e, e, e, e]), i.type(o) === "number" && (t.padding = [o, o, o, o]), t.modal && i.extend(!0, t, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }), t.autoSize && (t.autoWidth = t.autoHeight = !0), t.width === "auto" && (t.autoWidth = !0), t.height === "auto" && (t.autoHeight = !0), t.group = u.group, t.index = n, u.coming = t, !1 === u.trigger("beforeLoad")) {
                    u.coming = null;
                    return
                }
                if (r = t.type, l = t.href, !r) return (u.coming = null, u.current && u.router && u.router !== "jumpto") ? (u.current.index = n, u[u.router](u.direction)) : !1;
                if (u.isActive = !0, (r === "image" || r === "swf") && (t.autoHeight = t.autoWidth = !1, t.scrolling = "visible"), r === "image" && (t.aspectRatio = !0), r === "iframe" && s && (t.scrolling = "scroll"), t.wrap = i(t.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + r + " fancybox-tmp " + t.wrapCSS).appendTo(t.parent || "body"), i.extend(t, {
                        skin: i(".fancybox-skin", t.wrap),
                        outer: i(".fancybox-outer", t.wrap),
                        inner: i(".fancybox-inner", t.wrap)
                    }), i.each(["Top", "Right", "Bottom", "Left"], function(n, i) {
                        t.skin.css("padding" + i, h(t.padding[n]))
                    }), u.trigger("onReady"), r === "inline" || r === "html") {
                    if (!t.content || !t.content.length) return u._error("content")
                } else if (!l) return u._error("href");
                r === "image" ? u._loadImage() : r === "ajax" ? u._loadAjax() : r === "iframe" ? u._loadIframe() : u._afterLoad()
            },
            _error: function(n) {
                i.extend(u.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: n,
                    content: u.coming.tpl.error
                }), u._afterLoad()
            },
            _loadImage: function() {
                var n = u.imgPreload = new Image;
                n.onload = function() {
                    this.onload = this.onerror = null, u.coming.width = this.width / u.opts.pixelRatio, u.coming.height = this.height / u.opts.pixelRatio, u._afterLoad()
                }, n.onerror = function() {
                    this.onload = this.onerror = null, u._error("image")
                }, n.src = u.coming.href, n.complete !== !0 && u.showLoading()
            },
            _loadAjax: function() {
                var n = u.coming;
                u.showLoading(), u.ajaxLoad = i.ajax(i.extend({}, n.ajax, {
                    url: n.href,
                    error: function(n, t) {
                        u.coming && t !== "abort" ? u._error("ajax", n) : u.hideLoading()
                    },
                    success: function(t, i) {
                        i === "success" && (n.content = t, u._afterLoad())
                    }
                }))
            },
            _loadIframe: function() {
                var n = u.coming,
                    t = i(n.tpl.iframe.replace(/\{rnd\}/g, +new Date)).attr("scrolling", s ? "auto" : n.iframe.scrolling).attr("src", n.href);
                if (i(n.wrap).bind("onReset", function() {
                        try {
                            i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                        } catch (n) {}
                    }), n.iframe.preload) {
                    u.showLoading();
                    t.one("load", function() {
                        i(this).data("ready", 1), s || i(this).bind("load.fb", u.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), u._afterLoad()
                    })
                }
                n.content = t.appendTo(n.inner), n.iframe.preload || u._afterLoad()
            },
            _preloadImages: function() {
                for (var r = u.group, i = u.current, f = r.length, e = i.preload ? Math.min(i.preload, f - 1) : 0, n, t = 1; t <= e; t += 1) n = r[(i.index + t) % f], n.type === "image" && n.href && ((new Image).src = n.href)
            },
            _afterLoad: function() {
                var r = u.coming,
                    f = u.current,
                    e = "fancybox-placeholder",
                    t, n, c, o, s, h;
                if (u.hideLoading(), r && u.isActive !== !1) {
                    if (!1 === u.trigger("afterLoad", r, f)) {
                        r.wrap.stop(!0).trigger("onReset").remove(), u.coming = null;
                        return
                    }
                    f && (u.trigger("beforeChange", f), f.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), u.unbindEvents(), t = r, n = r.content, c = r.type, o = r.scrolling, i.extend(u, {
                        wrap: t.wrap,
                        skin: t.skin,
                        outer: t.outer,
                        inner: t.inner,
                        current: t,
                        previous: f
                    }), s = t.href;
                    switch (c) {
                        case "inline":
                        case "ajax":
                        case "html":
                            t.selector ? n = i("<div>").html(n).find(t.selector) : a(n) && (n.data(e) || n.data(e, i('<div class="' + e + '"><\/div>').insertAfter(n).hide()), n = n.show().detach(), t.wrap.bind("onReset", function() {
                                i(this).find(n).length && n.hide().replaceAll(n.data(e)).data(e, !1)
                            }));
                            break;
                        case "image":
                            n = t.tpl.image.replace(/\{href\}/g, s);
                            break;
                        case "swf":
                            n = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + s + '"><\/param>', h = "", i.each(t.swf, function(t, i) {
                                n += '<param name="' + t + '" value="' + i + '"><\/param>', h += " " + t + '="' + i + '"'
                            }), n += '<embed src="' + s + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "><\/embed><\/object>"
                    }
                    a(n) && n.parent().is(t.inner) || t.inner.append(n), u.trigger("beforeShow"), t.inner.css("overflow", o === "yes" ? "scroll" : o === "no" ? "hidden" : o), u._setDimension(), u.reposition(), u.isOpen = !1, u.coming = null, u.bindEvents(), u.isOpened ? f.prevMethod && u.transitions[f.prevMethod]() : i(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(), u.transitions[u.isOpened ? t.nextMethod : t.openMethod](), u._preloadImages()
                }
            },
            _setDimension: function() {
                var nt = u.getViewport(),
                    wt = 0,
                    vt = !1,
                    st = !1,
                    v = u.wrap,
                    k = u.skin,
                    e = u.inner,
                    r = u.current,
                    n = r.width,
                    t = r.height,
                    o = r.minWidth,
                    s = r.minHeight,
                    c = r.maxWidth,
                    a = r.maxHeight,
                    bt = r.scrolling,
                    ft = r.scrollOutside ? r.scrollbarWidth : 0,
                    et = r.margin,
                    yt = f(et[1] + et[3]),
                    pt = f(et[0] + et[2]),
                    d, ht, tt, it, p, y, ct, lt, w, g, b, rt, ot, ut, at;
                if (v.add(k).add(e).width("auto").height("auto").removeClass("fancybox-tmp"), d = f(k.outerWidth(!0) - k.width()), ht = f(k.outerHeight(!0) - k.height()), tt = yt + d, it = pt + ht, p = l(n) ? (nt.w - tt) * f(n) / 100 : n, y = l(t) ? (nt.h - it) * f(t) / 100 : t, r.type === "iframe") {
                    if (ut = r.content, r.autoHeight && ut.data("ready") === 1) try {
                        ut[0].contentWindow.document.location && (e.width(p).height(9999), at = ut.contents().find("body"), ft && at.css("overflow-x", "hidden"), y = at.outerHeight(!0))
                    } catch (kt) {}
                } else(r.autoWidth || r.autoHeight) && (e.addClass("fancybox-tmp"), r.autoWidth || e.width(p), r.autoHeight || e.height(y), r.autoWidth && (p = e.width()), r.autoHeight && (y = e.height()), e.removeClass("fancybox-tmp"));
                if (n = f(p), t = f(y), w = p / y, o = f(l(o) ? f(o, "w") - tt : o), c = f(l(c) ? f(c, "w") - tt : c), s = f(l(s) ? f(s, "h") - it : s), a = f(l(a) ? f(a, "h") - it : a), ct = c, lt = a, r.fitToView && (c = Math.min(nt.w - tt, c), a = Math.min(nt.h - it, a)), rt = nt.w - yt, ot = nt.h - pt, r.aspectRatio ? (n > c && (n = c, t = f(n / w)), t > a && (t = a, n = f(t * w)), n < o && (n = o, t = f(n / w)), t < s && (t = s, n = f(t * w))) : (n = Math.max(o, Math.min(n, c)), r.autoHeight && r.type !== "iframe" && (e.width(n), t = e.height()), t = Math.max(s, Math.min(t, a))), r.fitToView)
                    if (e.width(n).height(t), v.width(n + d), g = v.width(), b = v.height(), r.aspectRatio)
                        while ((g > rt || b > ot) && n > o && t > s) {
                            if (wt++ > 19) break;
                            t = Math.max(s, Math.min(a, t - 10)), n = f(t * w), n < o && (n = o, t = f(n / w)), n > c && (n = c, t = f(n / w)), e.width(n).height(t), v.width(n + d), g = v.width(), b = v.height()
                        } else n = Math.max(o, Math.min(n, n - (g - rt))), t = Math.max(s, Math.min(t, t - (b - ot)));
                ft && bt === "auto" && t < y && n + d + ft < rt && (n += ft), e.width(n).height(t), v.width(n + d), g = v.width(), b = v.height(), vt = (g > rt || b > ot) && n > o && t > s, st = r.aspectRatio ? n < ct && t < lt && n < p && t < y : (n < ct || t < lt) && (n < p || t < y), i.extend(r, {
                    dim: {
                        width: h(g),
                        height: h(b)
                    },
                    origWidth: p,
                    origHeight: y,
                    canShrink: vt,
                    canExpand: st,
                    wPadding: d,
                    hPadding: ht,
                    wrapSpace: b - k.outerHeight(!0),
                    skinSpace: k.height() - t
                }), !ut && r.autoHeight && t > s && t < a && !st && e.height("auto")
            },
            _getPosition: function(n) {
                var i = u.current,
                    r = u.getViewport(),
                    f = i.margin,
                    e = u.wrap.width() + f[1] + f[3],
                    o = u.wrap.height() + f[0] + f[2],
                    t = {
                        position: "absolute",
                        top: f[0],
                        left: f[3]
                    };
                return i.autoCenter && i.fixed && !n && o <= r.h && e <= r.w ? t.position = "fixed" : i.locked || (t.top += r.y, t.left += r.x), t.top = h(Math.max(t.top, t.top + (r.h - o) * i.topRatio)), t.left = h(Math.max(t.left, t.left + (r.w - e) * i.leftRatio)), t
            },
            _afterZoomIn: function() {
                var n = u.current;
                n && (u.isOpen = u.isOpened = !0, u.wrap.css("overflow", "visible").addClass("fancybox-opened"), u.update(), (n.closeClick || n.nextClick && u.group.length > 1) && u.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                    i(t.target).is("a") || i(t.target).parent().is("a") || (t.preventDefault(), u[n.closeClick ? "close" : "next"]())
                }), n.closeBtn && i(n.tpl.closeBtn).appendTo(u.skin).bind("click.fb", function(n) {
                    n.preventDefault(), u.close()
                }), n.arrows && u.group.length > 1 && ((n.loop || n.index > 0) && i(n.tpl.prev).appendTo(u.outer).bind("click.fb", u.prev), (n.loop || n.index < u.group.length - 1) && i(n.tpl.next).appendTo(u.outer).bind("click.fb", u.next)), u.trigger("afterShow"), n.loop || n.index !== n.group.length - 1 ? u.opts.autoPlay && !u.player.isActive && (u.opts.autoPlay = !1, u.play(!0)) : u.play(!1))
            },
            _afterZoomOut: function(n) {
                n = n || u.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(u, {
                    group: {},
                    opts: {},
                    router: !1,
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    isClosing: !1,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                }), u.trigger("afterClose", n)
            }
        }), u.transitions = {
            getOrigPosition: function() {
                var n = u.current,
                    f = n.element,
                    t = n.orig,
                    i = {},
                    e = 50,
                    o = 50,
                    s = n.hPadding,
                    c = n.wPadding,
                    r = u.getViewport();
                return !t && n.isDom && f.is(":visible") && (t = f.find("img:first"), t.length || (t = f)), a(t) ? (i = t.offset(), t.is("img") && (e = t.outerWidth(), o = t.outerHeight())) : (i.top = r.y + (r.h - o) * n.topRatio, i.left = r.x + (r.w - e) * n.leftRatio), (u.wrap.css("position") === "fixed" || n.locked) && (i.top -= r.y, i.left -= r.x), i = {
                    top: h(i.top - s * n.topRatio),
                    left: h(i.left - c * n.leftRatio),
                    width: h(e + c),
                    height: h(o + s)
                }
            },
            step: function(n, t) {
                var r, s, e, i = t.prop,
                    o = u.current,
                    h = o.wrapSpace,
                    c = o.skinSpace;
                (i === "width" || i === "height") && (r = t.end === t.start ? 1 : (n - t.start) / (t.end - t.start), u.isClosing && (r = 1 - r), s = i === "width" ? o.wPadding : o.hPadding, e = n - s, u.skin[i](f(i === "width" ? e : e - h * r)), u.inner[i](f(i === "width" ? e : e - h * r - c * r)))
            },
            zoomIn: function() {
                var n = u.current,
                    t = n.pos,
                    r = n.openEffect,
                    f = r === "elastic",
                    e = i.extend({
                        opacity: 1
                    }, t);
                delete e.position, f ? (t = this.getOrigPosition(), n.openOpacity && (t.opacity = .1)) : r === "fade" && (t.opacity = .1), u.wrap.css(t).animate(e, {
                    duration: r === "none" ? 0 : n.openSpeed,
                    easing: n.openEasing,
                    step: f ? this.step : null,
                    complete: u._afterZoomIn
                })
            },
            zoomOut: function() {
                var n = u.current,
                    i = n.closeEffect,
                    r = i === "elastic",
                    t = {
                        opacity: .1
                    };
                r && (t = this.getOrigPosition(), n.closeOpacity && (t.opacity = .1)), u.wrap.animate(t, {
                    duration: i === "none" ? 0 : n.closeSpeed,
                    easing: n.closeEasing,
                    step: r ? this.step : null,
                    complete: u._afterZoomOut
                })
            },
            changeIn: function() {
                var i = u.current,
                    s = i.nextEffect,
                    t = i.pos,
                    o = {
                        opacity: 1
                    },
                    r = u.direction,
                    e = 200,
                    n;
                t.opacity = .1, s === "elastic" && (n = r === "down" || r === "up" ? "top" : "left", r === "down" || r === "right" ? (t[n] = h(f(t[n]) - e), o[n] = "+=" + e + "px") : (t[n] = h(f(t[n]) + e), o[n] = "-=" + e + "px")), s === "none" ? u._afterZoomIn() : u.wrap.css(t).animate(o, {
                    duration: i.nextSpeed,
                    easing: i.nextEasing,
                    complete: u._afterZoomIn
                })
            },
            changeOut: function() {
                var n = u.previous,
                    r = n.prevEffect,
                    f = {
                        opacity: .1
                    },
                    t = u.direction,
                    e = 200;
                r === "elastic" && (f[t === "down" || t === "up" ? "top" : "left"] = (t === "up" || t === "left" ? "-" : "+") + "=" + e + "px"), n.wrap.animate(f, {
                    duration: r === "none" ? 0 : n.prevSpeed,
                    easing: n.prevEasing,
                    complete: function() {
                        i(this).trigger("onReset").remove()
                    }
                })
            }
        }, u.helpers.overlay = {
            defaults: {
                closeClick: !0,
                speedOut: 200,
                showEarly: !0,
                css: {},
                locked: !s,
                fixed: !0
            },
            overlay: null,
            fixed: !1,
            el: i("html"),
            create: function(n) {
                var t;
                n = i.extend({}, this.defaults, n), this.overlay && this.close(), t = u.coming ? u.coming.parent : n.parent, this.overlay = i('<div class="fancybox-overlay"><\/div>').appendTo(t && t.lenth ? t : "body"), this.fixed = !1, n.fixed && u.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
            },
            open: function(n) {
                var t = this;
                n = i.extend({}, this.defaults, n), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(n), this.fixed || (o.bind("resize.overlay", i.proxy(this.update, this)), this.update()), n.closeClick && this.overlay.bind("click.overlay", function(n) {
                    if (i(n.target).hasClass("fancybox-overlay")) return u.isActive ? u.close() : t.close(), !1
                }), this.overlay.css(n.css).show()
            },
            close: function() {
                o.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), this.el.removeClass("fancybox-lock"), o.scrollTop(this.scrollV).scrollLeft(this.scrollH)), i(".fancybox-overlay").remove().hide(), i.extend(this, {
                    overlay: null,
                    fixed: !1
                })
            },
            update: function() {
                var n = "100%",
                    i;
                this.overlay.width(n).height("100%"), y ? (i = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), e.width() > i && (n = e.width())) : e.width() > o.width() && (n = e.width()), this.overlay.width(n).height(e.height())
            },
            onReady: function(n, t) {
                var r = this.overlay;
                i(".fancybox-overlay").stop(!0, !0), r || this.create(n), n.locked && this.fixed && t.fixed && (t.locked = this.overlay.append(t.wrap), t.fixed = !1), n.showEarly === !0 && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(n, t) {
                t.locked && !this.el.hasClass("fancybox-lock") && (this.fixPosition !== !1 && i("*").filter(function() {
                    return i(this).css("position") === "fixed" && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
                }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin"), this.scrollV = o.scrollTop(), this.scrollH = o.scrollLeft(), this.el.addClass("fancybox-lock"), o.scrollTop(this.scrollV).scrollLeft(this.scrollH)), this.open(n)
            },
            onUpdate: function() {
                this.fixed || this.update()
            },
            afterClose: function(n) {
                this.overlay && !u.coming && this.overlay.fadeOut(n.speedOut, i.proxy(this.close, this))
            }
        }, u.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function(n) {
                var o = u.current,
                    r = o.title,
                    s = n.type,
                    t, e;
                if (i.isFunction(r) && (r = r.call(o.element, o)), c(r) && i.trim(r) !== "") {
                    t = i('<div class="fancybox-title fancybox-title-' + s + '-wrap">' + r + "<\/div>");
                    switch (s) {
                        case "inside":
                            e = u.skin;
                            break;
                        case "outside":
                            e = u.wrap;
                            break;
                        case "over":
                            e = u.inner;
                            break;
                        default:
                            e = u.skin, t.appendTo("body"), y && t.width(t.width()), t.wrapInner('<span class="child"><\/span>'), u.current.margin[2] += Math.abs(f(t.css("margin-bottom")))
                    }
                    t[n.position === "top" ? "prependTo" : "appendTo"](e)
                }
            }
        }, i.fn.fancybox = function(n) {
            var r, f = i(this),
                t = this.selector || "",
                o = function(e) {
                    var o = i(this).blur(),
                        c = r,
                        h, s;
                    e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || o.is(".fancybox-wrap") || (h = n.groupAttr || "data-fancybox-group", s = o.attr(h), s || (h = "rel", s = o.get(0)[h]), s && s !== "" && s !== "nofollow" && (o = t.length ? i(t) : f, o = o.filter("[" + h + '="' + s + '"]'), c = o.index(this)), n.index = c, u.open(o, n) !== !1 && e.preventDefault())
                };
            return n = n || {}, r = n.index || 0, t && n.live !== !1 ? e.undelegate(t, "click.fb-start").delegate(t + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", o) : f.unbind("click.fb-start").bind("click.fb-start", o), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, e.ready(function() {
            i.scrollbarWidth === r && (i.scrollbarWidth = function() {
                var n = i('<div style="width:50px;height:50px;overflow:auto"><div/><\/div>').appendTo("body"),
                    t = n.children(),
                    r = t.innerWidth() - t.height(99).innerWidth();
                return n.remove(), r
            }), i.support.fixedPosition === r && (i.support.fixedPosition = function() {
                var n = i('<div style="position:fixed;top:20px;"><\/div>').appendTo("body"),
                    t = n[0].offsetTop === 20 || n[0].offsetTop === 15;
                return n.remove(), t
            }()), i.extend(u.defaults, {
                scrollbarWidth: i.scrollbarWidth(),
                fixed: i.support.fixedPosition,
                parent: i("body")
            })
        }), e.load(function() {
            var t, r;
            t = i(n).width(), p.addClass("fancybox-lock-test"), r = i(n).width(), p.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (r - t) + "px !important;}<\/style>").appendTo("head")
        })
    }(window, document, jQuery), "use strict";
jQuery(document).on("ready", function() {
    (function() {
        fullNavToggler(), mobileNavToggler(), stickyHeader(), searchFrom(), famousSlider(), clientsSlider(), reviewSlider(), stickyCheckOut(), galleryMember(), galleryWidget(), contactFormValidation(), googleMap(), accrodion()
    })(jQuery)
});
jQuery(window).on("load", function() {
    (function() {
        galleryMasonry()
    })(jQuery)
});
jQuery(window).on("scroll", function() {
    (function() {
        stickyHeader(), animation()
    })(jQuery)
});
Object.size = function(n) {
        var t = 0,
            i;
        for (i in n) n.hasOwnProperty(i) && t++;
        return t
    }, void 0 == window.jQuery && alert("dzstabs.js -> jQuery is not defined or improperly declared ( must be included at the start of the head tag ), you need jQuery for this plugin"), jQuery.fn.outerHTML = function(n) {
        return n ? this.before(n).remove() : jQuery("<p>").append(this.eq(0).clone()).html()
    }, window.dzsztm_self_options = {}, window.dzsshuffle_currTarget = null, window.dzsshuffle_finaltext = "", window.dzsshuffle_finaltext_arr = "", window.dzsshuffle_temp_arr = "",
    function(n) {
        n.fn.prependOnce = function(t, i) {
            var u = n(this),
                r;
            return "undefined" == typeof i && (r = /class="(.*?)"/.exec(t), "undefined" != typeof r[1] && (i = "." + r[1])), 1 > u.children(i).length ? (u.prepend(t), !0) : !1
        }, n.fn.appendOnce = function(t, i) {
            var u = n(this),
                r;
            return "undefined" == typeof i && (r = /class="(.*?)"/.exec(t), "undefined" != typeof r[1] && (i = "." + r[1])), 1 > u.children(i).length ? (u.append(t), !0) : !1
        }, n.fn.zoomtimeline = function(a) {
            if ("undefined" == typeof a && "undefined" != typeof n(this).attr("data-options") && "" != n(this).attr("data-options")) {
                var c = n(this).attr("data-options");
                eval("window.dzsztm_self_options = " + c), a = n.extend({}, window.dzsztm_self_options), window.dzsztm_self_options = n.extend({}, {})
            }
            a = n.extend({
                design_skin: "skin-default",
                settings_mode: "mode-default",
                mode_slider_variation_content_position: "top",
                design_transition: "default",
                design_tabswidth: "default",
                design_maxwidth: "4000",
                init_on: "document_ready",
                settings_makeFunctional: !1,
                settings_appendWholeContent: !1,
                toggle_breakpoint: "320",
                toggle_type: "accordion",
                refresh_tab_height: "0",
                startItem: "default",
                outer_menu: null,
                color_highlight: "rgba(220, 167, 167, 1)",
                mode_3dslider_item_width: "300",
                mode_3dslider_item_height: "400",
                mode_3dslider_mode: "normal",
                mode_yearslist_start_from_left: "off",
                circuit_the_timeline: "on",
                settings_isotope_settings: {
                    getSortData: {
                        number: function(t) {
                            return parseInt(n(t).attr("data-sort"), 10)
                        }
                    },
                    itemSelector: ".isotope-item",
                    sortBy: "number",
                    layoutMode: "packery",
                    masonry: {
                        columnWidth: ".grid-sizer"
                    },
                    packery: {
                        columnWidth: 1
                    }
                }
            }, a), this.each(function() {
                function tt() {
                    vt = n(window).scrollTop(), at = n(window).height(), yt = t.offset().top, vt + at > yt - 30 && ft()
                }

                function ft() {
                    var u, f;
                    if (n(window).off("scroll", tt), t.hasClass("dzsztm-loaded") || t.hasClass("inited")) et();
                    else {
                        if (it = "string" == typeof t.attr("class") ? t.attr("class") : t.get(0).className, i = t.attr("id"), "undefined" == typeof i || "" == i) {
                            for (u = 0, f = "zoomtimeline" + u; 0 < n("#" + f).length;) u++, f = "zoomtimeline" + u;
                            i = f, t.attr("id", i), t.addClass(i)
                        }
                        if (t.parent().find(".feed-from-3dslider").length && (d = t.parent().find(".feed-from-3dslider").eq(0)), -1 == it.indexOf("skin-") && t.addClass(a.design_skin), t.hasClass("skin-default") && (a.design_skin = "skin-default"), -1 == it.indexOf("mode-") && t.addClass(a.settings_mode), t.hasClass("mode-default") && (a.settings_mode = "mode-default"), t.hasClass("mode-oncenter") && (a.settings_mode = "mode-oncenter"), t.hasClass("mode-slider") && (a.settings_mode = "mode-slider"), t.hasClass("mode-slider-variation") && (a.settings_mode = "mode-slider-variation"), t.hasClass("mode-yearslist") && (a.settings_mode = "mode-yearslist"), t.hasClass("mode-3dslider") && (a.settings_mode = "mode-3dslider"), t.hasClass("mode-blackwhite") && (a.settings_mode = "mode-blackwhite"), t.hasClass("mode-masonry") && (a.settings_mode = "mode-masonry"), t.addClass("circuit-the-timeline-" + a.circuit_the_timeline), "default" == a.design_transition && (a.design_transition = "fade"), "mode-slider" == a.settings_mode && !window.dzsscr_init || "mode-slider-variation" == a.settings_mode && !window.dzsscr_init) return console.info(a.settings_mode + " zoomtimeline - scroller must be inited for this mode"), !1;
                        if ("mode-3dslider" == a.settings_mode) {
                            e = parseInt(a.mode_3dslider_item_width, 10), w = parseInt(a.mode_3dslider_item_height, 10), t.prepend('<style class="zoomtimeline-style-con"><\/style>'), lt = t.children(".zoomtimeline-style-con").eq(0);
                            var u = "",
                                f = String(a.color_highlight).replace("1)", "0.5)"),
                                h = String(a.color_highlight).replace("1)", "0.7)"),
                                u = u + (".zoomtimeline.mode-3dslider." + i + " .yearlist-con:after, .zoomtimeline.mode-3dslider." + i + " .yearlist-con .yearlist .year figure{ background-color: " + a.color_highlight + "; } .zoomtimeline.mode-3dslider." + i + " .details-container > .detail .detail-image--border{ border-color: " + h + "; } .zoomtimeline.mode-3dslider." + i + " .details-container > .next-next-item .detail-image--border, .zoomtimeline.mode-3dslider." + i + " .details-container > .prev-prev-item .detail-image--border{ border-color: " + f + " } ");
                            0 == isNaN(e) && (u = u + "" + (".zoomtimeline.mode-3dslider." + i + " .details-container > .detail { width: " + e + "px; }           .zoomtimeline.mode-3dslider." + i + " .yearlist-con .yearlist-container{ top: " + (w / 2 + 60) + "px; height: " + w + "px; }    .zoomtimeline.mode-3dslider." + i + " .yearlist-con .yearlist .year.curr-item{  top: " + (w / 2 + 18) + "px; }    .zoomtimeline.mode-3dslider." + i + " .yearlist-con:after{  top: " + (w / 2 + 90) + "px; }     .zoomtimeline.mode-3dslider." + i + " .details-container > .detail .detail-image, .zoomtimeline.mode-3dslider." + i + " .details-container > .detail .detail-image--border{ height: " + w + "px;  } .zoomtimeline.mode-3dslider." + i + " .details-container > .detail{ margin-left: " + -(e / 2) + "px; }  .zoomtimeline.mode-3dslider." + i + " .details-container >.next-item,  .zoomtimeline.mode-3dslider." + i + " .details-container  >.prev-item{ transform: translate3d(calc(" + e / 2 + "px + 3vw),0,0); -webkit-transform: translate3d(calc(" + e / 2 + "px + 3vw),0,0); }  .zoomtimeline.mode-3dslider." + i + " .details-container  >.prev-item{ transform: translate3d(calc(" + -(e / 2) + "px - 3vw),0,0); -webkit-transform: translate3d(calc(" + -(e / 2) + "px - 3vw),0,0); }       .zoomtimeline.mode-3dslider." + i + " .details-container >.next-next-item{ transform: translate3d(calc(" + e + "px + 3vw),0,0); -webkit-transform: translate3d(calc(" + e + "px + 3vw),-25px,0); }         .zoomtimeline.mode-3dslider." + i + " .details-container  >.prev-prev-item{ transform: translate3d(calc(" + -e + "px - 3vw),0,0); -webkit-transform: translate3d(calc(" + -e + "px - 3vw),0,0); }")), lt.html(u)
                        }
                        s = t.children(".items"), "mode-slider" == a.settings_mode && (t.append('<div class="scroller-con skin_cerc auto-height" style="height: auto" data-options=\'{ enable_easing : "on" }\'><div class="inner inner-for-horizontal"><\/div><\/div>'), t.append('<div class="sc-descriptions"><div class="sc-descriptions-content"><\/div><\/div>')), "mode-slider-variation" == a.settings_mode && (t.addClass("content-position-" + a.mode_slider_variation_content_position), "top" == a.mode_slider_variation_content_position ? (t.append('<div class="sc-descriptions"><div class="sc-descriptions-content"><\/div><\/div>'), t.append('<div class="scroller-con skin_luna auto-height" style="height: auto" data-options=\'{ enable_easing : "on" }\'><div class="inner inner-for-horizontal"><\/div><\/div>')) : (t.append('<div class="scroller-con skin_luna auto-height" style="height: auto" data-options=\'{ enable_easing : "on" }\'><div class="inner inner-for-horizontal"><\/div><\/div>'), t.append('<div class="sc-descriptions"><div class="sc-descriptions-content"><\/div><\/div>'))), "mode-yearslist" == a.settings_mode && (t.append('<div class="yearlist-con"><div class="yearlist-container"><div class="yearlist-line"><\/div><div class="yearlist"><\/div><\/div><\/div>'), t.append('<div class="details-container"><div class="diamond-arrow-left"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"> <style type="text/css"> <![CDATA[ .st0{fill:#EEEEEE;} .st1{fill:#222222;} ]\]> <\/style> <g id="Layer_1"> <\/g> <g id="Layer_2"> <rect x="8.787" y="8.787" transform="matrix(0.7071 0.7071 -0.7071 0.7071 30.0006 -12.4271)" class="st1" width="42.427" height="42.426"/> <\/g> <g id="Layer_3"> <g> <path class="st0" d="M17.154,31.003c0,0.129,0.028,0.257,0.078,0.379c0.048,0.119,0.121,0.225,0.208,0.315 c0.002,0.005,0.005,0.007,0.007,0.012l6.012,6.012c0.391,0.392,1.025,0.392,1.416,0c0.392-0.389,0.392-1.026,0-1.417l-4.3-4.302 h19.624c0.552,0,1.002-0.449,1.002-1.003c0-0.553-0.45-1.001-1.002-1.001H20.575l4.3-4.301c0.392-0.391,0.392-1.026,0-1.416 c-0.391-0.392-1.025-0.392-1.416,0l-6.012,6.011c-0.002,0.002-0.005,0.008-0.007,0.011c-0.087,0.09-0.16,0.196-0.208,0.314 c-0.052,0.123-0.078,0.253-0.078,0.382l0,0C17.154,31.002,17.154,31.002,17.154,31.003z"/> <\/g> <\/g> <\/svg><\/div><div class="diamond-arrow-right"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"> <style type="text/css"> <![CDATA[ .st0{fill:#EEEEEE;} .st1{fill:#222222;} ]\]> <\/style> <g id="Layer_1"> <\/g> <g id="Layer_2"> <rect x="8.787" y="8.787" transform="matrix(0.7071 0.7071 -0.7071 0.7071 30.0006 -12.4271)" class="st1" width="42.427" height="42.426"/> <\/g> <g id="Layer_3"> <g> <path class="st0" d="M41.201,29.998c0-0.129-0.028-0.257-0.078-0.379c-0.048-0.12-0.121-0.226-0.209-0.316 c-0.002-0.005-0.005-0.007-0.007-0.012l-6.023-6.023c-0.392-0.393-1.027-0.393-1.419,0c-0.393,0.389-0.393,1.028,0,1.419 l4.309,4.311H18.109c-0.553,0-1.004,0.45-1.004,1.006c0,0.554,0.451,1.003,1.004,1.003h19.664l-4.309,4.31 c-0.393,0.391-0.393,1.028,0,1.418c0.392,0.393,1.027,0.393,1.419,0l6.023-6.022c0.002-0.002,0.005-0.008,0.007-0.011 c0.088-0.09,0.161-0.196,0.209-0.315c0.052-0.123,0.078-0.253,0.078-0.382l0,0C41.201,29.999,41.201,29.999,41.201,29.998z"/> <\/g> <\/g> <\/svg> <\/div><div class="clear"><\/div><\/div>'), r = t.children(".details-container"), o = t.find(".yearlist").eq(0)), "mode-3dslider" == a.settings_mode && (t.append('<div class="yearlist-con"><div class="yearlist-container"><div class="yearlist-container-inner"><div class="yearlist-line"><\/div><div class="yearlist"><\/div><\/div><\/div><\/div>'), t.append('<div class="details-container"><div class="clear"><\/div><\/div>'), r = t.children(".details-container"), o = t.find(".yearlist").eq(0)), et(), "default" == a.startItem && (a.startItem = 0), t.get(0).api_gotoItem = l, t.get(0).api_goto_item_next = k, t.get(0).api_goto_item_prev = b;
                        n(window).on("resize", ct);
                        ct(), u = 200, "mode-yearslist" == a.settings_mode && (u = 500, l(a.startItem), t.on("mouseover", c), t.on("mouseleave", c), n(document).on("keydown", ht), t.find(".diamond-arrow-left,.diamond-arrow-right").on("click", c)), "mode-3dslider" == a.settings_mode && (u = 500, l(a.startItem), t.on("click", c), t.on("mouseover", c), t.on("mouseleave", c), n(document).on("keydown", ht), is_touch_device() && bt()), "mode-slider-variation" == a.settings_mode && (u = 200, setTimeout(function() {
                            l(0)
                        }, u)), setTimeout(function() {
                            t.addClass("ztm-ready")
                        }, u), t.addClass("inited")
                    }
                }

                function et() {
                    var i = 0,
                        r;
                    s && (s.children(".ztm-item:not(.inited)").each(function() {
                        var r = n(this),
                            u;
                        if ("mode-default" == a.settings_mode && 0 == r.children(".hex-icon").length && r.prepend('<div class="hex-icon"><i class="the-icon fa fa-music"><\/i><\/div>'), "mode-oncenter" == a.settings_mode && (0 == r.children(".center").length && r.append('<div class="clear"><\/div>'), 0 == r.children(".the-image-con").length && (r.attr("data-image") ? r.children(".ztm-content").eq(0).before('<div class="the-image-con"><div class="the-image" style="background-image: url(' + r.attr("data-image") + ');"><\/div><\/div>') : r.addClass("no-image"))), "mode-slider" == a.settings_mode && (u = "260px", r.find(".ztm-content").css("width") && "0px" != r.find(".ztm-content").css("width") && "auto" != r.find(".ztm-content").css("width") && (u = r.find(".ztm-content").css("width")), u = "" + ('<div style="width: ' + u + ';" class="the-item">') + '<div class="the-bg"><\/div><div class="the-after"><\/div>', r.attr("data-image") && (u += '<div class="feature-image" style="background-image: url(' + r.attr("data-image") + '); "><\/div>'), u += '<div class="hex-desc">' + r.find(".hex-desc").html() + "<\/div>", u += '<div class="the-content">' + r.find(".ztm-content").html() + "<\/div><\/div>", 0 == i % 2 ? t.find(".inner-for-horizontal").append(u) : t.find(".sc-descriptions-content").append(u), r.attr("data-image") && p++), "mode-slider-variation" == a.settings_mode && (t.find(".inner-for-horizontal").append('<img src="' + r.attr("data-image") + '"/>'), u = "300px", t.find(".sc-descriptions-content").append('<div style="width: ' + u + ';" class="sc-description"><div class="the-bg"><\/div><div class="the-after"><\/div><div class="the-content">' + r.find(".ztm-content").html() + "<\/div><\/div>"), r.attr("data-image") && p++), "mode-blackwhite" == a.settings_mode && 0 == r.children(".image-con").length && (1 == r.parent().children().index(r) % 2 ? r.append('<div class="image-con"><img class="fullwidth" src="' + r.attr("data-image") + '"/><\/div>') : r.prepend('<div class="image-con"><img class="fullwidth" src="' + r.attr("data-image") + '"/><\/div>')), "mode-masonry" == a.settings_mode && (console.info(r), r.addClass("isotope-item"), r.attr("data-sort", 10 * (i + 1)), r.wrapInner('<div class="ztm-item--inner"><\/div>'), 0 == r.children(".ztm-item--inner").eq(0).children(".image-con").length && r.children(".ztm-item--inner").append('<div class="image-con"><img class="fullwidth" src="' + r.attr("data-image") + '"/><\/div>'), 1 == r.children(".ztm-item--inner").children(".hex-desc-con").length && r.children(".ztm-item--inner").children(".ztm-content").append(r.children(".ztm-item--inner").children(".hex-desc-con")), r.attr("data-image") ? p++ : 0 < r.children(".ztm-item--inner").children(".image-con").length && p++), "mode-yearslist" == a.settings_mode && (t.find(".yearlist").append('<div class="year"><span class="the-year">' + r.find(".hex-desc").html() + "<\/span><\/div>"), u = '<div class="detail"><div class="float-left detail-image-con" style=""><img class="detail-image" src="' + r.attr("data-image") + '"/><div class="detail-image-shadow-con"><div class="detail-image-shadow-left"><\/div><div class="detail-image-shadow-right"><\/div><\/div><\/div><div class="overflow-it detail-excerpt">' + r.find(".ztm-content").html() + '<\/div><div class="clear"><\/div>', 0 < r.children(".extrahtml").length && (u += r.children(".extrahtml").eq(0).html()), u += "<\/div>", t.find(".details-container").append(u)), "mode-3dslider" == a.settings_mode) {
                            t.find(".yearlist").append('<div class="year"><div class="the-year">' + r.find(".hex-desc").html() + "<\/div><figure><\/figure><\/div>");
                            var u = r.find(".ztm-content").html(),
                                f = /<h3.*?class="the-heading".*?>(.*?)<\/h3>/g.exec(u),
                                e = "";
                            f && f[0] && (e = f[0]), u = u.replace(/<h3.*?class="the-heading".*?>(.*?)<\/h3>/g, ""), u = '<div class="detail">' + e + '<div class="detail-image-con" style=""><div class="detail-image--border"><\/div><div class="detail-image" style="background-image:url(' + r.attr("data-image") + ');"><\/div><div class="detail-image-shadow-con"><div class="detail-image-shadow-left"><\/div><div class="detail-image-shadow-right"><\/div><\/div><\/div><div class=" detail-excerpt">' + u + '<\/div><div class="clear"><\/div>', 0 < r.children(".extrahtml").length && (u += r.children(".extrahtml").eq(0).html()), u += "<\/div>", t.find(".details-container").append(u)
                        }
                        r.addClass("inited"), i++
                    }), s.children(".ztm-item").each(function() {
                        var i = n(this),
                            t, r;
                        "mode-slider-variation" == a.settings_mode && (t = new Image, t.onload = st, t.src = i.attr("data-image")), "mode-masonry" == a.settings_mode && (r = "", i.attr("data-image") ? r = i.attr("data-image") : 0 < i.children(".ztm-item--inner").children(".image-con").length && (r = i.children(".ztm-item--inner").children(".image-con").find("img").eq(0).attr("src")), t = new Image, t.onload = st, t.src = r)
                    }), "mode-slider" == a.settings_mode && (r = {
                        settings_skin: "skin_cerc",
                        settings_replacewheelxwithy: "off",
                        settings_refreshonresize: "on",
                        force_onlyx: "on",
                        settings_disableSpecialIosFeatures: "off",
                        secondCon: t.find(".sc-descriptions-content").eq(0),
                        enable_easing: "on",
                        enable_easing_for_second_con: "on",
                        easing_duration: 10
                    }, window.dzsscr_init(t.children(".scroller-con"), r)), "mode-slider-variation" == a.settings_mode && g({
                        calculate_year_position: !1
                    }), "mode-masonry" == a.settings_mode && 0 == p && ot(), "mode-yearslist" == a.settings_mode && (t.find(".year").off("click"), t.find(".year").on("click", c)))
                }

                function ot() {
                    var i = {
                            settings_replacewheelxwithy: "off",
                            settings_refreshonresize: "on",
                            force_onlyx: "on",
                            settings_disableSpecialIosFeatures: "off",
                            secondCon: t.find(".sc-descriptions-content").eq(0),
                            enable_easing: "on",
                            enable_easing_for_second_con: "on",
                            easing_duration: 7,
                            extra_html_scrollbarx: '<span class="the-year">' + t.find(".hex-desc").eq(0).text() + "<\/span>"
                        },
                        r;
                    window.dzsscr_init(t.children(".scroller-con"), i), r = t.find(".inner").eq(0), pt = r.width();
                    var f = 0,
                        u = 0,
                        e = 0,
                        o = 0;
                    r.children().each(function() {
                        var i = n(this);
                        "mode-slider-variation" == a.settings_mode && (i.width(), nt[f] = u, f++, e += i.width() / pt, i = parseInt(100 * u + 5, 10), t.find(".scrollbar > .scrollbarx").before('<div class="hexa-mark-con" style="left: ' + i + '%"><div class="hexa-inshow">' + s.children().eq(o).find(".hex-desc").html() + "<\/div><\/div>"), u = e), o++
                    }), "mode-slider-variation" == a.settings_mode && (t.children(".scroller-con").eq(0).get(0) && t.children(".scroller-con").eq(0).get(0).api_set_action_animate_scrollbar_end && t.children(".scroller-con").eq(0).get(0).api_set_action_animate_scrollbar_end(wt), t.find(".hexa-mark-con").off("click"), t.find(".hexa-mark-con").on("click", c)), "mode-masonry" == a.settings_mode && (i = {}, i = n.extend(i, a.settings_isotope_settings), i.transitionDuration = "0s", s.isotope(i), setTimeout(function() {
                        i.transitionDuration = "0.3s", s.isotope(i), t.addClass("dzszfl-ready-for-transitions")
                    }, 2e3)), "mode-masonry" != a.settings_mode && s.children().remove(), t.addClass("reinited-finished-loading-all-images")
                }

                function wt(n) {
                    var r;
                    n = -n.viewIndexX / (n.comWidth - n.totalWidth);
                    for (var i = 0, u = Math.abs(n - nt[i]), t = 0; t < nt.length; t++) r = Math.abs(n - nt[t]), r < u && (u = r, i = t);
                    n = i, n != v && l(n)
                }

                function st() {
                    p--, 0 >= p && ot()
                }

                function ht(t) {
                    n(this), ut && (37 == t.keyCode && b(), 39 == t.keyCode && k())
                }

                function c(i) {
                    var r = n(this);
                    return "mouseover" == i.type && (ut = !0), "mouseleave" == i.type && (ut = !1), "click" == i.type && (i = i.clientX - t.offset().left, t.offset(), r.hasClass("zoomtimeline") && (i < y / 2 - e / 2 && b(), i > y / 2 + e / 2 && k()), r.hasClass("year") && (i = r.parent().children().index(r), l(i)), r.hasClass("diamond-arrow-left") && b(), r.hasClass("diamond-arrow-right") && k(), r.hasClass("hexa-mark-con")) ? (t.children(".scroller-con").get(0) && t.children(".scroller-con").get(0).fn_scrollx_to && t.children(".scroller-con").get(0).fn_scrollx_to(parseInt(r.get(0).style.left, 10) / 100), !1) : void 0
                }

                function ct() {
                    n(window).width(), rt = y = t.width(), "mode-yearslist" == a.settings_mode && o && o.parent() && (rt = o.parent().width()), 900 > y ? t.addClass("under-900") : t.removeClass("under-900"), 600 > y ? t.addClass("under-600") : t.removeClass("under-600"), 400 > y ? t.addClass("under-400") : t.removeClass("under-400"), g()
                }

                function g(i) {
                    var r = {
                            calculate_year_position: !0
                        },
                        u;
                    i && (r = n.extend(r, i)), "mode-yearslist" == a.settings_mode && r.calculate_year_position && f && o && (i = f.parent().children().index(f), r = 0, r = "on" == a.mode_yearslist_start_from_left ? -i * f.width() : rt / 2 - f.width() / 2 - i * f.width(), o.css({
                        left: r
                    })), "mode-slider-variation" == a.settings_mode && (u = t.find(".sc-descriptions-content").eq(0), u.children(".sc-description").each(function() {
                        n(this).children(".the-after,.the-bg").height(u.height())
                    }))
                }

                function bt() {
                    t.addClass("swipe-enabled");
                    var i = 0,
                        r = 0,
                        u = !1,
                        n = t,
                        f = null;
                    n.on("touchstart", function(n) {
                        n && n.originalEvent && (i = n.originalEvent.touches[0].pageX), f = t, u = !0, t.addClass("closedhand"), console.info("TRIGGERED TOUCH START")
                    });
                    n.on("swipeleft", function() {
                        console.info("SWIPE LEFT")
                    });
                    n.on("touchmove", function(n) {
                        0 != u && (r = n.originalEvent.touches[0].pageX)
                    });
                    n.on("touchend", function() {
                        u = !1, f == t && (r - i < -(y / 5) && k(), r - i > y / 5 && (console.info("COMMON SWIPE LEFT"), b())), t.removeClass("closedhand")
                    })
                }

                function b() {
                    if (h = v, h--, 0 > h && (h = s.children(".ztm-item").length - 1, "off" == a.circuit_the_timeline)) return !1;
                    l(h)
                }

                function k() {
                    if (h = v, h++, h >= s.children(".ztm-item").length && (h = 0, "off" == a.circuit_the_timeline)) return !1;
                    l(h)
                }

                function l(i) {
                    var h = null,
                        c = null,
                        l = !0;
                    if (v < i || (l = !1), t.removeClass("first-item-active last-item-active"), 0 == i && t.addClass("first-item-active"), i == s.children().length - 1 && t.addClass("last-item-active"), "mode-yearslist" == a.settings_mode && (f = t.find(".yearlist > .year").eq(i), t.find(".yearlist > .year").removeClass("active"), f.addClass("active"), -1 < v && (c = r.children(".detail").eq(v), l ? (c.css({
                            left: "0%",
                            opacity: 1
                        }), c.animate({
                            left: "-100%",
                            opacity: 0
                        }, {
                            queue: !1,
                            duration: 300,
                            complete: function() {
                                n(this).removeClass("active")
                            }
                        })) : (c.css({
                            left: "0%",
                            opacity: 1
                        }), c.animate({
                            left: "100%",
                            opacity: 0
                        }, {
                            queue: !1,
                            duration: 300,
                            complete: function() {
                                n(this).removeClass("active")
                            }
                        })), r.css("height", c.outerHeight())), r && (h = r.children(".detail").eq(i), l ? h.css({
                            left: "100%",
                            opacity: 0
                        }) : h.css({
                            left: "-100%",
                            opacity: 0
                        }), h.animate({
                            left: "0%",
                            opacity: 1
                        }, {
                            queue: !1,
                            duration: 300,
                            complete: function() {
                                n(this).addClass("active")
                            }
                        }), setTimeout(function() {
                            r.css("height", h.outerHeight()), setTimeout(function() {
                                r.css("height", "auto")
                            }, 300)
                        }, 100)), o && g({
                            calculate_year_position: !0
                        })), "mode-3dslider" == a.settings_mode) {
                        for (f = t.find(".yearlist > .year").eq(i), t.find(".yearlist > .year").removeClass("active prev-prev-prev-item prev-prev-item prev-item curr-item next-item next-next-item next-next-next-item"), f.addClass("active"), f.prev().prev().addClass("prev-prev-item"), f.prev().addClass("prev-item"), f.addClass("curr-item"), f.next().addClass("next-item"), f.next().next().addClass("next-next-item"), o.css("left", 40 - 20 * i + "%"), u = i + 3; u < r.children(".detail").length; u++) c = o.children(".year").eq(u), c.addClass("next-next-next-item");
                        for (u = 0; u < i - 2; u++) c = o.children(".year").eq(u), c.addClass("prev-prev-prev-item");
                        if (r) {
                            for (h = r.children(".detail").eq(i), r.children().removeClass("prev-prev-prev-item prev-prev-item prev-item curr-item next-item next-next-item next-next-next-item"), u = i + 3; u < r.children(".detail").length; u++) c = r.children(".detail").eq(u), c.addClass("next-next-next-item");
                            for (u = 0; u < i - 2; u++) c = r.children(".detail").eq(u), c.addClass("prev-prev-prev-item");
                            h.prev().prev().addClass("prev-prev-item"), h.prev().addClass("prev-item"), h.addClass("curr-item"), h.next().addClass("next-item"), h.next().next().addClass("next-next-item"), r.css("height", h.outerHeight()), setTimeout(function() {}, 500), is_touch_device() && setTimeout(function() {
                                r.css("height", h.outerHeight())
                            }, 1e3), setTimeout(function() {
                                r.css("height", h.outerHeight()), setTimeout(function() {}, 300)
                            }, 100)
                        }
                        o && g({
                            calculate_year_position: !0
                        }), d && (d.after(d.clone()), d.next().css("background-image", "url()"))
                    }
                    "mode-slider-variation" == a.settings_mode && (t.find(".sc-descriptions-content").children().removeClass("active"), h = t.find(".sc-descriptions-content").children().eq(i), -1 < i && shuffleText(t.find(".scrollbarx .the-year").eq(0), t.find(".hexa-inshow").eq(i).text()), h.addClass("active")), v = i
                }
                var t = n(this),
                    it = "",
                    i = "",
                    v = -1,
                    r = null,
                    o = null,
                    f = null,
                    s = null,
                    lt = null,
                    u = 0,
                    at, y, rt = 0,
                    vt = 0,
                    yt = 0,
                    h = v = -1,
                    p = 0,
                    ut = !1,
                    d = null,
                    nt = [],
                    pt = 0,
                    e = 0,
                    w = 0;
                return "document_ready" == a.init_on && ft(), "scroll" == a.init_on && (n(window).on("scroll", tt), tt()), this
            })
        }, window.dzsztm_init = function(t, i) {
            if ("undefined" != typeof i && "undefined" != typeof i.init_each && 1 == i.init_each) {
                var r = 0,
                    u;
                for (u in i) r++;
                1 == r && (i = void 0), n(t).each(function() {
                    n(this).zoomtimeline(i)
                })
            } else n(t).zoomtimeline(i)
        }
    }(jQuery), jQuery(document).ready(function() {
        dzsztm_init(".zoomtimeline.auto-init", {
            init_each: !0
        })
    }), ! function(n) {
        "use strict";

        function u() {
            var n = document.getElementById("nanobarcss");
            if (null === n) {
                if (n = document.createElement("style"), n.type = "text/css", n.id = "nanobarcss", document.head.insertBefore(n, document.head.firstChild), !n.styleSheet) return n.appendChild(document.createTextNode(r));
                n.styleSheet.cssText = r
            }
        }

        function t(n, t) {
            n.classList ? n.classList.add(t) : n.className += " " + t
        }

        function f(n) {
            function e() {
                var t = r - f;
                .1 > t && t > -.1 ? (o(f), u = 0, 100 === r && (i.style.height = 0, setTimeout(function() {
                    n(i)
                }, 300))) : (o(r - t / 4), setTimeout(s, 16))
            }

            function o(n) {
                r = n, i.style.width = r + "%"
            }

            function s(n) {
                n >= 0 ? (f = n, u || (u = 1, e())) : u && e()
            }
            var i = document.createElement("div"),
                r = 0,
                f = 0,
                u = 0,
                h = {
                    el: i,
                    go: s
                };
            return t(i, "bar"), h
        }

        function i(n) {
            function o(n) {
                i.removeChild(n)
            }

            function r() {
                var n = f(o);
                i.appendChild(n.el), e = n.go
            }
            n = n || {};
            var e, i = document.createElement("div"),
                s = {
                    el: i,
                    go: function(n) {
                        e(n), 100 === n && r()
                    }
                };
            return u(), t(i, "nanobar"), n.id && (i.id = n.id), n.classname && t(i, n.classname), n.target ? (i.style.position = "relative", n.target.insertBefore(i, n.target.firstChild)) : (i.style.position = "fixed", document.getElementsByTagName("body")[0].appendChild(i)), r(), s
        }
        var r = ".nanobar{width:100%;height:4px;z-index:9999;top:0}.bar{width:0;height:100%;transition:height .3s;background:orange}";
        "object" == typeof exports ? module.exports = i : "function" == typeof define && define.amd ? define([], function() {
            return i
        }) : n.Nanobar = i
    }(this),
    function(n) {
        n.PreImageLoad = function(t) {
            t = n.extend({}, {
                offset: -50,
                allowOverride: !0
            }, t), n("img").each(function() {
                if (n(this).data("pil-src")) {
                    var i = t.allowOverride && n(this).data("pil-offset") ? parseInt(n(this).data("pil-offset")) : t.offset;
                    n(window).height() + n(window).scrollTop() + i >= n(this).offset().top && n(this).attr("src", n(this).data("pil-src"))
                }
            })
        }
    }(jQuery)