$(document).ready(function(){var e,o=$(".header"),n=o.find(".header__logo, .actions a"),i=o.find(".navigation__item"),a=function(){clearTimeout(e),o.addClass("header--hover")},t=function(){e=setTimeout(function(){o.removeClass("header--hover")},300)},r=function(){o.find(".navigation__item--hover").removeClass("navigation__item--hover"),o.find(".hover").removeClass("hover")};n.each(function(){var e,o=$(this);o.on("mouseenter",function(){clearTimeout(e),r(),o.addClass("hover"),a()}),o.on("mouseleave",function(){e=setTimeout(function(){o.removeClass("hover")},300),t()})}),i.each(function(){var e,o=$(this);o.on("mouseenter",function(){clearTimeout(e),r(),o.addClass("navigation__item--hover"),a()}),o.on("mouseleave",function(){e=setTimeout(function(){o.removeClass("navigation__item--hover")},300),t()})})});