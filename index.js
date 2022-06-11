//Shift
//The shift() method removes the first element from the array and returns it. This method modifies the length of the array.
//The following code displays the contents of the myFish array before and after the first element is removed. It also shows the deleted item
var miPescado = ['ángel', 'payaso', 'mandarín', 'cirujano'];

console.log('miPescado antes: ' + miPescado);

var eliminado = miPescado.shift();

console.log('miPescado después: ' + miPescado);

console.log('Elemento eliminado: ' + eliminado);