function somar(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let resultado = numero1 + numero2;
    alert("O resultado da soma = "+resultado);

}
function subtrair(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let resultado = numero1 - numero2;
    alert("O resultado da soma = "+resultado);

}
function dividir(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let resultado = numero1 % numero2;
    alert("O resultado da soma = "+resultado);

}
function multiplicar(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let resultado = numero1 * numero2;
    alert("O resultado da soma = "+resultado);

}


function calcular(conta){

    if(conta=="somar"){
        somar();
        let numero1 = parseInt(document.getElementById("num1").value);
        let numero2 = parseInt(document.getElementById("num2").value);
        let resultado = numero1 + numero2;
       // alert("O resultado da soma = "+resultado);
       document.getElementById("resultado").value = resultado;
    }

    if(conta=="subtrair"){
        subtrair();
        let numero1 = parseInt(document.getElementById("num1").value);
        let numero2 = parseInt(document.getElementById("num2").value);
        let resultado = numero1 - numero2;
        //alert("O resultado da soma = "+resultado);
        document.getElementById("resultado").value = resultado;
    }
    if(conta=="multipicar"){
        multiplicar();
        let numero1 = parseInt(document.getElementById("num1").value);
        let numero2 = parseInt(document.getElementById("num2").value);
        let resultado = numero1 * numero2;
        alert("O resultado da soma = "+resultado);
    }
    if(conta=="dividir"){
        dividir ();
        let numero1 = parseInt(document.getElementById("num1").value);
        let numero2 = parseInt(document.getElementById("num2").value);
        let resultado = numero1 / numero2;
        alert("O resultado da soma = "+resultado);
    }


}