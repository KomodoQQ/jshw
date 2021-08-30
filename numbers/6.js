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
      if(primes.includes(i-g)) {
        return [i-g, i];
      }
    }
  }
  return null;
}