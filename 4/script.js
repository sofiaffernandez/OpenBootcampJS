const nombre = "Juan";
const apellido = "Pérez";
const estudiante = nombre + " " + apellido;
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();
const numLetras = estudiante.replace(/\s/g, "").length;
const primeraLetra = nombre.charAt(0);
const ultimaLetra = apellido.charAt(apellido.length - 1);
const estudianteSinEspacios = estudiante.replace(/\s/g, "");
const contieneNombre = estudiante.includes(nombre);

console.log(nombre);
console.log(apellido);
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(numLetras);
console.log(primeraLetra);
console.log(ultimaLetra);
console.log(estudianteSinEspacios);
console.log(contieneNombre);