"use strict";

const API_KEY = "9091E687";
const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY + "&";

var search_url = API_URL + "s=" + "batman";
// http://www.omdbapi.com/?apikey=9091e687&s=batman

$.ajax({
	method: "GET",
	url: search_url
}).done(function (msg){
	if(msg.Response === "True"){

		var results = msg.Search; // Array de resultados

		if(results.length >= 1){
			var i = 0;
			
			var result = results[0]; // Primeiro Resultado

			var titulo = result.Title;
			var ano = result.Year;
			var tipo = result.Type;
			var poster = result.Poster;

			console.log("Title: " + titulo);
			console.log("Year: " + ano);
			console.log("Type: " + tipo);
			console.log("Poster: " + poster);

		}else{
			console.log("Erro: sem resultados!");
		}
	} else{
		console.log("Erro: Pedido sem resposta!");
	}
});