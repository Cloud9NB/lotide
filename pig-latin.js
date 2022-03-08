const args = process.argv.splice(2);

const latin = function(args) {
  let latinWord = '';
  for (let x = 0; x < args.length; x++) {
    for (let i = 1; i < args[x].length; i++) {
      latinWord += args[x][i];
    }
    latinWord += `${args[x][0]}ay `;
  }
  return latinWord;
};
console.log(latin(args));