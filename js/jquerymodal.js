/**
 * JQuery Plugin for a modal box
 * Will create a simple modal box with all HTML and styling
 * 
 * Author: Paul Underwood
 * URL: http://www.paulund.co.uk
 * 
 * Available for free download from http://www.paulund.co.uk
 */

(function($){

	// Defining our jQuery plugin

	$.fn.paulund_modal_box = function(prop){

		// Default parameters

		var options = $.extend({
//			height : "250",
			width : "700",
			title:"JQuery Modal Box Demo",
            dates: "jan-dec",
			description: "Example of how to create a modal box.",
			top: "30%",
			left: "30%",
		},prop);
				
		//Click event on element
		return this.click(function(e){
			add_block_page();
			add_popup_box();
			add_styles();
			
			$('.paulund_modal_box').fadeIn();
		});
		
		/**
		 * Add styles to the html markup
		 */
		 function add_styles(){			
			$('.paulund_modal_box').css({ 
				'position':'absolute', 
				'left':options.left,
				'top':options.top,
				'display':'none',
				'height': options.height + 'px',
				'width': options.width + 'px',				
				'background': '#000000', 
				'z-index':'150',
                '-moz-box-shadow':'0px 0px 50px rgba(255,255,255,0.4)',
                '-webkit-box-shadow':'0px 0px 50px rgba(255,255,255,0.4)',
                'box-shadow':'0px 0px 50px rgba(255,255,255,0.4)',
                'border-radius':'10px',
				'-moz-border-radius':'10px',
				'-webkit-border-radius':'10px',
                'padding':'20px',
                'margin':'auto'
			});
			$('.paulund_modal_close').css({
				'position':'relative',
				'top':'-30px',
				'left':'40px',
				'float':'right',
				'display':'block',
				'height':'50px',
				'width':'50px',
				'background': 'url(http://maozillah.github.io/zenith/imgs/close.png) no-repeat',
			});
			$('.paulund_block_page').css({
				'position':'absolute',
				'top':'0',
				'left':'0',
				'background-color':'rgba(0,0,0,0.6)',
				'height':'100%',
				'width':'100%',
				'z-index':'50',
			});

		}
		
		 /**
		  * Create the block page div
		  */
		 function add_block_page(){
			var block_page = $('<div class="paulund_block_page"></div>');
						
			$(block_page).appendTo('body');
		}
		 	
		 /**
		  * Creates the modal box
		  */
		 function add_popup_box(){
			 var pop_up = $('<div class="paulund_modal_box"><a href="#" class="paulund_modal_close"></a><h1>' + options.title + '</h1><h2>' + options.dates +'</h2><p>' + options.description + '</p></div>');
			 $(pop_up).appendTo('.paulund_block_page');
             clickable= false;
			 			 
			 $('.paulund_modal_close').click(function(){
				$(this).parent().fadeOut().remove();
				$('.paulund_block_page').fadeOut().remove();	
                 setTimeout('clickable=true', 500);
			 });
		}

		return this;
	};
	
})(jQuery);
