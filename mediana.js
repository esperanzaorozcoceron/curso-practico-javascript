function calcularMediaAritmetica(lista) {
    let sumaLista = 0; 
    for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
}

const lista1 = [100, 200, 300, 500, 4000000000];

const mitdaLista1 = parseInt(lista1.length / 2); 

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false; 
    }
    
}

let mediana; 

if (esPar (lista1.length)) {
    const elemento1 = lista1[mitdaLista1 - 1];
    const elemento2 = lista1[mitdaLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitdaLista1];
}


// if (lista1 es par?) {
    //necesitamos dos elementos
    // el promedio 
    // la mediana
//} else {
    //posicion mitadlista1 dentro de lista1
    // mediana
} 
