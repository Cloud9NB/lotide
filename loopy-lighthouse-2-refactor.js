const loopyLighthouse = function(range, multiples, words) {
  let output = '';
  for (let x = range[0]; x <= range [1]; x++) {
    if (x % multiples[0] === 0) {
      output += words[0];
    }
    if (x % multiples[1] === 0) {
      output += words[0];
    }
    if (!output) {
      output = i;
    }
  }
};


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

/*
range should be an array of 2 numbers representing the start and end values for the loop.
multiples should be an array of 2 numbers representing the multiples you want to replace with words.
words should be an array of 2 strings representing the words that will replace the multiples.
*/