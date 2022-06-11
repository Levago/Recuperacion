//FindIndex
//The findIndex() method returns the index of the first element of an array that matches the given test function. Otherwise it returns -1.
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));