function race(promises) {
  return new Promise((resolve, reject) => {
    promises.reduce((acc, promise, index, arr) => {
      promise
        .then((value) => {
          acc.push(value);
          if (acc.length === arr.length) {
            resolve(acc[0]);
          }
        })
        .catch((err) => {
          reject(err);
        });
      return acc;
    }, []);
  });
}

let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'one');
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, 'two');
  // reject("Some reason")
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'three');
});

race([p1, p2, p3]).then(value => {
  console.log(value);
}, reason => {
  console.log(reason)
});