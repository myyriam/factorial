$(document).ready(function(){

function obtenerFactorial(no, resultado){
		if (no==0 || no==1){
		resultado= 1;
		return resultado;
		}else{
			while ( no > 1 ){
				resultado = resultado*(no-1);
				no= no-1;
				} return resultado;
		 }
}

$("form").on("submit",function(event){
	event.preventDefault();

	var no= parseInt($("input#numero").val());
	var resultado= parseInt($("input#numero").val());
	var result = obtenerFactorial(no, resultado);
	console.log(result);

		$("#tabla").append("<tr><td>" + no + "</td><td>" + result + "</td></tr>");
		})
	})

