class Sieve {
  NthPrime(n) {
    if ( n === 0 || n === 1) {
      return n + 2;
    }
    const primes = [2, 3];
    let num = 3;
    let squareNum;
    let isPrime;
    while(primes.length <= n) {
      num += 2;
      squareNum = Math.floor(Math.sqrt(num))
      isPrime = true;
      for(let i = 0; primes[i] <= squareNum && i <= primes.length; i++) {
        if(num % primes[i] === 0) {
          isPrime = false
          break;
        }
      }

      if(isPrime) {
        primes.push(num);
      }

    }
    return primes[primes.length - 1];
  }
}

module.exports = Sieve;
