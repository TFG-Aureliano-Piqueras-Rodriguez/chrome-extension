# Forms4TV, Forms For youTube Videos (Formularios para videos de youTube en español)
## Version 0 (v0 en adelante)

Este es el repositorio del TFG de Aureliano Piqueras Rodríguez
Se desarrollará una extensión para Chrome que extenderá funcionalidades a la web de Youtube.
Esta v0 no implementa ninguna funcionalidad, es un "Hola mundo".

## Instalación
Descarga o clona este repositorio.
Abre Google Chrome y ve a la página chrome://extensions/.
Habilita el modo desarrollador en la parte superior derecha de la página.
Haz clic en "Cargar descomprimida" y selecciona la carpeta donde se encuentra la extensión descargada.

## Uso (v0)
Una vez instalada la extensión, abre un video de YouTube que contenga "https://www.youtube.com/watch" en su URL. 
Verás que justo debajo del video en reproducción aparece un div con el texto "Hola mundo" de color rojo.

## Cómo funciona (v0)
La extensión utiliza la API MutationObserver de JavaScript para detectar cuándo se añade el elemento #above-the-fold al DOM. Este elemento se encuentra debajo del contenedor del video en reproducción. Una vez detectado este elemento, se añade un div con el texto "Hola mundo" en él. 
Se utilizan los estilos de youTube para que el div se integre perfectamente en la página, aunque se ha rellenado de rojo para que resalte.


Tutor: José Antonio Parejo
Escuela Técnica Superior de Ingeniería Informática - Universidad de Sevilla
