// teste = "Isto é um teste";
// teste = new String("Isto é um teste");
// teste1 = "Isto é um teste";
// teste2 = "Somente um teste";
// teste3 = teste1 + teste2;
// teste3 += "!"
// //alert(teste3);

// var frase = "Este é o meu Brasil."
// document.write(frase.length)
// var frase1 = "Ouvindo você esquece. Lendo você aprende. Fazendo, você sabe!";
// alert(frase1.toUpperCase())
// alert(frase1.toLowerCase())
// var frase3 = "Brasil, meu Brasil Brasileiro...";
// var ind = frase3.indexOf("meu")
// document.write(ind)
// var a = 5;
// if(a>20){
//     alert("A é maior que 20")
// }else{
//     alert("A é menor que 20")
// }


// var x =2;
// var y =4;
// if((x==2)&&(y==3)){
//     var z = x + y;
//     alert("O valor de Z é igual ="+z);  
// }else{
//     alert("Alguma informação deu como falsa!!!")
// }

var diaDaSemana = 5;

switch(diaDaSemana){
    case 0 : document.write("Domingo");break;
    case 1 : document.write("Segunda-feira");break;
    case 2 : document.write("Terça-feira");break;
    case 3 : document.write("Quarta-feira");break;
    case 4 : document.write("Quinta-feira");break;
    case 5 : document.write("Sexta-feira");break;
    case 6 : document.write("Sábado");break;
default : alert("Dia da semana inválido!")
}