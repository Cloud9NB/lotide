// if i pass the word hello, what is the final answer gonna look like
//{ h: [0],
//  e: [1],
//  l: [2, 3]
//  o: [4] }

// dot notation vs bracket notation in javascript Objects GOOGLE!!

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {       //
      if (results[sentence[i]]) {    // if the key exist push the index into the existing array
        results[sentence[i]].push(i) // 
      } else {                       // if key does not exist then CREATE an array
      results[sentence[i]] = [i];   //
      }
    }
  }
  console.log('result: ', results);
  return results;
};
letterPositions("lighthouse in the house")
// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// };

// const eqArrays = function(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };