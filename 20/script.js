const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        // console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy" // copy por defecto
        // console.log("Drag Over")
        //
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Párrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})
// Seleccionar la papelera y los párrafos
const papelera = document.getElementById('papelera');

// Agregar un listener para el evento dragover en la papelera
papelera.addEventListener('dragover', (e) => {
    e.preventDefault();
});

// Agregar un listener para el evento drop en la papelera
papelera.addEventListener('drop', (e) => {
    // Obtener el id del párrafo que se está arrastrando
    const id = e.dataTransfer.getData('text/plain');
    
    // Buscar el párrafo con ese id y eliminarlo
    const parrafo = document.getElementById(id);
    parrafo.parentNode.removeChild(parrafo);
});
