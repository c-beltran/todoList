$("li").click(function(){
	$(this).toggleClass("completed");
});

$("span").click(function(event){
	//use .parent() to select the parent element of this span
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//we use this to stop bubbling up to other parents of this element
	event.stopPropagation();
});