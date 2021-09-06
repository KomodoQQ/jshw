Array.prototype.removeDuplicates = function() {
  let result = [];
  this.forEach((elem) => {
    if(!result.includes(elem)) {
      result.push(elem)
    }
  });
  return result;
}

let arr = [1, 2, 2, 3, 2, 1, 4, 2, 4, 3, 5].removeDuplicates();
console.log(arr);

/////////////////////////////

let arr2 = new Set([1, 2, 2, 3, 2, 1, 4, 2, 4, 3, 5]);
console.log(arr2)