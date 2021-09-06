Function.prototype.ownBind = function(obj, ...args) {
  let currFunction = this;
  return function(...newArgs) {
    return currFunction.apply(obj, args.concat(newArgs));
  };
}

function showPerson() {
  console.log(`Name ${this.name}, age: ${this.age}`);
}

let person1 = {
  name: "Alex",
  age: 18
}

let showPersonInfo = showPerson.ownBind(person1);
showPersonInfo();