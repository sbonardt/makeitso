jQuery(function ($) {

    // define breakpoints, responsive design
    var breakXsmall = 25; //400px is 400/16 is 25 em
    var breakSmall = 30; //480px is 30 em
    var breakMedium = 37.5; //600px is 37.5 em
    var breakLarge = 48; //768px is 48 em
    var breakXlarge = 60; //960px is 60 em
    var breakWide = 80; //1280px is 80 em
    
    var windowWidth = viewportSize.getWidth(); //replaces buggy and unreliable $(window).width();
    // assume base font size is 16px
    var windowWidthEms = ((viewportSize.getWidth()) / 16);


    // /////////////////////////////////////////////////////////////////////////
    // MENU CONFIG
    // set toggleableMenu to true if the menu needs to be toggled on or off on 
    // small screens, 
    // or set it to 'false' if constantly want to show the mainmenu
    var toggleableMenu = true;
    if (toggleableMenu) {
        $('html').addClass("toggleable-menu");
        $("nav > div > .menu").hide();
    }

    // initial checks for page setup. Checks the viewport width and does some 
    // actions for the UI based on screen size
    preLoadChecks();
    
    // all external class links to target _blank
    $('a.external').attr('target', "_blank");

    // do preLoadChecks when window is resized
    var resizeId;
    $(window).resize(function() {       
        clearTimeout(resizeId);
        resizeId = setTimeout(preLoadChecks, 20);
    });

    // toggle .search functionality when hidden on small/mobile devices
    $(".toggle-search").on( "click", function(e) {
        e.preventDefault();
        var searchform = $(".search-block");
        var nav = $("nav .menu");
        if (searchform.hasClass("expanded")) {
            $(this).removeClass("toggle-active");
            searchform.slideUp('fast').removeClass("expanded");
        }
        else if (!(searchform.hasClass("expanded"))) {
            if (nav.hasClass("expanded")) {
                nav.slideUp('fast', function() {
                    nav.removeClass("expanded");
                    $(".toggle-menu").removeClass("toggle-active");
                    $(".toggle-search").addClass("toggle-active");
                    searchform.slideDown().addClass("expanded");
                });             
            }
            else {
                $(this).addClass("toggle-active");
                searchform.slideDown().addClass("expanded");
            }
        }
    });

    // toggle main menu functionality when hidden on small mobile devices
    $(".toggle-menu").on( "click", function(e) {
        e.preventDefault();
        var nav = $("nav .menu");
        var searchform = $(".search-block");
        if (nav.hasClass("expanded")) {
            $(this).removeClass("toggle-active");
            nav.slideUp('fast').removeClass("expanded");
        }
        else if (!(nav.hasClass("expanded"))) {
            if (searchform.hasClass("expanded")) {
                searchform.slideUp('fast', function() {
                    searchform.removeClass("expanded");
                    $(".toggle-search").removeClass("toggle-active");
                    $(".toggle-menu").addClass("toggle-active");
                    nav.slideDown().addClass("expanded");
                });
            }
            else {
                $(this).addClass("toggle-active");
                nav.slideDown('fast').addClass("expanded");
            }
        }
    });

    function preLoadChecks() {
        // update window width from viewportSize.js (cross browser JS plugin)
        windowWidth = viewportSize.getWidth(); // $(window).width();
        windowWidthEms = (viewportSize.getWidth()) / 16; // (16px/1em/rem basis)

        // do various show n hides, clones and other stuff 
        if ( windowWidthEms <= breakSmall) { 

        }
        else {

        }

        if (windowWidthEms < breakMedium) {
            if ($('body > header .search-block').length > 0) {
                $(".search-block").appendTo('body > nav > .inner-wrap');
            }
            $(".search-block").hide();
            $(".toggle-search").show(); 
            if (toggleableMenu) {
                $("nav .menu").hide();
                 $(".toggle-menu").show();
            }
            $(".logo img").attr("src", $(".logo img").attr("data-src-mobile") );
        }
        else {
            $(".search-block").appendTo('body > header .inner-wrap').show();
            $(".toggle-search").hide(); 
            if (toggleableMenu) {
                $("nav .menu").show();
                $(".toggle-menu").hide();
            }
            $(".logo img").attr("src", $(".logo img").attr("data-src") );
        }
        if (windowWidthEms < breakLarge) {
            //$(".search").hide();
            // $(".toggle-search").show(); 
        }
        else {
            //$(".search").show();
        }
    }
});