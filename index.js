//Promise 
//A Promise is an object that represents the completion or failure of an asynchronous operation. Since most people consume promises already created, this guide will first explain how to consume them, and then how to create them.
//case of use the Consider the createAudioFileAsync() function, which asynchronously generates a sound file according to a configuration file, and two callback functions, one that is called if the audio file is created successfully, and the other that is called if an error occurs. The code could look like this.

function exitoCallback(resultado) {
    console.log("Archivo de audio disponible en la URL " + resultado);
  }
  
  function falloCallback(error) {
    console.log("Error generando archivo de audio " + error);
  }
  
  crearArchivoAudioAsync(audioConfig, exitoCallback, falloCallback);
