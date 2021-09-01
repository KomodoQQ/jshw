function well(x){
  let goodsCounter = 0;
  x.forEach((arr) => {
    arr.forEach((elem) => {
      if(typeof elem == 'string' && elem.toLowerCase() == 'good') {
        goodsCounter++;
      }
    })
  })
  if(goodsCounter < 1) {
    return 'Fail!'
  }
  if(goodsCounter <= 2) {
    return 'Publish!'
  }
  return 'I smell a series!'
}