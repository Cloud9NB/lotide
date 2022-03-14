const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays.js');


assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertArraysEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
assertArraysEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);