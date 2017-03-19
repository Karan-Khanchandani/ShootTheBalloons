$(document).ready(function(){
	$(".sky").click(function(event){
	var audio = document.getElementById("audio");
	audio.load();
	audio.play();
});
});
