
    function calcular() {
    let altura = document.getElementById("alt").value;
    let peso = document.getElementById("pes").value;
    let imc = peso * (altura*altura).value; 
    let resultado = document.getElementById("resultado").value;

    if (imc < 16 ) {
        altura.innerHTML = altura;
        peso.innerHTML = peso;
        resultado.innerHTML = imc.toFixed(2);
    }
}

function mudar() {
    window.location.href = "https://forum.imasters.com.br/topic/290965-redirecionamento-com-o-objeto-button/";
}
    