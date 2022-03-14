const middle = function(num) {
  let middleArray = [];
  if (num.length <= 2) {
    return middleArray;
  }
  if (num.length % 2 === 0) {
    let middleTwo = num.length / 2;
    middleArray.push(num[middleTwo] - 1);
    middleArray.push(num[middleTwo])
  } else {
    let middle = ((num.length + 1) / 2) - 1;
    middleArray.push(num[middle]);
  }
  return middleArray;
};

module.exports = middle;