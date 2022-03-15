const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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

module.exports = letterPositions;