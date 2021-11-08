function soma() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = document.getElementById("resultado");
    num1 = parseFloat(num1);
    num2 = parseInt(num2);
    resultado.innerHTML = "Resultado: " + (num1+num2);
}

function subtracao() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = document.getElementById("resultado");
    num1 = parseFloat(num1);
    num2 = parseInt(num2);
    resultado.innerHTML = "Resultado: " + (num1-num2);
}

function multiplicacao() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = document.getElementById("resultado");
    num1 = parseFloat(num1);
    num2 = parseInt(num2);
    resultado.innerHTML = "Resultado: " + (num1*num2);
}

function divisao() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = document.getElementById("resultado");
    num1 = parseFloat(num1);
    num2 = parseInt(num2);
    resultado.innerHTML = "Resultado: " + (num1/num2);
}