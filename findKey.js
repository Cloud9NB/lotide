const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(objects, callback) {
  for (const keys in objects) {
    // console.log('keys: ',keys)
    // console.log('object[keys]: ', objects[keys])
    if (callback(objects[keys])) {
      return keys;
    }
  }
};

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(result, 'noma');
assertEqual(result, ['w', 't', '4', 'a', 'd']);

// It should scan the object and return the first key for which the callback returns a truthy value.
// If no key is found, then it should return undefined.