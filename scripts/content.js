// Esta función añade el div con el texto "Hola mundo" al DOM
// #above-the-fold se encuentra debajo del vídeo y encima de la descripción
// #bottom-row es el elemento que contiene el #description, se encuentra dentro de #above-the-fold
// El div se añade justo antes de #bottom-row

function addHelloWorldDiv() {
  // *Solo para depuración* // console.log("addHelloWorldDiv() ejecutándose");
  // Buscamos el elemento #above-the-fold
  const aboveTheFold = document.querySelector("#above-the-fold");
  if (aboveTheFold) {
    // *Solo para depuración* // console.log("#above-the-fold encontrado");
    // Buscamos el elemento #bottom-row
    const bottomRow = aboveTheFold.querySelector("#bottom-row");
    // Creamos el div con el texto "Hola mundo"
    const divElement = document.createElement("div");
    divElement.id = "hello-world";
    divElement.textContent = "Hola mundo";
    // Algunos estilos
    divElement.style.borderRadius = "5px";
    divElement.style.backgroundColor = "red";
    divElement.style.color = "white";
    divElement.style.padding = "10px";
    divElement.style.textAlign = "center";
    divElement.style.fontSize = "2em";
    // Creamos el div contenedor
    divContainer = document.createElement("div");
    divContainer.style.width = "100%";
    divContainer.style.boxSizing = "border-box";
    // Clases de YouTube
    divElement.className = "item style-scope ytd-watch-metadata";
    divContainer.className = "style-scope ytd-watch-metadata";
    // Añadimos el div al contenedor y el contenedor justo antes del #bottom-row
    divContainer.appendChild(divElement);
    bottomRow.prepend(divContainer);
  }
}

// Añadimos un observador para detectar cuando se añade el elemento #above-the-fold
// Es necesario ya que el script se ejecuta antes de que se cargue el DOM completo
// y el elemento #above-the-fold no existe en ese momento

const observer = new MutationObserver(function (mutationsList, observer) {
  // *Solo para depuración* // console.log("MutationObserver ejecutándose");
  for (let mutation of mutationsList) {
    if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
      for (let node of mutation.addedNodes) {
        if (node.id === "above-the-fold") {
          // Solo para depuración // console.log("#above-the-fold encontrado");
          addHelloWorldDiv();
          return;
        }
      }
    }
  }
});

//Añadimos el observador al body
observer.observe(document.body, { childList: true, subtree: true });

// *Solo para depuración*  // console.log("Cargando la página");
addHelloWorldDiv();