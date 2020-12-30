jQuery(function ($) {

    // Define breakpoints, responsive design
    var breakXsmall = 23.125; //370px is 23.125em
    var breakSmall = 30; //480px is 30em
    var breakMedium = 37.5; //600px is 37.5em
    var breakLarge = 48; //768px is 48em
    var breakXlarge = 60; //960px is 60em
    var breakWide = 80; //1280px is 80em    

    // Replace buggy and unreliable $(window).width(); viewportSize-min.js required
    var windowWidth = viewportSize.getWidth(); 
    // Assume base font size is 16px and set windowWidth var in em
    var windowWidthEm = ((viewportSize.getWidth()) / 16);

    /* 
     * Run the preLoadChecks function
     * Initial checks for page setup. Checks the viewport width 
     * and does some actions for the UI based on screen size
     */
    preLoadChecks();

    // Execute preLoadChecks function when window is resized. Handy for development, when resizing window
    var resizeId;
    $(window).resize(function() { 
        // add setTimeout to reduce resize events      
        clearTimeout(resizeId);
        resizeId = setTimeout(preLoadChecks, 20);
    });
        
    /*
     * Set all links with class 'external' to have target _blank
     */
    $('a.external').attr('target', "_blank");


    /*
     * MENU AND SEARCH TOGGLE FUNCTIONALITY
     * This code adds the toggle buttons for the main menu and search block on small screens up to medium screens
     * Also, toggle functionality is bound to the two toggle buttons
     * If you do not want this in your project, or have another cuastm solution you can:
     * 1. Remove this whole block of code
     * 2, Adjust/remove the SCSS lines in _navigation.scss for '.toggle-' classes
     * 3. You're done
     */

    // Add menu and search toggle buttons to navigation on load
    $('<div class="toggle-btn-wrap"><button class="button buttin--with-icon toggle-menu" aria-pressed="false"><span class="icon icon--close"></span><span>menu</span></button></div>').appendTo('body > header > .inner-wrap');

    /* Toggle .search-block functionality when search gets hidden on small/mobile devices
     * In this setup, this works together with the primary menu. Only one can be open
     */
    $(".toggle-search").on( "click", function(e) {
        e.preventDefault();
        var searchform = $(".search-block");
        var nav = $(".navigation-primary");
        if (searchform.hasClass("expanded")) {
            $(this).removeClass("toggle-active");
            searchform.removeClass("expanded");
            $('body').removeClass('search-overlay--active');
        }
        else if (!(searchform.hasClass("expanded"))) {
            if (nav.hasClass("expanded")) {
                
                    nav.removeClass("expanded");
                    $(".toggle-menu").removeClass("toggle-active");
                    $(".toggle-search").addClass("toggle-active");
                    searchform.slideDown().addClass("expanded");
                    $('body').addClass('nav-overlay--active');
                         
            }
            else {
                $(this).addClass("toggle-active");
                searchform.slideDown().addClass("expanded");
                $('body').addClass('search-overlay--active');
            }
        }
    });

    /* 
     * Toggle main menu functionality when primary navigation gets hidden on small/mobile devices
     * In this setup, this works together with the search block. Only one can be open
     */
    $(".toggle-menu").on( "click", function(e) {
        e.preventDefault();
        var nav = $(".navigation-primary");
        var searchform = $(".search-block");
        if (nav.hasClass("expanded")) {
            $(this).removeClass("toggle-active");
            nav.removeClass("expanded");
            $('body').removeClass('nav-overlay--active');
        }
        else if (!(nav.hasClass("expanded"))) {
            if (searchform.hasClass("expanded")) {
                
                    searchform.removeClass("expanded");
                    $(".toggle-search").removeClass("toggle-active");
                    $(".toggle-menu").addClass("toggle-active");
                    nav.addClass("expanded");
                    $('body').addClass('nav-overlay--active');

            }
            else {
                $(this).addClass("toggle-active");
                nav.addClass("expanded");
                $('body').addClass('nav-overlay--active');
            }
        }
    });

    /*
     * Expandable field logic
     */
    $('.expandable-field__toggler').on('click', function(e) {
        e.preventDefault();
        var expandableTrigger = $(this);
        var expandableParent = $(this).parents('.expandable-field');
        var expandableTarget = expandableParent.find('.expandable-field__toggle-target');

        if (expandableTrigger.hasClass('active')) {
            //expandableTrigger.removeClass('expanding').addClass('collapsing'); 
            // expandableTarget.slideUp( 600, "easeInOutCubic", function() {
            expandableTarget.slideUp( 400, function() {
                expandableTrigger.removeClass('active').attr('aria-expanded', 'false').removeClass('collapsing');
                expandableTarget.attr('aria-hidden', 'true');
                expandableParent.removeClass('expandable-field--expanded');
                expandableParent.addClass('expandable-field--collapsed');
            });
        } else {
            //expandableTrigger.removeClass('collapsing').addClass('expanding');
            expandableParent.removeClass('expandable-field--expanded-partially');
            // expandableTarget.slideDown( 600, "easeInOutCubic", function() {
            expandableTarget.slideDown( 400, function() {
                expandableTrigger.addClass('active').attr('aria-expanded', 'true').removeClass('expanding');
                expandableTarget.attr('aria-hidden', 'false');
                expandableParent.removeClass('expandable-field--collapsed');
                expandableParent.addClass('expandable-field--expanded');
            });
        }
    });

    // hide all expandable fields by triggering the bound click
    if ($('.expandable-field').length > 0) {   
        //console.log('hide expandable fields');
        $('.expandable-field .expandable-field__toggler').trigger('click');
    }


    /**
     * Button groups
     * Checks for button groups and adds toggle functionality and ARIA stuff
    */
   $('.button-group').each(function() {
    var btnDropdownOptions = $(this).find('.button-options-list');
    var btnDropdownToggler = $(this).find('.button__dropdown-toggler');

    btnDropdownOptions.hide().attr('aria-hidden', 'true');
    btnDropdownToggler.attr('aria-controls', btnDropdownOptions.attr('id')).on('click', function() {
    //bind toggling of options
        if (btnDropdownOptions.attr('aria-hidden') == "true") {
            // expand'eth you!
            btnDropdownToggler.attr('aria-expanded', 'true');
            btnDropdownOptions.show();
            btnDropdownOptions.attr('aria-hidden', 'false');
        } else if (btnDropdownOptions.attr('aria-hidden') == "false") {
            // contract'eth you
            btnDropdownOptions.hide();
            btnDropdownOptions.attr('aria-hidden', 'true');
            btnDropdownToggler.attr('aria-expanded', 'false');
        }
        });
    });

    /* click anywhere to close active options */
    $(document).click(function() {
        buttonGroupDropdownsClose();
    });

    $('.button__dropdown-toggler').click(function(e) {
        e.stopPropagation();
    });

    function buttonGroupDropdownsClose() {
        $('button[aria-expanded="true"]').trigger('click');
    };

    
    /*
     * Function preLoadChecks: 
     * Checks and does some visual UI changes on page load, based on viewport width.
     * As we have a mobile first approach, we trigger this function on window resize
     * Mainly to put all moved, cloned and shown items back in the state they were on small screens
     * This mostly concerns the statements in the smaller than '<' parts
     * Put all checks in order of windowWidth because with a mobile first approach the windowwidth
     * only gets larger!
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
        if ( windowWidthEm < breakSmall) { 
            // nothing specified
        }

        // if the windowWidth is smaller than the Medium Breakpoint
        if (windowWidthEm < breakMedium) {
            // // we go back screen widths smaller than medium breakpoint after resize
            // // if the search block is present in the header because it got placed there
            // // on window resize to greater than Medium Breakpint, copy that back to the primary nav
            // // in order tot toggle between either the menu or the search
            // if ($('body > header .search-block').length > 0) {
            //     $(".search-block").appendTo('.navigation-primary > .inner-wrap');
            // }

            // // Hide the search block and primary-navigation, and display the toggle buttons for menu and search
            // //$(".search-block, .navigation-primary").hide();
            // //$(".navigation-primary").hide();
            // $(".toggle-search, .toggle-menu").show(); 
           
            // // use the mobile logo image on smaller screens again after resize
            // $(".logo img").attr("src", $(".logo img").attr("data-src-mobile") );
        }
        // if the windowWidth is greater than the Medium Breakpoint
        else {
            // // place the search block in the header and show it
            // $(".search-block").appendTo('body > .header .inner-wrap').show();

            // // hide the toggle-search button, because from this breakpoint on
            // // the search functionality is visible, so hide the search toggle button
            // $(".toggle-search").hide(); 
            // // show the primary navigation from this breakpoint on
            // //$(".navigation-primary").show();
            // // the menu is visible from this breakpoint on, so hide the menu toggle button
            // $(".toggle-menu").hide();

            // // replace the mobile logo with the larger version
            // $(".logo img").attr("src", $(".logo img").attr("data-src") );
        }
        if (windowWidthEm < breakXlarge) {
            // nothing specified

            // we go back screen widths smaller than medium breakpoint after resize
            // if the search block is present in the header because it got placed there
            // on window resize to greater than Medium Breakpint, copy that back to the primary nav
            // in order tot toggle between either the menu or the search
            // if ($('body > header .search-block').length > 0) {
            //     $(".search-block").appendTo('.navigation-primary > .inner-wrap');
            // }

            // Hide the search block and primary-navigation, and display the toggle buttons for menu and search
            //$(".search-block, .navigation-primary").hide();
            //$(".navigation-primary").hide();
            //$(".toggle-search, .toggle-menu").show(); 
           
            // use the mobile logo image on smaller screens again after resize
            $(".logo img").attr("src", $(".logo img").attr("data-src-mobile") );

        }
        else {
            // ...

            // place the search block in the header and show it
            //$(".search-block").appendTo('body > .header .inner-wrap').show();

            // hide the toggle-search button, because from this breakpoint on
            // the search functionality is visible, so hide the search toggle button
            //$(".toggle-search").hide(); 
            // show the primary navigation from this breakpoint on
            //$(".navigation-primary").show();
            // the menu is visible from this breakpoint on, so hide the menu toggle button
            //$(".toggle-menu").hide();

            // replace the mobile logo with the larger version
            $(".logo img").attr("src", $(".logo img").attr("data-src") );
        }
    }
});