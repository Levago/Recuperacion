//Replace
//The replace() method returns a new string with some or all of the matches of a pattern, each of these matches being replaced by replace. The pattern can be a string or a RegExp, and the replacement can be a string or a function that will be called for each match. If the pattern is a string, only the first match will be replaced.
//case of use values ​​are being replaced.
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));

const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));