$(document).ready(function(){

	var sky = $(".sky"),
    tl;
	var balls = $('<div class = "ball"/>'); 
	console.log(balls);
	console.log(sky);
	sky.append(balls);
	TweenMax.set(balls, {x:500, y:480})




	$(".sky").click(function(event){
	var audio = document.getElementById("audio");
	audio.load();
	audio.play();
});
});


