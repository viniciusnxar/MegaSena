var numerosMegasena = document.getElementById("divNumerosMegaSena");
var numerosEscolhidos = [];
var botaoJogar = document.getElementById("botaoJogar");
numerosMegasena.addEventListener('click' ,function(cordefundo){
    cordefundo.target.style.background = "#01ac66";
    numerosEscolhidos.push(cordefundo.target.innerHTML);
    if(numerosEscolhidos.length > 6){
    alert("No máximo 6 números")
    cordefundo.target.style.background = "#adc0c4"
    botaoJogar.disable = false ;
    return;
    }
    validaNumerosEscolhidos();

});

function validaNumerosEscolhidos(){
    if(numerosEscolhidos.length == 6){
        botaoJogar.disable = false;
    }
}
var numerosSelecionados = [];
var resultado = "";
var NumerosSorteados = document.getElementById("NumerosSorteados")
botaoJogar.addEventListener('click' ,numero_aleatorio);

function numero_aleatorio(){
    if(resultado != "")
        resultado = "";
        while(numerosSelecionados.length < 6){
            var aleatorio = Math.floor(Math.random()*60 + 1)
            
            if(numerosSelecionados.indexOf(aleatorio) == -1){
                resultado+= aleatorio + " ";
                numerosSelecionados.push(aleatorio)
            }
        }
        
        NumerosSorteados.innerHTML = "Números Sorteados: " + "<b>" + resultado + "</b>";
        verificaNumerosAcertados();
    
}
var contador = 0
var acertos = document.getElementById("Acertos");

function verificaNumerosAcertados(){
    for(var i = 0; i <6; i++){
        
        for(var j =0;j<6;j++){
            if(numerosEscolhidos[j] == numerosSelecionados[i]){
                contador = contador + 1
            }
        }
    }
    if(contador==0){
        acertos.innerHTML= "Infelizmente, voce perdeu"
        return
    }else if(contador == 6){
        acertos.innerHTML= "Parabens voce ganhou na mega sena"
        return;
    }else if(contador == 1)
    {
        acertos.innerHTML= "voce acertou 1 numero"
    }else if(contador >1){
        acertos.innerHTML= "Voce acertou " + contador + " numeros, continue tentando"
        return;
    }
}
var botaoLimpar = document.getElementById("botaoLimpar")
var span = document.getElementsByClassName("numeros");
botaoLimpar.addEventListener('click' ,lipardadosdatela);

function lipardadosdatela(){
    for(var i = 0; i < span.length; i++){
        span[i].style.backgroundColor = "#adc0c4";
    }
    NumerosSorteados.innerHTML = "";
    resultado = "";
    acertos.innerHTML= "";
    numerosEscolhidos.length = 0;
}
var numerosAutomaticos = [];
var botaoGerarJogo = document.getElementById("botaoGeraJogo");
botaoGerarJogo.addEventListener("click" ,gerarjogoautomaticamente);

function gerarjogoautomaticamente(){
    while(numerosAutomaticos.length < 6){
        var aleatorio = Math.floor(Math.random()*60 + 1)
        if(numerosAutomaticos.indexOf(aleatorio) == -1){
            resultado+= aleatorio + " ";
            numerosAutomaticos.push(aleatorio)
        }
    }
    numerosEscolhidos = numerosAutomaticos ;
    for(var i = 0; i<span.length; i++){
        for(var j= 0; j<6;  j++){
            if(span[i].innerHTML == numerosEscolhidos[j]){
                span[i].style.backgroundColor = "#01ac66"
            }
        }
        
    }

}

