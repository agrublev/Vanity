// jPlaceholder Plugin for jQuery - Version 0.2
// by Angel Grablev for Enavu Web Development network (enavu.com)
// Dual license under MIT and GPL :) enjoy
/*

To use simply call .jPlaceholder() on the element you wish like so:
$("#content").jPlaceholder(); 

you can specify the following options:
css_class = allows you to specify the class for the placeholder
*/
(function($) {
$.fn.jPlaceholder = function(options) {
	var defaults = {css_class: "placeholder"};
	var options = $.extend(defaults, options);  
	// handle form being submitted by clearing the populated fields
	$("form").submit(function(){
		$("input").each(function(){
			if ($(this).attr("placeholder") != undefined) {
				if ($(this).attr("placeholder") == $(this).attr("value")) {	$(this).val(""); }
			}
		});
	});
	// loop through all the elements youve selected with the plugin
	this.each(function() {
		
		var phvalue = $(this).attr("placeholder");
		var currvalue = $(this).attr("value");
		
		if (phvalue != undefined) {
			
			if (phvalue == currvalue) {
				$(this).addClass(options.css_class);
			} else {
				$(this).removeClass(options.css_class);
			}
			if (currvalue == "") {
				$(this).addClass(options.css_class);
				$(this).val(phvalue);
			}
			$(this).focus(function(){
				if (phvalue == $(this).val()) {
					$(this).val("").removeClass(options.css_class);
				}
			});
			
			$(this).blur(function(){
				if ($(this).val() == "") {
					$(this).val(phvalue).addClass(options.css_class);
				}
			});
		}
	});
	return this;
	};
})(jQuery);

