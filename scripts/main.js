function retrieveInputValue(){
	return $("#input_box").val()
}
window.onload=function(){
	$("#submit_button").on("click", function(){
		var input = retrieveInputValue()
		alert(input)
	})
}