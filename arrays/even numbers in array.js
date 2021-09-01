function evenNumbers(array, number) {
  let res = array.filter((elem) => {
    return elem % 2 == 0;
  }).slice(-number)
  return res;
}