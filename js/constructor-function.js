(function() {
  'use strict';

  function User(name) {
    this.name = name;
    this.isAdmin = false;
  }

  var user = new User('Jack');

  alert(user.name); // Jack
  alert(user.isAdmin); // false
  alert(user.id = 100);
  alert(typeof NaN);
})();