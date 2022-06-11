//Reduce
//reduce executes a reduce function on each element of an array, returning a single value as a result.
//case of use for this case the following array of numbers will be reduced.
const array = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);