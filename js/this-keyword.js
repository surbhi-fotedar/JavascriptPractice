(function() {
  'use strict';
  var user = {
    name: "John",
    hi: function() { alert(this.name); },
    bye: function() { alert("Bye"); }
  };

  user.hi(); // John (the simple call works)

  // now let's call user.hi or user.bye depending on the name
  (user.name == "John" ? user.hi() : user.bye())(); // Error!
})();