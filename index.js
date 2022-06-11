//For....Of
//La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array, objetos similares a array (por ejemplo, arguments or NodeList), TypedArray, Map, Set e iterables definidos por el usuario.
//case of use the array is iterating.
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
