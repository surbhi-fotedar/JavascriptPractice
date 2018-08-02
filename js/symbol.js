(function() {
  'use strict';
  // var user = { name: "John" };
  // var id = Symbol("idd");

  // user[id] = "ID Value";
  // alert(user[id]);

  var sym = Symbol.for("name");
  var sym2 = Symbol.for("id");

  // get name from symbol
  alert(sym.toString);
  alert(sym2.toString);
  alert(Symbol.keyFor(sym)); // name
  alert(Symbol.keyFor(sym2)); // id

})();