$(function() {

	window.setInterval(function() {
		//$(".anim-car").removeClass("animated-car").addClass("animated-car");
		$(".anim-car").replaceWith($(".anim-car").clone(true));
	}, 15000);

	$("#btn-values").on("click", function() {
		$(document.body).animate({'scrollTop': $("#nos-valeurs").offset().top}, 1000);
	});

	$("#btn-offers").on("click", function() {
		$(document.body).animate({'scrollTop': $("#nos-offres").offset().top}, 1000);
	});

	$("#btn-demo").on("click", function() {
		$(document.body).animate({'scrollTop': $("#nos-solutions").offset().top}, 1000);
	});

	var phonevideo = $("#phone-video")[0];

	var waypointVideos = new Waypoint( {
		element: $("#nos-solutions"),
		handler: function()
		{
			if(phonevideo.paused)
			{
				phonevideo.play();
			}
		}
	});

	window.setInterval(function() {
		if(phonevideo.paused)
		{
			phonevideo.play();
		}
	}, 2000);
});
