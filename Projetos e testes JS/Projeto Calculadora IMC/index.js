
const calcular = document.getElementById('calcular');


function imc(){
    const nome = document.getElementById('nome').value;  // adicionando o .value fica: pega o documento no qual o id e nome e pega o valor dele.
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome.value !== ''&& altura !== '' && peso !== ''){  //validação
        
        const valorIMC = (peso / (altura**2)).toFixed(2); // calculo do imc

        let classificação = "";
        if(valorIMC < 18.5){
            classificação = "abaixo do peso";
        } else if (valorIMC < 25) {
            classificação = "com peso ideal, parabens!";
        } else if(valorIMC <30){
            classificação = "levemente acima do peso.";
        } else if(valorIMC < 35){
            classificação = "com obesidade grau I."
        } else if(valorIMC < 40){
            classificação = "obesidade grau II"
        } else if(valorIMC){
            classificação = "obesidade grau III. Cuidado!"
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificação} `;

    } else {
        resultado.textContent = "Preencha todos os campos";
    }
    
}

calcular.addEventListener('click', imc); // Adiciona um evento ao calcular. Quando 'click', executa a função imc
