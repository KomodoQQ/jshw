function evenNumbers(array, number) {
  return array.filter((elem) => elem % 2 == 0 ).slice(-number);
}