function countPositivesSumNegatives(input) {
  let negativeSum = 0;
  let positiveCounter = 0;
  if(input == null || input.length == 0) {
    return [];
  }
  input.forEach((elem) => {
    elem > 0 ? positiveCounter++ : negativeSum += elem;
  })
    return [positiveCounter, negativeSum];
}