const args = process.argv;

const reverse = function(args) {
  const words = args.slice(2, args.length);
  for (let x = 0; x < words.length; x++) {
    let word = words[x];
    let newString = '';
    for (let i = word.length - 1; i >=0; i--) {
      newString += word[i];
    }
    console.log(newString);
  }
};
reverse(args);