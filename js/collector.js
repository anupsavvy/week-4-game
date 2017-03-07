var time_spent = 0;
var time_available = 0;
var mit = 0;
var adm = 0;
var fp = 0;
var ctci = 0;

var start = function(){
	time_spent = 0;
	time_available = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	mit = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	adm = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	fp = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	ctci = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	$("#time-available").html(time_available);
	$("#restart").hide();
}

$( document ).ready(function() {
    start();
});


$(".img-thumbnail").click(function(){
	if(this.getAttribute("data-val") === 'mit'){
		time_spent += mit;
	}else if(this.getAttribute("data-val") === 'fp'){
		time_spent += fp;
	}else if(this.getAttribute("data-val") === 'ctci'){
		time_spent += ctci;
	}else if(this.getAttribute("data-val") === 'adm'){
		time_spent += adm;
	}
	$("#time-spent").html(time_spent);
	if(time_spent > time_available){
		$("#time-spent").html("You took too long to prepare !!");
		$("#restart").show();
	}else if(time_spent === time_available){
		$("#time-spent").html("You prepared well in time !!");
		$("#restart").show();
	}
});

$("#restart").click(function(){
	start();
});