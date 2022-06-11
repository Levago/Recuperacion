//Promise 
//A Promise is an object that represents the completion or failure of an asynchronous operation. Since most people consume promises already created, this guide will first explain how to consume them, and then how to create them.

function exitoCallback(resultado) {
    console.log("Archivo de audio disponible en la URL " + resultado);
  }
  
  function falloCallback(error) {
    console.log("Error generando archivo de audio " + error);
  }
  
  crearArchivoAudioAsync(audioConfig, exitoCallback, falloCallback);
