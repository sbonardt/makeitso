jQuery(function ($) {

    // define breakpoints, responsive design
    var breakXsmall = 25; //400px is 400/16 is 25em
    var breakSmall = 30; //480px is 30em
    var breakMedium = 37.5; //600px is 37.5em
    var breakLarge = 48; //768px is 48em
    var breakXlarge = 60; //960px is 60em
    var breakWide = 80; //1280px is 80em    
    var windowWidth = viewportSize.getWidth(); //replaces buggy and unreliable $(window).width();
    // assume base font size is 16px and set windowWidth in em
    var windowWidthEm = ((viewportSize.getWidth()) / 16);

    // Run initial checks for page setup. Checks the viewport width 
    // and does some actions for the UI based on screen size
    preLoadChecks();
    
    // set all links with class 'external' to have target _blank
    $('a.external').attr('target', "_blank");

    // do preLoadChecks when window is resized
    var resizeId;
    $(window).resize(function() { 
        // add setTimeout to reduce resize events      
        clearTimeout(resizeId);
        resizeId = setTimeout(preLoadChecks, 20);
    });

    // toggle .search functionality when search gets hidden on small/mobile devices
    // In this design, this works together with the primary menu. Only one can be open
    $(".toggle-search").on( "click", function(e) {
        e.preventDefault();
        var searchform = $(".search-block");
        var nav = $(".navigation-primary .menu");
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

    // toggle main menu functionality when primary navigation gets hidden on small/mobile devices
    // In this design, this works together with the primary menu. Only one can be open
    $(".toggle-menu").on( "click", function(e) {
        e.preventDefault();
        var nav = $(".navigation-primary .menu");
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


    /*
    // function preLoadChecks: 
    // checks and does some visual UI changes on page load, based on viewport width.
    // As we have a mobile first approach, we trigger this function on window resize
    // Mainly to put all moved, cloned and shown items back in the state they were on small screens
    // This mostly concerns the statements in the smaller than '<' parts
    // Put all checks in order of windowWidth because with a mobile first approach the windowwidth
    // only gets larger!
    */
    function preLoadChecks() {
        // update windoWidth from viewportSize.js (cross browser JS plugin), 
        // because this needs to be checked again after window resize
        windowWidth = viewportSize.getWidth(); // better $(window).width();
        windowWidthEm = (viewportSize.getWidth()) / 16; // (16px/1em/rem basis)

        // do various UI changes based on design breakpoints
        // Breakpoints are defined at the start of this file, and (should) generally coincide 
        // with the breakpoints defined and used in your css

        // if the windowWidth is smaller than the Small Breakpoint
        if ( windowWidthEm <= breakSmall) { 
            // nothing specified
        }

        // if the windowWidth is smaller than the Medium Breakpoint
        if (windowWidthEm < breakMedium) {
            // we go back screen widths smaller than medium breakpoint after resize
            // if the search block is present in the header because it got placed there
            // on window resize to greater than Medium Breakpint, copy that back to the primary nav
            // in order tot toggle between either the menu or the search
            if ($('body > header .search-block').length > 0) {
                $(".search-block").appendTo('body > nav > .inner-wrap');
            }
            // subsequently hide the search block, and display the toggle-search button
            $(".search-block").hide();
            $(".toggle-search").show(); 

            // hide the primary-navigation, and show the toggle-menu button
            $(".navigation-primary .menu").hide();
            $(".toggle-menu").show();
            
            // use the mobile logo image on smaller screens again after resize
            $(".logo img").attr("src", $(".logo img").attr("data-src-mobile") );
        }
        // if the windowWidth is greater than the Medium Breakpoint
        else {
            // place the search block in the header
            $(".search-block").appendTo('body > header .inner-wrap').show();
            // hide the toggle-search button, because from this breakpoint on
            // the search functionality is visible, so hide the search toggle button
            $(".toggle-search").hide(); 
            // show the primary navigation from this breakpoint on
            $(".navigation-primary .menu").show();
            // the menu is visible from this breakpoint on, so hide the menu toggle button
            $(".toggle-menu").hide();
            // replace the mobile logo with the larger version
            $(".logo img").attr("src", $(".logo img").attr("data-src") );
        }
        if (windowWidthEm < breakLarge) {
            // nothing specified
        }
        else {
            // ...
        }
    }
});