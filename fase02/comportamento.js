/*
let mesagem = "Olá, mundo!";
console.log(mesagem);
mesagem = 10;
console.log(mesagem);
console.log(typeof(mesagem)); //typeof identica o tipo da variável
*/

function somar() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let total = document.getElementById("total");

    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);

    let tot = n1 +  n2;

    if (isFinite(tot)) {
        total.innerHTML = tot;
    }
}




