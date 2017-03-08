$(document).ready(function(){
	resizeDiv();

	//View More-Less Home Page
	$(".toggleBtn").click(function () { 
		var block = $('div.hiddenText'); 
		$(this).html((block.is(':visible')) ? 'View more' : 'View less'); 
		$(this).prev(block).slideToggle(); return false;
	});

	//Lightbox Js
	// delegate calls to data-toggle="lightbox"
	$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
		event.preventDefault();
		return $(this).ekkoLightbox({
			always_show_close: true
		});
	});

	$('.strat a[href*=#]:not([href=#]), .featured a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top
	            }, 1000);
	            return false;
	        }
	    }
	});


	if ($('#back-to-top').length) {
	    var scrollTrigger = 100, // px
	        backToTop = function () {
	            var scrollTop = $(window).scrollTop();
	            if (scrollTop > scrollTrigger) {
	                $('#back-to-top').addClass('show');
	            } else {
	                $('#back-to-top').removeClass('show');
	            }
	        };
	    backToTop();
	    $(window).on('scroll', function () {
	        backToTop();
	    });
	    $('#back-to-top').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });
	}

});
window.onresize = function(event) {
	resizeDiv();
}
function resizeDiv() {
	vpw = $(window).width();
	vph = $(window).height();
	var imGHeight = $("#myCarousel .carousel-inner .item img").height();
	var imGWidth = $("#myCarousel .carousel-inner .item img").width();
	var headerHeight = $("header").height();
	var ratio = 1235 / 822;
	var newHeight = imGWidth / ratio;
	var space = vph - imGHeight;
	//alert(headerHeight);
	$("#myCarousel .carousel-inner .item img").css({"height": newHeight});
	
	if(vpw < 480) {
		$("#myCarousel .carousel-inner .item").css({"height": 240});
	}
	else if(vpw <= 768) {
		$("#myCarousel .carousel-inner .item").css({"height": 310});
	}
	else {
		$("#myCarousel .carousel-inner .item").css({"height": vph-headerHeight-11});
	}

	//$("#thumbcarousel .carousel-inner .item").css({"height":"auto !important"});	
}

$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#reason').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});