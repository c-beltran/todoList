$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	//use .parent() to select the parent element of this span
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//we use this to stop bubbling up to other parents of this element
	event.stopPropagation();
});

$("input:text").keypress(function(event){
	if(event.which === 13){
		var todo = $(this).val();
		$(this).val("");
		$('ul').append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todo + "</li>");
	}
});

$("#add").on("click", function(){
	$("input").focus();
});