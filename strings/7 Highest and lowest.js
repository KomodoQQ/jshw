function highAndLow(numbers){
  let nums = numbers.split(" ").map(x => +x);
  return `${Math.max.apply(null, nums)} ${Math.min.apply(null, nums)}`
}