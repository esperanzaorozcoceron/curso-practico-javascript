const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const list1Count = {}; // esa lista que tenemos la estamos convirtiendo en un objeto. en este caso es un objeto vacio

lista1.map(
    function (elemento) {
        if(list1Count[elemento]) {
           list1Count[elemtno] +=1; 
        }else {
            list1Count[elemtno] = 1; 
        }
    }
);

const lista1Array = Object.entries(list1Count).sort(   // transformamos ese objeto nuevamente a un array con el metodo entries
    function (elemento1, elemento2) {
       return elemento1[1] - elemento2[1];
    }
); 

const moda = lista1Array[lista1Array.length - 1];

function calcularModa(valores) {
    const [repeticiones, moda] = valores.reduce(
      (acc, val) => {
        const nn = contar(valores, val);
        if (nn === acc[0] && acc[1].every((item) => item !== val)) {
          acc[1].push(val);
        } else if (nn > acc[0]) {
          acc = [nn, [val]];
        }
        return acc;
      },
      [0, []]
    );
  
    return { repeticiones, moda };
  }
  
  function contar(arrayElmentos, valorAContar) {
    return arrayElmentos.filter((elemento) => elemento === valorAContar).length;
  }