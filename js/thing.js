$(function() {
	$('.clickthing').on("click", function(event){
		event.preventDefault();
		console.log("clicked it");
		$("#bigvid").find("iframe").fadeOut().attr('src', $(this).data("src")).fadeIn();
	});

});
