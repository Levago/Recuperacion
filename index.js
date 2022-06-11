//Find
// find returns the value of the first element of the array that satisfies the given test function.
//case of use in this case look for the following numbers of the array.
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);