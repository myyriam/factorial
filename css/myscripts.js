$(document).ready(fuction(){

$("form").on("submit",function(event){
	event.preventDefault();

	function factorial(no){
		if (no >= 1){
			while (result <=no){
				result= no* (no-1)
			} 
		}
	}

	var no= parseInt($("input#numero")).val();
	var result= factorial (no);

$("span#result").text(result);
})
})