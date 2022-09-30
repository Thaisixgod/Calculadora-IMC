
const calcular = document.getElementById("calcular");


function imc () {
    const nome = document.getElementById("nome").value;
    const altura =  document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado =document.getElementById("resultado");

    if (nome !== "" &&  altura !== "" && peso !== ""){
 
        const ValorIMC = (peso / (altura * altura)).toFixed(2);
        
        resultado.textContent = ValorIMC;
 
    } else {
 
    resultado.textContent = "Preencha todos os campos";
    }

}

calcular.addEventListener("click", imc);