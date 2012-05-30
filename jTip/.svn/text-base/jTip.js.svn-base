// jTip Plugin for jQuery - Version 0.1
// by Angel Grablev for Enavu Web Development network (enavu.com)
// Dual license under MIT and GPL :) enjoy
/*

To use simply call .jTip() on the element you wish like so:
$(".tip").jTip(); 

you can specify the following options:
attr = the attribute you want to pull the content from
tip_class = the class you want to style for the tip, make sure to have a width when styling
y_coordinate = the distance from the mouse the tip will show in the vertical direction
x_coordinate = the distance from the mouse the tip will show in the horizontal direction
*/
(function($){
    $.fn.jTip = function(options) {
        var defaults = {
            attr: "title",
			tip_class: "tip_window",
			y_coordinate: 20,
			x_coordinate: 20
        };
        var options = $.extend(defaults, options);

        return this.each(function() {
            // object is the selected pagination element list
            var obj = $(this);
			//obj.css({"position":"relative"});
			
			$("body").append('<div class="'+options.tip_class+'" style="position:absolute; z-index:999; left:-9999px;"></div>'); 
			tObj = $("."+options.tip_class);
			var title_value = obj.attr(options.attr);
			
			obj.hover(function(e) {	
				
				tObj.css({opacity:0.8, display:"none"}).fadeIn(400);
				obj.removeAttr(options.attr);
				tObj.css({'left':e.pageX+ options.y_coordinate, 'top':e.pageY+ options.y_coordinate}).html(title_value);
				
				//fading in the tip
				tObj.stop().fadeTo('10',0.8);
				
			}, function(e) {
			
				//Put back the title attribute's value
				obj.attr(options.attr,title_value);
				//Remove the appended tooltip template
				tObj.stop().fadeOut(400);
				
			});
			obj.mousemove(function(e) {
				//Move the tip with the mouse while moving
				tObj.css({'top':e.pageY + options.y_coordinate,'left': e.pageX + options.y_coordinate});
			});

			
		});
    };
})(jQuery);