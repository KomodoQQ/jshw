function countPositivesSumNegatives(input) {
  if(input == null || input.length == 0) {
    return [];
  }
  
  let result = input.reduce((acc, item) => {
    item > 0 ? acc.positiveCounter++ : acc.negativeSum += item;
    return acc;
  }, {positiveCounter: 0, negativeSum: 0});

  return [result.positiveCounter, result.negativeSum];
}