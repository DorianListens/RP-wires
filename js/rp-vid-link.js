/*
*
* Switches vimeo source of main front page video player using data-attributes
*
*
*/

$(function() {
	$('.rp-vid-link').on("click", function(event){
		event.preventDefault();
		$("#bigvid").find("iframe").fadeOut()
									.attr('src', $(this).data("src"))
									.delay(400)
									.fadeIn();
	});

});
