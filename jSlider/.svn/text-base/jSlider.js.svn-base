// jSlider Plugin for jQuery - Version 0.1
// by Angel Grablev for Enavu Web Development network (enavu.com)
// Dual license under MIT and GPL :) enjoy
/*

To use simply call .jSlider() on the element you wish like so:
$(".slider").jSlider(); 

you can specify the following options:
previous_class = the class for the element that navigates to the previous item
next_class = the class that navigates to the previous item/slide
inactive = the class that will be set to the previous or next navigations when they are inactive
elem = the elements inside your slider content item, this can be li's if ur slider is a ul
animation = the animation is by default set to fade but if you include the custom_animations.js file you can use the following: slideDown, slideUp, slideRight, slideLeft, bounce, explode, fold, scale, random
easing = by default we use swing easing but if you included the custom_easing.js file you can use the following easing: linear, swing, jswing, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine, easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc, easeInOutCirc, easeInElastic, easeOutElastic, easeInOutElastic, easeInBack, easeOutBack, easeInOutBack, easeInBounce, easeOutBounce, easeInOutBounce
speed = the speed of the animation
navi = true/false if you want to have the navigation list to shop up
navi_active_class = if navi is true you can choose a class to use for the navigation's active item
navi_class = if navi is true you can choose a class to use for the navigation itself
auto_slide = true/false to play the slider like a slide show
auto_slide_interval = time in milliseconds between slides
auto_pause_hover = if auto_slide is enabled you can choose whether to pause the slider when you hover with your mouse
click_next = true/false if you want to allow to go to next slide when you click on the slider
infinite = true/false infinite will make the slider infinite so when you are at the last slide you can click next and go back to the first slide and the same is true for the previous button
images = true/false if your slider uses an image for each slide enabling this will take that image and set it as the background of the slider so when the animation occurs it feels natural switching

*/
(function($){
    $.fn.jSlider = function(options) {
        var defaults = {
            previous_class: "prev",
			next_class: "next",
			inactive: "inactive",
			elem: "div",
			animation: "fade",
			easing: "swing",
			speed: 700,
			navi: true,
			navi_active_class: "active",
			navi_class: "navi",
			auto_slide: false,
			auto_slide_interval: 5000,
			auto_pause_hover: true,
			click_next: false,
			infinite: false,
			images: false
        };
        var options = $.extend(defaults, options);

        return this.each(function() {
            // object is the selected pagination element list
            obj = $(this);
			var objChildren = obj.children(options.elem);
			var number_of_items = obj.children(options.elem).size();
			var prev = $("."+options.previous_class);
			var next = $("."+options.next_class);
			var items = [];
			var curr = 1;
			
			// create array of items
			for (i=1;i<=number_of_items;i++) { items[i] = obj.find(options.elem+":nth-child("+i+")"); }
			
			// initiate first slide
			slider(1, "", 1);
			
			// if auto slide is enabled
			if(options.auto_slide){
				//timer = setInterval("slider()", options.auto_slide_interval);
				var timer = setInterval(function(){ 
					if(curr < number_of_items) {
						slider(curr, "next", curr);
					} else {
						if (options.infinite) {
							slider(1, curr, number_of_items);
							curr = 1;
						}
					}
				}, options.auto_slide_interval);
			}
			
			// if auto pause on hover
			if(options.auto_slide && options.auto_pause_hover) {
				obj.children().hover(function(){
					clearInterval(timer);
				},function(){
					timer = setInterval(function(){ 
						if(curr < number_of_items) {
							slider(curr, "next", curr);
						} else {
							if (options.infinite) {
								slider(1, curr, number_of_items);
								curr = 1;
							}
						}
					}, options.auto_slide_interval);
				});
			}
			
			// if click_next is enabled
			if(options.click_next) {
				objChildren.click("click", function(e){
					e.preventDefault();
					if(curr < number_of_items) {
						slider(curr, "next", curr);
					} else {
						if (options.infinite) {
							slider(1, curr, number_of_items);
							curr = 1;
						}
					}
				});
			}
			
			// changing the item to be displayed
			function slider(page, direction, from) {
				if (direction == "next") { ++page; curr = page; }
				if (direction == "prev") { --page; curr = page; }
				obj.children(options.elem).hide();
				// custom animatoin library
				show(page, from);
				if (options.navi) createPagination(page);
				if (!options.infinite) {
					if (page == 1) {prev.addClass(options.inactive).css({"cursor":"default"});} else { prev.removeClass(options.inactive).css({"cursor":"pointer"}); }
					if (page == number_of_items) { next.addClass(options.inactive).css({"cursor":"default"}); } else { next.removeClass(options.inactive).css({"cursor":"pointer"}); }
				}
			}
			
			// create a navigation 
			function createPagination(curr) {
                $("."+options.navi_class).remove();
				var start, items = "", nav = "";
                start = "<ul class='"+options.navi_class+"'>";
                var end = "</ul>"
				for (i=1;i<=number_of_items;i++)
                {
					if (i == curr) { items += '<li><a class="'+options.navi_active_class+'" title="'+i+'">'+i+'</a></li>';} 
					else { items += '<li><a href="#" class="goto" title="'+i+'">'+i+'</a></li>';}
                }
                nav = start + items + end;
				obj.append(nav);
            }
			
			// custom animation library
			function show(page, from) {
				if (options.images) {
					if (number_of_items != 1) {				
						var img = items[from].find("img").attr("src");
						obj.css({"background":"url("+img+") center center"});
					}
				}
				if (options.animation == "random") {
					var randomation=["fade","slideDown","slideUp","slideRight","slideLeft","bounce","slideUp","explode","fold","scale"];
					var randomnumber=Math.floor(Math.random()*10)
					var animation = randomation[randomnumber];
				} else {
					var animation = options.animation;
				}
				objChildren.hide();
				switch (animation) {
					case "fade":
						items[page].stop().fadeIn(options.speed);
						break;
					case "slideDown":
						items[page].stop().show('slide', {direction: 'up', easing: options.easing}, options.speed);
						break;
					case "slideUp":
						items[page].stop().show('slide', {direction: 'down', easing: options.easing}, options.speed);
						break;
					case "slideRight":
						items[page].stop().show('slide', {direction: 'left', easing: options.easing}, options.speed);
						break;
					case "slideLeft":
						items[page].stop().show('slide', {direction: 'right', easing: options.easing}, options.speed);
						break;
					case "bounce":
						items[page].stop().show('bounce', {direction: "up", easing: options.easing}, options.speed);
						break;
					case "explode":
						items[page].stop().show('explode', {direction: "down", easing: options.easing}, options.speed);
						break;
					case "fold":
						items[page].stop().show('fold', {direction: "down", easing: options.easing}, options.speed);
						break;
					case "scale":
						items[page].stop().show('scale', {direction: "down", easing: options.easing}, options.speed);
						break;
					default:
						items[page].show();
						break;
				}
			}
			// controls
			$("."+options.next_class).live("click", function(e){
				e.preventDefault();
				if(curr < number_of_items) {
					slider(curr, "next", curr);
				} else {
					if (options.infinite) {
						slider(1, curr, number_of_items);
						curr = 1;
					}
				}
			});
			$("."+options.previous_class).live("click", function(e){
				e.preventDefault();
				if(curr > 1) {
					slider(curr, "prev", curr);
				 }else {
					if (options.infinite) {
						slider(number_of_items, curr, 1);
						curr = number_of_items;
					}
				}
			});
			$(".goto").live("click", function(e){
				e.preventDefault();
				var newy_curr = $(this).attr("title");
				if (newy_curr > curr) { slider(newy_curr, "", curr); } else { slider(newy_curr, "", curr); }
				curr = newy_curr;
			});
		});
    };
})(jQuery);