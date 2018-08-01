(function() {
  'use strict';
  var user = {
    name: 'john',
    sizes: {
      height: 182,
      width: 50
    }
  };

  var clone = {};

  for (var key in user) {
    clone[key] = user[key];
  }
  user.name = 'pete';
  user.sizes.height++;
  alert(user.sizes.height);
  alert(user.name);
  alert(clone.sizes.height);
  alert(clone.name);
})();