// initialize jQuery command after all page elements load
	    			
$(function(){

//go to: http://api.jquery.com to read about each of the methods below and then set the apropriate button to apply the method to the content below it.

	//hide
	$("#b1").click(function(){
		$("#p1").hide(1000);
	});
		
	//show
	$("#b2").click(function(){
		$("#p1").show(1000);
	});
			
	//toggle
	$("#b3").click(function(){
		$("#p1").toggle(1000);
	});
	
		
	//css
	$("#b4").click(function(){
		$("#p2").css('color', 'green');
	});
	
		
	//css (multiple property changes)
	$("#b5").click(function(){
		$("#p2").css({'color': 'blue', 'background-color': 'purple', 'border': '2px solid green'});
	});
	
		
	//html
	$("#b6").click(function(){
		$("#p3").html('the text has changed');
	});
	
		
	//prepend
	$("#b7").click(function(){
		$("#p3").prepend('<p>Hannah is the most awesome.</p>');
	});
	
		 
	//append
	$("#b8").click(function(){
		$("#p3").append('<p>Hannah is still the most awesome.</p>');
	});
	
		 
	//before
	$("#b9").click(function(){
		$("#p4").before('<p>Penguins are cute.</p>');
	});
	
		 
	//after
	$("#b10").click(function(){
		$("#p4").after('<p>But polar bears are cuter.</p>');
	});
	
		 
	//wrap
	$("#b11").click(function(){
		$("#p5").wrap('<div class = "surprise"></div>');
	});
	
		 
	//addClass
	$("#b12").click(function(){
		$("#p5").addClass('woohoo');
	});
	
		 
	//clone
	$("#b13").click(function(){
		$("ul").clone().appendTo('ul');
	});
	 
	//fadeOut
	$("#b14").click(function(){
		$("#p6").fadeOut(5000);
	});
	
		 
	//fadeIn
	$("#b15").click(function(){
		$("#p6").fadeIn(5000);
	});
	
		  
	//fadeToggle
	$("#b16").click(function(){
		$("#p6").fadeToggle(5000, 'linear');
	});
	
		  
	//slideUp
	$("#b17").click(function(){
		$(".box-content").slideUp();
	});
	
		 
	//slideDown
	$("#b18").click(function(){
		$(".box-content").slideDown();
	});
	

	 //slideToggle
	 $(".box-header").click(function(){
		$(".box-content").slideToggle();
	});
		  
	//animate
	$("#b19").click(function(){
		$(".box-animate").animate({height: '300px', width: '300px'},1000);
		$(".bonus").animate({padding: '20px'},1000);
	});
		 
});