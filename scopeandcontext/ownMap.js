Array.prototype.ownMap = function(callback) {
  let result = [];
  for(let i=0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
}

let arr = [1,2,3,4,5];

let arr2 = arr.ownMap((elem) => {
  return elem * 2;
});

console.log(arr2)
console.log(arr)