"use strict";

jQuery(function($) {
    /* ------ jQuery for Easing min -- */
    $(function() {
        $('a.scroll-to').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 50
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
});
