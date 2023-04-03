// Altura en centímetros
let alturaCm = 170;

// Altura en metros
let alturaM = alturaCm / 100;

// Peso en kilogramos
let pesoKg = 75.5;

// Altura en metros redondeada hacia arriba
let alturaMRedondeada = Math.ceil(alturaM);

// Peso en kilogramos redondeado hacia abajo
let pesoKgRedondeado = Math.floor(pesoKg);

// Comprobación si el máximo valor que se puede obtener en Javascript + 1 es igual al máximo valor que se puede obtener en Javascript
let maximoValor = Number.MAX_VALUE;
let resultado = (maximoValor + 1) === maximoValor;
console.log(resultado); // true
