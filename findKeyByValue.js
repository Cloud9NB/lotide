const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(object, showNames) {
  for (const keys in object) {
    console.log(`${keys}: ${object[keys]}`);
    if (showNames === object[keys]) {
      return keys;
    }
  }
};

module.exports = findKeyByValue;