jQuery(document).ready(function() {    var scripts = document.getElementsByTagName("script");    var jsFolder = "";    for (var i = 0; i < scripts.length; i++)    {        if (scripts[i].src && scripts[i].src.match(/initslider-1\.js/i))            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);    }    jQuery("#amazingslider-1").amazingslider({        jsfolder: jsFolder,        width: 1920,        height: 860,        skinsfoldername: "",        loadimageondemand: false,        watermarktextcss: "font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;padding:2px 4px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);",        watermarkstyle: "text",        enabletouchswipe: true,        fullscreen: true,        autoplayvideo: false,        addmargin: true,        watermarklinkcss: "text-decoration:none;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;",        watermarktext: "amazingslider.com",        watermarklink: "http://amazingslider.com?source=watermark",        randomplay: false,        isresponsive: true,        pauseonmouseover: false,        playvideoonclickthumb: true,        showwatermark: false,        slideinterval: 5000,        watermarkpositioncss: "display:block;position:absolute;bottom:4px;right:4px;",        watermarkimage: "",        fullwidth: false,        transitiononfirstslide: false,        watermarktarget: "_blank",        scalemode: "fill",        loop: 0,        autoplay: true,        navplayvideoimage: "play-32-32-0.png",        navpreviewheight: 60,        timerheight: 2,        descriptioncssresponsive: "font-size:50px;",        shownumbering: false,        skin: "Gallery",        textautohide: true,        addgooglefonts: false,        navshowplaypause: true,        navshowplayvideo: true,        navshowplaypausestandalonemarginx: 8,        navshowplaypausestandalonemarginy: 8,        navbuttonradius: 0,        navthumbnavigationarrowimageheight: 32,        navmarginy: 16,        lightboxshownavigation: false,        showshadow: false,        navfeaturedarrowimagewidth: 16,        navpreviewwidth: 120,        googlefonts: "",        textpositionmarginright: 200,        bordercolor: "#ffffff",        lightboxdescriptionbottomcss: "{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",        lightboxthumbwidth: 80,        navthumbnavigationarrowimagewidth: 32,        navthumbtitlehovercss: "text-decoration:underline;",        texteffectresponsivesize: 600,        arrowwidth: 32,        texteffecteasing: "easeOutCubic",        texteffect: "slide",        lightboxthumbheight: 60,        navspacing: 8,        playvideoimage: "playvideo-64-64-0.png",        ribbonimage: "ribbon_topleft-0.png",        navwidth: 48,        navheight: 48,        arrowtop: 50,        timeropacity: 0.6,        titlecssresponsive: "font-size:50px;",        navthumbnavigationarrowimage: "carouselarrows-32-32-0.png",        navshowplaypausestandalone: false,        texteffect1: "slide",        navpreviewbordercolor: "#ffffff",        ribbonposition: "topleft",        navthumbdescriptioncss: "display:block;position:relative;padding:2px 4px;text-align:left;font:normal 12px Arial,Helvetica,sans-serif;color:#333;",        lightboxtitlebottomcss: "{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",        arrowstyle: "mouseover",        navthumbtitleheight: 20,        textpositionmargintop: 220,        texteffectdelay: 500,        navswitchonmouseover: false,        navarrowimage: "navarrows-28-28-0.png",        arrowimage: "arrows-32-32-0.png",        textstyle: "dynamic",        playvideoimageheight: 64,        navfonthighlightcolor: "#666666",        showbackgroundimage: false,        navpreviewborder: 4,        navopacity: 0.8,        shadowcolor: "#aaaaaa",        navbuttonshowbgimage: true,        navbuttonbgimage: "navbuttonbgimage-28-28-0.png",        textbgcss: "display:none;",        playvideoimagewidth: 64,        navborder: 2,        navshowpreviewontouch: false,        bottomshadowimagewidth: 110,        showtimer: true,        navradius: 0,        navmultirows: false,        navshowpreview: false,        navpreviewarrowheight: 8,        navmarginx: 16,        navfeaturedarrowimage: "featuredarrow-16-8-0.png",        showribbon: false,        navstyle: "thumbnails",        textpositionmarginleft: 450,        descriptioncss: "display:inline; position:relative;font-weight: bold;font:24px \"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif,Arial; color:#333; white-space:nowrap;  background-color:#fff; margin-top:10px; padding:10px; ",        navplaypauseimage: "navplaypause-48-48-0.png",        backgroundimagetop: -10,        timercolor: "#ffffff",        numberingformat: "%NUM/%TOTAL ",        navfontsize: 12,        navhighlightcolor: "#333333",        texteffectdelay1: 1000,        navimage: "bullet-24-24-5.png",        texteffectduration1: 600,        navshowplaypausestandaloneautohide: true,        navbuttoncolor: "",        navshowarrow: false,        texteffectslidedirection: "left",        navshowfeaturedarrow: true,        lightboxbarheight: 64,        titlecss: "display:inline; position:relative; font:53px Georgia,serif,Arial; color:#fff; white-space:nowrap;",        ribbonimagey: 0,        ribbonimagex: 0,        texteffectresponsive: true,        texteffectslidedistance1: 120,        navrowspacing: 8,        navshowplaypausestandaloneposition: "bottomright",        shadowsize: 5,        lightboxthumbtopmargin: 12,        arrowhideonmouseleave: 1000,        navshowplaypausestandalonewidth: 48,        navfeaturedarrowimageheight: 8,        navshowplaypausestandaloneheight: 48,        navpreviewposition: "top",        backgroundimagewidth: 120,        navcolor: "#999999",        navthumbtitlewidth: 120,        lightboxthumbbottommargin: 8,        texteffectseparate: true,        arrowheight: 32,        arrowmargin: 8,        texteffectduration: 600,        bottomshadowimage: "bottomshadow-110-95-4.png",        border: 6,        lightboxshowdescription: false,        timerposition: "bottom",        navfontcolor: "#333333",        navthumbnavigationstyle: "arrow",        borderradius: 0,        navbuttonhighlightcolor: "",        textpositionstatic: "bottom",        navthumbstyle: "imageonly",        texteffecteasing1: "easeOutCubic",        textcss: "display:block; padding:8px 16px; text-align:left;",        navbordercolor: "#ffffff",        navpreviewarrowimage: "previewarrow-16-8-0.png",        showbottomshadow: true,        texteffectslidedistance: 30,        navdirection: "horizontal",        textpositionmarginstatic: 0,        backgroundimage: "",        navposition: "bottom",        texteffectslidedirection1: "right",        navpreviewarrowwidth: 16,        textformat: "White title",        bottomshadowimagetop: 98,        textpositiondynamic: "topleft",        navshowbuttons: false,        navthumbtitlecss: "display:block;position:relative;padding:2px 4px;text-align:left;font:bold 14px Arial,Helvetica,sans-serif;color:#333;",        textpositionmarginbottom: 200,        lightboxshowtitle: true,        fade: {            duration: 1000,            easing: "easeOutCubic",            checked: true        },        transition: "fade",        isfullscreen: true,        scalemode: "fill",        textformat: {            "White title": {                titlecssresponsive: "font-size:50px;",                descriptioncss: "display:inline; position:relative;font-weight: bold;font:24px \"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif,Arial; color:#333; white-space:nowrap;  background-color:#fff; margin-top:10px; padding:10px; ",                texteffect1: "slide",                descriptioncssresponsive: "font-size:50px;",                texteffectseparate: true,                texteffectduration: 600,                textpositionmarginleft: 450,                textpositionstatic: "bottom",                addgooglefonts: false,                textpositionmargintop: 220,                texteffectdelay: 500,                texteffecteasing1: "easeOutCubic",                texteffectdelay1: 1000,                texteffectduration1: 600,                googlefonts: "",                textpositionmarginright: 200,                textautohide: true,                textstyle: "dynamic",                texteffectslidedistance: 30,                texteffectslidedirection: "left",                textcss: "display:block; padding:8px 16px; text-align:left;",                titlecss: "display:inline; position:relative; font:53px Georgia,serif,Arial; color:#fff; white-space:nowrap;",                textpositionmarginstatic: 0,                texteffectresponsivesize: 600,                texteffectslidedirection1: "right",                texteffectslidedistance1: 120,                textbgcss: "display:none;",                texteffectresponsive: true,                texteffecteasing: "easeOutCubic",                textpositiondynamic: "topleft",                textpositionmarginbottom: 200,                texteffect: "slide"            }        }    });});