(function() {
  function User(name) {
    this.name = name;
    this.isAdmin = false;
  }

  var user = new User('Jack');

  alert(user.name); // Jack
  alert(user.isAdmin); // false
})();