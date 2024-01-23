let num1 =prompt("informe o 1° valor. ");
let num2 =prompt("digite o 2° valor. ");
let num3 =7
let multi = num1 * num2;
let soma =Number (num1) + Number(num2);
let sub = soma - num3;
let divisao = multi / num2;
let base =num1;
let expoente =num2;
let potencia= base ^ expoente;

console.log("Soma: " + soma);
console.log("prova real: " + divisao);

soma = soma -1 ;

console.log("multiplicação:" + multi);
console.log("subtração:" + sub);
console.log("valores utilizados para as expressoes: "
+ num1+ "e" + num2);
//Utilizando a classe matematica para fazer o calculo de potencia, onde é passado 2 paramentos, sendo eles a base e o expoente... que np caso são os valores de num1 num2
const resultado=Math.pow(base, expoente);
console.log("potencia é :" + resultado);


