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
            y_coordinate: 40,
            x_coordinate: 0
        };
        var options = $.extend(defaults, options);
        return this.each(function() {
            var DEFAULT_WIDTH = 150;
            // object is the selected pagination element list
            var obj = $(this);
            var tObj = $('<div class="'+options.tip_class+'" style="position:absolute; z-index:999; left:-9999px;"></div>');
            $("body").append(tObj);
            var title_value = obj.attr(options.attr);
            
            function updatePosition(e) {
                var top = e.pageY + options.y_coordinate;
                var left = e.pageX + options.x_coordinate;
                var my_width = tObj.width();
                if ( (left + tObj.width()) >= $(window).width()) {
                    left = e.pageX - my_width;
                }
                tObj.css({'left':left, 'top':top});
            }
            
            obj.on({
                mouseenter: function (e) {
                    tObj.css({opacity:0.8, display:"none"}).fadeIn(400);
                    obj.attr(options.attr, "");
                    tObj.html(title_value);
                    updatePosition(e);
                    //fading in the tip
                    tObj.stop().fadeTo('10',0.8);
                },
                mouseleave: function (e) {
                    //Put back the title attribute's value
                    obj.attr(options.attr,title_value);
                    tObj.stop().fadeOut(400);
                }
            });
            obj.on("mousemove", function(e) {
                //Move the tip with the mouse while moving
                updatePosition(e);
            });
        });
    };
})(jQuery);
