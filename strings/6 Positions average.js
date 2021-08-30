function posAverage(s) {
  let arr = s.split(', ');
  let total = 0;
  let counter = 0;

  arr.forEach((elem, index) => {
    if(arr[index+1]) {
      let currIndex = index + 1;
      for(let i = currIndex; i < arr.length; i++) {

        for(let j = 0; j < arr[i].length; j++) {
          
          total++;
          if (arr[i].charAt(j) == elem.charAt(j)) {
            counter++;
          }
        }
      }
    }
  })
  return (counter/total)*100;
}