$(document).ready(function(){

	//---- Header Navigation Hover functionality ------
    var headerEl = $('.header');
    var commonItems = headerEl.find('.header__logo, .actions a');
    var navigationItems = headerEl.find('.navigation__item');
    var leaveTime = 300;
    var headerHoverTimer;

    var onItemEnter = function(){
        clearTimeout(headerHoverTimer);
        headerEl.addClass('header--hover');
    };

    var onItemLeave = function(){
        headerHoverTimer = setTimeout(function(){
            headerEl.removeClass('header--hover');
        }, leaveTime);
    };

    var clearAllSubs = function(){
        headerEl.find('.navigation__item--hover').removeClass('navigation__item--hover');
        headerEl.find('.hover').removeClass('hover');
    };

    commonItems.each(function(){
        var el = $(this);
        var navigationItemHoverTimer;

        el.on('mouseenter', function(){
            clearTimeout(navigationItemHoverTimer);
            clearAllSubs();
            el.addClass('hover');
            onItemEnter();
        });

        el.on('mouseleave', function(){
            navigationItemHoverTimer = setTimeout(function(){
                el.removeClass('hover');
            }, leaveTime);
            onItemLeave();
        });
    });

    navigationItems.each(function(){
        var el = $(this);
        var navigationItemHoverTimer;

        el.on('mouseenter', function(){
            clearTimeout(navigationItemHoverTimer);
            clearAllSubs();
            el.addClass('navigation__item--hover');
            onItemEnter();
        });

        el.on('mouseleave', function(){
            navigationItemHoverTimer = setTimeout(function(){
                el.removeClass('navigation__item--hover');
            }, leaveTime);
            onItemLeave();
        });
    });

});

