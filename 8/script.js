// Función sin parámetros que devuelve siempre true
function alwaysTrue() {
    return true;
  }
  
  // Función asíncrona que utiliza setTimeout y muestra un mensaje por consola
  async function asyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('Hola soy una promesa');
  }
  
  // Función generadora de índices pares automáticos
  function* evenIndexGenerator() {
    let index = 0;
    while (true) {
      yield index;
      index += 2;
    }
  }

console.log(alwaysTrue()); // Devuelve true
asyncFunction(); // Muestra un mensaje por consola después de 5 segundos
const generator = evenIndexGenerator();
console.log(generator.next().value); // Devuelve 0
console.log(generator.next().value); // Devuelve 2
console.log(generator.next().value); // Devuelve 4
