//const lista1 = [100, 200, 300, 500]; 


const promedioLista = sumaLista / lista1.length;

function calcularMediaAritmetica(lista) {
    let sumaLista = 0; 
    for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
}

//const sumaLista = lista.reduce( // este metodo reduce va a recibir una funcion nosotros tenemos que enviarle como argumento  a este metodo reduce y este metodo lo que nos va a permitir ir sumando cada uno de nuestros elementos
//    function (valorAcumulado = 0, nuevoElemento) {
//        return valorAcumulado + nuevoElemento;
//    }
//) 

const promedioLista = sumaLista / lista.length;
return promedioLista;
}
