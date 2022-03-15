const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(objects, callback) {
  for (const keys in objects) {
    console.log('keys: ',keys);
    console.log('object[keys]: ', objects[keys]);
    if (callback(objects[keys])) {
      return keys;
    }
  }
};

module.exports = findKey;