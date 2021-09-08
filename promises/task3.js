function makeRequest(urls) {

  return Promise.all(urls).catch((err) => {
    console.log(err);
  });
}

function makeRequest2(urls) {

  return Promise.allSettled(urls).then((values) => {
    console.log(values);
  }).catch((err) => {
    console.log(err);
  });
}

let request1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'one');
});
let request2 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, 'two');
});
let request3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'three');
});

let urls = [request1, request2, request3];

makeRequest(urls)
// makeRequest2(urls)