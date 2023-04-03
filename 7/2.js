// Definimos un objeto con nuestros datos personales
const miDatosPersonales = {
    nombre: "Sofía",
    apellido: "Fernández",
    edad: 24,
    altura: 1.70,
    eresDesarrollador: true
  };
  
  // Obtenemos la edad a partir del objeto anterior
  const miEdad = miDatosPersonales.edad;
  
  // Definimos un objeto con los datos de nuestros dos mejores amigos
  const amigo1 = {
    nombre: "Lucia",
    apellido: "González",
    edad: 28,
    altura: 1.65,
    eresDesarrollador: false
  };
  
  const amigo2 = {
    nombre: "Paula",
    apellido: "Martínez",
    edad: 24,
    altura: 1.68,
    eresDesarrollador: false
  };
  
  // Creamos una lista con los objetos de nuestros datos personales y los datos de nuestros amigos
  const listaDatosPersonales = [miDatosPersonales, amigo1, amigo2];
  
  // Ordenamos la lista anterior por edad, de mayor a menor
  const listaOrdenadaPorEdad = listaDatosPersonales.sort((a, b) => b.edad - a.edad);
  