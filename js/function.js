(function() {
  function showPrimes(n) {

    for (var i = 2; i < n; i++) {
      if (!isPrime(i)) continue;

      //alert(`prime number ${i}`); // a prime
      var username = 'surbhi';
      /* jshint -W087 */
      debugger;
      console.log('The name is ' + username);


      console.log('The name is ', username);
      alert('prime number ' + i);
      alert('prime number ', i);

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