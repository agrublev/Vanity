// jSpotlight Plugin for jQuery - Version 0.1
// by Angel Grablev for Enavu Web Development network (enavu.com)
// Dual license under MIT and GPL :) enjoy
/*

To use simply call .jHover() on the element you wish like so:
$("ul.hovered").jSpotlight(); 

you can specify the following options:
active = the class for the element that is currently hovered over
inactive = the class for the elements that are not hovered over when the main element is active
attr = the attribute inside the img to take the information for the title
title_class = the class of the title div which you can style
title_effect = the effect the title will have appearing and dissapearing, possible: slide, fade, default
title_speed = specify the speed of the effect in milliseconds or use slow/fast in quotes so like "slow"
title = here you can enable or disable the title effect by passing in true or false

*/
(function($){
    $.fn.jSpotlight = function(options) {
        var defaults = {
            active: "active",
            inactive: "inactive",
            attr: "title",
			title_class: "title",
			title_effect: "fade",
			title_speed: 300,
			title: true
        };
        var options = $.extend(defaults, options);

        return this.each(function() {
            // object is the selected pagination element list
            var obj = $(this);
			// if titling is enabled add the title element to each of the children
			if (options.title) {
				obj.children().each(function(){
						var title_value = $(this).find("img").attr(options.attr);
						var title_dom_element = '<div class="'+options.title_class+'" style="display:none">'+title_value+'</div>';
						$(this).append(title_dom_element); 
				});
			}
			// Handle the hover event to apply one class/style to current and another to rest
        	obj.children().hover(function(e){ 
				// on mouse over
				$(this).siblings().removeClass(options.active).addClass(options.inactive);
				$(this).removeClass(options.inactive).addClass(options.active);
				// if title is enabled
				if (options.title) {
					switch(options.title_effect) {
					case "fade":
					  $(this).find("."+options.title_class).fadeIn(options.title_speed);
					  break;
					case "slide":
					  $(this).find("."+options.title_class).slideDown(options.title_speed);
					  break;
					default:
						$(this).find("."+options.title_class).show();
					}
				} 
			},function(){
				// on mouse leave
				$(this).removeClass(options.active).removeClass(options.inactive).siblings().removeClass(options.active).removeClass(options.inactive);
				// if title is enabled
				if (options.title) {
					switch(options.title_effect) {
					case "fade":
					  $(this).find("."+options.title_class).fadeOut(options.title_speed);
					  break;
					case "slide":
					  $(this).find("."+options.title_class).slideUp(options.title_speed);
					  break;
					default:
						$(this).find("."+options.title_class).hide();
					}
				} 
			});
		});
    };
})(jQuery);