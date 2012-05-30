// Draggable Plugin
// Written: Angel Grablev 
// Date: May 2012
$.fn.jDrag = function(options) {
  	
	// Plugin Options
	var defaults = {
		handle: null, // specify a jquery selector with a handle to move the element | ex: $("#handle")
		restrict: false // prevent from leaving the window | ex: true
	};
	var options = $.extend(defaults, options);
	
	return this.each(function() {
		var $th = $(this);
		$th.mousedown(function(e){
			$drag.start(event, $(this));
		});
		
		// Global object to hold drag information.
		var $drag = {};
		
		$drag.start = function(event, $id) {}
		$drag.move = function(event) {}
		$drag.stop = function(event) {}
		
		$drag.start = function(event, $id) {
			var x = event.clientX, y = event.clientY;

			$drag.$this = $id;
			if ( options.handle && !$( event.target ).closest( options.handle, event.currentTarget ).length ) 
				return;
		  
			// Set starting positions
			$drag.cursorStartX = x;
			$drag.cursorStartY = y;
			$drag.startLeft = parseInt($id.position().left, 10);
			$drag.startTop = parseInt($id.position().top, 10);
		
			// Bind mouse events
			$(document).bind("mousemove",$drag.move);
			$(document).bind("mouseup",$drag.stop);
			try {
				window.event.cancelBubble = true;
				window.event.returnValue = false;
			}
			catch (e) {
				event.preventDefault();
			}
		
		}
		
		$drag.move = function(event) {
			var x = event.pageX, y = event.pageY;
			
			// Dragging as cursor moves
			var dragLeft = ($drag.startLeft + x - $drag.cursorStartX);
			var dragTop = ($drag.startTop + y - $drag.cursorStartY);
			
			// Restrict Option Enforcement
			if (options.restrict) {
				// restrict X axis
				if (dragLeft < 0) {
					dragLeft = 0;
				} else if ((dragLeft + $drag.$this.outerWidth()) > $(window).width()) {
					dragLeft = $(window).width() - $drag.$this.outerWidth();	
				}
				// restrict Y axis
				if (dragTop < 0) {
					dragTop = 0;
				} else if ((dragTop + $drag.$this.outerHeight()) > $(window).height()) {
					dragTop = $(window).height() - $drag.$this.outerHeight();	
				}
			}
			$drag.$this.offset({left:dragLeft,top:dragTop});
			
			try {
				window.event.cancelBubble = true;
				window.event.returnValue = false;
			} catch (e) {
				event.preventDefault();
			}
		}
		
		$drag.stop = function(event) {
			$(document).unbind("mousemove",$drag.move);
			$(document).unbind("mouseup",$drag.stop);
		}
	});
};
