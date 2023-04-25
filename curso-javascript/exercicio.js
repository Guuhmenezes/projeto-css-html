function somar(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let resultado = numero1 + numero2;
    alert("O resultado da soma = "+resultado);

}
function calcular(conta){

    if(numero1=="somar"){
        somar();
        let numero1 = parseInt(document.getElementById("num1").value);
        let numero2 = parseInt(document.getElementById("num2").value);
        let resultado = numero1 + numero2;
       // alert("O resultado da soma = "+resultado);
       document.getElementById("resultado").value = resultado;
    }
}