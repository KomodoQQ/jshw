function well(x){
  let goodsCounter = x.reduce((acc, arr) => {
    arr.forEach((elem) => {
      if(typeof elem == 'string' && elem.toLowerCase() == 'good') {
        acc++;
      }
    })
    return acc;
  }, 0);
  
  if(goodsCounter < 1) {
    return 'Fail!'
  }
  if(goodsCounter <= 2) {
    return 'Publish!'
  }
  return 'I smell a series!'
}