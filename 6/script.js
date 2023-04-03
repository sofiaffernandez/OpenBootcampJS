// Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra = ["Manzanas", "Leche", "Pan", "Huevos", "Cereales"];

// Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculasFavoritas = [
  {
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    fecha: "1972",
  },
  {
    titulo: "El Caballero Oscuro",
    director: "Christopher Nolan",
    fecha: "2008",
  },
  {
    titulo: "La La Land",
    director: "Damien Chazelle",
    fecha: "2016",
  },
];

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let peliculasPosteriores2010 = peliculasFavoritas.filter(
  (pelicula) => pelicula.fecha > "2010-01-01"
);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directoresPeliculas = peliculasFavoritas.map((pelicula) => pelicula.director);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let titulosPeliculas = peliculasFavoritas.map((pelicula) => pelicula.titulo);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let listaConcatenada = directoresPeliculas.concat(titulosPeliculas);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let listaConcatenadaSpread = [...directoresPeliculas, ...titulosPeliculas];
