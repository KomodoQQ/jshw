const isPrime = (num) => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

function step(g, m, n) {
  let primes = [];
  for (let i = m; i <= n; i++) {
    if(isPrime(i)) {
      primes.push(i);
      console.log(`Num ${i} is prime`)
    }
  }
  let result = null;
  for (let i = 1; i < primes.length; i++) {
    if(primes[i] - primes[i-1] == g) {
      return [primes[i-1], primes[i]]
    }
  }
  console.log(result.slice(0,2))
  return result;
}

/////////////////////////////////////////////
/////////////////////////////////////////////

const isPrime = (num) => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

function step(g, m, n) {
  let primes = [];
  let result = [];
  for (let i = m; i <= n; i++) {
    if(isPrime(i)) {
      primes.push(i);
    }
  }
  
  primes.forEach((prime, index) => {
    if(prime + g == primes[index+1]) {
      result.push(prime, primes[index+1]);
    }
  })
  
  if(result) {
    return result.slice(0, 2);
  } else {
    return null;
  }

}