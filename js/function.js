(function() {
  function showPrimes(n) {

    for (var i = 2; i < n; i++) {
      if (!isPrime(i)) continue;

      alert('test', (i)); // a prime
    }
  }

  function isPrime(n) {
    for (var i = 2; i < n; i++) {
      if (n % i == 0) return false;
    }
    return true;
  }

  showPrimes(10);

})();