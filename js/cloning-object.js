(function() {
  'use strict';
  var user = {
    name: "john",
    age: 30
  };

  console.log('user object details ' + user.name + ' ' + user.age);
  var clone = {};
  Object.assign(clone, user);
  console.log('clone object details after assigning user ' + clone.age + ' ' + clone.name);
})();