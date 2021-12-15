// Helpers
function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

//Calculadora de Mediana
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

  function  medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1]; 
        const personaMitad2 = lista[mitad]; 

        const mediana = calcularMediaAritmetica(personaMitad1, personaMitad2);
        return mediana;
    }else {
        const personaMitad = lista[mitad]; 
        return personaMitad;
    }
}

//Mediana general 
const salariosCol = colombia.map(
    function (personita) {
        return persomita.salary;
    }
); 

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);


const medianaGeneralCol = medianaSalarios(salariosColSorted);

//mediana del top 10

const spliceStart = (salariosColSorted.length * 90) / 100; 
const spliceCount = salariosColSorted.length - spliceStart; 

const salariosColTop10 = salariosColSorted.splice( // el metodo splice me permite hacer un corte dentro de mi array, el primer parametro del splice corresponde a la ubicacion donde queremos realizar el corte y el segundo a la cantidad de los cortes que va a hacer
    spliceStart,
    spliceCount,
) 

const medianaTop10Col =  medianaSalarios(salariosColTop10);

console.log({
   // medianaSalarios(salariosColSorted)
    medianaGeneralCol,
    medianaTop10Col,
  });
  