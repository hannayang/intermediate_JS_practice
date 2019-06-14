// function sumPrimes(num) {
//     function isPrime(number){
//         for (i = 2; i <= number; i++){
//             if(number % i === 0 && number!= i){
//                return false;  // false here means not a prime. 
//             }
//          }
//         return true;
//     }
//     // 1 is not a prime, so return nothing, also stops the recursive calls.
//     if (num === 1){
//       return 0;
//     }
//     // Check if your number is not prime
//     if(isPrime(num) === false){
//     // for non primes check the next number down from your maximum number, do not add anything to your answer
//       return sumPrimes(num - 1);
//     }
  
//     // Check if your number is prime
//     if(isPrime(num) === true){
//     // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
//       return num + sumPrimes(num - 1);
//     }
//   }

//   console.log(sumPrimes(10));

// 以下是基础方面，其中或得素数array 的部分可以借用已有codes。

  function sumPrimes(num) {
    var res = 0;
  
    // Function to get the primes up to max in an array
    function getPrimes(max) {
      var sieve = [];
      var i;
      var j;
      var primes = [];
      for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
          // i has not been marked -- it is prime
          primes.push(i);
          for (j = i << 1; j <= max; j += i) {
            sieve[j] = true;
          }
        }
      }
  
      return primes;
    }
  
    // Add the primes
    var primes = getPrimes(num);
    for (var p = 0; p < primes.length; p++) {
      res += primes[p];
    }
  
    return res;
  }

  console.log(sumPrimes(10));