//CODIGO DEL CUADRADO

console.group("Cuadrados"); // esto sirve para agrupar los mensajes de cierto grupo en la consola 

//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) { //nuestras funciones nos permiten recibir parametros, los parametros son variables que recibimos cuando llamemos a nuestra funcion en el futuro
    return lado * 4; //lo que esperamos de nuestras funciones es que nos retornen algun valor, esto lo especificamos con return
}

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("el perimetro del cuadrado es " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("el area del cuadrado es " + areaCuadrado + "cm²");

console.groupEnd(); // lo que hace es decir que hasta aqui va agrupar este grupo de mensajes 

//CODIGO DEL TRIANGULO

console.group("Triaungulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriaungulo = 4;

//console.log(
//    "los lados del triangulo miden: " 
//    + ladoTriangulo1 
//    + "cm, " 
//    + ladoTriangulo2 
//    + "cm, " 
//   + baseTriaungulo 
//    + "cm"
//);
 
//const alturaTriaungulo = 5.5;
//console.log("la altura de mi triangulo es: " + alturaTriaungulo + " cm");

function perimetroTriaungulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//const perimetroTriaungulo = ladoTriangulo1 + ladoTriaungulo2 + baseTriangulo;
//console.log("el perimetro de mi triaungulo es: " + perimetroTriaungulo + " cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2; 
} 
//const areaTriangulo = (baseTriangulo * alturaTriaungulo) / 2;
//console.log("el area de mi triaungulo es: " + areaTriangulo + "cm²");

console.groupEnd();

//CODIGO DEL CIRCULO

console.group("circulos");

//RADIO
 //const radioCirculo = 4;
 //console.log("el radio de mi circulo es: " + radioCirculo + "cm");

//DIAMETRO
function diametroCirculo(radio){
    return radio * 2;
} 
// const diametroCirculo = radioCirculo * 2; 
//console.log("el diametro de mi circulo es: " + diametroCirculo + "cm");

//PI
const pi = Math.PI;
console.log("Pi es: " + pi); 

//CIRCUNFERENCIA

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);// vamos a hacer que nuestra variable diametro va a ser igual a ejecutar a la funcion diametro circulo enviandole como argumento radio    
    return diametro * pi;
}
//const perimetroCirculo = diametroCirculo * pi;
//console.log("el perimetro de mi circulo es: " + perimetroCirculo + "cm");

//AREA
function areaCirculo(radio){
    return (radio * radio) * pi;
}

//const areaCirculo = (radioCirculo * radioCirculo) * pi; 
//console.log("el area de mi circulo es: " + areaCirculo + "cm²");

console.groupEnd();

//AQUI COMENZAMOS A INTERACTUAR CON EL HTML

//CUADRADO

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado"); //esto nos va a permitir tener ese elemento html desde js
    const value = input.value; //aqui ya estamos obteniendo el valor que escribieron los usuarios en el html lo recibimos desde js

    const perimetro = perimetroCuadrado(value); //
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado"); 
    const value = input.value; 

    const area = areaCuadrado(value); 
    alert(area);
}

//TRIANGULO

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputLado1Triangulo");
    const lado1 = parseFloat(input1.value);
   
    const input2 = document.getElementById("inputLado2Triangulo");
    const lado2 = parseFloat(input2.value);
  
    const input3 = document.getElementById("inputBaseTriangulo");
    const lado3 = parseFloat(input3.value);
      
   
    const perimetro = perimetroTriaungulo(lado1, lado2, lado3);
    alert(perimetro);
}

function calcularAreaTriaungulo() {
    const input1 = document.getElementById("inputBaseTriangulo");
    const base = parseInt(input1.value);

    const input2 = document.getElementById("alturaTriangulo");
    const altura = parseInt(input2.value);

    const area = areaTriangulo(base, altura);
    alert(area);
}

//CIRCULO

function calcularDiametroCirculo() {
    const input = document.getElementById("radioCirculo");
    const radio = parseFloat(input.value);

    const diametro = diametroCirculo(radio);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("radioCirculo");
    const radio = parseFloat(input.value);

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}


function calcularAreaCirculo() {
    const input = document.getElementById("radioCirculo");
    const radio = parseFloat(input.value);

    const area = areaCirculo(radio);
    alert(area);
}

