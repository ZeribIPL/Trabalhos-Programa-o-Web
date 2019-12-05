"use strict";

function submeter(){

    var nome = $("#nome").val();
    var idade = $("#idade").val();
    var cidade = $("#cidade").val();

    var dados = {
        "nome" : nome,
        "idade" : idade,
        "cidade" : cidade
    };

    var dados_json = JSON.stringify(dados)
    localStorage.setItem("dados", dados_json);

}

function ler_dados(){

    var dados_json = localStorage.getItem("dados");
    var dados = JSON.parse(dados_json);

    $("#nome").text(dados.nome);
    $("#idade").text(dados.idade);
    $("#cidade").text(dados.cidade);

}

$(function (){
   //On Document Load

   ler_dados();

});

function limpar(){

    // localStorage.clear(); -> limpa tudo!
    localStorage.removeItem("dados");

}