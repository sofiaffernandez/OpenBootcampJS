const miPerfil = {
    nombre: "Juan",
    edad: 28,
    esDesarrollador: true,
    fechaNacimiento: new Date("1993-05-14"),
    libroFavorito: {
      titulo: "El código Da Vinci",
      autor: "Dan Brown",
      fecha: 2003,
      url: "https://es.wikipedia.org/wiki/El_código_Da_Vinci"
    }
  };
  

  console.log(`Mi nombre es ${miPerfil.nombre}.`);
  console.log(`Tengo ${miPerfil.edad} años.`);
  console.log(`Soy ${miPerfil.esDesarrollador ? "desarrollador" : "usuario"}.`);
  console.log(`Nací el ${miPerfil.fechaNacimiento.toLocaleDateString()}.`);
  console.log(`Mi libro favorito es "${miPerfil.libroFavorito.titulo}" de ${miPerfil.libroFavorito.autor}, publicado en ${miPerfil.libroFavorito.fecha}. Puedes encontrar más información sobre este libro en ${miPerfil.libroFavorito.url}.`);